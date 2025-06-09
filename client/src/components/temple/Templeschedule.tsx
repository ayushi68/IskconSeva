import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Clock, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScheduleItem {
  question: string;
  answer: string;
}

const scheduleData: ScheduleItem[] = [
  {
    question: "04:30 am - 04:50 am : Darshan Open : Mangala Arati",
    answer: `
Sri Gurvashtakam 
Eight Prayers to the Guru by Srila Visvanatha Cakravarti Thakura

(1)
saḿsāra-dāvānala-līḍha-loka-
trāṇāya kāruṇya-ghanāghanatvam
prāptasya kalyāṇa-guṇārṇavasya
vande guroḥ śrī-caraṇāravindam

The spiritual master is receiving benediction from the ocean of mercy. Just as a cloud pours water on a forest fire to extinguish it, so the spiritual master delivers the materially afflicted world by extinguishing the blazing fire of material existence. I offer my respectful obeisances unto the lotus feet of such a spiritual master, who is an ocean of auspicious qualities.

(2)
mahāprabhoḥ kīrtana-nṛtya-gīta-
vāditra-mādyan-manaso rasena
romāṣca -kampāśru-tarańga-bhājo
vande guroḥ śrī-caraṇāravindam

Chanting the holy name, dancing in ecstasy, singing, and playing musical instruments, the spiritual master is always gladdened by the sankirtana movement of Lord Caitanya Mahaprabhu. Because he is relishing the mellows of pure devotion within his mind, sometimes his hair stands on end, he feels quivering in his body, and tears flow from his eyes like waves. I offer my respectful obeisances unto the lotus feet of such a spiritual master.

(3)
śrī-vigrahārādhana-nitya-nānā-
śṛńgāra-tan-mandira-mārjanādau
yuktasya bhaktāḿś ca niyuṣjato 'pi
vande guroḥ śrī-caraṇāravindam

The spiritual master is always engaged in the temple worship of Sri Sri Radha and Krsna. He also engages his disciples in such worship. They dress the Deities in beautiful clothes and ornaments, clean Their temple, and perform other similar worship of the Lord. I offer my respectful obeisances unto the lotus feet of such a spiritual master.

(4)
catur-vidha-śrī-bhagavat-prasāda-
svādv-anna-tṛptān hari-bhakta-sańghān
kṛtvaiva tṛptiḿ bhajataḥ sadaiva
vande guroḥ śrī-caraṇāravindam

The spiritual master is always offering Krsna four kinds of delicious food [analyzed as that which is licked, chewed, drunk, and sucked]. When the spiritual master sees that the devotees are satisfied by eating bhagavat-prasada, he is satisfied. I offer my respectful obeisances unto the lotus feet of such a spiritual master.

(5)
śrī-rādhikā-mādhavayor apāra-
mādhurya-līlā guṇa-rūpa-nāmnām
prati-kṣaṇāsvādana-lolupasya
vande guroḥ śrī-caraṇāravindam

The spiritual master is always eager to hear and chant about the unlimited conjugal pastimes of Radhika and Madhava, and Their qualities, names, and forms. The spiritual master aspires to relish these at every moment. I offer my respectful obeisances unto the lotus feet of such a spiritual master.

(6)
nikuṣja-yūno rati-keli-siddhyai
yā yālibhir yuktir apekṣaṇīyā
tatrāti-dākṣyād ati-vallabhasya
vande guroḥ śrī-caraṇāravindam

The spiritual master is very dear, because he is expert in assisting the gopis, who at different times make different tasteful arrangements for the perfection of Radha and Krsna's conjugal loving affairs within the groves of Vrndavana. I offer my most humble obeisances unto the lotus feet of such a spiritual master.

(7)
sākṣād-dharitvena samasta-śāstrair
uktas tathā bhāvyata eva sadbhiḥ
kintu prabhor yaḥ priya eva tasya
vande guroḥ śrī-caraṇāravindam

The spiritual master is to be honored as much as the Supreme Lord, because he is the most confidential servitor of the Lord. This is acknowledged in all revealed scriptures and followed by all authorities. Therefore I offer my respectful obeisances unto the lotus feet of such a spiritual master, who is a bona fide representative of Sri Hari [Krsna].

(8)
yasya prasādād bhagavat-prasādo
yasyāprasādān na gatiḥ kuto 'pi
dhyāyan stuvaḿs tasya yaśas tri-sandhyaḿ
vande guroḥ śrī-caraṇāravindam

By the mercy of the spiritual master one receives the benediction of Krsna. Without the grace of the spiritual master, one cannot make any advancement. Therefore, I should always remember and praise the spiritual master. At least three times a day I should offer my respectful obeisances unto the lotus feet of my spiritual master.

Srila Prabhupada Pranam Mantra

nama oḿ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale
śrīmate bhaktivedānta-svāmin iti nāmine

namas te sārasvate deve gaura-vāṇī-pracāriṇe
nirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe

I offer my respectful obeisances unto His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda, who is very dear to Lord Kṛṣṇa, having taken shelter at His lotus feet.

Our respectful obeisances are unto you, O spiritual master, servant of Sarasvatī Gosvāmī. You are kindly preaching the message of Lord Caitanyadeva and delivering the Western countries, which are filled with impersonalism and voidism.

Pancha Tattva Mantra

śrī-kṛṣṇa-caitanya
prabhu-nityānanda
śrī-advaita gadādhara
śrīvāsādi-gaura-bhakta-vṛnda

I offer my respectful obeisances unto Sri Caitanya Mahaprabhu, Lord Nityananda, Sri Advaita, Gadadhara Pandit, Srivas Thakur, and all the devotees of Lord Caitanya. (A devotee humbly offering obeisances and begging forgiveness for any unintentional offences that may be committed while chanting the Hare Krishna Mahā-mantra)

HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)

Prema-dhvani Prayers
(Someone says these prayers after the arati, while everyone joins in with the “Jaya” at the end of each line. This is a very basic rendition, while additional lines and obeisances to other personalities and holy places can be said as well.)

jaya oṁ viṣṇu-pāda paramahaṁsa parivrājakācārya aṣṭottara-śata śrī śrīmad a.c. bhaktivedānta svāmī mahārāja prabhupāda—kī jaya.

(108 glories to the wandering mendicant and topmost swanlike devotee, the great preceptor His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, who has taken shelter at the feet of Lord Viṣṇu)

jaya oṁ viṣṇu-pāda paramahaṁsa parivrājakācārya aṣṭottara-śata śrī śrīmad bhaktisiddhānta sarasvatī gosvāmī mahārāja prabhupāda—kī jaya.

Jaya Oṁ viṣṇu-pāda paramahaṁsa parivrājakācārya aṣṭottara-śata Śrī Śrīmad His Divine grace A C Bhaktivedānta Svāmī Prabhupāda-kī Jaya.

ISKCON saṃsthāpaka ācārya, saviour of the whole world jagad-guru Śrīla Prabhupāda-kī Jaya.

Jaya oṁ viṣṇu-pāda paramahaṁsa parivrājakācārya aṣṭottara-śata Śrī Śrīmad His Divine grace Bhaktisiddhānta Sarasvatī ṭhākura Śrīla Prabhupāda-kī Jaya.

Jaya om viṣṇu-pāda paramahaṁsa nitya-līlā-praviṣṭa His Divine grace gaurakiśora dāsa bābājī mahārāja-kī Jaya.

Jaya oṁ viṣṇu-pāda paramahaṁsa nitya-līlā-praviṣṭa His Divine grace Saccidānanda bhaktivinoda ṭhākura-kī Jaya.

Jaya oṁ viṣṇu-pāda paramahaṁsa nitya-līlā-praviṣṭa His Divine grace Jagannātha dāsa bābājī mahārāja-kī Jaya.

(108 glories to the wandering mendicant and topmost swanlike devotee, the great preceptor His Divine Grace Srila Bhaktisiddhānta Sarasvatī Gosvami Maharaja Prabhupada, who has taken shelter at the feet of Lord Viṣṇu)

ananta koṭi vaiṣṇava-vṛnda—kī jaya.

(All glories to the unlimited millions of Vaiṣṇavas.)

nāmācārya śrīla haridāsa ṭhākura—kī jaya.

(All glories to the Nāmācārya Śrīla Haridāsa Ṭhākura.)

ISKCON-Founder-Ācārya Śrīla Prabhupāda—kī jaya.

(All glories to Śrīla Prabhupāda, the Founder-Ācārya of the International Society for Kṛṣṇa Consciousness.)

prem-se kaho śrī-kṛṣṇa-caitanya prabhu nityānanda śrī advaita, gadādhara, śrīvāsādi gaura-bhakta-vṛnda—kī jaya.

(Call out with love the names Śrī Kṛṣṇa Caitanya, Prabhu Nityānanda, Śrī Advaita, Śrī Gadādhara, Śrīvāsa and all the devotees of Lord Caitanya.)

śrī śrī rādhā-kṛṣṇa, gopa-gopīnatha, śyāma-kuṇḍa, rādhā-kuṇḍa giri-govardhana—kī jaya.

(All glories to Rādhā and Kṛṣṇa, the Lord of the gopas and gopis. All Glories to Śyāma-kuṇḍa, Rādhā-kuṇḍa and Govardhana Hill.)

[One may glorify the Deities of the temple at this time.]

śrī vṛndāvana dhāma—kī jaya.

(All glories to the abodes Śrī Vṛndāvana-dhāma.)

śrī māyāpur dhāma—kī jaya.

(All glories to Śrī Māyāpur-dhāma.)

jagannatha-puri-dhama-ki jaya.

(All glories to the temple of the Lord of the universe at Puri)

gaṅgā-mayī—kī jaya.

(All glories to Gaṅgā-devī.)

yamunā-mayī—kī jaya.

(All glories to Yamunā-devī.)

tulasī-devī—kī jaya.

(All glories to Tulasī-devī.)

bhakti-devī—kī jaya.

(All glories to bhakti, devotional service to the Lord)

śrī hari-nāma saṅkīrtana—kī jaya.

(All glories to the congregational chanting of the holy name of Hari.)

brhad-mrdanga-ki yaya.

(All glories to the publication and distribution of transcendental literatures glorifying the Supreme Personality of Godhead, Lord Sri Krishna.)

[Srila Bhaktisiddhānta Sarasvatī likened this activity to playing on a big mrdanga drum which can be heard around the world]

samāveta bhakta-vṛnda—kī jaya.

(All glories to the assembled devotees.)

(All glories to the assembled devotees.)

(All glories to the assembled devotees.)

gaura-premānande hari-haribol.

(Chant the names Hari! Hari! in the ecstasy of Caitanya-prema.)

All glories to Śrī Guru and Śrī Gaurāṅga.

All glories to Śrīla Prabhupāda.
`
  },
  {
    question: "04:50 am - 04:55 am : Darshan open : Narasimha Kirtan",
    answer: `
Sri Nrsimha Prayers
Obeisances to Lord Nrisimha, sung at the end of arati 

Lord Nrsimha is the incarnation of Lord Krsna that appeared to protect his young devotee Prahlada. He appeared as half-man half-lion and killed the envious, atheistic demon, Hiranyakashipu who was materialism personified (hiran-gold, kasipu-soft bed). Devotees pray to Lord Nrsimhadeva for protection and to kill their material desires.

(1)
namas te narasiḿhāya
prahlādāhlāda-dāyine
hiraṇyakaśipor vakṣaḥ-
Śilā-ṭańka-nakhālaye

I offer my obeisances to Lord Narasimha, who gives joy to Prahlada Maharaja and whose nails are like chisels on the stone like chest of the demon Hiranyakasipu.

(2)
ito nṛsiḿhaḥ parato nṛsiḿho
yato yato yāmi tato nṛsiḿhaḥ
bahir nṛsiḿho hṛdaye nṛsiḿho
nṛsiḿham ādiḿ śaraṇaḿ prapadye

Lord Nrsimha is here and also there. Wherever I go Lord Nrsimha is there. He is in the heart and is outside as well. I surrender to Lord Nrsimha, the origin of all things and the supreme refuge.

(3)
tava kara-kamala-vare nakham adbhuta-śṛńgaḿ
dalita-hiraṇyakaśipu-tanu-bhṛńgam
keśava dhṛta-narahari-rūpa jaya jagadīśa hare

O Kesava! O Lord of the universe! O Lord Hari, who have assumed the form of half-man, half-lionl All glories to You! Just as one can easily crush a wasp between one’s fingernails, so in the same way the body of the wasp like demon Hiranyakasipu has been ripped apart by the wonderful pointed nails on Your beautiful lotus hands.
`
  },
  {
    question: "04:55 am - 05:15 am : Darshan closed : Tulasi Puja Kirtan & Prayer",
    answer: `
Sri Tulasi Arati 
Sri Tulasi Pranama
Prayers offered to Goddess Vrindavati who is dear to lord Krishna

vrindayai tulasi-devyai
priyayai keshavasya cha
krishna-bhakti-prade devi
satyavatyai namo namaha

I offer my repeated obeisances unto Vrnda, Srimati Tulasi Devi, who is very dear to Lord Kesava. O goddess, you bestow devotional service to Lord Krsna and possess the highest truth.

Sri Tulasi-kirtana
namo namaha tulasi! krishna-preyasi
radha-krishna-seva pabo ei abhilashi

je tomara sharana loy, tara vanchha purna hoy
kripa kori' koro tare brindavana-basi

mor ei abhilash, bilas kunje dio vas
nayane heribo sada jugala-rupa-rashi

ei nivedana dharo, sakhir anugata koro
seva-adhikara diye koro nija dasi

dina krishna-dase koy, ei jena mora hoy
sri-radha-govinda-preme sada jena bhasi

TRANSLATION

O Tulasi, beloved of Krsna, I bow before you again and again. My desire is to obtain the service of Sri Sri Radha-Krsna.

Whoever takes shelter of you has his wishes fulfilled. Bestowing your mercy on him, you make him a resident of Vrndavana.

My desire is that you will also grant me a residence in the pleasure groves of Sri Vrndavana-dhama. Thus, within my vision I will always behold the beautiful pastimes of Radha and Krsna.

I beg you to make me a follower of the cowherd damsels of Vraja. Please give me the privilege of devotional service and make me your own maidservant.

This very fallen and lowly servant of Krsna prays, ''May I always swim in the love of Sri Radha and Govinda.

Sri Tulasi Pradaksina Mantra

yani kani cha papani
brahma-hatyadikani cha
tani tani pranashyanti
pradakshinaha pade pade

yani kani--whatever; ca--and; papani--sins; brahma-hatya--killing of a brahmana; adikani--and so on; ca--also, tani tani--all of them; pranasyanti--are destroyed; pradaksinah--(by) the circumambulation (of Tulasi Devi); pade pade--at every step.

By the circumambulation of Srimati Tulasi Devi all the sins that one may have committed are destroyed at every step, even the sin of killing a brahmana.

Vrnda devi is a pure devotee of Lord Krsna and is responsible for setting up the wonderful pastimes of Radha and Krsna in Vrndavana. She exists as Tulasi to benefit the fallen conditioned souls by bestowing devotional service to Krsna.

Vaisnava Pranams
vancha-kalpatarubhyash cha
kripa-sindhubhya eva cha
patitanam pavanebhyo
vaishnavebhyo namo namaha

I offer my respectful obeisances unto the Vaishnava devotees of the Lord. They are just like desire trees and can fulfill the desires of everyone, and they are full of compassion for the fallen conditioned souls.

Nāma-aparādha (The Ten Offenses) 
The Ten Aparādhas to the Name

In regard to the practice of singing Bhagavān’s names, one should avoid the ten offenses described in Padma Purāṇa, as in the words of Sanat Kumāra:

Even a person who has committed all kinds of offenses is redeemed by taking shelter of Bhagavān Hari. Thus, if a human being commits offenses even to Bhagavān Hari, he is no more than a two-legged animal. If ever such a person takes shelter of the holy name of Śrī Hari, he is certainly delivered from all offenses by the name. Therefore, the holy name is the best friend of all. But if one offends the name, his falldown is inevitable. (Padma Puran Brahma-khaṇḍa 25.12–13)

satāṁ nindā nāmnaḥ paramam aparādhaṁ vitanute
yataḥ khyātiṁ yātaṁ katham u sahate tad-vigarihām

1) To blaspheme the devotees who have dedicated their lives for propagating the holy name of the Lord.

śivasya śrī viṣṇor ya iha guṇa-nāmādi sakalaṁ
dhiyā bhinnaṁ paśyet sa khalu harināmāhitakaraḥ

2) To consider the names of the demigods like Lord Siva or Lord Brahma to be equal to, or independent of, the name Lord Visnu.

guror avajṣā 

3) To disobey the orders of the spiritual master or to consider him an ordinary person.

śruti-śāstra-nindanaṁ 

4) To blaspheme the Vedic literatures or literatures in pursuance of the Vedic version.

artha-vada

5) To give some mundane interpretation on the holy name of  the Lord

hari-namni kalpanam

6) To consider the glories of the holy name of the Lord as imagination. 

nāmno balād yasya hi pāpa-buddhir na vidyate tasya yamair hi śuddhiḥ 

7) To commit sinful activities on the strength of chanting the holy name of the Lord.

dharma–vrata-tyāga-hutādi sarva-śubha-kriyā-sāmyam api pramādaḥ 

8) To consider chanting of Hare Krsna one of the auspicious ritualistic activities offered in the Vedas as fruitive activities (karma-kanda).

aśraddadhāne vimukhe’py aśṛṇvati yaś copadeśaḥ śiva-nāmāparādhaḥ 

9) To instruct a faithless person about the glories of the holy name.

śrutvāpi nāma-māhātmyaṁ yaḥ prītir ahito’dhamaḥ
ahaṁ-mamādi paramo nāmni so’py aparādha-kṛt

10) To not have complete faith in the chanting of the holy names and to maintain material attachments, even after understanding so many instructions on this matter.

To not have complete faith in the chanting of the holy names and to maintain material attachments, even after understanding so many instructions on this matter.

Every devotee who claims to be a Vaisnava must guard against these offenses in order to quickly achieve the desired success, which is Krishna-prema.

Remember that even if one feels they are being offensive, there is no need to stop chanting. By trying to chant sincerely and serving the spiritual master, we may be purified of our offenses and may be able to chant purely. Chant Hare Krsna and Be Happy!
`
  },
  {
    question: "05:15 am - 07:30 am : Darshan closed : Hare Krishna MahaMantra Japa Meditation",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "07:30 am - 07:45 am : Darshan open : Sringar Darshan Arati",
    answer: `
Govindam Prayers
venum kwanantam aravinda-dalayataksham
barhavatamsam asitambuda-sundarangam
kandarpa-koti-kamaniya-vishesha-shobham
govindam adi-purusham tam aham bhajami

TRANSLATION

I worship Govinda, the primeval Lord, who is adept in playing on His flute, with blooming eyes like lotus petals with head decked with peacock's feather, with the figure of beauty tinged with the hue of blue clouds, and His unique loveliness charming millions of Cupids.

angani yasya sakalendriya-vritti-manti
pashyanti panti kalayanti chiram jaganti
ananda-chinmaya-sad-ujjwala-vigrahasya
govindam adi-purusham tam aham bhajami

TRANSLATION

I worship Govinda, the primeval Lord whose transcendental form is full of bliss, truth, substantiality and is thus full of the most dazzling splendor. Each of the limbs of that transcendental figure possesses in Himself, the full-fledged functions of all the organs, and eternally sees, maintains and manifests the infinite universes, both spiritual and mundane.

The Deities are now beautifully dressed and an arati is performed for them. The devotees also take charanamrita, the sweetened nectar from the lotus feet of the Deities. It is prasadam, substance sanctified by the mercy of Sri Krsna. After greeting the Deities is Guru puja- worship of the spiritual master. The spiritual master of the Hare Krsna movement is His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.

Sri Krsna Caitanya Prabhu Doya Koro More
(1)
śrī-kṛṣṇa-caitanya prabhu doyā koro more
tomā binā ke doyālu jagat-saḿsāre

My dear Lord Caitanya, please be merciful to me, because who can be more merciful than Your Lordship within these three worlds?

(2)
patita-pāvana-hetu tava avatāra
mo sama patita prabhu nā pāibe āra

Your incarnation is just to reclaim the conditioned, fallen souls, but I assure You that You will not find a greater fallen soul than me. Therefore, my claim is first.

(3)
hā hā prabhu nityānanda, premānanda sukhī
kṛpābalokana koro āmi boro duḥkhī

My dear Lord Nityananda, You are always joyful in spiritual bliss. Since You always appear very happy, I have come to You because I am most unhappy. If You kindly put Your glance over me, then I may also become happy.

(4)
doyā koro sītā-pati adwaita gosāi
tava kṛpā-bale pāi caitanya-nitāi

My dear Advaita Prabhu, husband of Sita, You are so kind. Please be merciful to me. If You are kind to me, naturally Lord Caitanya and Nityananda will also be kind to me.

(5)
hā hā swarūp, sanātana, rūpa, raghunātha
bhaṭṭa-juga, śrī-jīva hā prabhu lokanātha

O Svarupa Damodara, personal secretary of Lord Caitanya, O six Gosvamis O Sri Rupa Gosvami, Sri Sanatana Gosvami, Sri Raghunatha Bhatta Gosvami, Sri Gopala Bhatta Gosvami, Sri Jiva Gosvami, and Sri Raghunatha dasa Gosvami! O Lokanatha Gosvami, my beloved spiritual master! Narottama dasa also prays for your mercy.

(7)
doyā koro śrī-ācārya prabhu śrīnivāsa
rāmacandra-sańga māge narottama-dāsa

O Srinivasa Acarya, successor to the six Gosvamis! Please be merciful to me. Narottama dasa always desires the company of Ramacandra Cakravarti.

Sri Nama Kirtana (Yasomati Nandana)

(1)
yaśomatī-nandana, braja-baro-nāgara,
gokula-raṣjana kāna
gopī-parāṇa-dhana, madana-manohara,
Kāliya-damana-vidhāna

Lord Krsna is the beloved son of mother Yasoda; the transcendental lover in the land of Vraja; the delight of Gokula; Kana [a nickname of Krsna]; the wealth of the lives of the gopis. He steals the mind of even Cupid and punishes the Kaliya serpent.

(2)
amala harinām amiya-vilāsā
vipina-purandara, navīna nāgara-bora,
baṁśī-badana suvāsā

These pure, holy names of Lord Hari are full of sweet, nectarean pastimes. Krsna is the Lord of the twelve forests of Vraja, He is ever-youthful and is the best of lovers. He is always playing on a flute, and He is an excellent dresser.

(3)
braja-jana-pālana, asura-kula-nāśana
nanda-godhana-rākhowālā
govinda mādhava, navanīta-taskara,
sundara nanda-gopālā

Krsna is the protector of the inhabitants of Vraja; the destroyer of various demoniac dynasties; the keeper and tender of Nanda Maharaja's cows; the giver of pleasure to the cows, land, and spiritual senses; the husband of the goddess of fortune; the butter thief; and the beautiful cowherd boy of Nanda Maharaja.

(4)
yāmuna-taṭa-cara, gopī-basana-hara,
rāsa-rasika, kṛpāmoya
śrī-rādhā-vallabha, bṛndābana-naṭabara,
bhakativinod-āśraya

Krsna wanders along the banks of the River Yamuna. He stole the garments of the young damsels of Vraja who were bathing there. He delights in the mellows of the rasa dance; He is very merciful; the lover and beloved of Srimati Radharani; the great dancer of Vrndavana; and the shelter and only refuge of Thakura Bhaktivinoda.
`
  },
  {
    question: "07:45 am - 08:10 am : Darshan open : Srila Prabhupada Guru Puja & Kirtan",
    answer: `
Sri Guru Vandana
Offering morning prayer to our beloved spiritual master 

The Worship of Sri Guru
(from Prema-bhakti-candrika)

sri-guru-carana-padma, kevala-bhakati-sadma,
bando mui savadhana mate
jahara prasade bhai, e bhava toriya jai,
krsna-prapti hoy jaha ha’te

The lotus feet of our spiritual master are the only way by which we can attain pure devotional service. I bow to his lotus feet with great awe and reverence. By his grace one can cross the ocean of material suffering and obtain the mercy of Krsna.

guru-mukha-padma-vakya, cittete koriya aikya,
ar na koriho mane asa
sri-guru-carane rati, ei se uttama-gati,
je prasade pure sarva asa

My only wish is to have my consciousness purified by the words emanating from his lotus mouth. Attachment to his lotus feet is the perfection that fulfills all desires.

cakhu-dan dilo jei, janme janme prabhu sei,
divya-jnan hrde prokasito
prema-bhakti jaha hoite, avidya vinasa jate
vede gay jahara carito

He opens my darkened eyes and fills my heart with transcendental knowledge. He is my Lord birth after birth. From him ecstatic prema emanates; by him ignorance is destroyed. The Vedic scriptures sing of his character.

sri-guru karuna-sindhu, adhama janara bandhu,
lokanath lokera jivana
ha ha prabhu koro doya, deho more pada-chaya,
ebe jasa ghusuk tribhuvana

Our spiritual master is the ocean of mercy, the friend of the poor, and the lord and master of the devotees. O master! Be merciful unto me. Give me the shade of your lotus feet. Your fame is spread all over the three worlds.

Srila Prabhupada Pranam Mantra

nama oḿ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale
śrīmate bhaktivedānta-svāmin iti nāmine

namas te sārasvate deve gaura-vāṇī-pracāriṇe
nirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe

I offer my respectful obeisances unto His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda, who is very dear to Lord Kṛṣṇa, having taken shelter at His lotus feet.

Our respectful obeisances are unto you, O spiritual master, servant of Sarasvatī Gosvāmī. You are kindly preaching the message of Lord Caitanyadeva and delivering the Western countries, which are filled with impersonalism and voidism.

Pancha Tattva Mantra

śrī-kṛṣṇa-caitanya
prabhu-nityānanda
śrī-advaita gadādhara
śrīvāsādi-gaura-bhakta-vṛnda

I offer my respectful obeisances unto Sri Caitanya Mahaprabhu, Lord Nityananda, Sri Advaita, Gadadhara Pandit, Srivas Thakur, and all the devotees of Lord Caitanya. (A devotee humbly offering obeisances and begging forgiveness for any unintentional offences that may be committed while chanting the Hare Krishna Mahā-mantra)

HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "08:10 am - 09:00 am : Darshan open : Vaishnava Bhajans & Srimad Bhagavatam discourse (English)",
    answer: `
Jaya Radha Madhava

(1)
jaya rādhā-mādhava kuṣja-bihārī
gopī-jana-vallabha giri-vara-dhārī

Krsna is the lover of Radha. He displays many amorous pastimes in the groves of Vrndavana, He is the lover of the cowherd maidens of Vraja, and the holder of the great hill named Govardhana.

(2)
yaśodā-nandana braja-jana-raṣjana
yāmuna-tīra-vana-cārī

He is the beloved son of mother Yasoda, the delighter of the inhabitants of Vraja, and He wanders in the forests along the banks of the River Yamuna!   

Prayer chanted before reciting Srimad Bhagavatam 

Om namah bhagavate vasudevaya

I offer my obeisances to the Supreme Personality of Godhead, Vasudeva

narayanam namaskritya 
naram chaiva narottamam
devim sarasvatim vyasam
tato jayam udirayet

Before reciting this Srimad-Bhagavatam, which is the very means of conquest, one should offer respectful obeisances unto the Personality of Godhead, Narayana, unto Nara-narayana Rishi, the supermost human being, unto Mother Sarasvati, the goddess of learning, and unto Srila Vyasadeva, the author. (Srimad-Bhagavatam 1.2.4)

naṣṭa-prāyeṣv abhadreṣu
nityaḿ bhāgavata-sevayā
bhagavaty uttama-śloke
bhaktir bhavati naiṣṭhikī

By regular attendance in classes on the Bhāgavatam and by rendering of service to the pure devotee, all that is troublesome to the heart is almost completely destroyed, and loving service unto the Personality of Godhead, who is praised with transcendental songs, is established as an irrevocable fact.(1.2.18)
`
  },
  {
    question: "09:00 am - 11:45 am : Darshan Open : Hare Krishna Kirtan",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "11:45 am - 12:30 pm : Darshan closed : Raj-bhog Offering",
    answer: `
Bhoga Arati
(from Gitavali)
(at Thakura Bhaktivinoda’s home at Surabhi-kunja in Godruma-dvipa)

(1)
bhaja bhakata-vatsala sri-gaurahari
sri-gaurahari sohi goshtha-bihari
Nanda-jasomati-citta-hari

Just worship Sri Gaurahari, who is always affectionate toward His devotees. He is the same Supreme Godhead, Krishna, who sported in the cowherd pastures of Vraja and stole the hearts of Nanda and Yasoda.

(2)
bela ho’lo damodara aisa ekhano
bhoga-mandire bosi’ koraho bhojana

Mother Yasoda calls to Krishna, "My dear Damodara, it is very late. Please come right now, sit down in the dining hall, and take Your lunch."

(3)
nandera nidese baise giri-bara-dhari
baladeva-saha sakha baise sari sari

On the direction of Nanda Maharaja, Krishna, the holder of Govardhana Hill, sits down, and then all the cowherd boys, along with Krishna's elder brother, Sri Baladeva, sit down in rows to take their lunch.

(4)
sukta-sakadi bhaji nalita kushmanda
dali dalna dugdha-tumbi dadhi moca-khanda

They are then served a feast of sukta and various kinds of green leafy vegetables, then nice fried things, and a salad made of the green leaves of the jute plant. They are also served pumpkin, baskets of fruit, small square cakes made of lentils and cooked-down milk, then thick yogurt, squash cooked in milk, and vegetable preparations made from the flower of the banana tree.

(5)
mudga-bora masha-bora rotika ghritanna
sashkuli pishtaka khir puli payasanna

Then they receive fried squares of mung dahl patties, and urad dahl patties, capatis, and rice with ghee. Next, sweets made with milk, sugar, and sesamum; rice flour cakes; thick cooked-down milk; cakes floating in milk; and sweet rice.

(6)
karpura amrita—keli rambha khira-sara
amrita rasala, amla dwadasa prakara

There is also sweet rice that tastes just like nectar due to its being mixed with camphor. There are bananas, and cheese which is nectarean and delicious. They are also served twelve kinds of sour preparations made with tamarinds, limes, lemons, oranges, and pomegranates.

(7)
luci cini sarpuri laddu rasabali
bhoana korena krishna ho’ye kutuhali

There are puris made with white flour and sugar; puris filled with cream; laddus; and dahl patties boiled in sugared rice. Krishna eagerly eats all of the food.]

(8)
radhikara pakka anna vividha byanjana
parama anande krishna korena bhojana

In great ecstasy and joy Krishna eats the rice, curried vegetables, sweets, and pastries cooked by Srimati Radharani.

(9)
chale-bale laddu khay sri-madhumangala
bagala bajay ara drya hari-bolo

Krishna’s funny brahmana friend Madhumangala, who is very fond of laddus, gets them by hook or by crook. Eating the laddus, he shouts, "Haribol! Haribol!" and makes a funny sound by slapping his sides under his armpits with his hands.

(10)
radhikadi gane heri’ nayanera kone
tripta ho’ye khay krishna jasoda-bhavane

Beholding Radharani and Her gopi friends out of the corners of His eyes, Krishna eats at the house of mother Yasoda with great satisfaction.

(11)
bhojanante piye krishna subasita bari
sabe mukha prakhaloy ho’ye sari sari

After lunch, Krishna drinks rose-scented water. Then all of the boys, standing in lines, wash their mouths.

(12)
hasta-mukha prakhaliya jata sakha-gane
anande bisrama kore baladeva-sane

After all the cowherd boys wash their hands and mouths, in great bliss they take rest with Lord Balarama.

(13)
jambula rasala ane tambula-masala
taha kheye krishna-candra sukhe nidra gela

The two cowherd boys Jambula and Rasala then bring Krishna pan made with betel nuts, fancy spices, and catechu. After eating that pan, Sri Krishnacandra then happily goes to sleep.

(14)
bisalakha sikhi-puccha-camara dhulaya
apurba sayyaya krishna sukhe nidra jaya.

While Krishna happily takes His rest on an excellent bedstead, His servant Visalaksha cools Him with a fan of peacock feathers.

(15)
jasomati-ajna pe’ye dhanishtha-anito
sri-krishna-prasada radha bhunje ho’ye prito

At mother Yasoda’s request the gopi Dhanishtha brings remnants of food left on Krishna’s plate to Srimati Radharani, who eats them with great delight.

(16)
lalitadi sakhi-gana avasesha paya
mane mane sukhe radha-krishna-guna gaya

Lalita-devi and the other gopis then receive the remnants, and within their hearts they sing the glories of Radharani and Krishna with great joy.

(17)
hari-lila ek-matra jahara pramoda
bhogarati gay thakur bhakativinoda

Thakura Bhaktivinoda, whose one and only joy is the pastimes of Lord Hari, sings this Bhoga-arati song.
`
  },
  {
    question: "12:30 pm - 01:00 pm : Darshan open : Raj-bhog Arati Kirtan",
    answer: `
Raj Bhoga Arati Kirtan

Jaya Jaya Radha Krsna

(1)
jaya jaya rādhā-kṛṣṇa yugala-milana
ārati karowe lalitādi sakhī-gaṇa

All glories, all glories to the meeting of the transcendental pair, Sri Sri Radha and Krsna! The gopis, headed by Lalita, perform the arati ceremony for Their pleasure.

(2)
madana-mohana rūpa tri-bhańga-sundara
pītambara śikhi-puccha-cūḍā-manohara

The three-fold bending form of Krsna, the attractor of Cupid, dressed in yellow silk dhoti and wearing a crown decorated with peacock feathers, is simply captivating to the mind.

(3)
lalita-mādhava-vāme bṛṣabhānu-kanyā
sunīla-vasanā gaurī rūpe gune dhanyā

Sitting to the left of the charming Lord Madhava is the daughter of King Vrsabhanu, dressed in a lovely deep blue sari. Her complexion is the color of molten gold, and all characteristics of Her beauty and qualities are highly praiseworthy.

(4)
nānā-vidha alańkāra kore jhalamala
hari-mano-vimohana vadana ujjvala

She is decorated with various shimmering, sparkling ornaments. Her face is so splendorous that it enchants the mind of Lord Hari.

(5)
viśākhādi sakhī-gaṇa nānā rāge gāya
priya-narma-sakhī jata cāmara ḍhulāya

The gopis of Visakha’s group sing many enchanting songs in various tunes, while the topmost class of gopis, known as the priya-narma-sakhis, soothes Radha and Krsna by waving camara fans.

(6)
śrī-rādhā-mādhava-pada-sarasija-āśe
bhakativinoda sakhī-pade sukhe bhāse

Hoping to attain the lotus feet of Radhika and Madhava, Bhaktivinoda happily swims in the ocean of bliss found at the feet of the damsels of Vraja Dham.

Sri Nama Sankirtana

(1)
hari haraye namaḥ kṛṣṇa yādavāya namaḥ 
yādavāya mādhavāya keśavāya namaḥ

Hari! Obeisances to Lord Hari, unto Krsna, and Yadava. Obeisances to Lord of the Yadus, Madhava, Kesava.

(2)
gopāla govinda rāma śrī-madhusūdana 
giridhārī gopīnātha madana-mohana

Gopala! Govinda! Rama! O vanquisher of Madhu! Giridhari! Lord of the gopis! Bewilderer of cupid!

(3)
śrī-caitanya-nityānanda śrī-advaita-sītā 
hari guru vaiṣṇaba bhāgavata gītā

Sri Caitanya, Nityananda, Sri Advaita-Sita!  Hari! Guru! Vaisnavas! Srimad Bhagavatam! Bhagavad Gita!

(4)
śrī-rūpa sanātana bhaṭṭa-raghunātha 
śrī-jīva gopāla-bhaṭṭa dāsa-raghunātha

All glories to Srila Rupa Goswami, Sanatana Goswami and Raghunatha Bhatta Goswami, to Srila Jiva Goswami, Gopala  Bhatta Goswami, and Raghunatha Dasa Goswami!

(5)
ei chay gosāir kori caraṇa vandan 
jāhā hoite bighna-nāś abhīṣṭa-pūraṇ

I bow to the feet of these six Goswamis. By their grace, our obstacles can be destroyed and all desires are fulfilled.

(6)
ei chay gosāi jār—mui tār dās 
tā-sabāra pada-reṇu mora paṣca-grās

I am the servant of these six Goswamis. The dust of their lotus feet is my fivefold subsistence.

(7)
tādera caraṇa-sebi-bhakta-sańe bās 
janame janame hoy ei abhilāṣ

To be a servant of their lotus feet and to reside in the company of devotees--this is my aspiration birth after birth.

(8)
ei chay gosāi jabe braje koilā bās 
rādhā-kṛṣṇa-nitya-līlā korilā prakāś

When these six Goswamis lived in Vraja, they revealed the eternal pastimes of Sri Sri Radha and Krsna.

(9)
ānande bolo hari bhaja bṛndāban 
śrī-guru-vaiṣṇaba-pade majāiyā man

In ecstasy, sing the name of Lord Hari and worship Vrndavana, joyfully fixing your mind upon the lotus feet of the bona-fide spiritual master and the pure devotees.

(10)
śrī-guru-vaiṣṇaba-pada-padma kori āś 
nāma-sańkīrtana kohe narottama dāsa

The lotus feet of my guru and the Vaisnavas are my aspiration. Narottama Dasa thus sings Hari-nama sankirtana.
`
  },
  {
    question: "01:00 pm - 04:30 pm : Darshan closed",
    answer: ``
  },
  {
    question: "04:30 pm - 04:40 pm : Darshan open : Dhoop Arati",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "04:40 pm - 04:55 pm : Darshan open : Hare Krishna Kirtan",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "04:55 pm - 05:25 pm : Darshan closed : Bhoga offering",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "05:25 pm - 06:45 pm : Darshan open : Hare Krishna Kirtan",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "06:45 pm - 07:00 pm : Darshan closed : Tulasi Puja Kirtan",
    answer: `
Sri Tulasi Arati 
Sri Tulasi Pranama
Prayers offered to Goddess Vrindavati who is dear to lord Krishna

vrindayai tulasi-devyai
priyayai keshavasya cha
krishna-bhakti-prade devi
satyavatyai namo namaha

I offer my repeated obeisances unto Vrnda, Srimati Tulasi Devi, who is very dear to Lord Kesava. O goddess, you bestow devotional service to Lord Krsna and possess the highest truth.

Sri Tulasi-kirtana
namo namaha tulasi! krishna-preyasi
radha-krishna-seva pabo ei abhilashi

je tomara sharana loy, tara vanchha purna hoy
kripa kori' koro tare brindavana-basi

mor ei abhilash, bilas kunje dio vas
nayane heribo sada jugala-rupa-rashi

ei nivedana dharo, sakhir anugata koro
seva-adhikara diye koro nija dasi

dina krishna-dase koy, ei jena mora hoy
sri-radha-govinda-preme sada jena bhasi

TRANSLATION

O Tulasi, beloved of Krsna, I bow before you again and again. My desire is to obtain the service of Sri Sri Radha-Krsna.

Whoever takes shelter of you has his wishes fulfilled. Bestowing your mercy on him, you make him a resident of Vrndavana.

My desire is that you will also grant me a residence in the pleasure groves of Sri Vrndavana-dhama. Thus, within my vision I will always behold the beautiful pastimes of Radha and Krsna.

I beg you to make me a follower of the cowherd damsels of Vraja. Please give me the privilege of devotional service and make me your own maidservant.

This very fallen and lowly servant of Krsna prays, ''May I always swim in the love of Sri Radha and Govinda.

Sri Tulasi Pradaksina Mantra

yani kani cha papani
brahma-hatyadikani cha
tani tani pranashyanti
pradakshinaha pade pade

yani kani--whatever; ca--and; papani--sins; brahma-hatya--killing of a brahmana; adikani--and so on; ca--also, tani tani--all of them; pranasyanti--are destroyed; pradaksinah--(by) the circumambulation (of Tulasi Devi); pade pade--at every step.

By the circumambulation of Srimati Tulasi Devi all the sins that one may have committed are destroyed at every step, even the sin of killing a brahmana.

Vrnda devi is a pure devotee of Lord Krsna and is responsible for setting up the wonderful pastimes of Radha and Krsna in Vrndavana. She exists as Tulasi to benefit the fallen conditioned souls by bestowing devotional service to Krsna.
`
  },
  {
    question: "07:00 pm - 07:30 pm : Darshan open : Gaura Arati & Kirtan",
    answer: `
Gaura Arati
Evening arati before Shri Krishna Balaram as Gauranga Mahaprabhu 

(1)
(kiba) jaya jaya gorācāńder āratiko śobhā
jāhnavī-taṭa-vane jaga-mana-lobhā

All glories, all glories to the beautiful arati ceremony of Lord Caitanya. This Gaura-arati is taking place in a grove on the banks of the Jahnavi (Ganges) and is attracting the minds of all living entities in the universe.

(2)
dakhiṇe nitāicāńd, bāme gadādhara
nikaṭe advaita, śrīnivāsa chatra-dhara

On Lord Caitanya’s right side is Lord Nityananda and on His left is Sri Gadadhara. Nearby stands Sri Advaita, and Srivasa Thakura is holding an umbrella over Lord Caitanya’s head.

(3)
bosiyāche gorācāńd ratna-siḿhāsane
ārati koren brahmā-ādi deva-gaṇe

Lord Caitanya has sat down on a jeweled throne, and the demigods, headed by Lord Brahma, perform the arati ceremony

(4)
narahari-ādi kori’ cāmara dhulāya
saṣjaya-mukunda-bāsu-ghoṣ-ādi gāya

Narahari Sarakara and other associates of Lord Caitanya fan Him with camaras, and devotees headed by Sanjaya Pandita, Mukunda Datta, and Vasu Ghosa sing sweet kirtana.

(5)
śańkha bāje ghaṇṭā bāje bāje karatāla
madhura mṛdańga bāje parama rasāla

Conchshells, bells, and karatalas resound, and the mrdangas play very sweetly. This kirtana music is supremely sweet and relish able to hear.

(6)
bahu-koṭi candra jini’ vadana ujjvala
gala-deśe bana-mālā kore jhalamala

The brilliance of Lord Caitanya’s face conquers millions upon millions of moons, and the garland of forest flowers around His neck shines.

(7)
śiva-śuka-nārada preme gada-gada
bhakativinoda dekhe gorāra sampada

Lord Siva, Sukadeva Gosvami, and Narada Muni are all there, and their voices are choked with the ecstasy of transcendental love. Thus Thakura Bhaktivinoda envisions the glory of Lord Sri Caitanya.

Srila Prabhupada Pranam Mantra

nama oḿ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale
śrīmate bhaktivedānta-svāmin iti nāmine

namas te sārasvate deve gaura-vāṇī-pracāriṇe
nirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe

I offer my respectful obeisances unto His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda, who is very dear to Lord Kṛṣṇa, having taken shelter at His lotus feet.

Our respectful obeisances are unto you, O spiritual master, servant of Sarasvatī Gosvāmī. You are kindly preaching the message of Lord Caitanyadeva and delivering the Western countries, which are filled with impersonalism and voidism.

Pancha Tattva Mantra

śrī-kṛṣṇa-caitanya
prabhu-nityānanda
śrī-advaita gadādhara
śrīvāsādi-gaura-bhakta-vṛnda

I offer my respectful obeisances unto Sri Caitanya Mahaprabhu, Lord Nityananda, Sri Advaita, Gadadhara Pandit, Srivas Thakur, and all the devotees of Lord Caitanya. (A devotee humbly offering obeisances and begging forgiveness for any unintentional offences that may be committed while chanting the Hare Krishna Mahā-mantra)

HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)

