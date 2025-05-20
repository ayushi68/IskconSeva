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
    id: "Annadana Seva",
    title: "Annadana seva",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Khichdi Distribution Seva one day",
        title: "Khichdi Distribution Seva one day",
        description: "Make a contribution towards tasty Khichdi prasadam served in donnas to all devotees visiting the temple",
        image: "/images/supplies.jpg",
        amounts: [501,1100,2100,5100,10000,15000],
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
        amounts:[11000,21000,31000],
        customAmountAllowed: true
      },
      {
        id: "Feed 100 prasadam meals",
        title: "Feed 100 prasadam meals",
        description: "Contribution towards delicious prasadam served in plates to all devotees visiting the temple by sponsoring 100 prasadam plates.",
        image: "/images/scholarships.jpg",
        amounts:[1100,2100,3100],
        customAmountAllowed: true
      },
      {
        id: "Feed 200 prasadam meals",
        title: "Feed 200 prasadam meals",
        description: "Contribute for a great cause by helping the section of society by feeding upto 200 people.",
        image: "/images/scholarships.jpg",
        amounts:[2100,3100,5100],
        customAmountAllowed: true
      },
      {
        id: "Feed 300 Prasadam Meals",
        title: "Feed 300 prasadam meals",
        description: "Contribute for a great cause by helping the section of society by feeding upto 300 people.",
        image: "/images/scholarships.jpg",
        amounts:[3100,5100,7100],
        customAmountAllowed: true
      },
      {
        id: "Feed 500 Prasadam Meals",
        title: "Feed 500 prasadam meals",
        description: "Contribute for a great cause by helping the section of society by feeding upto 500 people.",
        image: "/images/scholarships.jpg",
        amounts:[5100,7100,11000],
        customAmountAllowed: true
      },
      {
        id: "Feed 1000 Prasadam Meals",
        title: "Feed 1000 prasadam meals",
        description: "Contribute for a great cause by helping the section of society by feeding upto 1000 people.",
        image: "/images/scholarships.jpg",
        amounts:[11000,22000,33000],
        customAmountAllowed: true
      },
      {
        id: "Feed 3000 Prasadam Meals",
        title: "Feed 3000 Prasadam Meals",
        description: "Contribution for delicious prasadam served in plates to all devotees visiting the temple by sponsoring 3000 delicious prasadam plates.",
        image: "/images/scholarships.jpg",
        amounts:[25000,50000,75000],
        customAmountAllowed: true
      },
      {
        id: "Feed more than 3000 Prasadam Meals",
        title: "Feed more than 3000 Prasadam Meals",
        description: "Celebrate by Serving all devotees visiting the temple for major Festival Celebrations consitiuting upto 3000 prasadam plates and recieve the blessings of lord in form of Special Mahaprasadam and Spiritual gifts.",
        image: "/images/scholarships.jpg",
        amounts:[51000,100000,151000],
        customAmountAllowed: true
      },
      {
        id: "Annadana served on my special Day",
        title: "Annadana served on my special Day",
        description: "Celebrate your favourite day (Birthdays, marriage annivarsary or any auspicious day with making a offering for Anndana for the Devotees).",
        image: "/images/scholarships.jpg",
        amounts:[11000,21000,31000],
        customAmountAllowed: true
      },
      {
        id: "Major Festival Prasada Seva(one time slot)",
        title: "Major Festival Prasada Seva(one time slot)",
        description: "Contribute for one time prasadam seva on occasion of Major festivals and recieve the blessings of lord in form of Special Mahaprasadam and Spiritual gifts",
        image: "/images/scholarships.jpg",
        amounts:[2500,5000,7500,10000],
        customAmountAllowed: true
      },
      {
        id: "Major Festival Prasada Seva(Full day)",
        title: "Major Festival Prasada Seva(Full day)",
        description: "Render the Service to their Lordships and for their Devotees by sponsoring a grand feast on occassion of Major festivals and recieve the blessings of lord in form of Special Mahaprasadam and Spiritual gifts",
        image: "/images/scholarships.jpg",
        amounts:[11000,31000,51000,100000,200000],
        customAmountAllowed: true
      },
    ]
  },
  {
    id: "Gaushala Seva",
    title: "Gaushala seva",
    subtitle: "",
    description: "",
    image: "/Gaushala.jpg",
    icon: "animal",
    subCategories: [
      {
        id: "Gau Seva(One day feed per cow)",
        title: "Gau Seva(One day feed per cow)",
        description: "Contribute towards feeding a cow for one day",
        image: "/images/supplies.jpg",
        amounts: [1100],
        customAmountAllowed: true
      },
      {
        id: "Gau Seva(One month feed per cow)",
        title: "Gau Seva(One month feed per cow)",
        description: "Contribute towards feeding a cow for one month",
        image: "/images/scholarships.jpg",
        amounts:[31000],
        customAmountAllowed: true
      },
      {
        id: "One day grass for one cow",
        title: "One day grass for one cow",
        description: "Contribute towards feeding grass to the cow for one day",
        image: "/images/scholarships.jpg",
        amounts:[500,1100,2500,3500],
        customAmountAllowed: true
      },
      {
        id: "Gau Daan",
        title: "Gau Daan",
        description: "Donate towards the taking care of cow.",
        image: "/images/scholarships.jpg",
        amounts:[11000,25000,51000],
        customAmountAllowed: true
      },
      {
        id: "Gau Puja",
        title: "Gau Puja",
        description: "Donate towards worshipping the cows.",
        image: "/images/scholarships.jpg",
        amounts:[500,1100,2500,3500],
        customAmountAllowed: true
      },
      {
        id: "Gau Poshan Seva(medical expenses)",
        title: "Gau Poshan Seva(medical expenses)",
        description: "Contribute towards medical expenses of cows",
        image: "/images/scholarships.jpg",
        amounts:[500,1500,3500,5100],
        customAmountAllowed: true
      },
      {
        id: "Gau Seva(Two months feed per cow)",
        title: "Gau Seva(Two months feed per cow)",
        description: "Contribute towards feeding a cow for two months",
        image: "/images/scholarships.jpg",
        amounts:[1000120001,30001],
        customAmountAllowed: true
      },
      {
        id: "Gau Seva(Three months feed per cow)",
        title: "Gau Seva(Three months feed per cow)",
        description: "Contribute towards feeding a cow for three months",
        image: "/images/scholarships.jpg",
        amounts:[15001,30001,45001],
        customAmountAllowed: true
      },
      {
        id: "Gau Seva(Six month feed per cow)",
        title: "Gau Seva(Six month feed per cow)",
        description: "Contribute towards feeding a cow for six months",
        image: "/images/scholarships.jpg",
        amounts:[30001,60001,90001],
        customAmountAllowed: true
      },
      {
        id: "Gau Seva(One year feed per cow)",
        title: "Gau Seva(One year feed per cow)",
        description: "Contribute towards feeding a cow for one year",
        image: "/images/scholarships.jpg",
        amounts:[60001,120001,180001],
        customAmountAllowed: true
      },
      {
        id: "Green grass for all cows for a day",
        title: "Green grass for all cows for a day",
        description: "Contribute for Feeding the Goshala Cows with a trolley of Green Grass",
        image: "/images/scholarships.jpg",
        amounts:[1101,2201,3301],
        customAmountAllowed: true
      },
      {
        id: "One month Green grass for all cows",
        title: "One month Green grass for all cows",
        description: "Contribute towards feeding grass to all cows for one month",
        image: "/images/scholarships.jpg",
        amounts:[33000,66000,100001],
        customAmountAllowed: true
      },
      {
        id: "Fooder for all cows for a day",
        title: "Fooder for all cows for a day",
        description: "Contribute for Feeding the herd with 2 trolley of Green Grass",
        image: "/images/scholarships.jpg",
        amounts:[4001,8001,12001],
        customAmountAllowed: true
      },
      {
        id: "First Aid Kit:",
        title: "First Aid Kit:/cow",
        description: "Donate towards arranging first aid medical kits for curing minimal health issues of Goshala Herds!",
        image: "/images/scholarships.jpg",
        amounts:[300],
        customAmountAllowed: true
      },
      {
        id: "Gynaecological Kit:",
        title: "Gynaecological Kit:",
        description: "Donate towards equipments and Vetenary facilities and facilities for calf of mother Cow!",
        image: "/images/scholarships.jpg",
        amounts:[2000],
        customAmountAllowed: true
      },
      {
        id: "OPD Kit:",
        title: "OPD Kit:",
        description: "Donation towards opd kits containing (oxygen supplying equipments, general fever and weakness treatment medicines).",
        image: "/images/scholarships.jpg",
        amounts:[1500],
        customAmountAllowed: true
      },
      {
        id: "Routine Check-up Fees:",
        title: "Routine Check-up Fees:",
        description: "Contribute for monthly chekup of cows by Veternary professionals and related medicinal facilities.",
        image: "/images/scholarships.jpg",
        amounts:[1500],
        customAmountAllowed: true
      },
      {
        id: "Yearly Treatment Cost:",
        title: "Yearly Treatment Cost:",
        description: "Contribute for monthly chekup by Veternary professionals and related medicinal facilities.",
        image: "/images/scholarships.jpg",
        amounts:[180000],
        customAmountAllowed: true
      },
      {
        id: "Routine Check-up Fees:",
        title: "Routine Check-up Fees:",
        description: "Contribute for monthly general chekup of cows by Veternary professionals for without medicines",
        image: "/images/scholarships.jpg",
        amounts:[1500],
        customAmountAllowed: true
      },
      {
        id: "Disease/InjuryTreatment Cost:",
        title: "Disease/InjuryTreatment Cost:",
        description: "Contribute to help equipping a mother cow with all the facilities she needs to overcome any infections or injuries",
        image: "/images/scholarships.jpg",
        amounts:[15000],
        customAmountAllowed: true
      },
      {
        id: "Jaggery 40 kg",
        title: "Jaggery 40 kg",
        description: "Contriute for feedind the herd with full of nutritious fooder containing jaggery",
        image: "/images/scholarships.jpg",
        amounts:[3201],
        customAmountAllowed: true
      },
      {
        id: "Feed 5 cows per day",
        title: "Feed 5 cows per day",
        description: "Contribution towards feeding a group containing 5 cows with dry cake seeds.",
        image: "/images/scholarships.jpg",
        amounts:[2501],
        customAmountAllowed: true
      },
      {
        id: "Adopt a cow for a year",
        title: "Adopt a cow for a year",
        description: "Donate towards nuturing and taking care of a mother cow who fullfills all our daily needs selflessly!",
        image: "/images/scholarships.jpg",
        amounts:[25000,50001,75000],
        customAmountAllowed: true
      },
      {
        id: "Adopt 1 Calf for Its Lifetime",
        title: "Adopt 1 Calf for Its Lifetime",
        description: "Chance to have special mercy of the lord and mother cow by adopting a Calf and taking care for its nurturing for entire lifetime.",
        image: "/images/scholarships.jpg",
        amounts:[360001],
        customAmountAllowed: true
      },
      {
        id: "Adopt 1 Cow for Its Lifetime",
        title: "Adopt 1 Cow for Its Lifetime",
        description: "Grab the best of their lordhips and mother cow's blessing unto you and your family by adopting a mother cow.",
        image: "/images/scholarships.jpg",
        amounts:[360001],
        customAmountAllowed: true
      },
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
    id: "Sri Vigraha Seva",
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
    id: "Radharani's Kitchen Seva",
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
    id: "Rajbhog Seva",
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
    id: "General Donation",
    title: "General Donation",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    amount:[101,1101,2101,5101,11001]
  },
  {
    id: "Offline Donation",
    title: "Offline Donation",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
  },
  {
    id: "Become a Life Patron",
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
    id: " Special Seva",
    title: " Special Seva",
    subtitle: "",
    description: "Sri Vigraha Seva - Deity Worship",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Sadhu Seva",
        title: "Sadhu Seva",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Vaishnav Bhoj Seva for one time (either Break fast or Lunch or Dinner)",
            title: "Vaishnav Bhoj Seva for one time (either Break fast or Lunch or Dinner)",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (contains Normal Meal ,Daal, Chawal + 1 Vegie)",
            amounts: [1500,3501,5100],
            customAmountAllowed: false
          },
          {
            id: "Dwadashi Vaishnav Bhoj Seva",
            title: "Dwadashi Vaishnav Bhoj Seva",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (Paneer Meal + Special Sweets + Snacks)",
            amounts: [1500,3501,5100],
            customAmountAllowed: false
          },
          {
            id: "Vaishnav Bhoj Seva one time (either Break fast or Lunch or Dinner) for a week seva",
            title: "Vaishnav Bhoj Seva one time (either Break fast or Lunch or Dinner) for a week seva",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (contains Normal Meal ,Daal, Chawal + 1 Vegie)",
            amounts: [21001],
            customAmountAllowed: false
          },
          {
            id: "Vaishnav Preeti Bhoj Seva (either Break fast or Lunch or Dinner) a day seva",
            title: "Vaishnav Preeti Bhoj Seva (either Break fast or Lunch or Dinner) a day seva",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (Normal Meal + 1 Sweet + 2 special Subji)",
            amounts: [12501],
            customAmountAllowed: false
          },
          {
            id: "Vaishnav Bhoj Seva one time",
            title: "Vaishnav Bhoj Seva one time",
            description: "Take privilege of serving and recieving the mercy of Sadhus by sponsoring a Vaishnava bhoj (contains Normal Meal ,Daal, Chawal + 1 Vegie)",
            amounts: [5001],
            customAmountAllowed: false
          },
        ]
      },
      {
        id: "Ekadashi Seva",
        title: "Ekadashi Seva",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Ekadashi DeIty Abhishek Seva",
            title: "Ekadashi DeIty Abhishek Seva",
            description: "",
            amounts: [1100,2100,3101],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Puja Archana Seva",
            title: "Ekadashi Puja Archana Seva",
            description: "",
            amounts: [1100,2100],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Arati Seva",
            title: "Ekadashi Arati Seva",
            description: "",
            amounts: [501,1100],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Deity Tulasi Garland Seva",
            title: "Ekadashi Deity Tulasi Garland Seva",
            description: "",
            amounts: [1100,2100],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Deity Tulasi Archana Seva",
            title: "Ekadashi Deity Tulasi Archana Seva",
            description: "",
            amounts: [501,1100],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Chandan Seva",
            title: "Ekadashi Chandan Seva",
            description: "",
            amounts: [501,1100],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Charnamrita Seva",
            title: "Ekadashi Charnamrita Seva",
            description: "",
            amounts: [501],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Sri Vigraha Seva",
            title: "Ekadashi Sri Vigraha Seva",
            description: "",
            amounts: [1500,3000,5000],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Deity Fruit Bhog Seva(Full Day)",
            title: "Ekadashi Deity Fruit Bhog Seva(Full Day)",
            description: "",
            amounts: [1100,2100,3101],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Deity Rajbhog Seva",
            title: "Ekadashi Deity Rajbhog Seva",
            description: "",
            amounts: [1501,2100,3500],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Full Day Deity Bhog Seva",
            title: "Ekadashi Full Day Deity Bhog Seva",
            description: "",
            amounts: [2100,3100,5100],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Gita Daan Seva",
            title: "Ekadashi Gita Daan Seva",
            description: "",
            amounts: [1100,2100,3100,5101],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Vaishnav Bhoj Seva",
            title: "Ekadashi Vaishnav Bhoj Seva",
            description: "",
            amounts: [1500,3500,5500],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Prasadam Distribution Seva",
            title: "Ekadashi Prasadam Distribution Seva",
            description: "",
            amounts: [501,1500,3500,5001],
            customAmountAllowed: false
          },
          {
            id: "Ekadashi Gau Seva",
            title: "Ekadashi Gau Seva",
            description: "",
            amounts: [1100,2100,3100,5100],
            customAmountAllowed: false
          }
        ]
      },
      {
        id: "Gyaan Daan Seva",
        title: "Gyaan Daan Seva",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Srimad Bhagvatam Prachara - 18 volume set(English)",
            title: "Srimad Bhagvatam Prachara - 18 volume set(English)",
            description: "Contribute towards disseminating the knowledge contained in the Amalam Puranam, Srimad Bhagavatam and other Sastras for the ultimate benefit of all people.",
            amounts: [10000,20000,30000,50000],
            customAmountAllowed: false
          },
          {
            id: "Srimad Bhagvatam Prachara - 18 volume set(Hindi)",
            title: "Srimad Bhagvatam Prachara - 18 volume set(Hindi)",
            description: "Contribute towards disseminating the knowledge contained in the Amalam Puranam, Srimad Bhagavatam and other Sastras for the ultimate benefit of all people.",
            amounts: [8500,17000,25500,51000],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - English (1,11,21,51,108 nos)",
            title: "Bhagavad Gita Prachara - English (1,11,21,51,108 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [450,4950,9450,22950,48600],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - English",
            title: "Bhagavad Gita Prachara - English",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [8400],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - English(51 nos)",
            title: "Bhagavad Gita Prachara - English(51 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people",
            amounts: [20501],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - English(108 nos)",
            title: "Bhagavad Gita Prachara - English(108 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [43501],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - Hindi (1,11,21,51,108 nos)",
            title: "Bhagavad Gita Prachara - Hindi (1,11,21,51,108 nos)",
            description: "Bhagavad Gita Prachara - Hindi (1,11,21,51,108 nos)",
            amounts: [380,4180,7980,19980,41040],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - Hindi(21 nos)",
            title: "Bhagavad Gita Prachara - Hindi(21 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [7350],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - Hindi(51 nos)",
            title: "Bhagavad Gita Prachara - Hindi(51 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people",
            amounts: [380,4180,7980,19980,41040],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - Hindi(108 nos)",
            title: "Bhagavad Gita Prachara - Hindi(108 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [37800],
            customAmountAllowed: false
          },
          {
            id: "Medium Book Set Distribution Seva (11 books per box)",
            title: "Medium Book Set Distribution Seva (11 books per box)",
            description: "Contribute towards disseminating the Vedic Knowledge contained in the Holy Scriptures like Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [1101,2101,3101],
            customAmountAllowed: false
          },
          {
            id: "Small Book Set Distribution Seva (11 books per box)",
            title: "Small Book Set Distribution Seva (11 books per box)",
            description: "Contribute towards disseminating the Vedic Knowledge contained in the Holy Scriptures like Bhagavad-gita and other Sastras for the ultimate benefit of all people",
            amounts: [501,1001,2101],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - English (21 books in a box)",
            title: "Bhagavad Gita Prachara - English (21 books in a box)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita for the ultimate benefit of all people.",
            amounts: [8500],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - Hindi (21 books in a box)",
            title: "Bhagavad Gita Prachara - Hindi (21 books in a box)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita for the ultimate benefit of all people.",
            amounts: [4100],
            customAmountAllowed: false
          },
          {
            id: "Krishna Book Prachara - English (21 books in a box)",
            title: "Krishna Book Prachara - English (21 books in a box)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita for the ultimate benefit of all people.",
            amounts: [10500],
            customAmountAllowed: false
          },
          {
            id: "Krishna Book Prachara - Hindi (21 books in a box)",
            title: "Krishna Book Prachara - Hindi (21 books in a box)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita for the ultimate benefit of all people.",
            amounts: [9450],
            customAmountAllowed: false
          },
          {
            id: "Srimad Bhagavatam Prachara 18 volume set - English",
            title: "Srimad Bhagavatam Prachara 18 volume set - English",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita for the ultimate benefit of all people.",
            amounts: [10000],
            customAmountAllowed: false
          },
          {
            id: "Srimad Bhagavatam Prachara 18 volume set - Hindi",
            title: "Srimad Bhagavatam Prachara 18 volume set - Hindi",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita for the ultimate benefit of all people.",
            amounts: [8500],
            customAmountAllowed: false
          }
        ]
      },
      {
        id: "Gita Daan",
        title: "Gita Daan",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Bhagavad Gita Prachara - Hindi (1,11,21,51,108 nos)",
            title: "Bhagavad Gita Prachara - Hindi (1,11,21,51,108 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people",
            amounts: [380,4180,7980,19980,41040],
            customAmountAllowed: false
          },
          {
            id: "Bhagavad Gita Prachara - English (1,11,21,51,108 nos)",
            title: "Bhagavad Gita Prachara - English (1,11,21,51,108 nos)",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people",
            amounts: [450,4950,9450,22950,],
            customAmountAllowed: false
          },
          {
            id: "Gita Daan - 32 Books",
            title: "Gita Daan - 32 Book",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [6720],
            customAmountAllowed: false
          },
          {
            id: "Gita Daan - 64 Books",
            title: "Gita Daan - 64 Book",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people",
            amounts: [13440],
            customAmountAllowed: false
          },
          {
            id: "Gita Daan - 96 Books",
            title: "Gita Daan - 96 Book",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [20160],
            customAmountAllowed: false
          },
          {
            id: "Gita Daan - 160 Books",
            title: "Gita Daan - 160 Book",
            description: "Contribute towards disseminating the knowledge contained in the Bhagavad-gita and other Sastras for the ultimate benefit of all people.",
            amounts: [33600],
            customAmountAllowed: false
          },
        ]
      },
      {
        id: "Bhagavatam Daan",
        title: "Bhagavatam Daan",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
            {
                id: "Srimad Bhagvatam Prachara - 18 volume set(English)",
                title: "Srimad Bhagvatam Prachara - 18 volume set(English)",
                description: "Contribute towards disseminating the knowledge contained in the Amalam Puranam, Srimad Bhagavatam and other Sastras for the ultimate benefit of all people.",
                amounts: [10000,20000,30000,50000],
                customAmountAllowed: false
            },
            {
                id: "Srimad Bhagvatam Prachara - 18 volume set(Hindi)",
                title: "Srimad Bhagvatam Prachara - 18 volume set(Hindi)",
                description: "Contribute towards disseminating the knowledge contained in the Amalam Puranam, Srimad Bhagavatam and other Sastras for the ultimate benefit of all people.",
                amounts: [8500,17000,25500,51000],
                customAmountAllowed: false
            }
        ]
      },
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
    id: " Youth Empowerment Seva",
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
    id: " Special Puja",
    title: " Special Puja",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
  },
  {
    id: " Festival Seva",
    title: " Festival Seva",
    subtitle: "",
    description: "",
    image: "/annadana.jpg",
    icon: "food",
    subCategories: [
      {
        id: "Sri Gaura Purnima",
        title: "Sri Gaura Purnima",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Poshak Seva",
            title: "Poshak Seva",
            description: "Of Their Lordships is adorned with gorgeous, new outfits and jewellery on the occasion of His appearance. Here is an opportunity to sponsor Vastra-Abharana Seva for Their Lordships.",
            amounts: [2500,5000,10000,15000,25000],
            customAmountAllowed: false
          },
          {
            id: "Abharan Seva",
            title: "Abharan Seva",
            description: "Of Their Lordships is adorned with gorgeous, new outfits and jewellery on the occasion of His appearance. Here is an opportunity to sponsor Vastra-Abharana Seva for Their Lordships",
            amounts: [2500,5000,10000,15000,25000],
            customAmountAllowed: false
          },
          {
            id: "Maha Abhisheka Seva",
            title: "Maha Abhisheka Seva",
            description: "A grand abhishekam is performed for Sri Sri Nitai Gauranga. Accompanied by the chanting of Vedic mantras the Lord is bathed with various auspicious items. Sponsor these various items for the pleasure of the Lord.",
            amounts: [3500,5001,11000,21000],
            customAmountAllowed: false
          },
          {
            id: "Pushpalankara Seva",
            title: "Pushpalankara Seva",
            description: "Donate towards decorating the temple hall & Altar with varities of flowers.Sponsor colourful and fragrant flowers to the lotus feet of Lord Chaitanya Mahaprabhu for this special Pushpalankara seva.",
            amounts: [1100,2100,5100],
            customAmountAllowed: false
          },
          {
            id: "Deity Garlands Seva",
            title: "Deity Garlands Seva",
            description: "Donate towards decorating the Deities of Sri Sri Gaura Nitai, Sri Sri Radha Krishnachnadra with beautiful flower garlands.",
            amounts: [1500,3000,5000],
            customAmountAllowed: false
          },
          {
            id: "Vishesha Naivedya Seva",
            title: "Vishesha Naivedya Seva",
            description: "Contribute towards the special naivedya offering made to Lord Chaitanya Mahaprabhu on this day.",
            amounts: [1100,2500,3500,5000],
            customAmountAllowed: false
          },
          {
            id: "Chappan Bhog Seva",
            title: "Chappan Bhog Seva",
            description: "Contribute towards the Chappan Bhog offering made to Lord Chaitanya Mahaprabhu on this day",
            amounts: [1500,2500,3500,5000],
            customAmountAllowed: false
          },
          {
            id: "Phal Seva",
            title: "Phal Seva",
            description: "Donate towards Abhishekam of Their Lordships Sri Sri Nitai Gauranga with fruits",
            amounts: [501,1000,1500,2000],
            customAmountAllowed: false
          },
          {
            id: "Tulasi Daan Seva",
            title: "Tulasi Daan Seva",
            description: "Donate towards Deity Worship with Tulasi",
            amounts: [251,501,1001,2000],
            customAmountAllowed: false
          },
          {
            id: "Annadana Seva",
            title: "Annadana Seva",
            description: "Sponsor the distribution of prasadam during this auspicious day in the name of your family or loved ones.",
            amounts: [501,1100,2100,5100,10000,15000],
            customAmountAllowed: false
          },
          {
            id: "Gau Seva",
            title: "Gau Seva",
            description: "Donate towards maintainence of cow",
            amounts: [750,1500,3000,5000,10000,15000],
            customAmountAllowed: false
          },
          {
            id: "Other Amount",
            title: "Other Amount",
            description: "Any amount of donation towards the festival is welcomed",
            amounts: [],
            customAmountAllowed: false
          },
        ]
      },
      {
        id: "Sri Rama Navami",
        title: "Sri Rama Navami",
        description: "",
        image: "/images/supplies.jpg",
        superSubCategories: [
          {
            id: "Vishesha Alankara Seva",
            title: "Vishesha Alankara Seva",
            description: "Of Their Lordships is adorned with gorgeous, new outfits and jewellery on the occasion of His appearance. Here is an opportunity to sponsor Vastra-Abharana Seva for Their Lordships.",
            amounts: [2500,5000,10000],
            customAmountAllowed: false
          },
          {
            id: "Rama Taraka Yagna Seva",
            title: "Rama Taraka Yagna Seva",
            description: "Donate towards Yagna of Sri Sri Sita Rama Laxman Hanuman",
            amounts: [3500,5000,10000],
            customAmountAllowed: false
          },
          {
            id: "Pushpalankara Seva",
            title: "Pushpalankara Seva",
            description: "Donate towards decorating the temple hall & Altar with varities of flowers.",
            amounts: [1100,2100,5100],
            customAmountAllowed: false
          },
        ]
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
