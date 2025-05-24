import React from 'react';
import DonationForm from '../donation/DonationForm'; // adjust this path if needed

const Deepotsava = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/path-to-your-image/gaurapurnima.jpg"
              alt="Gaur Purnima Celebration"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
            Deepotsava Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>6TH SEPTEMBER 2023</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations would start from 7.30 PM onwards and will culminate with Sri Sri RadhaKrishna Maha Abhishek & Maha Arati.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>6TH SEPTEMBER 2023</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur.
                Celebrations would start from 7.30 PM onwards and will culminate with Sri Sri Radha
                Krishna Maha Abhishek & Maha Arati.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
            <p>
            Deepotsava, also known as the festival of lights, is celebrated in the month of Kartika (October – November) every year. It is a month-long festival commemorating Damodara-lila, the sweet pastime of baby Krishna stealing butter and consequently being tied to a mortar by His dear mother Yashoda. In Sanskrit, “dama” means rope and “udara” means belly. Damodara refers to Krishna who was bound with a rope by His mother Yashoda.
            </p>
            <p>
            This month is also known as Urja vrata. Urja means shakti and refers to Sri Krishna’s internal potency which is none other than Vrindavaneshwari Sri Radha, and thus she is the predominating deity of this month of Kartik, and the glorification of her transcendental name, fame, forms and qualities, is the main vrata to be performed in this month. This is the month when Sri Radha and the other sakhis sang the Gopi geet, which is truly relished by the elevated vaishnavas following the moods of the young damsels of Vraja, whose love for Krishna is unsurpassed, and the foremost of whom is Srimati Radhika. Aspiring to be the humble recipients of a single drop of the moods of separation of the Gopis and pleading to receive the dust of their lotus feet, the devotees all chant the Gopi geet in the Krishna hall after Damodarashtakam.
            </p>
            <p>
            This month is truly glorious not only due to the aforementioned reasons, but also because many prominent pleasing pastimes of the Lord were performed in this month of Kartik. The first day of the month, Sharad Purnima, is when the Sharad raas was performed and the desires of all the Gopis of Sri Krishna were fulfilled. In this month, the Gopis who had never before attained the direct audience of their worshipable Lord, their very life and soul Sri Krishna, were purified of all the traces of anarthas left in them by the intense heat of separation and were able to fulfill their long cherished heart’s desire to attain their one and only goal, the lotus feet of Sri Krishna.
            </p>
            <p>
            Blessed indeed is that fortunate soul, who, due to some past pious activities, can observe the month of Kartik in the most exalted of all holy places, Shri Vrindavan dham. This month, know as the month of Damodar, is most auspicious and truly benevolent, for the sukriti obtained by performing devotional activities for the pleasure of the Lords in this month is 1000 times more, than in any other time of the year. This month commemorates how mother Yashoda was able to bind the Supreme Personality of Godhead Shri Krishna with the ropes of her love and affection. The same Supreme Lord, whom neither Lord Brahma, nor Lord Shiva, and not even the Goddess of Fortune, Laxmi devi, can ever bind, was bound by the selfless pristine parental love of Mother Yashoda. It is in this very month, that Vrajendranandan displayed transcendental fear from his mother and was running from her trying to escape her punishment. After putting her own endeavor and receiving the mercy of the Lord, the two ingredients that a devotee needs in order to bind Shyamsundar, she tied Him up to a grinding mortar, taking which Shri Krishna later crawled to the Yamalarjun trees growing in the courtyard of Nanda Maharaj and delivered the two sons of Kuber, namely Nalakubera and Manigriva. Remembering this beautiful pastime, and hoping to one day be able to tie Damodar with their ropes of love, all the devotees offer ghee lamps in the evening and sing the beautiful Damodarashtakam, creating a very transcendentally surcharged atmosphere in the temple room of Krishna Balaram mandir, in the land of Vraja, the very place where these pastimes were manifested by Yashodanandan, five thousand years ago, to attract the minds of the conditioned souls of this material world and make them realize their eternal identity as the servants of Shri Krishna (Jivera svarupa haya Krishnera nitya-dasa).
            </p>
            <p>
                It is not possible to describe the glories of Kartika month. In this month devotees observe strict vows (Damodara Vrata) and worship Lord Damodara by offering a ghee lamp every day. It is said that by offering a lamp to Lord Hari in the month of Kartika one gets unlimited prosperity, beauty and wealth. All the sins committed in thousands and millions of births perish; and one attains the eternal spiritual world where there is no suffering.
            </p>
            <p>
            In this month, every day the temple is decorated with thousands of lamps. Light from hundreds of lamps placed before the altar spread transcendental radiance across the main temple hall, elevating the spirit of devotion. The grandeur with which the festivities are carried out captivates everyone’s realm of devotion.
            It was in this month that the demon Arishtasura was killed, which led to the appearance of Radha kund and Shyam kund, two beautiful kunds at the foot of the great Govardhan hill, having jeweled steps, blooming lotus flowers and surrounded by the kunjas of the eigth prominent Sakhis, and in the center Svanada sukhad kunja of ananga manjari where the divine couple perform many enchanting pastimes.
            </p>
            <p>
            The Amavasya of this auspicious month is celebrated as Dipavali, the festival of lights, celebrating the long awaited return of Lord Ram to his kingdom Ayodhya after the 14 years banishment and the war that waged between Ram and Ravan.
            </p>
            <p>
            This commemorates the return of Ramachandra to Ayodhya after He had conquered over Ravana and rescued Sita-devi. The Ramayana states:
            </p>
            <p>
            “Lord Ramachandra entered Ayodhya in the midst of a great festival. He was greeted on the road by the princely order, who showered his body with beautiful, fragrant flowers, while great personalities like Lord Brahma and other demigods glorified the activities of the Lord in great jubilation.
            Lord Rama was dressed up in royal style and was decorated with garlands and ornaments. Lord Rama mounted a lavishly decorated chariot and Bharata took up the reins, while Satrughna held the royal white umbrella. On either side stood Vibhishana and Lakshmana, waving a fan and a chamara. As Rama proceeded towards Ayodhya, a huge procession followed Him, while all the monkeys, appearing in human form, rode elephants. Men and women, children and the elderly gazed upon Rama as though they were getting back their lost lives. While waving their clothes and jumping with excitement, the people shouted, “ Our beloved prince has returned! All glories to Lord Rama, the maintainer of His devotees.”
            </p>
            <p>
            Other auspicious days celebrated in this month are the Dissappearnce day of our beloved spiritual master – Srila Prabhupada, the founder acharya of Worldwide Hare Krishna Movement, without whose mercy we would know nothing about this supremely purifying month.
            Devotees from all over the world goes to Vrindavan during this month to spiritually surcharge themselves so they may continue to preach Krishna Consciousness all over the world. They participate in Krishna katha, Deep daan, Singing of various Vaishnava bhajans, Kirtan and many other devotional activities for the satisfaction of Guru Gauranga and Krishna.
            In this month, every day the temple is decorated with thousands of lamps. Light from hundreds of lamps placed before the altar spread transcendental radiance across the main temple hall, elevating the spirit of devotion. The grandeur with which the festivities are carried out captivates everyone’s realm of devotion.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-green-700 mb-6">
            Support the Festival – Make a Donation
          </h2>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Deepotsava;