Sri Nrsimha Prayers
Obeisances to Lord Nrisimha, sung at the end of arati 

Lord Nrsimha is the incarnation of Lord Krsna that appeared to protect his young devotee Prahlada. He appeared as half-man half-lion and killed the envious, atheistic demon, Hiranyakashipu who was materialism personified (hiran-gold, kasipu-soft bed). Devotees pray to Lord Nrsimhadeva for protection and to kill their material desires.

(1)
namas te narasiḿhāya
prahlādāhlāda-dāyine
hiraṇyakaśipor vakṣaḥ-
Śilā-ṭańka-nakhālaye

I offer my obeisances to Lord Narasimha, who gives joy to Prahlada Maharaja and whose nails are like chisels on the stone like chest of the demon Hiranyakasipu.

(2)
ito nṛsiḿhaḥ parato nṛsiḿho
yato yato yāmi tato nṛsiḿhaḥ
bahir nṛsiḿho hṛdaye nṛsiḿho
nṛsiḿham ādiḿ śaraṇaḿ prapadye

Lord Nrsimha is here and also there. Wherever I go Lord Nrsimha is there. He is in the heart and is outside as well. I surrender to Lord Nrsimha, the origin of all things and the supreme refuge.

(3)
tava kara-kamala-vare nakham adbhuta-śṛńgaḿ
dalita-hiraṇyakaśipu-tanu-bhṛńgam
keśava dhṛta-narahari-rūpa jaya jagadīśa hare

