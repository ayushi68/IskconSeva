import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { CardBadge } from "@/components/ui/card-badge";
import { formatCurrency, getInitials, timeSince } from "@/lib/utils";
import { motion } from "framer-motion";
import { fetchRecentDonations } from '@/lib/api'; // Assuming this function fetches recent donations
import { Donation } from '@/lib/types'; // Assuming Donation type is defined in types.ts

export default function RecentDonors() {
  const { data: recentDonations, isLoading, error } = useQuery<Donation[]>({
    queryKey: ["/api/recent-donations"],
    queryFn: fetchRecentDonations, // Add a query function to fetch data
  });

  const getBadgeVariant = (categorySlug: string) => {
    switch (categorySlug) {
      case "annadana-seva":
        return "annadana";
      case "gaushala-seva":
        return "gaushala";
      case "temple-development":
        return "temple";
      default:
        return "default";
    }
  };

  const sectionHeader = (
    <h2 className="font-poppins text-3xl text-center font-bold text-primary mb-10">
      🙏 Recent Contributions
    </h2>
  );

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {sectionHeader}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-44 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !recentDonations || recentDonations.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {sectionHeader}
          <p className="text-center text-gray-500">
            {error
              ? "⚠️ Failed to load recent donations."
              : "No recent donations to display."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {sectionHeader}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentDonations.map((donation: any, idx: number) => (
            <motion.div
              key={donation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-white border border-gray-100 rounded-lg shadow hover:shadow-lg p-6 transition-all"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-primary text-white">
                    {getInitials(donation.donor.fullName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {donation.donor.fullName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {donation.donor.city || "Location unknown"}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-2">
                Donated to{" "}
                <CardBadge variant={getBadgeVariant(donation.sevaOption.category.slug)}>
                  {donation.sevaOption.category.name}
                </CardBadge>
              </p>

              <p className="text-xl font-bold text-green-700 mb-1">
                {formatCurrency(donation.amount)}
              </p>

              <p className="text-xs text-gray-400">
                {timeSince(new Date(donation.createdAt))} ago
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
