import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SevaCategory } from "@/lib/types";

export default function SevaCategories() {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['/api/categories'],
  });

  if (isLoading) {
    return (
      <section id="seva-categories" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Seva Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="seva-categories" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Seva Categories</h2>
          <div className="text-center text-red-500">
            Failed to load categories. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="seva-categories" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Seva Categories</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories && categories.map((category: SevaCategory) => (
            <div key={category.id} className="seva-card">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url('${category.imageUrl}')` }}
                aria-hidden="true"
              />
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-primary mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link href={`/category/${category.slug}`}>
                  <Button className="w-full bg-primary hover:bg-secondary text-white">
                    Explore {category.name}s
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
