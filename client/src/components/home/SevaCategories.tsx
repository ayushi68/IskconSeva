import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SevaCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  subSevas?: string[];
}

const categories: SevaCategory[] = [
  {
    id: 1,
    name: "Annadana Seva",
    slug: "annadana-seva",
    description: "Support daily meals and special prasadam distribution.",
    imageUrl: "/src/public/annadana.jpg",
  },
  {
    id: 2,
    name: "Gaushala Seva",
    slug: "gaushala-seva",
    description: "Care for sacred cows and support their maintenance.",
    imageUrl: "/src/public/gaushala.jpg",
  },
  {
    id: 3,
    name: "Nitya Seva",
    slug: "nitya-seva",
    description: "Daily services offered to deities including aartis and bhoga.",
    imageUrl: "/src/public/nityaseva.jpg",
  },
  {
    id: 4,
    name: "Shri Vigraha Seva",
    slug: "shri-vigraha-seva",
    description: "Maintain and decorate the deity forms of the Lord.",
    imageUrl: "/src/public/vigraha.jpg",
    subSevas: ["Deity Bhoga Seva","Arati Seva","Deity Seva"]
  },
  {
    id: 5,
    name: "Radharani's Kitchen Seva",
    slug: "radharanis-kitchen-seva",
    description: "Contribute to cooking for the pleasure of Srimati Radharani.",
    imageUrl: "/src/public/radharaniseva.jpg",
  },
  {
    id: 6,
    name: "Rajbhog Seva",
    slug: "rajbhog-seva",
    description: "Support opulent noon offerings to the deities.",
    imageUrl: "/src/public/rajbhogseva.jpg",
  },
  {
    id: 7,
    name: "General Donation",
    slug: "general-donation",
    description: "Help the temple with regular and flexible donations.",
    imageUrl: "/src/public/generaldonation.jpg"
  },
  {
    id: 8,
    name: "Offline Donation",
    slug: "offline-donation",
    description: "Contribute directly by visiting our temple or office.",
    imageUrl: "/src/public/offlinedonation.jpg"
  },
  {
    id: 9,
    name: "Become a Life Patron",
    slug: "life-patron",
    description: "Join our family of lifetime supporters.",
    imageUrl: "/src/public/Lif Patron membership Mayapur.png"
  },
  {
    id: 10,
    name: "Special Seva",
    slug: "special-seva",
    description: "Offerings during specific occasions or based on unique needs.",
    imageUrl: "/src/public/specialpuja.jpg",
    subSevas: ["Sadhu Seva", "Ekadashi Seva", "Gyaan Daan Seva","Gita Daan","Bhagavatam Daan","Sri Narasimha Yajna Seva","Maha Sudarshana Narasimha Yajna Seva"]
  },
  {
    id: 11,
    name: "Youth Empowerment Seva",
    slug: "youth-empowerment-seva",
    description: "Support training and education for the youth.",
    imageUrl: "/src/public/youthseva.jpg",
  },
  {
    id: 12,
    name: "Special Puja",
    slug: "special-puja",
    description: "Sponsor special pujas and religious functions.",
    imageUrl: "/src/public/specialpuja.jpg",
  },
  {
    id: 13,
    name: "Festival Seva",
    slug: "festival-seva",
    description: "Participate in grand annual celebrations and events.",
    imageUrl: "/src/public/festivalpuja.jpg",
  }
];

function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

export default function SevaCategories() {
  return (
    <section id="seva-categories" className="py-16 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary">
          Seva Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="hover:shadow-xl transition-all duration-300"
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-md rounded-lg bg-white">
                <Link href={`/category/${category.slug}`}>
                  <div className="overflow-hidden h-48 cursor-pointer">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </Link>

                <CardContent className="flex flex-col flex-grow p-6">
                  <Link href={`/category/${category.slug}`}>
                    <h3 className="font-bold text-xl text-primary mb-3 cursor-pointer hover:underline">
                      {category.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-3">{category.description}</p>

                  {category.subSevas && category.subSevas.length > 0 && (
                    <ul className="text-sm text-gray-600 mb-4 space-y-1 list-disc list-inside">
                      {category.subSevas.map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            href={`/category/${category.slug}/${slugify(sub)}`}
                            className="text-blue-600 hover:underline"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto">
                    <Link href={`/category/${category.slug}`}>
                      <Button className="w-full bg-primary hover:bg-secondary text-white">
                        Explore {category.name}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
