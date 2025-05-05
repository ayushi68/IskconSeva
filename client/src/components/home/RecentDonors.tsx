import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { CardBadge } from "@/components/ui/card-badge";
import { formatCurrency, getInitials, timeSince } from "@/lib/utils";

export default function RecentDonors() {
  const { data: recentDonations, isLoading, error } = useQuery({
    queryKey: ['/api/recent-donations'],
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-8">Recent Contributions</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-40 w-full" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !recentDonations || recentDonations.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-8">Recent Contributions</h2>
          <p className="text-center text-gray-500">
            {error ? "Failed to load recent donations." : "No recent donations to display."}
          </p>
        </div>
      </section>
    );
  }

  const getBadgeVariant = (categorySlug: string) => {
    switch (categorySlug) {
      case 'annadana-seva':
        return 'annadana';
      case 'gaushala-seva':
        return 'gaushala';
      case 'temple-development':
        return 'temple';
      default:
        return 'default';
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-8">Recent Contributions</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDonations.map((donation: any) => (
              <div key={donation.id} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition">
                <div className="flex items-center mb-3">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-primary text-white">
                      {getInitials(donation.donor.fullName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-800">{donation.donor.fullName}</h3>
                    <p className="text-xs text-gray-500">{donation.donor.city || "Unknown"}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Contributed towards <CardBadge variant={getBadgeVariant(donation.sevaOption.category.slug)}>
                    {donation.sevaOption.category.name}
                  </CardBadge>
                </p>
                <p className="text-secondary font-bold">{formatCurrency(donation.amount)}</p>
                <p className="text-xs text-gray-500 mt-2">{timeSince(new Date(donation.createdAt))}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
