import { db } from "server/db";
import { ObjectId } from "mongodb";

// Define types for categoryData
interface CategoryData {
  [key: string]: ObjectId;
}

// Initialize categoryData
const categoryData: CategoryData = {};

async function seed() {
  try {
    // Seed data for categories
    const categories = [
      {
        name: "Annadana Seva",
        slug: "annadana-seva",
        description: "Contribute towards prasadam distribution and feeding programs for devotees and visitors.",
        imageUrl: "https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Gaushala Seva",
        slug: "gaushala-seva",
        description: "Support the protection and care of cows through various seva offerings.",
        imageUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Temple Development",
        slug: "temple-development",
        description: "Contribute to the construction and maintenance of temples and facilities.",
        imageUrl: "https://images.unsplash.com/photo-1563802560775-f8ad1ee2fff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ];

    // Populate categoryData after inserting or retrieving categories
    for (const category of categories) {
      const existing = await db.collection("sevaCategories").findOne({ slug: category.slug });

      if (!existing) {
        const result = await db.collection("sevaCategories").insertOne(category);
        categoryData[category.slug] = result.insertedId;
        console.log(`Created category: ${category.name}`);
      } else {
        categoryData[category.slug] = existing._id;
        console.log(`Category exists: ${category.name}`);
      }
    }

    // Seed Annadana Seva options
    const annadanaOptions = [
      { 
        name: "Khichdi Distribution Seva", 
        description: "Make a contribution towards tasty Khichdi prasadam served in donnas to all devotees visiting the temple.",
        categoryId: categoryData["annadana-seva"],
        amounts: [501, 1100, 2100, 5100, 10000, 15000]
      },
      { 
        name: "Sunday Feast Seva (morning)", 
        description: "Contribution towards delicious prasadam served in plates to all devotees visiting the temple on Sunday for morning Programme.",
        categoryId: categoryData["annadana-seva"],
        amounts: [2500, 5000, 7500, 10000]
      },
      { 
        name: "Sunday Feast Seva (evening)", 
        description: "Contribution towards delicious prasadam served in plates to all devotees visiting the temple on Sunday for Evening Programme.",
        categoryId: categoryData["annadana-seva"],
        amounts: [2500, 5000, 7500, 10000]
      },
      { 
        name: "Sunday Prasada Seva (Full day)", 
        description: "Contribute for full fledged prasadam arrangement for public in temple for a whole day.",
        categoryId: categoryData["annadana-seva"],
        amounts: [5000, 11000, 21000]
      },
      { 
        name: "Feast Prasadam Seva for Festival", 
        description: "Contribute towards distributing free prasadam to devotees on this occasion.",
        categoryId: categoryData["annadana-seva"],
        amounts: [11000, 21000, 31000]
      },
      { 
        name: "Major Festival Prasada Seva (Full day)", 
        description: "Render the Service to their Lordships and for their Devotees by sponsoring a grand feast on occasion of Major festivals.",
        categoryId: categoryData["annadana-seva"],
        amounts: [11000, 31000, 51000, 100000, 200000]
      }
    ];

    // Seed Gaushala Seva options
    const gaushalaOptions = [
      { 
        name: "Gau Seva (One day feed per cow)", 
        description: "Contribute towards feeding a cow for one day.",
        categoryId: categoryData["gaushala-seva"],
        amounts: [1100]
      },
      { 
        name: "Gau Seva (One month feed per cow)", 
        description: "Contribute towards feeding a cow for one month.",
        categoryId: categoryData["gaushala-seva"],
        amounts: [31000]
      },
      { 
        name: "One day grass for one cow", 
        description: "Contribute towards feeding grass to the cow for one day.",
        categoryId: categoryData["gaushala-seva"],
        amounts: [500, 1100, 2500, 3500]
      },
      { 
        name: "Gau Daan", 
        description: "Donate towards the taking care of cow.",
        categoryId: categoryData["gaushala-seva"],
        amounts: [11000, 25000, 51000]
      },
      { 
        name: "Gau Puja", 
        description: "Donate towards worshipping the cows.",
        categoryId: categoryData["gaushala-seva"],
        amounts: [500, 1100, 2500, 3500]
      },
      { 
        name: "Gau Poshan Seva (medical expenses)", 
        description: "Contribute towards medical expenses of cows.",
        categoryId: categoryData["gaushala-seva"],
        amounts: [500, 1500, 3500, 5100]
      }
    ];

    // Seed Temple Development options
    const templeOptions = [
      { 
        name: "General Temple Development", 
        description: "Contribute to the overall development and maintenance of the temple.",
        categoryId: categoryData["temple-development"],
        amounts: [1100, 5100, 11000, 21000, 51000]
      },
      { 
        name: "Deity Worship", 
        description: "Support the daily worship and care of the temple deities.",
        categoryId: categoryData["temple-development"],
        amounts: [1100, 5100, 11000, 21000]
      },
      { 
        name: "Temple Construction", 
        description: "Help build and expand temple facilities for the benefit of devotees.",
        categoryId: categoryData["temple-development"],
        amounts: [11000, 51000, 101000, 501000]
      }
    ];

    const allOptions = [...annadanaOptions, ...gaushalaOptions, ...templeOptions];

    // Insert seva options and their amounts
    for (const option of allOptions) {
      const existing = await db.collection("sevaOptions").findOne({
        name: option.name,
        categoryId: option.categoryId
      });
      
      let optionId;
      
      if (!existing) {
        const { amounts, ...optionData } = option;
        const result = await db.collection("sevaOptions").insertOne(optionData);
        optionId = result.insertedId;
        console.log(`Created option: ${option.name}`);
      } else {
        optionId = existing._id;
        console.log(`Option exists: ${option.name}`);
      }
      
      // Insert amounts for this option
      const { amounts } = option;
      for (const amount of amounts) {
        const existingAmount = await db.collection("sevaAmounts").findOne({
          sevaOptionId: optionId,
          amount: amount.toString()
        });
        
        if (!existingAmount) {
          await db.collection("sevaAmounts").insertOne({
            sevaOptionId: optionId,
            amount: amount.toString(),
            isPopular: false
          });
          console.log(`Added amount ${amount} for ${option.name}`);
        } else {
          console.log(`Amount exists: ${amount} for ${option.name}`);
        }
      }
    }
    
    // Seed some sample donors and donations for display
    const sampleDonors = [
      { fullName: "Amit Sharma", email: "amit.sharma@example.com", phone: "9876543210", city: "Delhi" },
      { fullName: "Priya Joshi", email: "priya.joshi@example.com", phone: "8765432109", city: "Mumbai" },
      { fullName: "Rajesh Gupta", email: "rajesh.gupta@example.com", phone: "7654321098", city: "Raipur" },
      { fullName: "Mohan Agarwal", email: "mohan.agarwal@example.com", phone: "6543210987", city: "Bhilai" },
    ];
    
    // Only add sample donors if none exist
    const existingDonorCount = await db.collection("donors").countDocuments();
    if (existingDonorCount === 0) {
      for (const donor of sampleDonors) {
        const result = await db.collection("donors").insertOne(donor);
        console.log(`Added sample donor: ${donor.fullName}`);
        
        // For the first donor, also add a testimonial
        if (donor.fullName === "Mohan Agarwal") {
          await db.collection("testimonials").insertOne({
            donorId: result.insertedId,
            testimonialText: "Contributing to the Annadana Seva at ISKCON has been a deeply fulfilling experience for me and my family. The ability to serve prasadam to devotees and knowing that we're participating in service to Lord Krishna brings immense joy. The process was simple, and the temple management keeps us informed about how our contribution is utilized.",
            rating: 5,
            isApproved: true
          });
          console.log(`Added testimonial for ${donor.fullName}`);
        }
      }
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();
