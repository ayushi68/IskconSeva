export interface SuperSubCategory {
  id: string;
  title: string;
  description: string;
  amounts: number[];
  customAmountAllowed: boolean;
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  superSubCategories?: SuperSubCategory[];

  // Add this to support donation amounts directly on SubCategory
  amounts?: number[];
  customAmountAllowed?: boolean;
}

export interface DonationCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  amount?: number[];
  subCategories?: SubCategory[];
}


export const donationCategories: DonationCategory[] = [
  {
    id: "annadana-seva",
    title: "Annadana seva",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Khichdi Distribution Seva",
        title: "Khichdi Distribution Seva",
        description: "Make a contribution towards tasty Khichdi prasadam served in donnas to all devotees visiting the temple.",
        image: "/images/supplies.jpg",
        amounts: [501,1100,2100,5100,10000],
        customAmountAllowed: true
      },
      {
        id: "Sunday Feast Seva (morning)",
        title: "Sunday Feast Seva (morning)",
        description: "Contribution towards delicious prasadam served in plates to all devotees visiting the temple on Sunday. for morning Programme",
        image: "/images/scholarships.jpg",
        amounts:[2500,5000,7500,10000],
        customAmountAllowed: true
      },
      {
        id: "Sunday Feast Seva (evening)",
        title: "Sunday Feast Seva (evening)",
        description: "Contribution towards delicious prasadam served in plates to all devotees visiting the temple on Sunday. for Evening Programme",
        image: "/images/scholarships.jpg",
        amounts:[2500,5000,7500,10000],
        customAmountAllowed: true
      },
      {
        id: "Sunday Prasada Seva(Full day)",
        title: "Sunday Prasada Seva(Full day)",
        description: "Contribute for full fleged prasadam arrangement for public in temple for a whole day.",
        image: "/images/scholarships.jpg",
        amounts:[5000,11000,21000],
        customAmountAllowed: true
      },
      {
        id: "Feast Prasadam Seva for Festival",
        title: "Feast Prasadam Seva for Festival",
        description: "Contribute towards distributing free prasadam to devotees on this occasion.",
        image: "/images/scholarships.jpg",
        amounts:[2500,5000,11000,21000],
        customAmountAllowed: true
      },
      {
        id: "Annadana served on my special Day ",
        title: "Annadana served on my special Day ",
        description: "Celebrate your favourite day (Birthdays, marriage annivarsary or any auspicious day with making a offering for Anndana for the Devotees).",
        image: "/images/scholarships.jpg",
        amounts:[2500,5000,11000,21000],
        customAmountAllowed: true
      },
    ]
  },
  {
    id: "Gaushala-Seva",
    title: "Gaushala seva",
    subtitle: "",
    description: "",
    image: "/Gaushala.jpg",
    icon: "animal",
    subCategories: [
      {
        id: "Gau Seva",
        title: "Gau Seva",
        description: "Contribute towards feeding a cow for one day",
        image: "/images/supplies.jpg",
        amounts: [750,1500,2500,5000,10000],
        customAmountAllowed: true
      },
      {
        id: "Gau Poshan Seva(medical expenses)",
        title: "Gau Poshan Seva(medical expenses)",
        description: "Contribute towards medical expenses of cows",
        image: "/images/scholarships.jpg",
        amounts:[1500,3500,5100,10000],
        customAmountAllowed: true
      },
      {
        id: "Green grass for all cows for a day",
        title: "Green grass for all cows for a day",
        description: "Contribute for feeding the Cows with a trolley of Green Grass",
        image: "/images/scholarships.jpg",
        amounts:[1101,2101,5101,7101,10101],
        customAmountAllowed: true
      },
      {
        id: "Gau Puja",
        title: "Gau Puja",
        description: "Donate towards worshipping the cows.",
        image: "/images/scholarships.jpg",
        amounts:[501,1100,2100],
        customAmountAllowed: true
      }
    ]
  },
  {
    id: "Nitya Seva",
    title: "Nitya seva",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
  },
  {
    id: "Sri-Vigraha-Seva",
    title: "Sri Vigraha Seva",
    subtitle: "",
    description: "Sri Vigraha Seva - Deity Worship",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Deity Bhoga Seva",
        title: "Deity Bhoga Seva",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Balya Bhoga Seva at 4:00 AM",
            title: "Balya Bhoga Seva at 4:00 AM",
            description: "Donate towards cooking and offering delicious sweet rice and many sweets made with milk, ghee etc to Their Lordships early morning",
            amounts: [500,1000,1500],
            customAmountAllowed: false
          },
          {
            id: "Pratah Bhoga Seva at 6:45 AM",
            title: "Pratah Bhoga Seva at 6:45 AM",
            description: "Donate towards cooking and offering the morning meal for Their Lordships",
            amounts: [500,1500,2500],
            customAmountAllowed: false
          },
          {
            id: "Sakalika Bhoga Seva at 8:15 AM",
            title: "Sakalika Bhoga Seva at 8:15 AM",
            description: "Donate towards fruits offering the morning meal for Their Lordships",
            amounts: [500,1000],
            customAmountAllowed: false
          },
          {
            id: "Pratah Bhoga Seva at 6:45 AM",
            title: "Pratah Bhoga Seva at 6:45 AM",
            description: "Donate towards fruits offering the morning meal for Their Lordships",
            amounts: [500,1000],
            customAmountAllowed: false
          },
          {
            id: "Sakalika Bhoga Seva at 8:15 AM",
            title: "Sakalika Bhoga Seva at 8:15 AM",
            description: "Special offering to their lordships with Chapati/puri, 8 kinds of Sabjis, Basmati Rice, Dhal, Pakora, Salad, Samosa, Sweet Samosa, Sweet Rice, Sandesh and Peda.",
            amounts: [1500,2500,3500,5000],
            customAmountAllowed: false
          },
          {
            id: "Vaikalika Bhoga Seva at 4:15 PM",
            title: "Vaikalika Bhoga Seva at 4:15 PM",
            description: "Donate towards fruits offering the morning meal for Their Lordships",
            amounts: [500,1000],
            customAmountAllowed: false
          },
          {
            id: "Utthapana Bhoga Seva at 5:00 PM",
            title: "Utthapana Bhoga Seva at 5:00 PM",
            description: "Donate towards offering Afternoon Bhoga for Their Lordships",
            amounts: [501,1500,2500],
            customAmountAllowed: false
          },
          {
            id: "Sayana Bhoga Seva at 8:00 PM",
            title: "Sayana Bhoga Seva at 8:00 PM",
            description: "Donate towards offering milk and dry fruits to Their Lordships",
            amounts: [251,501,1001,2000],
            customAmountAllowed: false
          },
          {
            id: "Balya Bhoga, Pratah Bhoga, Sakalika Bhoga, Raj Bhoga, Vaikalika Bhoga, Uttapana Bhoga, Sayana Bhoga Seva for one day",
            title: "Balya Bhoga, Pratah Bhoga, Sakalika Bhoga, Raj Bhoga, Vaikalika Bhoga, Uttapana Bhoga, Sayana Bhoga Seva for one day",
            description: "Donate towards offering delicious items to Their Lordships",
            amounts: [500,1000],
            customAmountAllowed: false
          },
          {
            id: "Vishesha Naivedya Seva",
            title: "Vishesha Naivedya Seva",
            description: "Contribute towards the special naivedya offering made to Lord Chaitanya Mahaprabhu on this day.",
            amounts: [500,1100,2500,3500,5000],
            customAmountAllowed: false
          },
        ]
      },
      {
        id: "Arati Seva",
        title: "Arati Seva",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Mangala Arati Seva at 4:30 AM",
            title: "Mangala Arati Seva at 4:30 AM",
            description: "Donate towards performing elaborate Arati to Their Lordships with beautiful paraphernalia on your behalf.",
            amounts: [251,501,1001,2000],
            customAmountAllowed: false
          },
          {
            id: "Sringar Darshan Arati Seva at 7:30 AM",
            title: "Sringar Darshan Arati Seva at 7:30 AM",
            description: "Donate towards performing elaborate Arati to Their Lordships, after they are beautifully dressed on your behalf.",
            amounts: [501,1001,2000],
            customAmountAllowed: false
          },
          {
            id: "Raj Bhoga Arati Seva at 12:00 PM",
            title: "Raj Bhoga Arati Seva at 12:00 PM",
            description: "Donate towards performing elaborate Arati to Their Lordships on your behalf.",
            amounts: [500,1000,1500],
            customAmountAllowed: false
          },
          {
            id: "Utthapana Arati Seva at 4:30 PM",
            title: "Utthapana Arati Seva at 4:30 PM",
            description: "Donate towards performing elaborate Arati to Their Lordships on your behalf.",
            amounts: [251,501,1001],
            customAmountAllowed: false
          },
          {
            id: "Sandhya Arati Seva at 7:00 PM",
            title: "Sandhya Arati Seva at 7:00 PM",
            description: "Donate towards performing elaborate Arati to Their Lordships, including Tulasi Maharani on your behalf.",
            amounts: [500,1000,1500],
            customAmountAllowed: false
          },
          {
            id: "Sayana Arati Seva at 8:15 PM",
            title: "Sayana Arati Seva at 8:15 PM",
            description: "Donate towards performing elaborate Arati to Their Lordships including soft kirtans inviting them to rest",
            amounts: [251,501,1001,2000],
            customAmountAllowed: false
          },
          {
            id: "Mangala Arati Seva, Sringar Arati Seva, Raj Bhoga Seva, Utthapana Arati Seva, Sandhya Arati Seva, Sayana Arati Seva for one day",
            title: "Mangala Arati Seva, Sringar Arati Seva, Raj Bhoga Seva, Utthapana Arati Seva, Sandhya Arati Seva, Sayana Arati Seva for one day",
            description: "",
            amounts: [2500,5000,75000,10000],
            customAmountAllowed: false
          }
        ]
      },
      {
        id: "Deity Seva",
        title: "Deity Seva",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Archana Seva for one day",
            title: "Archana Seva for one day",
            description: "Offer colorful and fragrant flowers to adorn Sri Sri Nitai Gauranga and Sri Sri Radha Krishnachandra and receive His blessings.",
            amounts: [500,1100],
            customAmountAllowed: false
          },
          {
            id: "Panchamrata Abhishek & Sringar Seva for one day",
            title: "Panchamrata Abhishek & Sringar Seva for one day",
            description: "Donate towards performing Abhishek with Panchamrata to Their Lordships",
            amounts: [1100,2100,3100,5100],
            customAmountAllowed: false
          },
          {
            id: "Dhoop & Deep Daan Seva for one day",
            title: "Dhoop & Deep Daan Seva for one day",
            description: "Donate towards performing Arati with Dhoop and Deep Daan to Their Lordships",
            amounts: [500,1100,2100],
            customAmountAllowed: false
          },
          {
            id: "Sugandha Seva for one day",
            title: "Sugandha Seva for one day",
            description: "Donate towards performing Arati with Sugandha to Their Lordships",
            amounts: [251,501,1001],
            customAmountAllowed: false
          },
          {
            id: "Pushpa Seva for one day",
            title: "Pushpa Seva for one day",
            description: "Offer garlands of colorful and fragrant flowers to adorn Sri Sri Nitai Gauranga and Sri Sri Radha Krishnachandra and receive His blessings.",
            amounts: [1100,2100,3100,5100],
            customAmountAllowed: false
          },
          {
            id: "Tulsi Archana on Ekadashi",
            title: "Tulsi Archana on Ekadashi",
            description: "Offer Tulasi Archana to Their Lordships Sri Sri Nitai Gauranga and Sri Sri Radha Krishnachandra on the auspicious day of Ekadashi and receive Their blessings.",
            amounts: [251,501,1001,2000],
            customAmountAllowed: false
          },
          {
            id: "Tulasi Daan Seva",
            title: "Tulasi Daan Seva",
            description: "Donate towards Deity Worship with Tulasi",
            amounts: [251,501,1001,2000],
            customAmountAllowed: false
          }
        ]
      },
    ]
  },
  {
    id: "Radharani's-Kitchen-Seva",
    title: "Radharani's Kitchen Seva",
    subtitle: "",
    description: "",
    image: "/Gaushala.jpg",
    icon: "kitchen",
    subCategories: [
      {
        id: "Radharani's Kitchen - one day Fruit Seva",
        title: "Radharani's Kitchen - one day Fruit Seva",
        description: "",
        image: "/images/supplies.jpg",
        amounts: [500,1000,1500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Fruit Seva",
        title: "Radharani's Kitchen - one time Fruit Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[751,1500,2500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Fruit Seva",
        title: "Radharani's Kitchen - one week Fruit Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[5100,10500,17500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one day Dry Fruit Seva",
        title: "Radharani's Kitchen - one day Dry Fruit Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[500,1100,2100],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Dry Fruit Seva",
        title: "Radharani's Kitchen - one time Dry Fruit Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[10012100,3500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Dry Fruit Seva",
        title: "Radharani's Kitchen - one week Dry Fruit Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[3500,7700,14700],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one day Milk Seva",
        title: "Radharani's Kitchen - one day Milk Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[501,1001,1501],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Milk Seva",
        title: "Radharani's Kitchen - one time Milk Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[2001,5001,7001],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Milk Seva",
        title: "Radharani's Kitchen - one week Milk Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[3500,7000,10500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one day Ghee Seva",
        title: "Radharani's Kitchen - one day Ghee Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[1100,2100,3100],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Ghee Seva",
        title: "Radharani's Kitchen - one time Ghee Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[1500,3000,4500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Ghee Seva",
        title: "Radharani's Kitchen - one week Ghee Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[7700,14700,21700],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one day Vegetable Seva",
        title: "Radharani's Kitchen - one day Vegetable Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[1500,3000,5000],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Vegetable Seva",
        title: "Radharani's Kitchen - one time Vegetable Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[3500,5500,10500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Vegetable Seva",
        title: "Radharani's Kitchen - one week Vegetable Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[10500,21000,35000],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one day Grocery Seva",
        title: "Radharani's Kitchen - one day Grocery Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[2500,5000,7500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Grocery Seva",
        title: "Radharani's Kitchen - one time Grocery Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[5100,11000,15000],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Grocery Seva",
        title: "Radharani's Kitchen - one week Grocery Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[17500,35000,52500],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one day Anna Seva",
        title: "Radharani's Kitchen - one day Anna Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[1100,2100,5100],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one time Anna Seva",
        title: "Radharani's Kitchen - one time Anna Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[5000,10000,15000],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - one week Anna Seva",
        title: "Radharani's Kitchen - one week Anna Seva",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[7700,14700,35700],
        customAmountAllowed: true
      },
      {
        id: "Radharani's Kitchen - All Sevas for one day",
        title: "Radharani's Kitchen - All Sevas for one day",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[7500,15000,25000],
        customAmountAllowed: true
      },
    ]
  },
  {
    id: "Rajbhog-Seva",
    title: "Rajbhog Seva",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
        {
        id: "Raj Bhoga Seva at 12:00 PM",
        title: "Raj Bhoga Seva at 12:00 PM",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[1500,2500,3500,5000],
        customAmountAllowed: true
      },
      {
        id: "Raj Bhoga Arati Seva at 12:00 PM",
        title: "Raj Bhoga Arati Seva at 12:00 PM",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[501,1001,1501],
        customAmountAllowed: true
      },
    ]
  },
  {
    id: "General-Donation",
    title: "General Donation",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    amount:[101,1101,2101,5101,11001]
  },
  {
    id: "Offline-Donation",
    title: "Offline Donation",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
  },
  {
    id: "Become-a-Life-Patron",
    title: "Become a Life Patron",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
        {
        id: "Life Membership Programme (Sevak)",
        title: "Life Membership Programme (Sevak)",
        description: "By becoming a Life Patron of HKM, you get an opportunity to participate in our programs and get benefited by them with additional benefits like Books written by Srila Prabhupada and many more.",
        image: "/images/scholarships.jpg",
        amounts:[36000],
        customAmountAllowed: true
      },
      {
        id: "Life Membership Programme (Dharma Karta)",
        title: "Life Membership Programme (Dharma Karta)",
        description: "By becoming a Life Patron of HKM, you get an opportunity to participate in our programs and get benefited by them with additional benefits like Books written by Srila Prabhupada and many more",
        image: "/images/scholarships.jpg",
        amounts:[75000],
        customAmountAllowed: true
      },
      {
        id: "Life Membership Programme (Dharmadhikari)",
        title: "Life Membership Programme (Dharmadhikari)",
        description: "By becoming a Life Patron of HKM, you get an opportunity to participate in our programs and get benefited by them with additional benefits like Books written by Srila Prabhupada and many more",
        image: "/images/scholarships.jpg",
        amounts:[125000],
        customAmountAllowed: true
      },
      {
        id: "Life Membership Programme (Maha Dharmadhikari)",
        title: "Life Membership Programme (Maha Dharmadhikari)",
        description: "By becoming a Life Patron of HKM, you get an opportunity to participate in our programs and get benefited by them with additional benefits like Books written by Srila Prabhupada and many more.",
        image: "/images/scholarships.jpg",
        amounts:[250000],
        customAmountAllowed: true
      },
      {
        id: "Life Membership Programme (Dharmadhikari)",
        title: "Life Membership Programme (Dharmadhikari)",
        description: "By becoming a Life Patron of HKM, you get an opportunity to participate in our programs and get benefited by them with additional benefits like Books written by Srila Prabhupada and many more",
        image: "/images/scholarships.jpg",
        amounts:[500000],
        customAmountAllowed: true
      }
    ]
  },
  {
        id: "Sadhu-Seva",
        title: "Sadhu Seva",
        subtitle: "",
        description: "",
        image: "/images/supplies.jpg",
        icon: "food",
        subCategories: [
          {
            id: "Vaishnav Bhoj Seva for one time (either Break fast or Lunch or Dinner)",
            title: "Vaishnav Bhoj Seva for one time (either Break fast or Lunch or Dinner)",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (contains Normal Meal ,Daal, Chawal + 1 Vegie)",
            image: "/images/scholarships.jpg",
            amounts: [1500,3501,5100],
            customAmountAllowed: true
          },
          {
            id: "Dwadashi Vaishnav Bhoj Seva",
            title: "Dwadashi Vaishnav Bhoj Seva",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (Paneer Meal + Special Sweets + Snacks)",
            image: "/images/scholarships.jpg",
            amounts: [1500,3501,5100],
            customAmountAllowed: true
          },
          {
            id: "Vaishnav Bhoj Seva one time (either Break fast or Lunch or Dinner) for a week seva",
            title: "Vaishnav Bhoj Seva one time (either Break fast or Lunch or Dinner) for a week seva",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (contains Normal Meal ,Daal, Chawal + 1 Vegie)",
            image: "/images/scholarships.jpg",
            amounts: [21001],
            customAmountAllowed: true
          },
          {
            id: "Vaishnav Preeti Bhoj Seva (either Break fast or Lunch or Dinner) a day seva",
            title: "Vaishnav Preeti Bhoj Seva (either Break fast or Lunch or Dinner) a day seva",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (Normal Meal + 1 Sweet + 2 special Subji)",
            image: "/images/scholarships.jpg",  
            amounts: [12501],
            customAmountAllowed: true
          },
          {
            id: "Vaishnav Bhoj Seva one time",
            title: "Vaishnav Bhoj Seva one time",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (contains Normal Meal ,Daal, Chawal + 1 Vegie)",
            image: "/images/scholarships.jpg",
            amounts: [5001],
            customAmountAllowed: true
          }
        ]
  },
  {
  id: "Ekadashi-Seva",
  title: "Ekadashi Seva",
  subtitle: "",
  description: "",
  image: "/images/supplies.jpg",
  icon: "food",
  subCategories: [
    {
      id: "Ekadashi-Deity-Abhishek-Seva",
      title: "Ekadashi Deity Abhishek Seva",
      description: "Sponsor the sacred abhishek ceremony for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1100, 2100, 3101, 5101],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Puja-Archana-Seva",
      title: "Ekadashi Puja Archana Seva",
      description: "Sponsor the puja archana ceremony for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1100, 2100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Arati-Seva",
      title: "Ekadashi Arati Seva",
      description: "Sponsor the arati ceremony for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [501, 1100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Deity-Tulasi-Garland-Seva",
      title: "Ekadashi Deity Tulasi Garland Seva",
      description: "Sponsor Tulasi garlands for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1100, 2100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Deity-Tulasi-Archana-Seva",
      title: "Ekadashi Deity Tulasi Archana Seva",
      description: "Sponsor Tulasi archana for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [501, 1100, 2100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Chandan-Seva",
      title: "Ekadashi Chandan Seva",
      description: "Sponsor chandan (sandalwood) seva for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [501, 1100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Charnamrita-Seva",
      title: "Ekadashi Charnamrita Seva",
      description: "Sponsor charnamrita seva for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [501, 1100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Sri-Vigraha-Seva",
      title: "Ekadashi Sri Vigraha Seva",
      description: "Sponsor Sri Vigraha seva on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1500, 3000, 5000, 10000],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Deity-Fruit-Bhog-Seva",
      title: "Ekadashi Deity Fruit Bhog Seva (Full Day)",
      description: "Sponsor fruit offerings for the deities throughout Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1100, 2100, 3101],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Deity-Rajbhog-Seva",
      title: "Ekadashi Deity Rajbhog Seva",
      description: "Sponsor the special Rajbhog offering for the deities on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1501, 2100, 3500],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Full-Day-Deity-Bhog-Seva",
      title: "Ekadashi Full Day Deity Bhog Seva",
      description: "Sponsor all bhoga offerings for the deities throughout Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [2100, 3100, 5100, 10000],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Prasadam-Distribution-Seva",
      title: "Ekadashi Prasadam Distribution Seva",
      description: "Sponsor prasadam distribution to devotees on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [501, 1500, 3500, 5001, 10000],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Gau-Seva",
      title: "Ekadashi Gau Seva",
      description: "Sponsor service to cows on the auspicious day of Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1100, 2100, 3100, 5100],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Gita-Daan-Seva",
      title: "Ekadashi Gita Daan Seva",
      description: "Sponsor distribution of Bhagavad Gitas on Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1100, 2100, 3100, 5101],
      customAmountAllowed: true
    },
    {
      id: "Ekadashi-Vaishnav-Bhoj-Seva",
      title: "Ekadashi Vaishnav Bhoj Seva",
      description: "Sponsor meals for Vaishnavas on the auspicious day of Ekadashi",
      image: "/images/scholarships.jpg",
      amounts: [1500, 3500, 5500],
      customAmountAllowed: true
    }
  ]
},
{
  id: "Gyaan-Daan-Seva",
  title: "Gyaan Daan Seva",
  subtitle: "",
  description: "",
  image: "/images/books.jpg",
  icon: "book",
  subCategories: [
    {
      id: "Bhagavad-Gita-Prachara-English",
      title: "Bhagavad Gita Prachara - English",
      description: "Sponsor distribution of English Bhagavad Gitas (1,5,11,21,51 copies)",
      image: "/images/scholarships.jpg",
      amounts: [550, 2750, 6050, 11550, 28050],
      customAmountAllowed: true
    },
    {
      id: "Bhagavad-Gita-Prachara-Hindi",
      title: "Bhagavad Gita Prachara - Hindi",
      description: "Sponsor distribution of Hindi Bhagavad Gitas (1,5,11,21,51 copies)",
      image: "/images/scholarships.jpg",
      amounts: [400, 2000, 4400, 8400, 20400],
      customAmountAllowed: true
    },
    {
      id: "Medium-Book-Set-Distribution-Seva",
      title: "Medium Book Set Distribution Seva",
      description: "Sponsor distribution of medium book sets",
      image: "/images/scholarships.jpg",
      amounts: [1101, 2101, 3101, 5101],
      customAmountAllowed: true
    },
    {
      id: "Small-Book-Set-Distribution-Seva",
      title: "Small Book Set Distribution Seva",
      description: "Sponsor distribution of small book sets",
      image: "/images/scholarships.jpg",
      amounts: [501, 1001, 2101, 5101],
      customAmountAllowed: true
    },
    {
      id: "Krishna-Book-Prachara-English",
      title: "Krishna Book Prachara - English",
      description: "Sponsor distribution of English Krishna Books (1,5,11,21,51 copies)",
      image: "/images/scholarships.jpg",
      amounts: [550, 2750, 6050, 11550, 28050],
      customAmountAllowed: true
    },
    {
      id: "Krishna-Book-Prachara-Hindi",
      title: "Krishna Book Prachara - Hindi",
      description: "Sponsor distribution of Hindi Krishna Books (1,5,11,21,51 copies)",
      image: "/images/scholarships.jpg",
      amounts: [500, 2500, 5500, 10500, 25500],
      customAmountAllowed: true
    },
    {
      id: "Srimad-Bhagvatam-Prachara-English",
      title: "Srimad Bhagvatam Prachara - 18 volume set (English)",
      description: "Sponsor distribution of complete English Srimad Bhagavatam sets",
      image: "/images/scholarships.jpg",
      amounts: [10000, 20000, 30000],
      customAmountAllowed: true
    },
    {
      id: "Srimad-Bhagvatam-Prachara-Hindi",
      title: "Srimad Bhagvatam Prachara - 18 volume set (Hindi)",
      description: "Sponsor distribution of complete Hindi Srimad Bhagavatam sets",
      image: "/images/scholarships.jpg",
      amounts: [8500, 17000, 25500],
      customAmountAllowed: true
    }
  ]
},
{
  id: "Gita-Daan",
  title: "Gita Daan",
  subtitle: "",
  description: "Sponsor the distribution of Bhagavad Gita scriptures to spread divine knowledge",
  image: "/images/gita.jpg",
  icon: "book",
  subCategories: [
    {
      id: "Bhagavad-Gita-Prachara-English",
      title: "Bhagavad Gita Prachara - English",
      description: "Sponsor distribution of English Bhagavad Gitas (1,5,11,21,51 copies)",
      image: "/images/english-gita.jpg",
      amounts: [550, 2750, 6050, 11550, 28050],
      customAmountAllowed: true,
    },
    {
      id: "Bhagavad-Gita-Prachara-Hindi",
      title: "Bhagavad Gita Prachara - Hindi",
      description: "Sponsor distribution of Hindi Bhagavad Gitas (1,5,11,21,51 copies)",
      image: "/images/hindi-gita.jpg",
      amounts: [400, 2000, 4400, 8400, 20400],
      customAmountAllowed: true
    }
  ]
},
{
  id: "Bhagavatam-Daan",
  title: "Bhagavatam Daan",
  subtitle: "",
  description: "Sponsor the distribution of Srimad Bhagavatam sets to spread the divine wisdom of this sacred scripture",
  image: "/images/bhagavatam.jpg",
  icon: "scripture",
  subCategories: [
    {
      id: "Srimad-Bhagavatam-English-Set",
      title: "Srimad Bhagavatam - 18 Volume Set (English)",
      description: "Contribute towards disseminating the complete English Srimad Bhagavatam sets containing the spotless Purana for the ultimate benefit of all people",
      image: "/images/bhagavatam-english.jpg",
      amounts: [10000, 20000, 30000],
      customAmountAllowed: false,
    },
    {
      id: "Srimad-Bhagavatam-Hindi-Set",
      title: "Srimad Bhagavatam - 18 Volume Set (Hindi)",
      description: "Contribute towards disseminating the complete Hindi Srimad Bhagavatam sets containing the Amalam Puranam for the enlightenment of society",
      image: "/images/bhagavatam-hindi.jpg",
      amounts: [8500, 17000, 25500],
      customAmountAllowed: false,
    }
  ]
},
  {
    id: " Special-Seva",
    title: " Special Seva",
    subtitle: "",
    description: "Sri Vigraha Seva - Deity Worship",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Sri Narasimha Yajna Seva ",
        title: "Sri Narasimha Yajna Seva ",
        description: "",
        image: "/images/supplies.jpg",
      },
      {
        id: "Maha Sudarshana Narasimha Yajna Seva  ",
        title: "Maha Sudarshana Narasimha Yajna Seva ",
        description: "",
        image: "/images/supplies.jpg",
      }
    ]
  },
  {
    id: " Youth-Empowerment-Seva",
    title: " Youth Empowerment Seva",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Weekly Personality Development Programs for Youth",
        title: "Weekly Personality Development Programs for Youth",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[501,1001,2501,5001],
        customAmountAllowed: true
      },
      {
        id: "Spiritual Library for Youth",
        title: "Spiritual Library for Youth",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[1001,2501,5001,10001,15001],
        customAmountAllowed: true
      },
      {
        id: "Annual Educational Trip for Youth",
        title: "Annual Educational Trip for Youth",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[5000,11000,21000,51000],
        customAmountAllowed: true
      },
      {
        id: "Youth hostel",
        title: "Youth hostel",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[5000,15000,25000],
        customAmountAllowed: true
      },
      {
        id: "Weekly Value Education classes for Children",
        title: "Weekly Value Education classes for Children",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[501,2501,5001,11000],
        customAmountAllowed: true
      },
      {
        id: "Monthly Youth Empowerment Camps",
        title: "Monthly Youth Empowerment Camps",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[5000,11000,21000],
        customAmountAllowed: true
      },
      {
        id: "Cultural Services(Gopal Sakha, Value Plus, Culture Camp & Heritage Fest)",
        title: "Cultural Services(Gopal Sakha, Value Plus, Culture Camp & Heritage Fest)",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[501,2501,5001,11000],
        customAmountAllowed: true
      },
      {
        id: "Youth Preaching Services (Friends of Lord Krishna - FOLK Club, FOLK Hostel & FOLK Yatra)",
        title: "Youth Preaching Services (Friends of Lord Krishna - FOLK Club, FOLK Hostel & FOLK Yatra)",
        description: "",
        image: "/images/scholarships.jpg",
        amounts:[501,1101,2101,5101],
        customAmountAllowed: true
      },
    ]
  },
  {
    id: " Special-Puja",
    title: " Special Puja",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
  },
{
  id: "sri-gaura-purnima",
  title: "Sri Gaura Purnima",
  subtitle: "",
  description: "Celebrate the divine appearance of Lord Chaitanya Mahaprabhu with special services and offerings",
  image: "/festivals/gaura-purnima.jpg",
  icon: "festival",
  subCategories: [
    {
      id: "poshak-seva",
      title: "Poshak Seva",
      description: "Contribute towards the divine attire of the deities",
      image: "/images/seva.jpg",
      amounts: [2500, 5000, 10000, 15000, 25000],
      customAmountAllowed: true
    },
    {
      id: "abharan-seva",
      title: "Abharan Seva",
      description: "Offer ornaments for the deities",
      image: "/images/seva.jpg",
      amounts: [2500, 5000, 10000, 15000, 25000],
      customAmountAllowed : true
    },
    {
      id: "maha-abhisheka-seva",
      title: "Maha Abhisheka Seva",
      description: "Participate in the grand ceremonial bathing of the deities",
      image: "/images/seva.jpg",
      amounts: [3500, 5001, 11000, 21000],
      customAmountAllowed: true
    },
    {
      id: "pushpalankara-seva",
      title: "Pushpalankara Seva",
      description: "Offer floral decorations for the deities",
      image: "/images/seva.jpg",
      amounts: [1100, 2100, 5100],
      customAmountAllowed: true
    },
    {
      id: "deity-garlands-seva",
      title: "Deity Garlands Seva",
      description: "Offer beautiful garlands for the deities",
      image: "/images/seva.jpg",
      amounts: [1500, 3000, 5000],
      customAmountAllowed: true
    },
    {
      id: "vishesha-naivedya-seva",
      title: "Vishesha Naivedya Seva",
      description: "Sponsor special food offerings for the deities",
      image: "/images/seva.jpg",
      amounts: [1100, 2500, 3500, 5000],
      customAmountAllowed: true
    },
    {
      id: "chappan-bhog-seva",
      title: "Chappan Bhog Seva",
      description: "Sponsor the 56-item special offering",
      image: "/images/seva.jpg",
      amounts: [1500, 2500, 3500, 5000],
      customAmountAllowed: true
    },
    {
      id: "phal-seva",
      title: "Phal Seva",
      description: "Offer fruits to the deities",
      image: "/images/seva.jpg",
      amounts: [501, 1000, 1500, 2000],
      customAmountAllowed: true
    },
    {
      id: "tulasi-daan-seva",
      title: "Tulasi Daan Seva",
      description: "Contribute to Tulasi Devi worship",
      image: "/images/seva.jpg",
      amounts: [251, 501, 1001, 2000],
      customAmountAllowed: true
    },
    {
      id: "annadana-seva",
      title: "Annadana Seva",
      description: "Sponsor food distribution to devotees",
      image: "/images/seva.jpg",
      amounts: [501, 1100, 2100, 5100, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "gau-seva",
      title: "Gau Seva",
      description: "Contribute to cow protection and maintenance",
      image: "/images/seva.jpg",
      amounts: [750, 1500, 3000, 5000, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "other-amount",
      title: "Other Amount",
      description: "Custom donation amount",
      image: "/images/seva.jpg",
      amounts: [],
      customAmountAllowed: true
    }
  ]
},
    {
      id: "sri-rama-navami",
      title: "Sri Rama Navami",
      subtitle: "",
      description: "Celebrate the divine appearance of Lord Rama with special services and offerings",
      image: "/festivals/rama-navami.jpg",
      icon: "festival",
      subCategories: [
        {
          id: "vishesha-alankara-seva",
          title: "Vishesha Alankara Seva",
          description: "Sponsor special decorations for Lord Rama",
          image: "/images/seva.jpg",
          amounts: [2500, 5000, 10000],
          customAmountAllowed: true
        },
        {
          id: "rama-taraka-yagna-seva",
          title: "Rama Taraka Yagna Seva",
          description: "Contribute to the sacred fire ceremony",
          image: "/images/seva.jpg",
          amounts: [3500, 5000, 10000],
          customAmountAllowed: true
        },
        {
          id: "pushpalankara-seva",
          title: "Pushpalankara Seva",
          description: "Offer floral decorations for the deities",
          image: "/images/seva.jpg",
          amounts: [1100, 2100, 5100],
          customAmountAllowed: true
        },
        {
          id: "deity-garlands-seva",
          title: "Deity Garlands Seva",
          description: "Sponsor beautiful garlands for Lord Rama",
          image: "/images/seva.jpg",
          amounts: [1500, 3000, 5000],
          customAmountAllowed: true
        },
        {
          id: "vishesha-naivedya-seva",
          title: "Vishesha Naivedya Seva",
          description: "Sponsor special food offerings",
          image: "/images/seva.jpg",
          amounts: [1100, 2500, 3500, 5000],
          customAmountAllowed: true
        },
        {
          id: "phal-seva",
          title: "Phal Seva",
          description: "Offer fruits to the deities",
          image: "/images/seva.jpg",
          amounts: [501, 1000, 1500, 2000],
          customAmountAllowed: true
        },
        {
          id: "tulasi-daan-seva",
          title: "Tulasi Daan Seva",
          description: "Contribute to Tulasi Devi worship",
          image: "/images/seva.jpg",
          amounts: [251, 501, 1001, 2000],
          customAmountAllowed: true
        },
        {
          id: "annadana-seva",
          title: "Annadana Seva",
          description: "Sponsor food distribution to devotees",
          image: "/images/seva.jpg",
          amounts: [501, 1100, 2100, 5100, 10000, 15000],
          customAmountAllowed: true
        },
        {
          id: "gau-seva",
          title: "Gau Seva",
          description: "Contribute to cow protection",
          image: "/images/seva.jpg",
          amounts: [750, 1500, 3000, 5000, 10000, 15000],
          customAmountAllowed: true
        },
        {
          id: "other-amount",
          title: "Other Amount",
          description: "Custom donation amount",
          image: "/images/seva.jpg",
          amounts: [],
          customAmountAllowed: true
        }
      ]
    },
    {
  id: "sri-narasimha-jayanti",
  title: "Sri Narasimha Jayanti",
  subtitle: "",
  description: "Celebrate the appearance day of Lord Narasimha with special services and offerings",
  image: "/festivals/narasimha-jayanti.jpg",
  icon: "festival",
  subCategories: [
    {
      id: "vishesha-alankara-seva",
      title: "Vishesha Alankara Seva",
      description: "Sponsor special decorations for Lord Narasimha",
      image: "/images/seva.jpg",
      amounts: [2500, 5000, 10000],
      customAmountAllowed: true
    },
    {
      id: "narasimha-yagna-seva",
      title: "Narasimha Yagna Seva",
      description: "Contribute to the sacred fire ceremony for Lord Narasimha",
      image: "/images/seva.jpg",
      amounts: [3500, 5000, 10000],
      customAmountAllowed: true
    },
    {
      id: "maha-abhisheka-seva",
      title: "Maha Abhisheka Seva",
      description: "Sponsor the grand ceremonial bathing of Lord Narasimha",
      image: "/images/seva.jpg",
      amounts: [3500, 5001, 11000, 21000],
      customAmountAllowed: true
    },
    {
      id: "pushpalankara-seva",
      title: "Pushpalankara Seva",
      description: "Offer floral decorations for the deities",
      image: "/images/seva.jpg",
      amounts: [1100, 2100, 5100],
      customAmountAllowed: true
    },
    {
      id: "deity-garlands-seva",
      title: "Deity Garlands Seva",
      description: "Sponsor beautiful garlands for Lord Narasimha",
      image: "/images/seva.jpg",
      amounts: [1500, 3000, 5000],
      customAmountAllowed: true
    },
    {
      id: "vishesha-naivedya-seva",
      title: "Vishesha Naivedya Seva",
      description: "Sponsor special food offerings for the Lord",
      image: "/images/seva.jpg",
      amounts: [1100, 2500, 3500, 5000],
      customAmountAllowed: true
    },
    {
      id: "phal-seva",
      title: "Phal Seva",
      description: "Offer fruits to the deities",
      image: "/images/seva.jpg",
      amounts: [501, 1000, 1500, 2000],
      customAmountAllowed: true
    },
    {
      id: "tulasi-daan-seva",
      title: "Tulasi Daan Seva",
      description: "Contribute to Tulasi Devi worship",
      image: "/images/seva.jpg",
      amounts: [251, 501, 1001, 2000],
      customAmountAllowed: true
    },
    {
      id: "annadana-seva",
      title: "Annadana Seva",
      description: "Sponsor food distribution to devotees",
      image: "/images/seva.jpg",
      amounts: [501, 1100, 2100, 5100, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "gau-seva",
      title: "Gau Seva",
      description: "Contribute to cow protection and maintenance",
      image: "/images/seva.jpg",
      amounts: [750, 1500, 3000, 5000, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "other-amount",
      title: "Other Amount",
      description: "Make a custom donation amount",
      image: "/images/seva.jpg",
      amounts: [],
      customAmountAllowed: true
    }
  ]
},
{
  id: "panihati-chida-dahi-mahotsava",
  title: "Panihati Chida-Dahi Mahotsava",
  subtitle: "",
  description: "Celebrate the famous festival of chida-dahi (flattened rice and yogurt) offering with special services",
  image: "/festivals/panihati.jpg",
  icon: "festival",
  subCategories: [
    {
      id: "vishesha-alankara-seva",
      title: "Vishesha Alankara Seva",
      description: "Sponsor special decorations for the festival",
      image: "/images/seva.jpg",
      amounts: [2500, 5000, 10000],
      customAmountAllowed: true
    },
    {
      id: "nauka-vihar-seva",
      title: "Nauka Vihar Seva",
      description: "Contribute to the boat festival celebrations",
      image: "/images/seva.jpg",
      amounts: [1100, 2100, 5100, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "pushpalankara-seva",
      title: "Pushpalankara Seva",
      description: "Offer floral decorations for the deities",
      image: "/images/seva.jpg",
      amounts: [501, 1100, 2100, 5100],
      customAmountAllowed: true
    },
    {
      id: "deity-garlands-seva",
      title: "Deity Garlands Seva",
      description: "Sponsor beautiful garlands for the deities",
      image: "/images/seva.jpg",
      amounts: [1500, 3000, 5000],
      customAmountAllowed: true
    },
    {
      id: "chida-dahi-bhog-seva",
      title: "Chida-dahi Bhog Seva",
      description: "Sponsor the special chida-dahi offering",
      image: "/images/seva.jpg",
      amounts: [1100, 2500, 3500, 5000],
      customAmountAllowed: true
    },
    {
      id: "phal-seva",
      title: "Phal Seva",
      description: "Offer fruits to the deities",
      image: "/images/seva.jpg",
      amounts: [501, 1000, 1500, 2000],
      customAmountAllowed: true
    },
    {
      id: "tulasi-daan-seva",
      title: "Tulasi Daan Seva",
      description: "Contribute to Tulasi Devi worship",
      image: "/images/seva.jpg",
      amounts: [251, 501, 1001, 2000],
      customAmountAllowed: true
    },
    {
      id: "annadana-seva",
      title: "Annadana Seva",
      description: "Sponsor food distribution to devotees",
      image: "/images/seva.jpg",
      amounts: [501, 1100, 2100, 5100, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "gau-seva",
      title: "Gau Seva",
      description: "Contribute to cow protection and maintenance",
      image: "/images/seva.jpg",
      amounts: [750, 1500, 3000, 5000, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "other-amount",
      title: "Other Amount",
      description: "Make a custom donation amount",
      image: "/images/seva.jpg",
      amounts: [],
      customAmountAllowed: true
    }
  ]
},
{
  id: "jhulan-utsava",
  title: "Jhulan Utsava",
  subtitle: "",
  description: "Celebrate the divine swing festival of Radha and Krishna with special offerings",
  image: "/festivals/jhulan.jpg",
  icon: "festival",
  subCategories: [
    {
      id: "vishesha-alankara-seva",
      title: "Vishesha Alankara Seva",
      description: "Sponsor special decorations for the swing festival",
      image: "/images/seva.jpg",
      amounts: [1500, 2500, 5000],
      customAmountAllowed: true
    },
    {
      id: "jhulan-decorations-seva",
      title: "Jhulan Decorations Seva",
      description: "Contribute to the beautiful swing decorations",
      image: "/images/seva.jpg",
      amounts: [1100, 2100, 5100, 10000],
      customAmountAllowed: true
    },
    {
      id: "deity-garlands-seva",
      title: "Deity Garlands Seva",
      description: "Sponsor flower garlands for Radha-Krishna",
      image: "/images/seva.jpg",
      amounts: [1500, 3000, 5000],
      customAmountAllowed: true
    },
    {
      id: "pushpalankara-seva",
      title: "Pushpalankara Seva",
      description: "Offer floral decorations for the deities",
      image: "/images/seva.jpg",
      amounts: [501, 1100, 2100, 5100],
      customAmountAllowed: true
    },
    {
      id: "phal-seva",
      title: "Phal Seva",
      description: "Offer fruits to Radha and Krishna",
      image: "/images/seva.jpg",
      amounts: [501, 1000, 1500, 2000],
      customAmountAllowed: true
    },
    {
      id: "annadana-seva",
      title: "Annadana Seva",
      description: "Sponsor food distribution during the festival",
      image: "/images/seva.jpg",
      amounts: [501, 1100, 2100, 5100, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "gau-seva",
      title: "Gau Seva",
      description: "Contribute to cow protection during the festivities",
      image: "/images/seva.jpg",
      amounts: [750, 1500, 3000, 5000, 10000, 15000],
      customAmountAllowed: true
    },
    {
      id: "other-amount",
      title: "Other Amount",
      description: "Make a custom donation for Jhulan Utsava",
      image: "/images/seva.jpg",
      amounts: [],
      customAmountAllowed: true
    }
  ]
},
    {
      id: "sri-krishna-janmashtami",
      title: "Sri Krishna Janmashtami",
      subtitle: "",
      description: "Celebrate the divine appearance of Lord Krishna with special services and offerings",
      image: "/festivals/janmashtami.jpg",
      icon: "festival",
      subCategories: [
        // ABHISHEKAM SEVA
        {
          id: "abhishek-yajaman",
          title: "Abhishek Yajaman (Kalasha Abhishek Seva)",
          description: "Sponsor the main abhishek ceremony",
          image: "/images/abhishekam.jpg",
          amounts: [25001],
          customAmountAllowed: false,
        },
        {
          id: "maha-abhishek-morning",
          title: "Maha Abhishek Seva (Morning @5.30am)",
          description: "Sponsor morning abhishek ceremony",
          image: "/images/abhishekam.jpg",
          amounts: [5001],
          customAmountAllowed: false,
        },
        {
          id: "maha-abhishek-midnight",
          title: "Maha Abhishek Seva (Mid-night @10.30pm)",
          description: "Sponsor midnight abhishek ceremony",
          image: "/images/abhishekam.jpg",
          amounts: [11001],
          customAmountAllowed: false,
        },
        {
          id: "prabhupada-abhishek",
          title: "Śrīla Prabhupāda Abhishek Seva",
          description: "Sponsor abhishek for Srila Prabhupada's deity",
          image: "/images/abhishekam.jpg",
          amounts: [3501],
          customAmountAllowed: false,
        },

        // FLOWER DECORATION SEVA
        {
          id: "phool-bangla-seva",
          title: "Phool Bangla Seva",
          description: "Sponsor flower palace decoration (10 slots)",
          image: "/images/flower-decoration.jpg",
          amounts: [21001],
          customAmountAllowed: false,
        },
        {
          id: "pushpa-sringar-seva",
          title: "Pushpa Sringar Seva",
          description: "Sponsor flower decorations (8 slots)",
          image: "/images/flower-decoration.jpg",
          amounts: [7551],
          customAmountAllowed: false,
        },
        {
          id: "pushpa-abhishek-seva",
          title: "Pushpa Abhishek Seva",
          description: "Sponsor flower abhishek (10 slots)",
          image: "/images/flower-decoration.jpg",
          amounts: [5001],
          customAmountAllowed: false,
        },
        {
          id: "deity-garland-seva",
          title: "Deity Garland Seva",
          description: "Sponsor deity garlands (5 slots)",
          image: "/images/flower-decoration.jpg",
          amounts: [5001],
          customAmountAllowed: false,
        },
        {
          id: "pallaki-decoration-seva",
          title: "Pallaki Decoration Seva",
          description: "Sponsor palanquin decorations (4 slots)",
          image: "/images/flower-decoration.jpg",
          amounts: [2551],
          customAmountAllowed: false,
        },
        {
          id: "jhulan-decoration-seva",
          title: "Jhulan Decoration Seva",
          description: "Sponsor swing decorations (4 slots)",
          image: "/images/flower-decoration.jpg",
          amounts: [2101],
          customAmountAllowed: false,
        },

        // SRI VIGRAHA SEVA
        {
          id: "poshak-seva-all-deities",
          title: "Poshak Seva for all Deities",
          description: "Sponsor clothing for all deities (3 slots)",
          image: "/images/vigraha-seva.jpg",
          amounts: [35001],
          customAmountAllowed: false
        },
        {
          id: "poshak-seva-radha-krishna",
          title: "Poshak Seva for Radha Krishna",
          description: "Sponsor clothing for Radha-Krishna (2 slots)",
          image: "/images/vigraha-seva.jpg",
          amounts: [25001],
          customAmountAllowed: false
        },
        {
          id: "abharan-seva-all-deities",
          title: "Abharan Seva for all Deities",
          description: "Sponsor ornaments for all deities (3 slots)",
          image: "/images/vigraha-seva.jpg",
          amounts: [35001],
          customAmountAllowed: false
        },
        {
          id: "abharan-seva-radha-krishna",
          title: "Abharan Seva for Radha Krishna",
          description: "Sponsor ornaments for Radha-Krishna (2 slots)",
          image: "/images/vigraha-seva.jpg",
          amounts: [25001],
          customAmountAllowed: false
        },
        {
          id: "chappan-bhog-seva",
          title: "Chappan Bhog Seva",
          description: "Sponsor 56-item special offering (10 slots)",
          image: "/images/naivedyam.jpg",
          amounts: [21001],
          customAmountAllowed: false
        },
        {
          id: "naivaidyam-seva",
          title: "Naivaidyam Seva",
          description: "Sponsor food offerings (10 slots)",
          image: "/images/naivedyam.jpg",
          amounts: [11001],
          customAmountAllowed: false  
        },
        {
          id: "makhan-mishri-seva",
          title: "Makhan Mishri Seva",
          description: "Offer butter and sweets to Krishna",
          image: "/images/naivedyam.jpg",
          amounts: [101, 201, 501, 1008, 1501, 2501, 5001],
          customAmountAllowed: true
        },
        {
          id: "tulasi-archana-seva",
          title: "Tulasi Archana Seva",
          description: "Sponsor Tulasi Devi worship",
          image: "/images/tulasi.jpg",
          amounts: [501],
          customAmountAllowed: false
        },

        // ANNADANA SEVA
        {
          id: "anukalpa-feast-seva",
          title: "Anukalpa Feast Distribution Seva",
          description: "Sponsor feast distribution (10 slots)",
          image: "/images/annadana.jpg",
          amounts: [21001],
          customAmountAllowed: false
        },
        {
          id: "janmashtami-annadana-halwa",
          title: "Janmashtami Annadana (Halwa Distribution)",
          description: "Sponsor halwa distribution",
          image: "/images/annadana.jpg",
          amounts: [15001],
          customAmountAllowed: false
        },

        // OTHER SEVA
        {
          id: "cultural-mandap-seva",
          title: "Janmashtami Cultural Mandap Seva",
          description: "Sponsor cultural program stage (3 slots)",
          image: "/images/cultural.jpg",
          amounts: [150001],
          customAmountAllowed: false,
        },
        {
          id: "krishna-kala-seva",
          title: "Krishna Kala Seva",
          description: "Sponsor art and cultural programs (5 slots)",
          image: "/images/cultural.jpg",
          amounts: [51001],
          customAmountAllowed: false
        },
        {
          id: "gau-seva",
          title: "Gau Seva",
          description: "Contribute to cow protection",
          image: "/images/gau-seva.jpg",
          amounts: [101, 201, 501, 1008, 1501, 2501, 5001],
          customAmountAllowed: true
        },
        {
          id: "other-amount",
          title: "Other Amount",
          description: "Make a custom donation",
          image: "/images/donation.jpg",
          amounts: [],
          customAmountAllowed: true
        }
      ]
    },
    {
      id: "govardhana-puja",
      title: "Govardhana Puja",
      subtitle:"",
      description: "Celebrate the divine appearance of Lord Chaitanya Mahaprabhu with special services and offerings",
      image: "/festivals/gaura-purnima.jpg",
      icon: "festival",
      subCategories: [
        {
          id: "annakuta-seva",
          title: "Govardhan Annakuta Seva",
          description: "",
          image: "/images/seva.jpg",
          amounts: [1500, 2500, 3500, 5000, 7500, 10000],
          customAmountAllowed: true
        },
        {
          id: "gau-puja-seva",
          title: "Gau Puja & Gau Seva",
          description: "",
          image: "/images/seva.jpg",
          amounts: [750, 1500, 3000, 5000, 10000, 15000],
          customAmountAllowed: true
        }
      ]
    },
    {
      id: "gita-jayanti",
      title: "Gita Jayanti",
      subtitle:"",
      description: "Celebrate the divine appearance of Lord Chaitanya Mahaprabhu with special services and offerings",
      image: "/festivals/gaura-purnima.jpg",
      icon: "festival",
      subCategories: [
        {
          id: "gita-daan-108",
          title: "Gita Daan (108 books)",
          description: "",
          image: "/images/seva.jpg",
          amounts: [21501],
          customAmountAllowed: false
        },
        {
          id: "book-distribution",
          title: "Support Śrīla Prabhupāda's Book Distribution",
          description: "",
          image: "/images/seva.jpg",
          amounts: [10001],
          customAmountAllowed: false
        }
      ]
    },
    {
      id: "deepotsava",
      title: "Deepotsava",
      subtitle:"",
      description: "Celebrate the festival of lights with special services and offerings",
      image: "/festivals/deepotsava.jpg",
      icon: "festival",
      subCategories: [
        {
          id: "deep-daan-seva",
          title: "Deep Daan Seva",
          description: "",
          image: "/images/seva.jpg",
          amounts: [501, 1001, 1501, 2501, 5001, 10000],
          customAmountAllowed: true
    },
    {
      id: "gau-seva",
      title: "Gau Seva",
      description: "",
      image: "/images/seva.jpg",
      amounts: [501, 1001, 2001, 5001, 10001],
      customAmountAllowed: true
    },
    {
      id: "annadana-seva",
      title: "Annadana Seva",
      description: "",
      image: "/images/seva.jpg",
      amounts: [501, 1101, 2101, 5101, 10001],
      customAmountAllowed: true
    },
    {
      id: "shringar-seva",
      title: "Shringar Seva",
      description: "",
      image: "/images/seva.jpg",
      amounts: [1500, 3100, 5100, 10000],
      customAmountAllowed: true
    },
    {
      id: "vishesha-naivedya-seva",
      title: "Vishesha Naivedya Seva",
      description: "",
      image: "/images/seva.jpg",
      amounts: [1100, 2500, 3500, 5100, 10000],
      customAmountAllowed: true
    }
  ]
}
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Supporting the food distribution program has been deeply fulfilling. Knowing that my contribution helps provide nourishing meals to those in need brings me immense joy.",
    name: "Rajesh K.",
    title: "Monthly Donor"
  },
  {
    quote: "The sacred text distribution program is close to my heart. I've seen firsthand how these timeless teachings can transform lives and provide profound spiritual insights.",
    name: "Meera S.",
    title: "Book Distribution Supporter"
  },
  {
    quote: "Contributing to the temple maintenance fund gives me satisfaction knowing I'm helping preserve a sacred space where people can connect with the divine and find spiritual community.",
    name: "Anand P.",
    title: "Regular Visitor"
  }
];
