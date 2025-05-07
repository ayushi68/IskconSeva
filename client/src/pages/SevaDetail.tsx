import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import AnnadanaSeva from "@/components/seva/AnnadanaSeva";
import GaushalaSeva from "@/components/seva/GaushalaSeva";
import RecentDonors from "@/components/home/RecentDonors";
import ContactInfo from "@/components/home/ContactInfo";
import FAQ from "@/components/home/FAQ";
import { SevaCategory } from "@/lib/types";

export default function SevaDetail() {
  // Get the category slug from the URL
  const [match, params] = useRoute("/category/:slug");
  const slug = params?.slug || "";
  
  // Fetch the category data
  const { data: category, isLoading, error } = useQuery<SevaCategory>({
    queryKey: [`/api/categories/${slug}`],
  });
  
  // Show loading or error states if needed
  if (isLoading) {
    return <div className="container mx-auto py-16 text-center">Loading...</div>;
  }
  
  if (error || !category) {
    return (
      <div className="container mx-auto py-16 text-center text-red-500">
        Failed to load category details. Please try again later.
      </div>
    );
  }
  
  // Determine which component to render based on the slug
  const renderSevaComponent = () => {
    switch(slug) {
      case 'annadana-seva':
        return <AnnadanaSeva categorySlug={slug} />;
      case 'gaushala-seva':
        return <GaushalaSeva categorySlug={slug} />;
      default:
        return <AnnadanaSeva categorySlug={slug} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{category.name} - ISKCON Raipur-Bhilai</title>
        <meta name="description" content={category.description || "Default description"} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      
      {/* Hero banner for the specific category */}
      <section className="relative bg-primary py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${category.imageUrl}')` }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins text-white text-3xl md:text-4xl font-bold mb-4">
              {category.name}
            </h1>
            <div className="bg-white/90 p-6 rounded-lg">
              <p className="text-gray-800">{category.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Render the appropriate seva component */}
      {renderSevaComponent()}
      
      {/* Common components */}
      <RecentDonors />
      <FAQ />
      <ContactInfo />
    </>
  );
}
