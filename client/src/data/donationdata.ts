export interface FeaturedDonation {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  bgColor: string;
  hasSubDonations?: boolean; // New field to indicate if it has sub-donations
  subDonations?: FeaturedDonation[]; // Array of sub-donations
  subDonationsDescription?: string;
  detailedInfo: {
    heading: string;
    content: string[];
    quote?: {
      text: string;
      author: string;
    };
    activities?: string[];
    importantPoints?: string[];
    image?: string;
  };
}

export const featuredDonations: FeaturedDonation[] = [
  {
    id: "Annadana Seva",
    title: "Annadana Seva",
    image: "/Activity/annadana_seva_01.jpg",
    description: "",
    link: "/Annadana",
    bgColor: "from-rose-400 to-purple-600",
    detailedInfo: {
      heading: "Annadana Seva Categories",
      content: [
        "Annadana Seva is a sacred and revered practice in Sanatana Dharma, where devotees offer food to the needy as an act of charity and compassion. The term 'Annadana' translates to 'food donation,' and it is considered one of the highest forms of service in Hinduism. This practice not only nourishes the body but also uplifts the soul, fostering a sense of community and connection among people.",
      ]
    }
  },
  {
    id: "Gaushala",
    title: "Gaushala",
    image: "/Activity/gaushala_02.jpg",
    description: "",
    link: "/Gaushala",
    bgColor: "from-amber-400 to-orange-600",
    detailedInfo: {
      heading: "Gaushala Categories",
      content: [
        "Gaushala, or cow shelter, is a sacred institution in Sanatana Dharma that plays a vital role in the preservation and care of cows. In Hinduism, cows are revered as sacred animals, symbolizing purity, motherhood, and selfless giving. The practice of maintaining a Gaushala is not only an act of compassion towards these gentle beings but also a way to uphold the values of sustainability and environmental stewardship.",
      ],
    }
  },
  {
    id: "Nitya Seva",
    title: "Nitya Seva of Sri Lordship: A Path of Eternal Devotion",
    image: "/nityaseva.jpg",
    description: "In the tradition of Sanatana Dharma, the practice of Nitya Seva (daily service) to the Divine Lord holds immense spiritual significance. When it comes to Nitya Seva, this sacred duty involves daily offerings and rituals performed with utmost reverence and love for the Lord, ensuring that the deities in our temples are honored and cared for at all times.",
    link: "/Nityaseva",
    bgColor: "from-blue-400 to-indigo-600",
    detailedInfo: {
      heading: "What is Nitya Seva?",
      content: [
        "Nitya Seva, is the wonderful opportunity to serve and reciprocate the Love, Lord showers on us. In this, donors like YOU, would generously contribute for the daily services to the Lord.Benefits of Offering Nitya Seva:","pūjādīnāṁ pravāhārthaṁ mahā-parvasv athānv-aham Kṣetrāpaṇa-pura-grāmān dattvā mat-sārṣṭitām iyāt One who offers the Deity gifts of land, markets, cities and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own","“sv-alpam apy asya dharmasya trāyate mahato bhayāt.”  a little advancement on this path can protect one from the most dangerous type of fear”. Krsna is himself promising that he would protect the one who serves him. Your charity will purify you from the karmic reactions." ,"Your generosity would help upkeep spiritual practices for the benefit of Humanity.","Becoming a Nitya sevak ensures that our service to God and society keeps on going smoothly every day.","All Nitya sevaks become our regular patrons, thus they receive regular updates of various programs at the temple."
      ],
      quote: {
        text: "The Importance of Nitya Seva",
        author: "In Vedic scriptures, the concept of Seva is deeply emphasized as a way of expressing love and surrender to the Supreme Being. The Bhagavad Gita (Chapter 9, Verse 26) highlights this through Lord Krishna's words:",
      },
      activities: [
        "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati, tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
        "If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it",
        "This verse captures the essence of Nitya Seva, reminding us that it is not the grandeur of offerings that matter, but the love and devotion with which they are given. The continuous performance of the rituals ensures that the divine presence remains vibrant and active in the temple and within our hearts.",
        "The Srimad Bhagavatam (1.2.8) further explains the benefits of such service:",
        "dharmaḥ svanuṣṭhitaḥ puṁsāṁ viṣvaksena-kathāsu yaḥ,notpādayed yadi ratiṁ śrama eva hi kevalam",
        "The occupational activities a man performs according to his position are only so much useless labor if they do not provoke attraction for the message of the Supreme Lord.",
        "This points to the importance of performing our duties with an intention to serve the Supreme. Nitya Seva is one such sacred duty, offering us the chance to purify our hearts, develop divine qualities, and deepen our connection with the Lord.",
        "In Katha Upanisad(2.2.13), it is stated :",
        "nityo nityānāṁ cetanaś cetanānām,eko bahūnāṁ yo vidadhāti kāmān",
        "There are innumerable eternal living entities who are eternally and totally dependent upon the supreme singular living entity, the Supreme Lord. The Lord is eternally independent, and we are eternally dependent",
        "Lord Krishna out of his causeless mercy, takes care of an ant, even an elephant and of course, We who are eternally totally dependent on him for all our needs."
      ],
    }
  },
  {
    id: "Sri Vigraha Seva",
    title: "Sri Vigraha Seva (Deity Worship): An Ancient Practice of Devotion",
    image: "/vigraha.jpg",
    description: "Vigraha Seva, or Deity worship, holds a significant place in the tradition of Sanatana Dharma. It is the practice of honouring and serving a sanctified image or form of a deity, believed to personify divine presence. This is the most pious practices aimed at connecting with the Supreme Personality and Srimati Radharani in the utmost personal way. ",
    link: "/Vigrahaseva",
    bgColor: "from-teal-400 to-emerald-600",
    hasSubDonations: true,
    subDonations: [
      {
        id: "Deity Bhoga Seva",
        title: "Deity Bhoga Seva",
        image: "breakfast-image.jpg",
        description: "",
        link: "#donate-breakfast",
        bgColor: "from-yellow-400 to-orange-500",
        detailedInfo: {
          heading: "Deity Seva Categories",
          content: ["Deity Bhoga Seva is a sacred practice in which devotees offer food to the deity as an act of devotion and service. This practice is rooted in the belief that the deity, or vigraha, is a living embodiment of the divine, and offering food to the deity is a way to nourish and honor the divine presence.",],
        }
      },
      {
        id: "Arati Seva",
        title: "Arati Seva",
        image: "lunch-image.jpg",
        description: "",
        link: "#donate-lunch",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Arati Seva",
          content: ["Arati Seva is a beautiful and essential aspect of Deity worship, where devotees offer light to the deity in a ceremonial manner. This practice symbolizes the removal of darkness and ignorance, allowing the divine light to illuminate the hearts of the devotees.",],
        },
    },
    {
        id: "Deity Seva",
        title: "Deity Seva",
        image: "lunch-image.jpg",
        description: "",
        link: "#donate-lunch",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Deity Seva",
          content: ["Deity Seva is the practice of serving and worshiping the deity in a temple or home. This involves various activities such as dressing the deity, offering food, performing arati (waving of lights), and singing devotional songs. Deity Seva is a way for devotees to express their love and devotion to the divine.",],
        }
      }
    ],
    detailedInfo: {
      heading: "",
      content: ["Vigraha Seva is a practice that has been followed for centuries, with its roots deeply embedded in the Vedic scriptures. The Bhagavad Gita (Chapter 9, Verse 26) emphasizes the importance of offerings made to the deity:"],
    }
  },
  {
    id: "Radharani’s Kitchen Seva",
    title: "Radharani’s Kitchen Seva",
    image: "/Radharani",
    description: "Srila Bhaktivinode Thakura an eminent Vaishnava saint writes in the Bhoga Arati as:râdhikâra pakka anna vividha byañjana,parama ânande krishna korena bhojana ",
    link: "#donate-section",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "Radha-Rani's Kitchen",
      content: [
        "In great ecstasy and joy, Krishna eats the rice, curried vegetables, sweets and pastries cooked by Srimati Radharani.","Krishna is pleased when He honors foodstuffs prepared by his devotees. The best among them being Srimati Radharani, Krishna is most pleased when she prepares food for him.","Radharani, once had the opportunity to please Durvasa Muni with a delicious preparation of sweet rice. Durvasa Muni relished its nectarean taste and thus blessed her as, “Radha, may the grains You cook taste sweeter than nectar and may anyone who eats them be blessed with a long life span”. ","Thus, Mother Yasoda, invited Srimati Radharani to cook for Krishna as this would nourish Him physically with good health and he would taste nectar.","Pastimes of Vrindavana say that Radharani has never cooked a dish twice. Such an adorable skilled cook Radharani was, and of course, the best devotee.","Every kitchen where foodstuffs are cooked for the Deities is a representation of the kitchen of Radharani. Seeking her blessings to cook delectable food for Krishna, is a must for all devotees. ","You can also be a part of this great service to the Divine Couple by donating for Radharanis’s Kitchen Seva. Each pie of your donation would add up to the delicacies being prepared to please Krishna and what you get in return is manifold." ,"Come forward and join your hands to join the party of Srimati Radharani, to please Krishna!!","For more details and donation, please contact:9755098615"
      ],
    }
  },
  {
    id: "Rajbhog Seva",
    title: "Raj Bhog Seva: Offering Nourishment to the Divine",
    image: "/radharani.jpg",
    description: "Bhog Seva, the offering of food to the deity, is a key aspect of Deity worship in Sanatana Dharma. This sacred tradition embodies the heart of devotion—offering what we have with love and gratitude to the Supreme Being. In the form of Bhog Seva, devotees present food to the deity, believing that through this offering, they are not only nourishing the physical form of the Lord but also receiving His divine blessings in turn.",
    link: "/Rajbhog",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "The Spiritual Significance of Rajbhog Seva",
      content: [
        "In Vedic culture, food is considered a gift from God, and offering it back to Him is an act of gratitude and devotion. The deity, or vigraha, is viewed as the living embodiment of the Divine, and Bhog Seva is a way to serve and nourish the Lord. The food offered becomes prasadam—sanctified food that is imbued with the deity's grace and compassion. Consuming prasadam purifies the mind and heart, and it is said to free one from sins.","Bhog Seva is not just an act of feeding the Lord in a ritualistic sense. It is an intimate and loving interaction between the devotee and the Supreme. The Lord, though self-sufficient, graciously accepts the offering made with love and devotion. It is said that even the simplest offering, if made with sincerity, pleases the Lord.","In the Bhagavad Gita (9.26), Lord Krishna explains the essence of Bhog Seva: "," Patram pushpam phalam toyam yo me bhaktyā prayacchati,Tad aham bhakty-upahritam asnāmi prayatātmanah","If one offers Me with love and devotion a leaf, a flower, fruit, or water, I will accept it.","This verse reveals that it is not the opulence of the offering that matters, but the love and devotion with which it is given. The Lord, who is self-sufficient, accepts even the simplest of offerings when they are made with a pure heart.","Similarly, the Srimad Bhagavatam (10.81.4) describes the story of Sudama, a poor Brahmin who offered Lord Krishna a handful of flat rice. Despite the humble nature of the offering, Krishna accepted it with great delight, demonstrating that devotion is the most important ingredient in Bhog Seva." ,"In the Padma Purana (Uttara Khanda 9.37), it is stated:","One who offers food to the deity with devotion will never suffer from hunger, nor will they be deprived of life's necessities. The Lord, pleased by the offering, blesses the devotee with all that is needed.","This verse affirms the spiritual and material benefits of Bhog Seva. By serving the Lord through food offerings, the devotee not only earns spiritual merit but also ensures their own sustenance and well-being.","The Practice of Rajbhog Seva","Bhog Seva is performed daily in temples and homes, following specific guidelines laid down by the scriptures. The offering is made with clean, freshly prepared food that is free from impurities. The food must be vegetarian and cooked with a sense of devotion, keeping the Lord in mind throughout the preparation.","Before offering the food, it is placed before the deity on a clean plate, and prayers are recited to invoke the Lord's presence and to ask Him to accept the offering. The devotee remains in a humble state of mind, knowing that the Lord's acceptance of the offering is a great blessing.","The Blessings of Prasadam","After the offering is made, the food becomes prasadam, sanctified by the Lord’s touch. Prasadam is not ordinary food—it carries the divine energy and blessings of the deity. By consuming prasadam, the devotee is spiritually uplifted, and their material desires are gradually purified.","The Chaitanya Charitamrita (Antya 16.60) glorifies prasadam as follows:","Maha-prasade govinde, nama-brahmani vaisnave,Svalpa-punya-vatam rajan visvaso naiva jayate.","In the mercy of prasadam, the Supreme Lord, the holy name, and the devotees, only those with a small amount of pious credits have difficulty understanding the true value of these.","This verse illustrates the profound spiritual value of prasadam and the mercy it carries. It is through prasadam that devotees receive the grace of the Lord, which helps them advance on the spiritual path.","According to  Chandogya Upanishad 7.26.2","ahara-suddhau sattva-suddhih sattva-suddhau,dhruva smrtih smrti-lambhe sarva-granthinam vipra-moksah","By performance of yajna, one's eatables become sanctified, and by eating sanctified foodstuffs, one's very existence becomes purified; by the purification of existence, finer tissues in the memory become sanctified, and when memory is sanctified, one can think of the path of liberation, and all these combined together lead to Krsna consciousness, the great necessity of present-day society.","Out of causeless love, Krishna provides us with all the necessities and in gratitude if we offer him with love and devotion a little of foodstuff, he is very much pleased. His pleasure would shower upon us blessings and prosperity.","The Shastras reveal that Lord has to be served food utilizing grains, ghee, milk, vegetables, sugar, yogurt etc which should be prepared with love and sanctity. ","All the standards being followed to the best possible in HKM Bhilai, you have a special opportunity to offer your gratitude to the lord through this special seva, Rajbhog seva.","The Rajbhog offered to the  omnipotent lord is an array of choicest delicacies. Avail this great opportunity to please the lord by serving Rajbhog and deepen your love for Him.","Call to Support Rajbhog Seva","Maintaining the tradition of Bhog Seva requires great care and resources, especially in temples where multiple offerings are made daily. The preparation of fresh, high-quality food offerings, along with the maintenance of the temple kitchen and facilities, requires the support of the community.","We humbly invite you to participate in this sacred service by offering your support for Bhog Seva. Your donations help us maintain the quality and regularity of food offerings to the deity, ensuring that the Lord is properly served and that prasadam is available to all devotees.","To support Bhog Seva, you can make a donation by visiting our website or contacting the temple office. Together, let us continue this age-old tradition of nourishing the Lord with love and devotion, and receive His infinite blessings","For more details and donations, please contact:"
      ],
      
    }
  },
  {
    id: "General Donation",
    title: "General Donation",
    image: "/radharani.jpg",
    description: "",
    link: "/Generaldonation",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "",
      content: [
        "In the tradition of Sanatana Dharma, the act of giving is considered a sacred duty and a means to purify one's heart and soul. Donations, or 'dāna,' are seen as a way to express gratitude for the blessings received from the divine and to support the community and its spiritual endeavors.",
      ],
    }
  },
  {
    id: "Offline Donation",
    title: "Offline Donation",
    image: "/radharani.jpg",
    description: "",
    link: "/Offlinedonation",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "Bhagavad-gītā 9.34",
      content: [
        "The Bhagavad-gītā (9.34) states:","man-manā bhava mad-bhakto","mad-yājī māṁ namaskuru","mām evaiṣyasi yuktvaivam","ātmānaṁ mat-parāyaṇaḥ"
      ],
      
    }
  },
  {
    id: "Become a Life Patron",
    title: "Become a Life Patron(Corpus Donation Seva)",
    image: "/radharani.jpg",
    description: "One who offers the Deity gifts of land, markets, cities and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own.",
    link: "/Corpusdonation",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "Śrīmad-Bhāgavatam 11.27.51",
      content: [
        "pūjādīnāṁ pravāhārthaṁ","mahā-parvasv athānv-aham","kṣetrāpaṇa-pura-grāmān","dattvā mat-sārṣṭitām iyāt","Whatever goes into that spiritual bank account is never lost even, at the time of death",
        "Srila Prabhupada, brought the system of “Life Patrons” in Iskcon Temples, to make the members stay connected to the Temple and its activities. In a nutshell, the members are the ones who carry forward the Krishna Conscious movement by chanting, doing sankīrtan, conducting satsang programs, participating in various festivals and propagating about it.  Members will be availing many benefits like, special invitations for festivals, stay in our centers across India for three days with minimal expenses, Srimad Bhagavatam and other books written by Srila Prabhupada etc. On special days of your choice, saṇkalpa and archana to Their Lordships will be conducted in your name.","There is only welfare and satisfaction in serving Krishna and no loss at all. Take to this transcendental seva and be blessed by Divine mercy.","For more details and donations, please contact:"
      ],
    }
  },
  {
    id: "Special Seva",
    title: "Special Seva",
    image: "/vigraha.jpg",
    description: "",
    link: "/Specialseva",
    bgColor: "from-teal-400 to-emerald-600",
    hasSubDonations: true,
    subDonations: [
      {
        id: "Sadhu Seva",
        title: "Sadhu Seva",
        image: "breakfast-image.jpg",
        description: "",
        link: "/Sadhuseva",
        bgColor: "from-yellow-400 to-orange-500",
        detailedInfo: {
          heading: "gopī-bhartuḥ pada-kamalayor dāsa-dāsānudāsaḥ",
          content: ["I identify Myself only as the servant of the servant of the servant of the lotus feet of Lord Śrī Kṛṣṇa, the maintainer of the gopis.","Lord Sri Chaitanya Mahaprabhu, hereby stresses the importance of being a servant of the sadhus who are the devotees of Lord Krishna.","Srila Prabhupada often says: “A sādhu is described in Bhagavad-gītā as one who unflinchingly engages in devotional service. If one simply has unflinching faith in Kṛṣṇa, the Supreme Person, he is understood to be a sādhu","Such sadhus help us in spiritual advancement, by cutting the strong material knots. The knowledge we gain from them can't be repaid. Caring for such sadhus helps us attract Lord Krishna’s attention, as said by Lord Chaitanya.","Sādhu (“good man”) and sādhvī (“good woman”) are Sanskrit terms which refer to those who have chosen to renounce worldly life in order to focus on their own spiritual practices and also help others overcome this ocean of material grief.","Sadhus living an austere life, need helping hands for their survival. HKM Bhilai is giving you the opportunity to serve the sadhus. Donating to sadhus opens the path to blessings in abundance. Donate profusely and adore the pleasure of giving.","For more details and donations, please contact:","gopī-bhartuḥ pada-kamalayor dāsa-dāsānudāsaḥ","I am not the master, nor the controller, nor even an independent devotee—I am simply the servant of the servant of the servant of the lotus feet of Lord Krishna,the beloved maintainer of the gopis.","This profound statement by Lord Sri Chaitanya Mahaprabhu highlights the true path to spiritual greatness—humble service to the pure devotees of the Lord.","The Power of Serving Sadhus","Lord Chaitanya emphasized that the fastest way to reach Krishna is by serving His dear devotees, the sādhus—those who have given up worldly pursuits to live a life of purity, wisdom, and compassion.","As Srila Prabhupada explains:","A sādhu is one who unflinchingly engages in devotional service to Krishna. Simply by having strong faith in the Lord, one is considered a true saint.","Such sadhus guide us on the spiritual path, helping to untie the deep knots of material attachment. Their wisdom, guidance, and blessings are beyond value. We cannot repay them—but we can honor them through service","What Is Sadhu Seva? Sadhu seva—also known as Vaishnava seva—means to lovingly support those great souls who live simply, yet work tirelessly to uplift others spiritually. These devotees, living in humility and austerity, rely on the support of kind-hearted people for their basic needs. By serving and supporting sadhus, we not only show gratitude but also attract the merciful glance of Lord Krishna Himself.","Join Hands with HKM Bhilai",
            "HKM Bhilai offers you a sacred opportunity to participate in sadhu seva by supporting saintly devotees and spiritual teachers who dedicate their lives to spreading Krishna consciousness.Your donations help provide for their daily needs, sustain their simple lives, and honor their unmatched service.In return, you receive abundant blessings and the joy of giving to those who give everything for Krishna.Embrace the spirit of giving. Support sadhu seva. Receive divine blessings.For more details or to contribute"],
        }
      },
      {
        id: "Ekadashi Seva",
        title: "Ekadashi Seva",
        image: "lunch-image.jpg",
        description: "",
        link: "/Ekadashiseva",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Ekadashi Seva",
          content: ["Ekadashi Seva is a sacred practice in Sanatana Dharma, where devotees observe the day of Ekadashi with fasting and devotion to Lord Vishnu. Ekadashi, the eleventh day of the lunar fortnight, is considered highly auspicious for spiritual practices and is dedicated to the worship of Lord Vishnu. Observing Ekadashi with devotion and offering food to the deity is believed to purify the mind and soul, bringing one closer to the divine."],
        },
    },
    {
        id: "Gyaan Daan Seva",
        title: "Gyaan Daan Seva",
        image: "lunch-image.jpg",
        description: "",
        link: "/Gyaandaan",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Gyaan Daan Seva",
          content: ["We are submerged in a dark ocean of skyscraper buildings, factories, addictions, war and ultimately unhappiness and alas! We don’t even know it. ","But one man in his seventies, surviving two massive heart attacks, single handedly, held the torch up high and spread its light everywhere. He lives forever in his books. ","Yes, it's the fearless warrior of Lord Sri Krishna, His Divine Grace A. C. Bhaktivedanta Swami Prabhupada about whom we are talking. ","His mission (as ordered by his Spiritual Master HDG Srila Bhaktisiddhanta Saraswati Thakur) was to translate the magnanimous Indian Vedic texts into English and deliver to the Western World, thus to spread the teachings of Sri Chaitanya, beyond the borders of India. Books and books only occupied his trunk on his journey to America and those trunkful books have transformed hundreds and thousands of people from various walks of life into Krishna Conscious happy living entities.","In this modern Godless civilization, everyone is greatly suffering due to lack of the real knowledge of Krishna consciousness, and our task is very great and very important. We must deliver this pure science of God to everyone and give them the chance to make their lives successful","Book distribution is solid. Even if they do not read, simply by touching they are benefited. It is so much powerful","Prabhupada’s books and his strong statements with proof from The Scriptures have transformed the hearts of many atheistic people also. His books have obtained worldwide recognition from scientists to scholars, philosophers to philanthropists and continue to gain an unending reputation. Here’s an example:","I am impressed with how much the teachings of one man and the spiritual tradition he brought impacted themselves into the lives of so many people. In my view Srila Prabhupada’s contribution is a very important one and will be a lasting one… This life of Srila Prabhupada is pointed proof that one can be a transmitter of truth and still be a vital and singular person.  At what almost anyone would consider a very advanced age, when most people would be resting on their laurels, he harkened to the mandate of his own spiritual teacher and set out on the difficult voyage to America. Srila Prabhupada is one in a thousand, maybe one in a million.","And now consider, if you would be a part of this global network of knowledge and help the poor souls come out of the pangs of an illusioned material web, what a blessing would that be!","At HKM Bhilai, books are being distributed since a long time which have impacted many to dedicate their lives for the cause of spreading Krishna Consciousness. You could be a reader, a book distributor or you can even choose to let us distribute the books freely by your generous donations. Feel free to drop in and find out more!"],
        }
    },
    {
        id: "Gita Daan Seva",
        title: "Gita Daan Seva",
        image: "lunch-image.jpg",
        description: "gita su-gita kartavya, kim anyaih shastra-vistaraih,ya svayam padmanabhasya, mukha-padmad vinihsrita",
        link: "/GitaDaan",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Gita Daan Seva",
          content: ["Because Bhagavad-gita is spoken by the Supreme Personality of Godhead, one need not read any other Vedic literature. One need only attentively and regularly hear and read Bhagavad-gita. In the present age, people are so absorbed in mundane activities that it is not possible for them to read all the Vedic literatures. But this is not necessary. This one book, Bhagavad-gita, will suffice, because it is the essence of all Vedic literatures and especially because it is spoken by the Supreme Personality of Godhead.","I have made the Bhagavad Gita as the source of my inspiration and guide for the purpose of scientific investigation and formation of my theories","What more needs to be said about the importance of reading  Bhagavad Gita. Thinking over what it would be like to gift the gita? Here’s what Krishna says: “For one who explains this supreme secret to the devotees, pure devotional service is guaranteed, and at the end he will come back to Me","Presenting Bhagavad Gita as a gift, saves the recipient from falling down and deep into the dark well of material existence. The benefits are immense both for the donor and the recipient. There is no flip side to donating the Gita.The timeless wisdom of Gita, presented with undeviated explanation by Srila Prabhupada, has transformed millions of people’s lives all over the world . People are battling with problems in this material world due to their lack of  intellectual knowledge. Save a crying soul, by giving this Bhagavad Gita. Help a person rekindle his wisdom and improve his personality by giving this Bhagavad Git.Even a minor contribution from your earnings can help us serve society by imparting knowledge and understanding."],
        }
      },
      {
        id: "Bhagavatam Daan",
        title: "Bhagavatam Daan",
        image: "lunch-image.jpg",
        description: "Just as the Gaṅgā is the greatest of all rivers, Lord Acyuta the supreme among deities and Lord Śambhu [Śiva] the greatest of Vaiṣṇavas, so Śrīmad-Bhāgavatam is the greatest of all Puranas.",
        link: "/Bhagavatam",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Bhagavatam Daan",
          content: ["Enlightening less privileged people with the gift of transcendental knowledge present in Srimad Bhagavatam could help them cut down the knots of repeated birth and death, giving them the actual peace in life. When such a great literature is given in charity, the fruits just double up for the giver and the receiver of course begins a new life with Spiritual Value to it.","Often Prabhupada says: “There is no literature throughout the universe like Śrīmad-Bhāgavatam. There is no comparison. There is no competition. Every word is for the good of human society. Every word, each and every word","So, for all your gifting purposes, give a thought of presenting Srimad Bhagavatam, the Amalam Puranam to your loved ones","For more details and donations please contact:"],
        }
      },
      {
        id: "Sri Narasimha Yajna Seva",
        title: "Sri Narasimha Yajna Seva",
        image: "lunch-image.jpg",
        description: "",
        link: "/SriNarasimha",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Sri Narasimha Yajna Seva",
          content: [],
        }
      },
      {
        id: "Maha Sudarshana Narasimha Yajna Seva",
        title: "Maha Sudarshana Narasimha Yajna Seva",
        image: "lunch-image.jpg",
        description: "",
        link: "/Mahanarasimha",
        bgColor: "from-red-400 to-pink-500",
        detailedInfo: {
          heading: "Maha Sudarshana Narasimha Yajna Seva",
          content: [],
        }
      }
    ],
    detailedInfo: {
      heading: "",
      content: [],
    }
  },
  {
    id: "Youth Empowerment Seva",
    title: "Youth Empowerment Seva",
    image: "/radharani.jpg",
    description: "",
    link: "/Youthempowerment",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "Youth Empowerment Seva",
      content: [
        "Today’s youth are the Leaders, Teachers, Guides of tomorrow, of the Future. It’s quite a big responsibility in the hands of the parents, teachers and of course the Spiritual Institutions to instill in them the strong roots of our Vedic culture, knowledge and practices","Overburdened by the educational demands and stress of rejection in peer groups, getting attracted to unnecessary culture has become their way of life. To disentangle their webs of addiction, to free them from a dependent life and to make them understand the truth, eternity and bliss of Spiritual life, we await your support and helping hands.","Tasting the higher taste of Spiritual life, the Youth would eagerly turn towards Spirituality finding inner peace and joy, more promising than the illusory momentary happiness.","Weekly Character development programs for Youth: This would involve an understanding of the  magnificient behavior of characters from our timeless Scriptures and Pastimes.","Spiritual Library For Youth: Young minds always hanker for knowledge of different things and when their inquisitiveness is given a right direction, certainly they will accept it.","Monthly Youth Empowerment Camps: Spreading the youth programs far and wide, we took this initiative of conducting monthly Spiritual camps to enlighten and empower the youth.","Annual Educational Trips for Youth: Exploring the Historic, pilgrimage places of India, youth would have a great time deepening their understanding of Spiritual Science and enjoying the blissful pastimes of Lord and his devotees.","Extend your helping hands to brighten the future of tomorrow's India.For more details and donations, please contact:"
      ],
    }
  },
  {
    id: "Special Puja",
    title: "Special Puja",
    image: "/radharani.jpg",
    description: "",
    link: "#donate-section",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "Special Puja",
      content: [
        "Puja is a sacred ritual in Sanatana Dharma, where devotees offer prayers, flowers, incense, and food to the deity. It is a way to express devotion and seek blessings from the divine. Special Puja involves performing elaborate rituals with specific intentions, such as seeking health, prosperity, or spiritual growth.",
        "In the Bhagavad Gita (Chapter 9, Verse 26), Lord Krishna states:","patram pushpam phalam toyam yo me bhaktya prayacchati, tad aham bhakty-upahritam asnami prayatatmanah","If one offers Me with love and devotion a leaf, a flower, fruit, or water, I will accept it.","This verse emphasizes that the intention and devotion behind the offering are more important than the material value of the offering. Special Puja is an opportunity for devotees to express their love and devotion to the deity through elaborate rituals and offerings.",
      ],
    }
  },
  {
    id: "Festival Seva",
    title: "Festival Seva",
    image: "/radharani.jpg",
    description: "",
    link: "/Festival",
    bgColor: "from-fuchsia-500 to-pink-600",
    detailedInfo: {
      heading: "Festival Seva",
      content: [
        "Observe many festivals that will keep both public and devotees alive. Temple means festivals and Festivals means chanting and distribution of Prasadam","Prabhupada stressed on conducting many festivals, as it enlivens the temple atmosphere and makes everyone jubilantly sing and dance. There are many festivals in the GaudiyaVaishnava calendar of which the most important ones are: Sri Krishna Janmashtami, Vyasa Pūja, Gaura Pūrnima, etc. It seems that for Krishna devotees, every day is a festival.","The Spiritual discourses, myriad of colorful altar decorations, flower garlands, multi-course food feasts, elaborate offerings of Arati and Abhishek, Kīrtans, etc bring in transcendental joy which barely anything of this world could give.","Prabhupada says: “taking part in these festivals means a step forward for our self-realization. Although you don’t understand what the festival is about, simply if you take part in these three things, chanting, dancing, and taking part in eating the prasādam, your life will gradually progress in spiritual advancement”.","To make these festivals jubilant and colorful, there is a need for all of us to join together and conduct it successfully.","By your generous donations, volunteering services, etc, you can help the Temple conduct the festival on a grand scale.","Utsava means “pleasure.” Whenever some function takes place to express happiness, it is called utsava. Utsava, the expression of complete happiness, is always present, uninterrupted in the Vaikuṇṭhalokas, the abode of the Lord, who is worshipable even by demigods like Brahmā”.","So let’s join in all the festivals here, so that we are always Krishna Conscious and finally join the eternal festivities…","For details and donations, please contact:"
      ],
    }
  },
];