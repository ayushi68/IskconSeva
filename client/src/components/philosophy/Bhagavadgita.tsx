import React from "react";
import { motion } from "framer-motion";

const Bhagavadgita = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 min-h-screen px-6 md:px-24 py-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-purple-800 mb-10"
      >
        Bhagavad Gītā
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/70 shadow-xl rounded-2xl p-4 flex flex-col justify-between">
          <motion.img
            src="/bg1.jpg"
            alt="Krishna and Arjuna"
            className="rounded-xl mb-4 w-full h-74 object-cover"
            whileHover={{ scale: 1.03 }}
          />
          <p className="text-lg text-gray-800">
            In today’s fast moving World, very few people ponder over understanding the presence of soul, nature of soul, why are we unhappy, etc. Few others understand the <strong>Bhagavad Gīta</strong> has answers for this, but out of lack of time, the Gītā occupies a place in the book shelf. Unless one realizes that, what we consider enjoyment is only temporary and in the next moment unhappiness is about to unwrap and if he questions himself as to why he is suffering, then it is considered, Human brain has started to work. Humanity begins when this sort of inquiry is awakened in one’s mind. In the Brahma-sutra this inquiry is called brahma jijnasa. <strong>“Athato brahma jijnasa”</strong>. Every activity of the human being is to be considered a failure unless he inquires about the nature of the Absolute Truth.
          </p>
        </div>

        <div className="bg-white/70 shadow-xl rounded-2xl p-4 flex flex-col justify-between">
          <motion.img
            src="/bg2.png"
            alt="Srila Prabhupada"
            className="rounded-xl mb-4 w-full h-74 object-cover"
            whileHover={{ scale: 1.03 }}
          />
          <p className="text-lg text-gray-800">
            Srila Prabhupada, the Author of Bhagavad Gītā As It Is and the Founder Acharya of ISKCON, says:<br />
            As previously mentioned, this ignorance can be wiped out by reading Bhagavad Gītā, the purpose of which is to deliver mankind from the nescience of material existence. Every man is in difficulty in so many ways, and in the same way Arjuna also was in difficulty in having to fight in the battle of Kurukshetra. So Lord Krishna enlightened him with the knowledge of Bhagavad Gīta and prepared him to fight the battle. In actuality, Arjuna, is a devotee of Lord Krishna and he is perfect in knowledge, but, he just took up our position and requested Lord to enlighten him and wipe out the ignorance welling up in his heart due to attachment to his relatives.
          </p>
        </div>
      </div>

      <div className="bg-white/70 shadow-xl rounded-2xl p-4 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Bhagavad Gītā Mahātmya</h2>
          <p className="text-lg italic">
            ekaḿ śāstraḿ devakī-putra-gītam<br />
            eko devo devakī-putra eva<br />
            eko mantras tasya nāmāni yāni<br />
            karmāpy ekaḿ tasya devasya sevā
          </p>
          <p className="mt-4 text-lg text-gray-800">
            There need be only one holy scripture—the divine Gita sung by Lord Shri Krishna: only one worshipable Lord—Lord Shri Krishna: only one mantra—His holy names: and only one duty—devotional service unto that Supreme Worshipable Lord, Shri Krishna.
          </p>
        </motion.div>
      </div>

      <div className="bg-white/70 shadow-xl rounded-2xl p-4 mb-6">
        <p className="text-lg text-gray-800">
          “Bhagavad Gītā, is also known as Gitopaniśad. It is the essence of Vedic knowledge and one of the most important Upaniśads in Vedic Literature. Because Bhagavad Gīta is spoken by the Supreme Personality of Godhead, one need not read any other Vedic Literature. One need only attentively and regularly, hear and read Bhagavad Gītā”.  
        </p>
        <div className="my-4 h-px bg-gray-300" />
        <p className="text-lg text-gray-800">
          Lord Krishna descends specifically to reestablish Dharma, <b><u>dharma samsthāpanārthāya, saṃbhavāmi yuge yuge</u></b>. He mercifully made His friend Arjuna His student and then the Gītā Ganga came out. Even then, out of many, many human beings who awaken, there may be one who actually enters the spirit of understanding his position, and for him this Bhagavad-gita is spoken. Actually we are all swallowed by the tigress of nescience, but the Lord is very merciful upon living entities, especially human beings. 
        </p>
        <p className="mt-2">Arjuna accepted Krishna as Supreme Personality of Godhead.</p>
      </div>

      <div className="bg-white/70 shadow-xl rounded-2xl p-4 mb-6">
        <h3 className="text-xl font-semibold text-purple-700">Bhagavad Gītā 10.12–13</h3>
        <p className="italic mt-2">
          arjuna uvāca<br />
          paraṁ brahma paraṁ dhāma<br />
          pavitraṁ paramaṁ bhavān<br />
          puruṣaṁ śāśvataṁ divyam<br />
          ādi-devam ajaṁ vibhum<br />
          āhus tvām ṛṣayaḥ sarve<br />
          devarṣir nāradas tathā<br />
          asito devalo vyāsaḥ<br />
          svayaṁ caiva bravīṣi me
        </p>
        <p className="mt-2 text-gray-800">
          Arjuna said: You are the Supreme Personality of Godhead, the ultimate abode, the purest, the Absolute Truth. You are the eternal, transcendental, original person, the unborn, the greatest. All the great sages such as Nārada, Asita, Devala and Vyāsa confirm this truth about You, and now You Yourself are declaring it to me. 
        </p>
        <p className="mt-2 text-gray-800">
          Which means, the knowledge contained in Bhagavad Gītā is perfect and should be followed without any adulteration. Hence, after hearing it, Arjuna said:
        </p>
      </div>

      <div className="bg-white/70 shadow-xl rounded-2xl p-4 mb-6">
        <h3 className="text-xl font-semibold text-purple-700">Bhagavad Gītā 18.73</h3>
        <p className="italic mt-2">
          arjuna uvāca<br />
          naṣṭo mohaḥ smṛtir labdhā<br />
          tvat-prasādān mayācyuta<br />
          sthito ’smi gata-sandehaḥ<br />
          kariṣye vacanaṁ tava
        </p>
        <p className="mt-2 text-gray-800">
          Arjuna said: My dear Kṛṣṇa, O infallible one, my illusion is now gone. I have regained my memory by Your mercy. I am now firm and free from doubt and am prepared to act according to Your instructions.
        </p>
      </div>

      <div className="bg-white/70 shadow-xl rounded-2xl p-4 mb-6">
        <p className="text-lg text-gray-800">
          The Bhagavad-gita should be taken up in a spirit of devotion... Krishna drove Arjuna’s heart, removing ignorance.
        </p>
        <div className="my-4 h-px bg-gray-300" />
        <p className="text-lg text-gray-800">
          The Bhagavad-gita should be taken up in a spirit of devotion. With the statements given by Arjuna, one should accept Shri Krishna as the Supreme Personality of Godhead, and with that submissive spirit we can understand the Bhagavad-gita. Unless one reads the Bhagavad-gita in a submissive spirit, it is very difficult to understand Bhagavad-gita. 
          The Bhagavad-gita is universally renowned as the jewel of India's spiritual wisdom. This 700-verse nectar is the basic ingredient for the complete dish of Spiritual Philosophy. The very act of Krishna accepting the position of a Chariot driver for Arjuna is looked upon with great astonishment and is considered to be his causeless mercy to take up such a position. Hence, Krishna acted as a chariot driver of the chariot of Arjuna’s heart, in actuality, for our hearts and has cut down the knots of ignorance tied up by material illusion. 
        </p>
      </div>

      {/* Final two-column section with image and text side by side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <img
          src="/bg3.jpg"
          alt="Bhagavadgita"
          className="w-full md:w-1/2 h-auto rounded-lg shadow object-cover"
        />
        <div className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Importance Of Bhagavad-gītā As It Is</h2>
          <p className="font-medium text-green-700 italic">
            No other edition of Bhagavad Gītā has been given the title: Bhagavad-gītā As It Is. It is unique among all the Gita commentaries available both in India and Abroad as well. Its translations and purports are the work of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who represents a line of teachers in disciplic succession from Krishna Himself.
            Prabhupada's faithfulness to Krishna's teachings—and expertise in presenting them to western readers—make Bhagavad-gita As It Is true to its title. Since its publication in 1970, Bhagavad-gita As It Is has become the standard reference edition of the Gita worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bhagavadgita;