O Kesava! O Lord of the universe! O Lord Hari, who have assumed the form of half-man, half-lionl All glories to You! Just as one can easily crush a wasp between one’s fingernails, so in the same way the body of the wasp like demon Hiranyakasipu has been ripped apart by the wonderful pointed nails on Your beautiful lotus hands.
`
  },
  {
    question: "07:30 pm - 08:15 pm : Darshan open : Hare Krishna Kirtan",
    answer: `
HARE KRISHNA MAHA MANTRA

hare kṛṣṇa hare kṛṣṇa
kṛṣṇa kṛṣṇa hare hare
hare rāma hare rāma
rāma rāma hare hare

Translation
hare  — O energy of the Lord, mother Hara (Srīmatī Rādhika, the eternal consort of the Supreme Lord Krishna); kṛṣṇa  — Dear Krishna, the Supreme Personality of Godhead; rāma  — Another name of Krishna.

Meaning
Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
`
  },
  {
    question: "08:15 pm - 08:30 pm : Darshan open : Sayana Arati",
    answer: `
Sayana Arati Kirtan

Radha Krsna Prana Mora

(1)
rādhā-kṛṣṇa prāṇa mora jugala-kiśora
jīvane maraṇe gati āro nāhi mora

The divine couple, Sri Sri Radha and Krsna, is my life and soul. In life or death I have no other refuge but Them. 

