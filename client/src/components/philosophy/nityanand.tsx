// app/nityanand.tsx or components/Nityanand.tsx

import React from "react";

const Nityanand = () => {
  return (
    <main className="flex-1 p-10">
      <div className="max-w-5xl mx-auto text-justify">
        {/* Title */}
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Avadhuta Acharya</h1>
        <p className="text-lg font-semibold text-gray-800 mb-6">
        Lord Nityananda
        </p>

        {/* Verse and Image Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src="/np2.jpg"
            alt="Sri Nityananda Prabhu"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <div className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">CC Ādi 1.2</h2>
            <p className="font-medium text-green-700 italic mb-4">
              vande śrī-kṛṣṇa-caitanya-nityānandau sahoditau<br />
              gauḍodaye puṣpavantau citrau śan-dau tamo-nudau
            </p>
            <p className="text-gray-700">
              <strong>Translation:</strong> I offer my respectful obeisances unto Śrī Kṛṣṇa Caitanya and Lord Nityānanda, who are like the sun and moon. They have arisen simultaneously on the horizon of Gauḍa to dissipate the darkness of ignorance and thus wonderfully bestow benediction upon all.
            </p>
          </div>
        </div>

        {/* Introduction Paragraph */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Who is Lord Nityananda?</h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Lord Nityananda is the eternal associate of Sri Chaitanya Mahaprabhu who is the Supreme Personality of Godhead. He is the second body of the Lord, manifesting as Balarama to Sri Krishna; Lakshmana to Sri Rama and Nityananda Prabhu to Chaitanya Mahaprabhu.<br />
                The Chaitanya Charitamrita Ādi 5.9, states that: Lord Nityānanda Balarāma is the favorite associate of Lord Caitanya. Chaitanya Mahaprabhu cannot be approached or understood without the mercy of Nityananda Prabhu. With the mood of an avadhuta and a deep melodious voice, he constantly sings the glories of Sri Krishna and carries a red stick with benedictions for the devotees, but feared by the demoniac.
                </p>
            </div>
            {/* 📸 Image */}
            <img
            src="/np3.jpg"
            alt="Nityananda Prabhu"
            className="rounded-xl shadow-lg mb-10 w-full md:w-2/3 lg:w-1/2 max-h-[480px] object-cover mx-auto"
            />
        </div>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Birth and Childhood Pastimes: </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Nityananda Prabhu was born in Ekachakra, a small village in present West Bengal, around the year 1474 to a pious brahmanical couple Hadai Ojha and Padmavati. His birth site is commemorated by a temple named Garbhavasa and is visited by pilgrims even today. <br />
        Nityananda Prabhu was born on the auspicious thirteenth day (trayodashi) of the bright fortnight of the month of Magha. As a child, Nitai loved to enact the pastimes of Sri Krishna and Sri Rama.
        On one occasion, one of the boys dressed as Akrura, took Krishna and Balarama away from Vrindavana on the order of Kamsa. Nitai cried in grief, feeling the separation of the cowherd girls from Krishna. Tears of love flowed from His eyes. His acting was so authentic that it made all who watched question whether He was merely acting or in some way experiencing the part He played. This was true whether He was playing Krishna, Balarama, or even Vamana and other Incarnations of the Lord. When questioned, Nitai would respond: "These are My own divine pastimes, and I am allowing you to see them."
        Among His most convincing roles was that of Lakshmana, brother of Rama, which intimated His divine identity as Balarama. For His first twelve years, Nityananda Prabhu stayed in Ekachakra and shared loving pastimes with His neighbors.<br /> 
        </p>

        <img
          src="/np4.jpg"
          alt="Early Life"
          className="rounded-xl shadow-lg mb-10 w-full max-h-[480px] object-cover"
        />

        {/* Section 2 */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Uniting With Chaitanya Mahaprabhu:</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Before uniting with Lord Chaitanya in 1506, Nityananda toured extensively with a sannyasi who was overjoyed to see Little Nitai’s devotion. Nityananda Prabhu was always in a trance-like state of devotion although the travel. <br /> 
        Finally, Nityananda Prabhu reached the land of Nadiya, where Chaitanya Mahaprabhu resided. When the two Lords saw each other for the first time, they were immediately overtaken by waves of ecstasy. Nitai was roughly thirty-two years old, and Mahaprabhu was twenty. They each felt that their lives were now perfectly complete. Embracing, they cried what seemed like rivers of ecstasy.<br /> 
        Each of them revered the other as Spiritual Master and as Lord Chaitanya was trying to do Vyasa Pooja worship ceremony to Lord Nityananda, Nityananda Prabhu protested and grabbed all of the worship articles from Mahaprabhu and worshiped Him instead. Nityananda Prabhu kept repeating, "Nimai Pandita [Mahaprabhu] is my Lord and master! Nimai Pandita is my Lord and master!" There was constant competition as to who would serve whom. Their transcendental love for one another is indescribable.<br /> 
        </p>

        <img
          src="/np5.jpg"
          alt="Meeting Mahaprabhu"
          className="rounded-xl shadow-lg mb-10 w-full max-h-[480px] object-cover"
        />

        <h2 className="text-3xl font-bold text-purple-800 mb-4">Spreading the Sankirtana Movement</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">After accepting Sannyasa and touring South India Lord Chaitanya returned to Jagannath Puri and was satisfied to see the Sankīrtana movement spread rapidly by Lord Nityananda’s efforts. He sent Lord Nityananda,His most reliable sankirtana commander,  to Bengal to preach there.<br />
        In Bengal, Lord Nityananda, began His mission in Panihati, a village north of Calcutta which turned quite successful with many thousands joining the movement. At this time, the famous Panihati Chida Dahi Utsav Pastime took place, giving the young Raghunath Das, a wealthy young boy trying to join Lord Chaitanya’s Movement, the Blessings of Lord Nityananda. Lord Nityananda asked him to hold a huge festival in which all the devotees could have as much yogurt and chipped rice as they desired. <br />
        Villages like Panihati, Varahanagara and many others on both sides of Bhagirathi River, were vibrating with the Holy Names of the Lord.<br />
        Lord Nityananda Prabhu viewed all souls equally and spread Mahaprabhu's teachings lovingly to everyone He met. The perfect example for this is his preaching in the Village of saptagrama, where the villagers were considered outcastes and untouchables  by Hindu Standards.<br /></p>

        <div className="flex flex-col md:flex-row gap-6 mb-10"> 
            <img
            src="/np6.jpg"
            alt="Mercy"
            className="rounded-xl shadow-lg mb-10 w-full md:w-2/3 lg:w-1/2 max-h-[480px] object-cover mx-auto"
            />

            <div className="w-full md:w-1/2">
            {/* Section 3 */}
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            In Chaitanya Charitamrita The Author Krishnadas Kaviraja Goswami, although exalted devotee, considers himself lowly and writes: Who in this world but Nityānanda could show His mercy to such an abominable person as me? He delivers all those who fall down before Him. Therefore He has delivered such a sinful and fallen person as me. Because He is intoxicated by ecstatic love and is an incarnation of mercy, He does not distinguish between the good and the bad. <br />
            Buddhists, householders, untouchables,  everyone were resonating to the vibration of Lord’s Holy Names. Villages like Shantipur, Navadvipa, Khardaha, Thanajora, Baragachi, Dogachia, Fulia were all drowning in the overflowing Ganges of Harinām Sankīrtan where Lord Nityananda went door-to-door, begging people to join Lord Chaitanya’s Mission. <br />
            </p>
            </div>

        </div>

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">The Liberation of Jagai and Madhai</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Lord Nityananda’s mercy knew no bounds. Here's an enduring  story.<br />
        To spread the message of Love of God to every home in Navadvipa, the stalwart devotees, Lord Nityananda and Haridasa Thakura were chosen by Mahaprabhu. They went door-to-door preaching this Gospel. It was at this point that Nityananda and Haridasa met the two sinful brothers Jagai and Madhai. Though descendants of an illustrious priestly dynasty, yet they have abandoned the pious ways of their forefathers for a life of debauchery. When the two emissaries of Mahaprabhu's mercy first met them, Jagai and Madhai were in a drunken stupor, creating havoc throughout the village. Nityananda felt compassion on these fallen souls and reasoned that if they could be rectified, then Mahaprabhu's mission would become even more well received in Navadvipa. Approaching the two wayward brothers on the street, Nitai out of his causeless mercy, begged them to chant the holy name of Krishna and to taste the sweet nectar of Krishna Consciousness. But the two villains just chased Nityananda down the road, shouting profanities and calling Him foul names. One of the sinful duo, Madhai threw a broken clay pot that came crashing down on Nityananda's divine head, causing Him to bleed. (Although Nityananda's body is perfectly spiritual, He manifested this pastime so that Jagai and Madhai could attain liberation.)
        When Mahaprabhu heard what had happened, He became infuriated and rushed to the area Himself. How could anyone harm a gentle soul like Nityananda? Summoning His divine disk-like weapon Sudarśana, which is flaming and radiant, Mahaprabhu was prepared to kill the two repellent brothers on the spot, forcing them to taste the wrath of God. <br />

        His anger, however, was assuaged by Nityananda Prabhu, who reminded the Lord that the majority of people in this age are as fallen as Jagai and Madhai, and that it is His mission to liberate them with love, not violence. Hearing these words, Mahaprabhu was willing to forgive Jagai. But Madhai, who had perpetrated the evil deed, needed to be forgiven by Nityananda Prabhu Himself. Nityananda Prabhu's mercy knows no bounds, and He quickly forgave Madhai for all that he had done.
        When Jagai and Madhai saw the loving exchange between Mahaprabhu and Nityananda and observed Nityananda's forgiving nature toward them, their hearts were changed. They resolved to become devotees and enthusiastic supporters of Mahaprabhu's sankirtana mission. Seeing their sincerity, Mahaprabhu took all of their sins on His own head. For a few brief moments, His beautiful golden body turned an unsightly blackish color. 
        Indeed, when Yamaraja's assistant Chitragupta tried to tally Jagai and Madhai's collective sins, he could not do so, and collapsed from exhaustion. After the incident with Nitai, however, Jagai and Madhai set the highest standard of devotional service by constantly chanting the holy names of Krishna and instructing others in devotion to Him.<br />
        </p>

        <img
          src="/np7.jpg"
          alt="Mercy"
          className="rounded-xl shadow-lg mb-10 w-full max-h-[480px] object-cover"
        />

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Household Life and Final Pastimes:</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Jahnava and Vasudha,the two daughters of Suryadasa Sarakhel were great devotees and Lord Nityananda  married them. As qualified girls who felt great affection for Nityananda Prabhu, they were chosen to marry Him, and He, in turn, reciprocated their affection. After some time Vasudha gave birth to two children, a boy named Virabhadra and a girl named Ganga-devi. Virabhadra later became a great leader in the Vaishnava community and continued to spread Lord Chaitanya's teachings in the mood of His distinguished father. However, soon after the birth of her two divine children, Vasudha passed away, and Jahnava vowed to raise them as her own.<br />
        Jahnava Devi, a superlative Vaishnava, initiated her son Virabhadra as well as many other male and female members of the Vaishnava community. Major figures in Mahaprabhu's lineage took shelter at her lotus feet, and personalities like Narottama Dasa Thakura, Srinivasa Acarya, and Syamananda Prabhu accepted her as the most prominent Vaishnava in Bengal. In Ekachakra, not far from his birthplace, Nityananda Prabhu established a deity of Lord Krishna known as Bankima Raya, accompanied on the right by a deity of Jahnava Devi, and on the left, Srimati Radharani. The priests of this temple say that Nityananda Prabhu merged into the form of Bankima Raya to leave the earth for His eternal pastimes in the spiritual sky.<br /> 

        In the transcendental book Chaitanya Charitamrita, the biographer Srila Krishnadasa Kaviraja Goswami describes Lord Nityananda as The one whose glories and transcendental attributes are unfathomable. Even Lord Śeṣa, with His thousands of mouths, cannot find their limit. (CC Ādi 5.234)<br />

        Narottama dasa Thakura advises that if one actually wants to enter into the dancing party of Radha-Krishna, he must accept the shelter of the lotus feet of <b>Lord Nityananda</b><br />
        </p>

        {/* Final Words */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Srila Krishnadasa Kaviraja glorifies Him repeatedly in Caitanya Caritamrita, saying, <strong>"If you want the mercy of Gauranga, you must first receive the mercy of Nityananda."</strong> He is the original spiritual master, the divine servant of the Lord who extends a helping hand to every conditioned soul.
        </p>

        
      </div>
    </main>
  );
};

export default Nityanand;
