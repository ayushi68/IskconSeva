import React from 'react';

const FamilyCorner: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Family Corner</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Soulful Sunday */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Soulful Sunday</h2>
          <p className="text-gray-700 mb-2">
            Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually for the rest of the week. In this family festival, you can look forward to participating in ecstatic devotional engagements.
          </p>
          <p className="text-gray-700 mb-2">
            Join us for the Sunday Love Feast at the temple every Sunday:<br />
            <strong>Morning Time:</strong> 7:30 am to 9:30 am<br />
            <strong>Evening Time:</strong> 6:45 pm to 9:15 pm
          </p>
          <p className="text-gray-700 mb-2">
            The Founder Acharya of the Hare Krishna Movement, Srila Prabhupada, started the “Sunday Love-Feast” Festival in the Western world. He would personally invite guests and prepare the entire meal. He would serve the devotees a variety of tasty Indian-vegetarian preparations. Along with the vegetarian feast, Srila Prabhupada would sing the Hare Krishna Maha-mantra with the guests, dance, and give a lecture on Srimad Bhagavatam & Bhagavad-Gita. Since then, this weekly Sunday Love Feast Festival is celebrated in all Hare Krishna temples around the world.
          </p>
          <p className="text-gray-700 mb-2">
            We extend a warm and hearty welcome to you, your friends, and family. Please join us at the temple with your family and friends and enjoy the atmosphere in the association of people interested in genuine spirituality and a meaningful life. Chant and dance with us, hear what Lord Krishna speaks in Srimad Bhagavatam & Bhagavad-Gita, ask questions about the philosophy and the devotional lifestyle, and taste the delicious vegetarian feast!
          </p>
          <p className="text-gray-700 mb-2">
            If you would like to sponsor a Sunday Love Feast (to commemorate a special occasion or celebration), please{' '}
            <button onClick={scrollToForm} className="text-blue-600 underline hover:text-blue-800">
              contact us
            </button>{' '}
            for more information.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Arati & Kirtan</h3>
          <p className="text-gray-700 mb-2">
            The most important activity of bhakti-yoga (Krishna Consciousness) in the modern age is Kirtan, or chanting the holy names of God. Kirtan is a group activity where people gather together for ecstatic congregational dancing and chanting of the Hare Krishna Mahamantra, accompanied by rhythmic instruments. During kirtan, devotees chant and dance in glorification of the Lord.
          </p>
          <p className="text-gray-700 mb-2">
            Aarti is a traditional ceremony in which various articles are offered to the Lord’s Deity form. According to the Vedic scriptures, the deity is the worshipful form of God, locally manifest so that the devotees can personally render some service to Him. The priest begins by blowing a conch-shell. The following items are offered: incense, ghee wick lamp, water, cloth, flowers, a chamara (whisk), and, in the summer, a peacock fan. These items represent the material elements in pure form. Aarti reminds us to offer everything in service to Lord Krishna.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Srimad Bhagavatam & Bhagavad Gita Class</h3>
          <p className="text-gray-700 mb-2">
            The Bhagavad Gita (“Song of God”) is the philosophical foundation of the Hare Krishna movement. Sung 5,000 years ago by Lord Krishna Himself, the Gita describes the difference between the body and the self; the relationship between the soul and Krishna; and the process of bhakti-yoga, devotional service, by which one attains full realization of the Lord as a tangible fact. A specific topic is discussed by the speaker and includes a Q&A session.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Vegetarian Feast</h3>
          <p className="text-gray-700 mb-2">
            A special free vegetarian feast, Prasadam (sanctified food that has been offered with love to Krishna, the Supreme Personality of Godhead), is served to everyone after the program.
          </p>
        </section>

        {/* Hare Krishna Satsang Program */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hare Krishna Satsang Program</h2>
          <p className="text-gray-700 mb-2">
            Satsang is the association of people who are searching for eternal truth. It is available at Hare Krishna Mandir or can also be arranged through the temple at the homes of devotees in your neighborhood. It is effective in motivating participants to give up habits detrimental to physical and spiritual growth and cultivate devotional habits with a sense of love for Krishna, which manifests itself in increased happiness and peacefulness. Congregation members and newcomers to the temple are encouraged to enroll for the program to start a new phase of spiritual awakening in one's life.
          </p>
          <p className="text-gray-700 mb-2">
            Hare Krishna Mandir conducts spiritual programs in the residences or community halls in the locality of interested members without taking any charges. The hosts invite their friends and neighbors to participate in the program to give them a spiritually enlivening experience. The key features of the program are bhajans & kirtans, Mantra meditation, Maha-arati, and prasadam.
          </p>
          <p className="text-gray-700 mb-2">
            It’s a weekly evening 2-hour program in various localities in Bhilai / Durg / Raipur city, replete with Bhajans & Kirtans, Hari-Katha Pravachan, Mantra Meditation, Maha-arati & delicious Prasadam.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Features:</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>One can experience the joy of Krishna-conscious communities.</li>
            <li>Learn practical application of Bhagavad Gita & other Vedic literatures in modern life.</li>
            <li>Systematic education in the science of Krishna consciousness is offered through VEDIC SCIENCE Sessions, Friend of Lord Krishna Sessions, giving deep insights into the devotional literatures.</li>
            <li>Maha-arati.</li>
          </ul>
        </section>

        {/* Family Preaching Service */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Family Preaching Service</h2>
          <p className="text-gray-700 mb-2">
            The family preaching program of the Hare Krishna Movement is called the “Krishna Ashraya Program,” meaning the program aimed at guiding people to pursue spiritual life and ultimately attain the topmost destination of life, the shelter of the Supreme Lord. Lord Chaitanya Mahaprabhu, the incarnation of the Supreme Lord, appeared in the fifteenth century to propagate to the masses the spiritual knowledge which was, until His descent, reserved for the handful of upper sections of society. He upheld the opinion that approaching God is not the prerogative of some caste or social division but is the fundamental right of every soul. Thus, He revolutionized the spiritual fervor of society at large by promoting the sankirtan movement (congregational chanting of the holy names of God).
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">10 Slogans for Congregation Devotees</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Pure devotional Service (Seva without any material motive) is the Foundation.</li>
            <li>Sacrifice for the propagation of mission.</li>
            <li>Respect the devotees, particularly the ones who dedicated themselves fully.</li>
            <li>Temple is not meant for politics, gossip, or exploitation.</li>
            <li>Temple is for Seva, contribution, and austerity.</li>
            <li>Temple Guests are our Guests and should be given all facilities and comfort.</li>
            <li>Spiritual life means no demands.</li>
            <li>Come to Temple for giving, not for taking.</li>
            <li>Daily Sadhana is key.</li>
            <li>Purity is the force.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            In order to take forward the message of Lord Chaitanya Mahaprabhu, we at Hare Krishna Movement Bhilai-Raipur have the following programs for families:
          </p>
        </section>

        {/* Srila Prabhupada Ashraya Program */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Srila Prabhupada Ashraya Program</h2>
          <p className="text-gray-700 mb-2">
            Srila Prabhupada Ashraya Program helps Krishnashraya members to practice the principles of Krishna consciousness as much as they can and then take up higher levels of spiritual commitments. Thus, they can make gradual spiritual progress in their life.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Krishnashraya Ceremony</h3>
          <p className="text-gray-700 mb-2">
            The following are the different levels of commitments and standards of devotional service that one can practice at home while carrying out one’s regular duties.
          </p>

          {/* Level 1 - Shraddhavan */}
          <h4 className="text-md font-semibold text-gray-800 mb-2">Level 1 - Shraddhavan</h4>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Chant minimum 1 round of Hare Krishna maha-mantra for one month or more.</li>
            <li>Should have completed reading “Beyond Birth & Death” book of Srila Prabhupada. Special classes will be conducted at our temple, and interested devotees can attend these sessions.</li>
            <li>Should read the teachings of Lord Krishna as given in the books of Srila Prabhupada.</li>
            <li>Should actively participate in Krishna Ashraya programs near home.</li>
            <li>Should learn Pranama Mantra of Srila Prabhupada & Tulasi Maharani.</li>
            <li>Should learn basic information about Lord Nityananda, Chaitanya Mahaprabhu & Srila Prabhupada.</li>
            <li>A test will be conducted to evaluate whether the above conditions have been satisfied, and based on the results of the test, the candidate will be categorized as “Srila Prabhupada’s Shraddhavan Devotee”.</li>
          </ul>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Commitments:</h5>
          <p className="text-gray-700 mb-2">
            I will fulfill the following standards of devotional service, and I shall receive the blessings of Sri Sri Radha Krishnachandra and Srila Prabhupada to practice Krishna Consciousness as a Shraddhavan:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Chant minimum 1 round of Hare Krishna maha-mantra daily without fail.</li>
            <li>Read Srila Prabhupada books minimum 20 pages in a month.</li>
            <li>Render a minimum of 2 hours of practical devotional service in the temple every month.</li>
            <li>Actively participate in Srila Prabhupada’s book distribution for at least 4 hours in every quarter (3 months) of the year.</li>
            <li>Become an active devotee in the temple’s congregation, visit the temple as often as possible, and participate and associate with Krishna Conscious programs in the temple.</li>
          </ul>
          <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">
            Register Here for Shraddhavan
          </button>

          {/* Level 2 - Sevaka */}
          <h4 className="text-md font-semibold text-gray-800 mb-2 mt-4">Level 2 - Sevaka</h4>
          <p className="text-gray-700 mb-2">
            Apart from satisfying all the conditions of “Shraddhavan”, one must further accept newer commitments as mentioned below.
          </p>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Followed commitments of Shraddhavan for three months or more.</li>
            <li>One must have read & understood Srila Prabhupada’s books, which includes books like “Beyond Birth and Death” & “The Matchless Gift”. Special classes will be conducted at our temple, and you can attend the sessions.</li>
            <li>Should be conversant with Narasimha Arati & Tulasi Arati Song.</li>
            <li>Should accept Sri Krishna as the Supreme Personality of Godhead.</li>
            <li>Should attend as many temple programs as possible.</li>
            <li>Should actively participate in Krishnashraya programs near home.</li>
            <li>Set up a simple altar at one’s home wherein pictures of RadhaKrishnachandra, Panchatattva & Srila Prabhupada are present.</li>
            <li>Should be dedicated to personal improvement in devotional practice and purity, by gradually applying the teachings of Srila Prabhupada under the guidance of his representatives.</li>
            <li>A test will be conducted to evaluate whether the above conditions and standards have been satisfied, and based on the results of the test, the candidate will be categorized as “Srila Prabhupada’s Sevaka Devotee”.</li>
          </ul>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Commitments:</h5>
          <p className="text-gray-700 mb-2">
            In addition to fulfilling the above-mentioned commitments of Sevaka, I will fulfill the following additional standards of devotional service and shall receive the blessings of Sri Sri Radha Krishnachandra to practice Krishna Consciousness as a Sevaka:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Chant minimum 4 rounds of Hare Krishna maha-mantra daily without fail.</li>
            <li>Read Srila Prabhupada books minimum 30 pages in a month.</li>
            <li>Render minimum 4 hours of practical devotional service every month.</li>
            <li>Actively participate in Srila Prabhupada’s book distribution for at least 8 hours in every quarter (3 months) of the year.</li>
          </ul>
          <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">
            Register Here for Sevaka
          </button>

          {/* Level 3 - Sadhaka */}
          <h4 className="text-md font-semibold text-gray-800 mb-2 mt-4">Level 3 - Sadhaka</h4>
          <p className="text-gray-700 mb-2">
            Apart from satisfying all the conditions of “Shraddhavan” and “Sevaka”, one must be willing to adopt and adhere to the following conditions and standards as mentioned below.
          </p>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Followed commitments of Sevaka for three months or more.</li>
            <li>One must read & understand Srila Prabhupada’s book “Science of Self-Realization”. Special classes will be conducted at our temple, and you can attend the sessions.</li>
            <li>Should learn to offer simple Arati (Dhupa, Dipa & Pushpa) to the deity pics placed on the altar at one’s residence every day.</li>
            <li>Should learn to offer Bhoga (food) offering to Lord (Use of onion & garlic should be totally avoided). In case of the devotee being unable to cook, then at least some water and fresh fruits can be offered and accepted as prasadam. Also, the food must not be tasted by anyone before offering.</li>
            <li>Should avoid eating non-vegetarian food.</li>
            <li>Should follow a daily basic sadhana program including rising early, chanting, a simple morning program consisting of one arati.</li>
            <li>Should actively participate and assist in preaching in Krishnashraya programs near home.</li>
            <li>Should learn Bhoga Offering mantra and Prasadam honoring mantra.</li>
            <li>Should learn Ten offenses to be avoided and Siksastakam.</li>
            <li>Must follow the four regulative principles of No Meat Eating, No Illicit Sex, No Gambling, and No Intoxication.</li>
            <li>A test will be conducted to evaluate whether the above standards and conditions have been satisfied, and based on the results of the test, the candidate will be categorized as “Srila Prabhupada Sadhaka Devotee”.</li>
          </ul>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Commitments:</h5>
          <p className="text-gray-700 mb-2">
            In addition to fulfilling the above-mentioned commitments of Sevaka, I will fulfill the following additional standards of devotional service and shall receive the blessings of Sri Sri Radha Krishnachandra to practice Krishna Consciousness as a Sadhaka:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Chant minimum 8 rounds of Hare Krishna maha-mantra daily without fail.</li>
            <li>Read Srila Prabhupada books minimum 45 pages in a month.</li>
            <li>Should avoid eating non-vegetarian food including eggs, fish, and meat.</li>
            <li>Must fast from grains & beans on Ekadashi as well as other Vaishnava festivals.</li>
            <li>Must learn to wear Tilak and, as far as possible, one wears the tilak.</li>
            <li>Should implement the Krishna Conscious practices at home.</li>
            <li>Should try to contribute regularly to the temple within his/her means.</li>
            <li>Should observe Ekadashi Vrata & Festival fasting.</li>
            <li>Render minimum 8 hours of practical devotional service every month.</li>
            <li>Actively participate in Srila Prabhupada’s book distribution for at least 12 hours in every quarter (3 months) of the year.</li>
          </ul>
          <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">
            Register Here for Sadhaka
          </button>

          {/* Level 4 - Upasaka */}
          <h4 className="text-md font-semibold text-gray-800 mb-2 mt-4">Level 4 - Upasaka</h4>
          <p className="text-gray-700 mb-2">
            Apart from satisfying all the conditions of “Shraddhavan”, “Sevaka”, and “Sadhaka”, one must be willing to adopt and adhere to the following conditions and standards as mentioned below.
          </p>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Followed commitments of Sadhaka for three months or more.</li>
            <li>One must read & understand Srila Prabhupada’s book “Bhagavad Gita As It Is” and “Krishna - The Supreme Personality of Godhead”. Special classes will be conducted at our temple, and you can attend the sessions.</li>
            <li>Must perform at least one or two full Arati (along with Dhupa, Dipa, Arghya, Vastra, Puspa, Chamara & Vyanjana) and Srila Prabhupada Guru Puja & attending/hearing Srimad Bhagavatam Class on a daily basis. This is exempted if the devotee comes to the temple and attends the Arati in the temple.</li>
            <li>Must wake up every day before 5 am in the morning.</li>
            <li>Must honour only prasadam except in unavoidable circumstances (like while travelling or during some emergency).</li>
            <li>Must give up worship of all kinds of Demigods.</li>
            <li>Should actively participate and assist in preaching in Krishnashraya programs near home.</li>
            <li>Must implement the Krishna Conscious practices at home.</li>
            <li>Must surrender exclusively to Srila Prabhupada & must be willing to accept Srila Prabhupada as Spiritual Master and his teachings as final.</li>
            <li>Must also render some practical service in the temple at least once a week as well as during festivals or as per the instructions and guidance of the temple authority.</li>
            <li>A test will be conducted to evaluate whether the above conditions have been satisfied, and based on the results of the test, the candidate will be categorized as “Srila Prabhupada Upasaka”.</li>
          </ul>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Commitments:</h5>
          <p className="text-gray-700 mb-2">
            In addition to fulfilling the above-mentioned commitments of Sevaka, I will fulfill the following additional standards of devotional service and shall receive the blessings of Sri Sri Radha Krishnachandra to practice Krishna Consciousness as an Upasaka:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Chant minimum 16 rounds of Hare Krishna maha-mantra daily without fail.</li>
            <li>Read Srila Prabhupada books minimum 60 pages in a month.</li>
            <li>Should follow the regulative principles “No illicit sex” and “No gambling” as instructed by Srila Prabhupada.</li>
            <li>Should follow a daily sadhana program including rising early, chanting, a simple morning program consisting of one arati followed by Guru Puja and Srimad Bhagavatam Classes.</li>
            <li>Should implement the Krishna Conscious practices at home.</li>
            <li>Should observe Festival fasting apart from Ekadashi vrata.</li>
            <li>Should avoid all intoxicants including Coffee & Tea.</li>
            <li>Should avoid all kinds of Non-vegetarian food including Onion & Garlic.</li>
            <li>Should wear Kanthi Mala.</li>
            <li>Grihasta and employed singles: Should contribute to the temple on a regular basis according to one’s means.</li>
            <li>Should attend as many temple programs as possible.</li>
            <li>Should actively participate and take the lead role as preacher in Krishna Ashraya programs near home.</li>
            <li>Render minimum 16 hours of practical devotional service every month.</li>
            <li>Actively participate in Srila Prabhupada’s book distribution for at least 16 hours in every quarter (3 months) of the year.</li>
          </ul>
          <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">
            Register Here for Upasaka
          </button>

          {/* Level 5 - Harinaam Diksha */}
          <h4 className="text-md font-semibold text-gray-800 mb-2 mt-4">Level 5 - Harinaam Diksha</h4>
          <p className="text-gray-700 mb-2">
            One must maintain the standards of Srila Prabhupada Upasaka for a minimum of one year, satisfying all the conditions of “Shraddhavan”, “Sevaka”, “Sadhaka”, and “Upasaka” strictly for a minimum period of one year. Subsequently, the interested candidates must be in constant touch with temple devotees, seeking their guidance to progress spiritually, and must also render practical service in the temple and/or any other form of service as guided by the temple authorities.
          </p>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Followed commitments of Upasaka for six months or more.</li>
            <li>Should have completed reading “Bhagavad Gita As It Is” and “Krishna - The Supreme Personality of Godhead” and “Srila Prabhupada” (abridged biography by SDG).</li>
            <li>Should follow the four regulative principles as instructed by Srila Prabhupada - i.e., no meat eating (including onion & garlic), no intoxication (including coffee & tea), no gambling, and no illicit connection with men/women.</li>
            <li>Should rise early in the morning to complete the sadhana of chanting, one arati, Guru puja, and attending/hearing Srimad Bhagavatam class.</li>
            <li>A test will be conducted to evaluate whether the above conditions have been satisfied, and based on the results of the test, the candidate will be categorized as “Harinaam Diksha”.</li>
          </ul>
          <h5 className="text-sm font-semibold text-gray-700 mb-1">Commitments:</h5>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>All commitments of Upasaka.</li>
            <li>Chant minimum 16 rounds of Hare Krishna maha-mantra daily without fail.</li>
            <li>Should follow a daily sadhana program including rising early, chanting, a simple morning program consisting of one arati, & attending/hearing Srimad Bhagavatam class.</li>
            <li>Must perform Srila Prabhupada Guru Puja every day.</li>
            <li>Read Srila Prabhupada books minimum 60-75 pages in a month.</li>
            <li>Should implement the Krishna Conscious practices at home.</li>
            <li>Should fast on Ekadashi and festival days.</li>
            <li>Should contribute regularly to the temple within their means.</li>
            <li>Must wear Kanthi Mala.</li>
            <li>Should attend as many temple programs as possible.</li>
            <li>Should actively participate and take the lead role as preacher in Krishna Ashraya programs near home.</li>
            <li>Read Srila Prabhupada books minimum 60 pages in a month.</li>
            <li>Render minimum 20 hours of practical devotional service in the temple every month.</li>
            <li>Actively participate in Srila Prabhupada’s book distribution for at least 20 hours in every quarter (3 months) of the year.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            Subsequent to this process, the temple authority will conduct a detailed personal interview, and based on the judgment of the temple president, the candidate will be recommended for “Srila Prabhupada Harinam Diksha”.
          </p>
          <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">
            Register Here for Harinaam Diksha
          </button>
        </section>

        {/* Dham Yatra */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Dham Yatra</h2>
          <p className="text-gray-700 mb-2">
            Join us for the following Dham Yatra programs:<br />
            -{' '}
            <a
              href="https://docs.google.com/document/d/1emi5Hk24lQtMULhvwjxWMMMK3Ppf0lmczsd0mmMWshQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Jagannath Puri Mayapur Yatra
            </a>
            <br />
            -{' '}
            <a
              href="https://docs.google.com/document/d/1l2Dlntxs6V-4vRdF6Ct5i6EccJPbkMk5exgZDYIcTsQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Kartik Vrindavan Dham Yatra
            </a>
          </p>
        </section>

        {/* Nagar Sankirtana */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Nagar Sankirtana</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-2">
            “I offer my respectful obeisances unto the Supreme Lord, Hari, the congregational chanting of whose holy names destroys all sinful reactions, and the offering of obeisances unto whom relieves all material suffering.”<br />
            (Śrimad Bhāgavatam 12.13.23)
          </blockquote>
          <p className="text-gray-700 mb-2">
            Gone are the days when “Hari Katha” was a major evening occupation for rich and poor, young and old, men and women alike. Fortunate is this twentieth generation humanity, by the Grace and Prophecy of Lord Sri Chaitanya, our ears and minds are purified by the transcendental chant “Hare Krishna…”.
          </p>
          <p className="text-gray-700 mb-2">
            As said in the above verse and as Krishna says to Arjuna in Bhagavad Gīta 10.25, <em>yajñānāṁ japa-yajño ’smi</em> (Of sacrifices I am the chanting of the holy names [japa]), the Harinām Sankīrtan should be done regularly to wipe out violence/hatred etc. among the people and establish a peaceful society.
          </p>
          <p className="text-gray-700 mb-2">
            Prabhupada often said: “Sankīrtana is our life and soul, and if we execute this transcendental business in all earnestness, then there will be no difficulty in any way.” (Letter to Harernama written from Los Angeles)
          </p>
          <p className="text-gray-700 mb-2">
            When a group of devotees goes on the streets of a town or village and loudly sings the holy names of the Lord to the accompaniment of mrdangas and karatals, that is called Nagar Sankirtana. Lord Caitanya Mahaprabhu, who is Krishna Himself, the supreme personality of Godhead, personally propagated Sankirtana. For Kali Yuga, the śāstras enjoin that saṅkīrtana-yajña be performed always: <em>kīrtanīyaḥ sadā hariḥ</em>.
          </p>
          <p className="text-gray-700 mb-2">
            Why don’t you be a part of it and enjoy the transcendental fruit of this chanting? Let your friends and family also partake in this joy.
          </p>
          <p className="text-gray-700 mb-2">
            For arranging a Nagar Sankirtan in your apartment/colony/locality, please{' '}
            <button onClick={scrollToForm} className="text-blue-600 underline hover:text-blue-800">
              contact us
            </button>{' '}
            at: +91-97550 98615.
          </p>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
          <h3 className="text-lg font-medium text-gray-800 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Your Name*</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Phone*</label>
              <input type="tel" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Phone" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Email*</label>
              <input type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Program of Interest*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Soulful Sunday</option>
                <option>Hare Krishna Satsang Program</option>
                <option>Krishna Ashraya Program</option>
                <option>Srila Prabhupada Ashraya Program - Shraddhavan</option>
                <option>Srila Prabhupada Ashraya Program - Sevaka</option>
                <option>Srila Prabhupada Ashraya Program - Sadhaka</option>
                <option>Srila Prabhupada Ashraya Program - Upasaka</option>
                <option>Srila Prabhupada Ashraya Program - Harinaam Diksha</option>
                <option>Dham Yatra - Jagannath Puri Mayapur Yatra</option>
                <option>Dham Yatra - Kartik Vrindavan Dham Yatra</option>
                <option>Nagar Sankirtana</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message...</label>
              <textarea className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4} placeholder="Message..."></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              SEND MESSAGE
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 Family Corner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FamilyCorner;