(2)
kālindīra kūle keli-kadambera vana
ratana-bedīra upara bosābo du'jana

In a forest of small kadamba trees on the bank of the Yamuna, I will seat the divine couple on a throne made of brilliant jewels.

(3)
śyāma-gaurī-ańge dibo (cūwā) candanera gandha
cāmara ḍhulābo kabe heri mukha-candra

I will anoint Their dark and fair forms with sandalwood paste scented with cuya, and I will fan Them with a camara whisk. Oh, when will I behold Their moonlike faces?

(4)
gāthiyā mālatīr mālā dibo dohāra gale
adhare tuliyā dibo karpūra-tāmbūle

After stringing together garlands of malati flowers I will place them around Their necks, and I will offer tambula scented with camphor to Their lotus mouths.

(5)
lalitā viśākhā-ādi jata sakhī-bṛnda
ājṣāya koribo sebā caraṇāravinda

With the permission of all the sakhis, headed by Lalita and Visakha, I will serve the lotus feet of Radha and Krsna.

(6)
śrī-kṛṣṇa-caitanya-prabhur dāser anudāsa
sevā abhilāṣa kore narottama-dāsa

Narottama dasa, the servant of the servant of Sri Krsna Caitanya Prabhu, longs for this service to the divine couple.
`
  },
  {
    question: "09:30 pm - 04:30 am : Temple closed",
    answer: ``
  }
];

export default function TempleSchedule() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isDarshanOpen, setIsDarshanOpen] = useState(false);

  // Check Darshan status based on current time (08:18 PM IST on June 07, 2025)
  useEffect(() => {
    const currentTime = new Date('2025-06-07T20:18:00+05:30'); // Current date and time: 08:18 PM IST
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Define Darshan timings (open all day except 13:00-16:30 and 20:30-04:30 next day)
    const afternoonCloseStart = 13 * 60; // 13:00
    const afternoonCloseEnd = 16 * 60 + 30; // 16:30
    const nightCloseStart = 20 * 60 + 30; // 20:30
    const nightCloseEnd = 4 * 60 + 30; // 04:30 next day

    const isOpen =
      !(currentTimeInMinutes >= afternoonCloseStart && currentTimeInMinutes <= afternoonCloseEnd) &&
      !(currentTimeInMinutes >= nightCloseStart || currentTimeInMinutes <= nightCloseEnd);

    setIsDarshanOpen(isOpen);
  }, []);

  const toggleExpand = (question: string) => {
    setExpandedItem(expandedItem === question ? null : question);
  };

  // Split schedule into Morning and Evening Programmes
  const morningProgramme = scheduleData.filter(item => {
    const startTime = item.question.split(" : ")[0];
    const hour = parseInt(startTime.split(" ")[0].split(":")[0]);
    return hour < 12 || (hour === 12 && parseInt(startTime.split(" ")[0].split(":")[1]) <= 30);
  });


  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Sri Sri Radha Krishnachandra Mandir
          </h1>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Daily Temple Schedule
          </h2>
          <p className="text-lg text-gray-700 italic mb-6">
            “Temple means people should come, people should learn the science of God. Temple means spiritual educational shelter.”<br />— Srila Prabhupada
          </p>
          <div className="flex justify-center items-center space-x-3">
            <Clock className="w-6 h-6 text-indigo-600" />
            <p className="text-lg font-medium text-gray-800">
              Temple Timings: Open All Days | Closed from 13:00 - 16:30 and 20:30 - 04:30 (Next day)
            </p>
          </div>
          <div className="mt-4">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${isDarshanOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isDarshanOpen ? 'Darshan Open' : 'Darshan Closed'}
            </span>
          </div>
        </div>

        {/* Morning Programme */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center">
            <Sun className="w-6 h-6 mr-2 text-amber-500" />
            DETAILED DAILY TEMPLE SCHEDULE
          </h3>
          <div className="space-y-6">
            {morningProgramme.map((item) => (
              <div key={item.question} className="relative bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                {/* Timeline Indicator */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-amber-100"></div>
                <div className="ml-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h4>
                    {item.answer && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleExpand(item.question)}
                        className="text-indigo-600 hover:bg-indigo-100 rounded-full"
                      >
                        {expandedItem === item.question ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    )}
                  </div>
                  {expandedItem === item.question && item.answer && (
                    <div className="mt-4 text-gray-700 prose max-w-none">
                      <pre className="whitespace-pre-wrap font-sans">{item.answer}</pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evening Programme */}
      </div>
    </div>
  );
}