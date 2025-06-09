import React, { useState } from 'react';
import axios from 'axios';

export const fetchDriveImages = async (folderId: string, apiKey: string) => {
  const query = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files`;

  try {
    const response = await axios.get(url, {
      params: {
        q: query,
        key: apiKey,
        fields: 'files(id, name, mimeType)',
      },
    });

    return response.data.files.map((file: any) => ({
      id: file.id,
      name: file.name,
      url: `https://drive.google.com/uc?export=view&id=${file.id}`,
    }));
  } catch (error: any) {
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch images from Google Drive');
  }
};

const pranamMantras = [
  {
    title: "Śrī Guru Praṇāma",
    sanskrit: `
      om ajnana-timirandhasya jnananjana-salakaya
      cakshur unmilitam yena tasmai sri-gurave namah
      mūkaṁ karoti vācālaṁ paṅguṁ laṅghayate girim
      yat-kṛpā tam ahaṁ vande śrī guruṁ dina-tāraṇam
    `,
    transliteration: `
      ॐ अज्ञान तिमिरान्धस्य ज्ञानाञ्जनशलाकया।
      चक्षुरुन्मीलितं येन तस्मै श्री गुरवे नमः॥
      मुकं करोति वाचालं पंगुं लंघयते गिरिम्।
      यत्कृपा तम अहं वन्दे श्रीगुरुं दीनतारणम्॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto my spiritual master, who has opened my eyes, which were blinded by the darkness of ignorance, with the torchlight of knowledge.
      I offer my respectful obeisances unto my spiritual master, who delivers the fallen souls. By whose mercy the dumb become eloquent and the lame cross mountains.
    `,
    hindiTranslation: `
      मैं अपने आध्यात्मिक गुरु को सादर प्रणाम करता हूँ, जिन्होंने अज्ञान के अंधकार से अंधी मेरी आँखों को ज्ञान के प्रकाश से खोला।
      मैं अपने आध्यात्मिक गुरु को सादर प्रणाम करता हूँ, जो पतित आत्माओं का उद्धार करते हैं। जिनकी कृपा से गूंगा वक्ता बन जाता है और लंगड़ा पर्वत को लांघ जाता है।
    `,
    firstImage: "/Pranam Mantra/Sri Guru Pranam-1.png",
    secondImage: "/Pranam Mantra/Sri Guru Pranam-2.png"
  },
  {
    title: "Maṅgalācaraṇa",
    sanskrit: `
      vande 'haṁ śrī-guroḥ śrī-yuta-pada-kamalaṁ
      śrī-gurūn vaiṣṇavāṁś ca śrī-rūpaṁ sāgrajātaṁ
      saha-gaṇa-raghunāthānvitaṁ taṁ sa-jīvam
      sādvaitaṁ sāvadhūtaṁ parijana-sahitaṁ
      kṛṣṇa-caitanya-devaṁ śrī-rādhā-kṛṣṇa-pādān
      saha-gaṇa-lalitā-śrī-viśākhānvitāṁś ca
    `,
    transliteration: `
      वंदेऽहं श्रीगुरोः श्रीयुतपदकमलं श्रीगुरुन् वैष्णवाँश्च,
      श्रीरूपं साग्रजातं सहगण रघुनाथान्वितं तं सजीवम्।
      साद्वैतं सावधूतं परिजन सहितं कृष्ण चैतन्य देवं,
      श्री राधाकृष्ण पादान् सहगण ललिता श्री विशाखान्वितांश्च॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto the lotus feet of my spiritual master and of all the other preceptors on the path of devotional service.
      I offer my respectful obeisances unto all the Vaishnavas and unto the six Gosvamis, including Srila Rupa Gosvami, Srila Sanatana Gosvami, Raghunatha dasa Gosvami, Jiva Gosvami, and their associates.
      I offer my respectful obeisances unto Advaita Acarya Prabhu, Sri Nityananda Prabhu, Sri Caitanya Mahaprabhu, and all His devotees, headed by Srivasa Thakura.
      I then offer my respectful obeisances unto the lotus feet of Lord Krishna, Srimati Radharani, and all the gopis, headed by Lalita and Visakha.
    `,
    hindiTranslation: `
      मैं अपने आध्यात्मिक गुरु और भक्ति सेवा के मार्ग पर अन्य सभी गुरुओं के चरण कमलों में अपना सम्मानपूर्वक प्रणाम करता हूँ।
      मैं सभी वैष्णवों और श्रील रूप गोस्वामी, श्रील सनातन गोस्वामी, रघुनाथ दास गोस्वामी, जीव गोस्वामी, और उनके सहयोगियों सहित छह गोस्वामियों को अपना सम्मानपूर्वक प्रणाम करता हूँ।
      मैं अद्वैत आचार्य प्रभु, श्री नित्यानंद प्रभु, श्री चैतन्य महाप्रभु, और श्रीवास ठाकुर की अध्यक्षता वाले उनके सभी भक्तों को अपना सम्मानपूर्वक प्रणाम करता हूँ।
      फिर मैं भगवान कृष्ण, श्रीमती राधारानी, और ललिता और विशाखा के नेतृत्व वाली सभी गोपियों के चरण कमलों को अपना सम्मानपूर्वक प्रणाम करता हूँ।
    `,
    firstImage: "/Pranam Mantra/Mangalacharana-1.png",
    secondImage: "/Pranam Mantra/Mangalacharana-1.png"
  },
  {
    title: "Śrīla Prabhupāda Praṇati",
    sanskrit: `
      nama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭāya bhū-tale
      śrīmate bhaktivedānta-svāmin iti nāmine
      namas te sārasvate deve gaura-vāṇī-pracāriṇe
      nirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe
    `,
    transliteration: `
      नम ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले
      श्रीमते भक्तिवेदांतस्वामिन् इति नामिने।
      नमस्ते सारस्वते देवे गौरवाणी प्रचारिणे
      निर्विशेष शून्यवादि पाश्चात्यदेश तारिणे॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, who is very dear to Lord Krishna, having taken shelter at His lotus feet.
      Our respectful obeisances are unto you, O spiritual master, servant of Bhaktisiddhanta Saraswati Goswami. You are kindly preaching the message of Lord Chaitanyadeva and delivering the Western countries, which are filled with impersonalism and voidism.
    `,
    hindiTranslation: `
      मैं उनकी कृष्ण कृपामूर्ति ए. सी. भक्तिवेदांत स्वामी प्रभुपाद को अपना सम्मानपूर्वक प्रणाम करता हूँ, जो भगवान कृष्ण के बहुत प्रिय हैं, जिन्होंने उनके चरण कमलों की शरण ली है।
      हे आध्यात्मिक गुरु, भक्तिसिद्धांत सरस्वती गोस्वामी के सेवक, आपको हमारा सादर प्रणाम है। आप कृपया भगवान चैतन्यदेव के संदेश का प्रचार कर रहे हैं और पश्चिमी देशों का उद्धार कर रहे हैं, जो निर्विशेषवाद और शून्यवाद से भरे हुए हैं।
    `,
    firstImage: "/Pranam Mantra/Srila Prabhupada-1.png",
    secondImage: "/Pranam Mantra/Srila Prabhupada-2.png"
  },
  {
    title: "Śrīla Bhaktisiddhānta Sarasvatī Praṇati",
    sanskrit: `
      nama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale
      śrīmate bhaktisiddhānta-sarasvatīti nāmine
      śrī-vārṣabhānavī-devī-dayitāya kṛpābdhaye
      kṛṣṇa-sambandha-vijñāna-dāyine prabhave namaḥ
      mādhuryojjvala-premāḍhya-śrī-rūpānuga-bhaktida
      śrī-gaura-karuṇā-śakti-vigrahāya namo 'stu te
      namas te gaura-vāṇī-śrī-mūrtaye dīna-tāriṇe
      rūpānuga-viruddhāpasiddhānta-dhvānta-hāriṇe
    `,
    transliteration: `
      नम ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले
      श्रीमते भक्तिसिद्धांत सरस्वतीति नामिने।
      श्री वार्षभानवी-देवी-दयिताय कृपाब्धये
      कृष्ण संबंध विज्ञान दायिने प्रभवे नमः।
      माधुर्योज्वल प्रेमाढ्य श्री-रूपानुग भक्तिद
      श्री गौर-करुणा-शक्ति-विग्रहाय नमोऽस्तुते।
      नमस्ते गौर-वाणी-श्री-मूर्तये दीन-तारिणे
      रूपानुग विरुद्धापसिद्धांत-ध्वांत-हारिणे॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto His Divine Grace Bhaktisiddhānta Sarasvati, who is very dear to Lord Krsna, having taken shelter at His lotus feet.
      I offer my respectful obeisances to Srī Vārṣabhānavi-devi-dayita dāsa, who is favored by Srimatī Rādhārānī and who is the ocean of transcendental mercy and the deliverer of the science of Krsna.
      I offer my respectful obeisances unto you, the personified energy of Sri Caitanya's mercy, who deliver devotional service which is enriched with conjugal love of Rādhā and Krsna, coming exactly in the line of revelation of Srila Rūpa Gosvāmī.
      I offer my respectful obeisances unto you, who are the personified teachings of Lord Caitanya. You are the deliverer of the fallen souls. You do not tolerate any statement which is against the teachings of devotional service enunciated by Srila Rūpa Gosvāmī.
    `,
    hindiTranslation: `
      मैं उनकी कृष्ण कृपामूर्ति भक्तिसिद्धांत सरस्वती को अपना सम्मानपूर्वक प्रणाम करता हूँ, जो भगवान कृष्ण को बहुत प्रिय हैं, जिन्होंने उनके चरण कमलों का आश्रय लिया है।
      मैं श्री वर्षाभानवी-देवी-दयित दास को सादर प्रणाम करता हूँ, जो श्रीमती राधारानी की कृपापात्र हैं और जो पारलौकिक दया के सागर हैं और कृष्ण के विज्ञान के उद्धारकर्ता हैं।
      मैं आपको, श्री चैतन्य की दया की साक्षात ऊर्जा, जो राधा और कृष्ण के वैवाहिक प्रेम से समृद्ध भक्ति सेवा प्रदान करते हैं, श्रील रूप गोस्वामी के रहस्योद्घाटन की पंक्ति में आते हुए, आपको अपना सम्मानपूर्वक प्रणाम करता हूँ।
      मैं आपको अपना सम्मानपूर्वक प्रणाम करता हूँ, जो भगवान चैतन्य की साकार शिक्षाएँ हैं। आप पतित आत्माओं के उद्धारकर्ता हैं। आप किसी भी बयान को बर्दाश्त नहीं करते हैं जो श्रील रूप गोस्वामी द्वारा प्रतिपादित भक्ति सेवा की शिक्षाओं के खिलाफ है।
    `,
    firstImage: "/Pranam Mantra/Srila Bhaktisiddhanta Saraswati Goswami Prabhupada-1.png",
    secondImage: "/Pranam Mantra/Srila Bhaktisiddhanta Saraswati Goswami Prabhupada-2.png"
  },
  {
    title: "Śrīla Gaurakiśora Praṇati",
    sanskrit: `
      namo gaura-kiśorāya sākṣād-vairāgya-mūrtaye
      vipralambha-rasāmbhode pādāmbujāya te namaḥ
    `,
    transliteration: `
      नमो गौर-किशोराय साक्षाद्वैराग्य मूर्तये।
      विप्रलंभ-रसांबोधे पादांबुजाय ते नमः॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto Gaura-kisora dasa Babaji Maharaja, who is renunciation personified. He is always merged in a feeling of separation and intense love of Krishna.
    `,
    hindiTranslation: `
      मैं गौर-किशोर दास बाबाजी महाराज को सादर प्रणाम करता हूँ, जो वैराग्य के साक्षात् स्वरूप हैं। वे सदा कृष्ण के प्रति विरह और गहन प्रेम की भावना में लीन रहते हैं।
    `,
    firstImage: "/Pranam Mantra/Srila Gaura Kishor Das Babaji Maharaj-1.png",
    secondImage: "/Pranam Mantra/Srila Gaura Kishor Das Babaji Maharaj-2.png"
  },
  {
    title: "Śrīla Bhaktivinoda Praṇati",
    sanskrit: `
      namo bhaktivinodāya sac-cid-ānanda-nāmine
      gaura-śakti-svarūpāya rūpānuga-varāya te
    `,
    transliteration: `
      नमो भक्तिविनोदाय सच्चिदानंद-नामिने।
      गौर शक्ति स्वरूपाय रूपानुग वराय ते॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto Saccidananda Bhaktivinoda, who is the transcendental energy of Caitanya Mahaprabhu. He is a strict follower of the Gosvamis, headed by Srila Rupa.
    `,
    hindiTranslation: `
      मैं सच्चिदानंद भक्तिविनोद को सादर प्रणाम करता हूँ, जो चैतन्य महाप्रभु की पारलौकिक शक्ति हैं। वे श्रील रूप गोस्वामी के नेतृत्व वाले गोस्वामियों के कट्टर अनुयायी हैं।
    `,
    firstImage: "/Pranam Mantra/Srila Bhaktivinoda Thakura-1.png",
    secondImage: "/Pranam Mantra/Srila Bhaktivinoda Thakura-2.png"
  },
  {
    title: "Śrīla Jagannātha Praṇati",
    sanskrit: `
      gaurāvirbhāva-bhūmes tvaṁ nirdeṣṭā saj-jana-priyaḥ
      vaiṣṇava-sārvabhaumaḥ śrī-jagannāthāya te namaḥ
    `,
    transliteration: `
      गौराविर्भाव-भूमेस्त्वं निर्देष्टा सज्जनप्रियः।
      वैष्णव-सार्वभौमः श्रीजगन्नाथाय ते नमः॥
    `,
    englishTranslation: `
      I offer my respectful obeisances to Jagannatha dasa Babaji, who is respected by the entire Vaishnava community and who discovered the place where Lord Caitanya appeared.
    `,
    hindiTranslation: `
      मैं जगन्नाथ दास बाबाजी को सादर प्रणाम करता हूँ, जिन्हें समस्त वैष्णव समुदाय सम्मान देता है और जिन्होंने भगवान चैतन्य के प्रकट होने के स्थान की खोज की।
    `,
    firstImage: "/Pranam Mantra/Srila Jagannatha Dasa Babaji-1.png",
    secondImage: "/Pranam Mantra/Srila Jagannatha Dasa Babaji-2.png"
  },
  {
    title: "Śrī Śrī Shad-goswami Praṇāma",
    sanskrit: `
      krishnotkirtana-gana-nartana-parau premāmṛtāmbho-nidhi
      dhīrādhira-jana-priyau priya-karau nirmatsarau pujitau
      śrī-caitanya-kṛpa-bharau bhuvi bhuvo bharāvahantarakau
      vande rupa-sanatanau raghu-yugau śrī-jiva-gopalakau
    `,
    transliteration: `
      कृष्णोत्कीर्तनगाननर्तनपरौ प्रेमामृतांभो-निधि
      धीराधिर-जन-प्रियौ प्रिय-करौ निर्मत्सरौ पूजितौ।
      श्री-चैतन्य-कृपा-भारौ भुवि भुवो भारवहन्तरकौ
      वन्दे रूप-सनातनौ रघु-युगौ श्री-जीव-गोपालकौ॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto the six Gosvamis, namely Sri Rupa Gosvami, Sri Sanatana Gosvami, Sri Raghunatha Bharata Gosvami, Sri Raghunatha dasa Gosvami, Sri Jiva Gosvami, and Sri Gopala Bandra Gosvami, who are always engaged in chanting the holy name of Krishna and dancing.
      They are just like the ocean of love of God, and they are popular both with the gentle and with the ruffians, because they are not envious of anyone. Whatever they do, they are all-pleasing to everyone, and they are fully blessed by Lord Caitanya. Thus they are engaged in missionary activities meant to deliver all the conditioned souls in the material universe.
    `,
    hindiTranslation: `
      मैं छह गोस्वामियों, अर्थात् श्री रूप गोस्वामी, श्री सनातन गोस्वामी, श्री रघुनाथ भट्ट गोस्वामी, श्री रघुनाथ दास गोस्वामी, श्री जीव गोस्वामी, और श्री गोपाल भट्ट गोस्वामी को सादर प्रणाम करता हूँ, जो सदा कृष्ण के पवित्र नाम का जाप और नृत्य में लीन रहते हैं।
      वे भगवान के प्रेम के सागर जैसे हैं और सज्जनों व असज्जनों में लोकप्रिय हैं, क्योंकि वे किसी से ईर्ष्या नहीं करते। वे जो करते हैं, वह सभी को प्रसन्न करने वाला है और उन पर भगवान चैतन्य का पूर्ण आशीर्वाद है। इस प्रकार वे भौतिक ब्रह्मांड में सभी बद्ध आत्माओं को मुक्ति देने के लिए मिशनरी गतिविधियों में लगे हैं।
    `,
    firstImage: "/Pranam Mantra/Shad Goswami-1.png",
    secondImage: "/Pranam Mantra/Shad Goswami-2.png"
  },
  {
    title: "Śrī Gaurāṅga Praṇāma",
    sanskrit: `
      namo mahā-vadānyāya kṛṣṇa-prema-pradāya te
      kṛṣṇāya kṛṣṇa-caitanya-nāmne gaura-tviṣe namaḥ
    `,
    transliteration: `
      नमो महा-वदान्याय कृष्ण-प्रेम-प्रदाय ते।
      कृष्णाय कृष्ण-चैतन्य-नाम्ने गौर-त्विषे नमः॥
    `,
    englishTranslation: `
      O most munificent incarnation! You are Krishna Himself appearing as Sri Krishna Caitanya Mahaprabhu. You have assumed the golden color of Srimati Radharani, and You are widely distributing pure love of Krishna. We offer our respectful obeisances unto You.
    `,
    hindiTranslation: `
      हे अतीव उदार अवतार! आप स्वयं श्रीकृष्ण हैं, जो श्रीकृष्ण चैतन्य महाप्रभु के रूप में प्रकट हुए हैं। आपने श्रीमती राधारानी का स्वर्णिम रंग धारण किया है और आप कृष्ण के शुद्ध प्रेम का व्यापक वितरण कर रहे हैं। हम आपको सादर प्रणाम करते हैं।
    `,
    firstImage: "/Pranam Mantra/Gauranga-1.png",
    secondImage: "/Pranam Mantra/Gauranga-2.png"
  },
  {
    title: "Śrī Nityānanda Praṇāma",
    sanskrit: `
      nityānandaṁ ahaṁ naumi sarvānanda-karaṁ param
      hari-nāma-pradaṁ devaṁ avadhūta-śiromaṇim
    `,
    transliteration: `
      नित्यानन्दं अहं नौमि सर्वानन्द-करं परमम्।
      हरि-नाम-प्रदं देवमवधूत-शिरोमणिम्॥
    `,
    englishTranslation: `
      I bow down to the Supreme Lord Nityānanda Prabhu, who is the awarder of the highest joy to all, the bestower of the holy name and the crest jewel of all paramahaṁsa mendicants.
    `,
    hindiTranslation: `
      मैं परम भगवान श्रीनित्यानंद प्रभु को प्रणाम करता हूँ, जो सभी को परम आनंद प्रदान करते हैं, पवित्र नाम के दाता हैं और सभी परमहंस संन्यासियों के शिरोमणि हैं।
    `,
    firstImage: "/Pranam Mantra/Nityananda-1.png",
    secondImage: "/Pranam Mantra/Nityananda-2.png"
  },
  {
    title: "Śrī Pañca-tattva Praṇāma",
    sanskrit: `
      pañca-tattvātmakaṁ kṛṣṇaṁ bhakta-rūpa-svarūpakam
      bhaktāvatāraṁ bhaktākhyaṁ namāmi bhakta-śaktikam
    `,
    transliteration: `
      पञ्च-तत्त्वात्मकं कृष्णं भक्त-रूप-स्वरूपकम्।
      भक्तावतारं भक्ताख्यं नमामि भक्त-शक्तिकम्॥
    `,
    englishTranslation: `
      I offer my obeisances unto the Supreme Lord, Krishna, who is nondifferent from His features as a devotee, devotional incarnation, manifestation, pure devotee, and devotional energy.
    `,
    hindiTranslation: `
      मैं परम भगवान कृष्ण को प्रणाम करता हूँ, जो अपने भक्त, भक्ति अवतार, प्रकटीकरण, शुद्ध भक्त और भक्ति शक्ति के रूप में अभेद हैं।
    `,
    firstImage: "/Pranam Mantra/Panchatattva-1 (2).png",
    secondImage: "/Pranam Mantra/Panchatattva-1.png"
  },
  {
    title: "Śrī Kṛṣṇa Praṇāma",
    sanskrit: `
      he kṛṣṇa karuṇā-sindho dīna-bandho jagat-pate
      gopeśa gopikā-kānta rādhā-kānta namo 'stu te
    `,
    transliteration: `
      हे कृष्ण करुणा-सिन्धो दीन-बन्धो जगत्पते।
      गोपेश गोपिकाकान्त राधाकान्त नमोऽस्तु ते॥
    `,
    englishTranslation: `
      O my dear Krishna, ocean of mercy, You are the friend of the distressed and the source of creation. You are the master of the cowherdmen and the lover of the gopis, especially Radharani. I offer my respectful obeisances unto You.
    `,
    hindiTranslation: `
      हे मेरे प्रिय कृष्ण, करुणा के सागर, आप दीनों के मित्र और सृष्टि के स्रोत हैं। आप गोपों के स्वामी और गोपियों, विशेष रूप से राधारानी के प्रेमी हैं। मैं आपको सादर प्रणाम करता हूँ।
    `,
    firstImage: "/Pranam Mantra/Krishna-1.png",
    secondImage: "/Pranam Mantra/Krishna-2.png"
  },
  {
    title: "Sambandhādhideva Praṇāma",
    sanskrit: `
      jayatāṁ suratau paṅgor mama manda-mater gatī
      mat-sarvasva-padāmbhojau rādhā-madana-mohanau
    `,
    transliteration: `
      जयतां सुरतौ पङ्गोर् मम मन्द-मतेर् गती।
      मस्-सर्वस्व-पदाम्भोजौ राधा-मदन-मोहनौ॥
    `,
    englishTranslation: `
      Glory to the all-merciful Radha and Madana-mohana! I am lame and ill advised, yet They are my directors, and Their lotus feet are everything to me.
    `,
    hindiTranslation: `
      सर्वदयालु राधा और मदन-मोहन की जय हो! मैं लंगड़ा और मूर्ख हूँ, फिर भी वे मेरे मार्गदर्शक हैं, और उनके चरण कमल मेरे लिए सब कुछ हैं।
    `,
    firstImage: "/Pranam Mantra/Sambandha-1.png",
    secondImage: "/Pranam Mantra/Sambandha-2.png"
  },
  {
    title: "Abhidheyādhideva Praṇāma",
    sanskrit: `
      dīvyad-vṛndāraṇya-kalpa-drumādhaḥ
      śrīmad-ratnāgāra-siṁhāsana-sthau
      śrīmad-rādhā-śrīla-govinda-devau
      preṣṭhālībhiḥ sevyamānau smarāmi
    `,
    transliteration: `
      दीव्याद् वृन्दारण्य कल्प-द्रुमाधः
      श्रीमद् रत्नागार-सिंहासन-स्थौ।
      श्रीमद् राधा श्रील गोविन्द देवौ
      प्रेष्ठालीभिः सेव्यमानौ स्मरामि॥
    `,
    englishTranslation: `
      In Vrindavan, in a temple of jewels, beneath a desire tree, Sri Sri Radha-Govinda, served by Their most confidential associates, sit upon an effulgent throne. I offer my most humble obeisances unto Them.
    `,
    hindiTranslation: `
      वृंदावन में, रत्नों के मंदिर में, इच्छा वृक्ष के नीचे, श्री श्री राधा-गोविंद, अपने सबसे गोपनीय सहयोगियों द्वारा सेवित, एक दीप्तिमान सिंहासन पर विराजमान हैं। मैं उन्हें अपनी अत्यंत विनम्र श्रद्धांजलि अर्पित करता हूँ।
    `,
    firstImage: "/Pranam Mantra/Abhidheya-1.png",
    secondImage: "/Pranam Mantra/Abhidheya-1 (2).png"
  },
  {
    title: "Prayojanādhideva Praṇāma",
    sanskrit: `
      śrīmān rāsa-rasārambhī vaṁśī-vaṭa-taṭa-sthitaḥ
      karṣan veṇu-svanair gopīr gopīnāthaḥ śriye 'stu naḥ
    `,
    transliteration: `
      श्रीमान् रास रसारम्भी वंशीवट-तटस्थितः।
      कर्षन् वेणुस्वनैर् गोपीर् गोपीनाथः श्रीये नस्तु नः॥
    `,
    englishTranslation: `
      Sri Srila Gopīnātha, who originated the transcendental mellow of the rasa dance, stands on the shore in Vaṁśīvaṭa and attracts the attention of the cowherd damsels with the sound of His celebrated flute. May they all confer upon us their benediction.
    `,
    hindiTranslation: `
      श्री श्रील गोपीनाथ, जिन्होंने रास नृत्य के पारलौकिक मधुरता की उत्पत्ति की, वंशीवट में तट पर खड़े हैं और अपनी प्रसिद्ध बांसुरी की ध्वनि के साथ चरवाही बालिकाओं का ध्यान आकर्षित करते हैं। वे सभी हमें अपना आशीर्वाद प्रदान करें।
    `,
    firstImage: "/Pranam Mantra/Prayojana-1.png",
    secondImage: "/Pranam Mantra/Prayojana-2.png"
  },
  {
    title: "Śrī Rādhā Praṇāma",
    sanskrit: `
      tapta-kāñcana-gaurāṅgi rādhe vṛndāvaneśvari
      vṛṣabhānu-sute devī praṇamāmi hari-priye
    `,
    transliteration: `
      तप्त-कांचन गौरांगी राधे वृन्दावनेश्वरी।
      वृषभानु सुते देवी प्रणमामि हरि-प्रिये॥
    `,
    englishTranslation: `
      I offer my respects to Rādhārāṇī, whose bodily complexion is like molten gold and who is the Queen of Vṛndāvana. You are the daughter of King Vṛṣabhānu, and You are very dear to Lord Kṛṣṇa.
    `,
    hindiTranslation: `
      मैं राधारानी को प्रणाम करता हूँ, जिनकी देह की आभा पिघले स्वर्ण के समान है और जो वृंदावन की रानी हैं। आप राजा वृषभानु की पुत्री हैं और भगवान कृष्ण की अति प्रिय हैं।
    `,
    firstImage: "/Pranam Mantra/Radharani-1.png",
    secondImage: "/Pranam Mantra/Radharani-2.png"
  },
  {
    title: "Śrī Balarāma Praṇāma",
    sanskrit: `
      namaste halagraha namaste musalayudha
      namaste revati-kanta namaste bhakta-vatsala
    `,
    transliteration: `
      नमस्ते हलग्रह नमस्ते मूसलायुध।
      नमस्ते रेवती-कान्त नमस्ते भक्त-वत्सल॥
    `,
    englishTranslation: `
      Obeisances to You, O holder of the plow. Obeisances to You, O wielder of the mace. Obeisances to You, O darling of Revati. Obeisances to You, O kind benefactor of Your devotees.
    `,
    hindiTranslation: `
      आपको नमस्ते, हे हल धारण करने वाले! आपको नमस्ते, हे गदा धारण करने वाले! आपको नमस्ते, हे रेवती के प्रियतम! आपको नमस्ते, हे अपने भक्तों के दयालु हितकारी!
    `,
    firstImage: "/Pranam Mantra/Balarama-1.png",
    secondImage: "/Pranam Mantra/Balarama-2.png"
  },
  {
    title: "Śrī Narasiṁha Praṇāma",
    sanskrit: `
      śrī-nṛsiṁha jaya nṛsiṁha jaya jaya nṛsiṁha
      prahlādeśa jaya padmā-mukha-padma-bhṛṅga
    `,
    transliteration: `
      श्री-नृसिंह जय नृसिंह जय जय नृसिंह।
      प्रह्लादेश जय पद्मा-मुख-पद्म-भृङ्ग॥
    `,
    englishTranslation: `
      All glories to Nṛsiṁhadeva! All glories to Nṛsiṁhadeva, who is the Lord of Prahlāda Mahārāja and, like a honeybee, is always engaged in beholding the lotus-like face of the goddess of fortune.
    `,
    hindiTranslation: `
      नृसिंहदेव की सर्व जय हो! नृसिंहदेव की जय हो, जो प्रह्लाद महाराज के स्वामी हैं और भँवरों की तरह सदा लक्ष्मी देवी के कमल जैसे मुख का दर्शन करते हैं।
    `,
    firstImage: "/Pranam Mantra/Narasimha-1.png",
    secondImage: "/Pranam Mantra/Narasimha-2.png"
  },
  {
    title: "Śrī Rāma Praṇāma",
    sanskrit: `
      rāmāya rāmabhadrāya rāmacandrāya vedhase
      raghunāthāya nāthāya sītāyāḥ pataye namaḥ
    `,
    transliteration: `
      रामाय रामभद्राय रामचन्द्राय वेधसे।
      रघुनाथाय नाथाय सीतायाः पतये नमः॥
    `,
    englishTranslation: `
      Salutations to Rama who is also known as Ramabhadra and Ramachandra, who is mentioned in Vedas as the greatest lord of Raghuvansha and the whole world, and who is the consort of Sita.
    `,
    hindiTranslation: `
      राम को नमस्ते, जो रामभद्र और रामचन्द्र के नाम से भी जाने जाते हैं, जिन्हें वेदों में रघुवंश और समस्त विश्व के महानतम स्वामी के रूप में उल्लिखित हैं, और जो सीता के पति हैं।
    `,
    firstImage: "/Pranam Mantra/Rama-1.png",
    secondImage: "/Pranam Mantra/Rama-2.png"
  },
  {
    title: "Śrī Jagannātha Praṇāma",
    sanskrit: `
      nīlācala-nivāsāya nityāya paramātmane
      balabhadra-subhadrābhyāṁ jagannāthāya te namaḥ
    `,
    transliteration: `
      नीलाचल-निवासाय नित्याय परमात्मने।
      बलभद्र-सुभद्राभ्यां जगन्नाथाय ते नमः॥
    `,
    englishTranslation: `
      I offer obeisance unto the eternal Supreme Soul, Jagannātha Svāmī, who resides in Nīlācala with His brother, Balabhadra, and His sister, Subhadrā-devī.
    `,
    hindiTranslation: `
      मैं अनंत परमात्मा, जगन्नाथ स्वामी को प्रणाम करता हूँ, जो नीलाचल में अपने भाई बलभद्र और बहन सुभद्रा-देवी के साथ निवास करते हैं।
    `,
    firstImage: "/Pranam Mantra/Jagannatha-1.png",
    secondImage: "/Pranam Mantra/Jagannatha-2.png"
  },
  {
    title: "Śrī Vishnu Praṇāma",
    sanskrit: `
      shantakaram bhujagashayanam padmanabham suresham
      vishvadharam gaganasadrusham meghavarnam shubhangam
      lakshmikantam kamalanayanam yogibhirdhyanagamyam
      vande vishnum bhava-bhaya-haram sarva-lokaikanatham
    `,
    transliteration: `
      शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्।
      विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।
      लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यम्।
      वन्दे विष्णुं भव-भय-हरं सर्व-लोकैकनाथम्॥
    `,
    englishTranslation: `
      I bow to Lord Vishnu, who has a peaceful appearance, who rests on the serpents, who has a lotus-shaped navel, who is Lord of the gods, who supports the universe, whose vision exceeds beyond all skies, who is dark like a cloud, who has beautiful limbs, who is the husband of Goddess Lakshmi, whose eyes are like lotus, who is meditated upon by sages, who removes fears and sorrows, and who is the lord of all worlds.
    `,
    hindiTranslation: `
      मैं भगवान विष्णु को प्रणाम करता हूँ, जिनका स्वरूप शांत है, जो शेषनाग पर शयन करते हैं, जिनकी नाभि कमल के आकार की है, जो देवताओं के स्वामी हैं, विश्व के आधार हैं, जिनकी दृष्टि आकाश से परे जाती है, जो मेघ के समान श्याम हैं, जिनके अंग शुभ हैं, जो लक्ष्मी के पति हैं, जिनकी आँखें कमल के समान हैं, जिनका ध्यान योगी करते हैं, जो भव-भय को हरते हैं और जो सभी लोकों के एकमात्र नाथ हैं।
    `,
    firstImage: "/Pranam Mantra/Vishnu-1.png",
    secondImage: "/Pranam Mantra/Vishnu-2.png"
  },
  {
    title: "Śrī Govardhan Praṇāma",
    sanskrit: `
      namaste girirajaya sri govardhana namine
      ashesha klesha nashaya paramananda dayine
    `,
    transliteration: `
      नमस्ते गिरिराजाय श्री गोवर्धन नामिने।
      अशेष क्लेश नाशाय परमानन्द दायिने॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto the king of all hills, Govardhana Hill, which is the source of enjoyment for the senses, land, and cows. He is a servant of Krishna and is Krsna Himself. He puts an end to unlimited sufferings and bestows supreme bliss.
    `,
    hindiTranslation: `
      मैं सभी पहाड़ियों के राजा, गोवर्धन पर्वत को सादर प्रणाम करता हूँ, जो इंद्रियों, भूमि और गायों के लिए आनंद का स्रोत हैं। वे कृष्ण के सेवक हैं और स्वयं कृष्ण हैं। वे अनंत दुखों का अंत करते हैं और परम आनंद प्रदान करते हैं।
    `,
    firstImage: "/Pranam Mantra/Govardhan-1.png",
    secondImage: "/Pranam Mantra/Govardhan-2.png"
  },
  {
    title: "Śrī Tulasi Praṇāma",
    sanskrit: `
      vṛndāyai tulasī-devyai priyāyai keśavasya ca
      viṣṇu-bhakti-prade devī satya vatyai namo namaḥ
    `,
    transliteration: `
      वृन्दायै तुलसी-देव्यै प्रियायै केशवस्य च।
      विष्णु-भक्ति-प्रदे देवी सत्य वत्यै नमो नमः॥
    `,
    englishTranslation: `
      I offer my repeated obeisances unto Vrnda, Srimati Tulasi Devi, who is very dear to Lord Kesava. O goddess, you bestow devotional service to Lord Krsna and possess the highest truth.
    `,
    hindiTranslation: `
      मैं वृंदा, श्रीमती तुलसी देवी को बार-बार प्रणाम करता हूँ, जो भगवान केशव को अति प्रिय हैं। हे देवी, आप भगवान कृष्ण की भक्ति प्रदान करती हैं और सर्वोच्च सत्य की स्वामिनी हैं।
    `,
    firstImage: "/Pranam Mantra/Tulasi-1.png",
    secondImage: "/Pranam Mantra/Tulasi-2.png"
  },
  {
    title: "Śrī Vrindavan Dham Praṇāma",
    sanskrit: `
      ānanda-vṛnda-parituṇḍīlam indirāyā
      ānanda-vṛnda-parinandita-nanda-pūtraṁ
      govinda-sundara-vadhū-parinanditaṁ tad
      vṛndāvanaṁ madhura-mūrtam aham namāmi
      jayati jayati vṛndāraṇyam etanmurāreḥ
      priyatamam atisādhusvāntavaikuṇṭhavāsāt
      ramayati sa sadā gāḥ pālayan yatra gopīḥ
      svaritamadhuraveṇurvārddhayan prema rāse
    `,
    transliteration: `
      आनन्द-वृन्द-परितुण्डीलमिन्दिरायाः
      आनन्द-वृन्द-परिनन्दित-नन्द-पुत्रम्।
      गोविन्द-सुन्दर-वधू-परिनन्दितं तद्
      वृन्दावनं मधुर-मूर्तम अहं नमामि॥
      जयति जयति वृन्दारण्यं एतन्मुरारेः
      प्रियतममति साधुस्वान्तवैकुण्ठवासात्।
      रमयति स सदा गाः पालयन् यत्र गोपीः
      स्वरितमधुरवेणुर्वर्धयन् प्रेम रासे॥
    `,
    englishTranslation: `
      I worship Śrī Vṛndāvana, the abode of Śrīmatī Rādhārāṇī, which gives ever-increasing, overflowing bliss to the Son of Nanda Mahārāja. There the beautiful damsels of Vraja increase the bliss of Lord Govinda even more, making Vṛndāvana the embodiment of all sweetness.
      All glories, all glories to this Vrindavan, which is the most dear to Lord Murari, more pleasing than the saintly heart’s residence in Vaikuntha. There He always tends the cows, protects the gopis, and with His sweet flute increases love in the rasa dance.
    `,
    hindiTranslation: `
      मैं श्री वृंदावन की पूजा करता हूँ, जो श्रीमती राधारानी का धाम है, जो नंद महाराज के पुत्र को निरंतर बढ़ता हुआ, उमड़ता हुआ आनंद देता है। वहाँ व्रज की सुंदर कन्याएँ भगवान गोविंद के आनंद को और बढ़ाती हैं, जिससे वृंदावन सारी मधुरता का अवतार बन जाता है।
      इस वृंदावन की सारी जय, सारी जय, जो भगवान मुरारी को अति प्रिय है, जो संतों के हृदय की वैकुंठवास से भी अधिक रमणीय है। वहाँ वे सदा गायों की रक्षा करते हैं, गोपियों की देखभाल करते हैं, और अपनी मधुर बांसुरी से रास में प्रेम को बढ़ाते हैं।
    `,
    firstImage: "/Pranam Mantra/Vrindavan Dham-1.png",
    secondImage: "/Pranam Mantra/Vrindavan Dham-2.png"
  },
  {
    title: "Śrī Nabadwip Dham Praṇāma",
    sanskrit: `
      navīna-śrī-bhaktiṁ nava-kanaka-gaurākṛtī-patiṁ
      navāraṇya-śreṇī-nava-sūra-saridvāt valitaṁ
      navīna-śrī-rādhā-hari-rasa-mayotkīrtana-vidhiṁ
      navadvīpaṁ vande nava-karuṇāmādyan nava-ruciṁ
    `,
    transliteration: `
      नवीना-श्री-भक्तिं नव-कनक-गौराकृती-पतिम्।
      नवारण्य-श्रेणी-नव-सूर-सारिद्वात वलितम्।
      नवीना-श्री-राधा-हरि-रस-मयोत्कीर्तन-विधिम्।
      नवद्वीपं वन्दे नव-करुणामाद्यन् नव-रुचिम्॥
    `,
    englishTranslation: `
      I bow down to Śrī Navadvīpa, the transcendental land which is filled with forests ever cooled by fresh breezes from the Gaṅgā, where newly born devotion manifests by the unprecedented mercy of the Lord of golden complexion, and which bestows the ever-fresh mellow of loud glorification of Rādhā-Kṛṣṇa in Their highest ecstasy (mahā-bhāva).
    `,
    hindiTranslation: `
      मैं श्री नवद्वीप को प्रणाम करता हूँ, जो पारलौकिक भूमि है, जो गंगा की ताजी हवाओं से ठंडे जंगलों से भरी है, जहाँ स्वर्णिम रंग के भगवान की अभूतपूर्व कृपा से नवजात भक्ति प्रकट होती है, और जो राधा-कृष्ण की सर्वोच्च परमानंद (महाभाव) में उनकी उच्च स्वर में कीर्तन की सदा ताजा मधुरता प्रदान करता है।
    `,
    firstImage: "/Pranam Mantra/Nabadwipa Dham-1.png",
    secondImage: "/Pranam Mantra/Nabadwipa Dham-2.png"
  },
  {
    title: "Śrī Garuda Praṇāma",
    sanskrit: `
      kumkumāṅkita varṇāya kundendu dhavalāya ca
      viṣṇu vāhana namastubhyam pakṣirājāya te namaḥ
    `,
    transliteration: `
      कुङ्कुमाङ्कितवर्णाय कुन्देन्दुधवलाय च।
      विष्णुवाहन नमस्तुभ्यं पक्षिराजाय ते नमः॥
    `,
    englishTranslation: `
      Obeisances to you whose complexion is adorned with the color of kumkuma (saffron), who shines with the brightness of white jasmine and the full moon. O vehicle of Lord Vishnu, salutations to you, O king of birds!
    `,
    hindiTranslation: `
      जिनका रंग कुमकुम से अलंकृत है, जो कुंद (सफेद फूल) और चंद्रमा के समान उज्ज्वल हैं, उन विष्णु भगवान के वाहन आपको नमस्कार है, हे पक्षिराज (पक्षियों के राजा), आपको बार-बार प्रणाम!
    `,
    firstImage: "/Pranam Mantra/Garuda-1.png",
    secondImage: "/Pranam Mantra/Garuda-2.png"
  },
  {
    title: "Śrī Hanuman Praṇāma",
    sanskrit: `
      manojavam marut tulya vegam
      jitendriyam buddhimatāṁ variṣṭham
      vātātmajam vānarayūtha mukhyam
      śrī rāma dūtaṁ śaraṇaṁ prapadye
    `,
    transliteration: `
      मनोजवं मारुत्तुल्यवेगं
      जितेन्द्रियं बुद्धिमतां वरिष्ठम्।
      वातात्मजं वानरयूथमुख्यं
      श्रीरामदूतं शरणं प्रपद्ये॥
    `,
    englishTranslation: `
      I take refuge in Sri Hanuman. Let me pray and salute to the one who is swift as thought, who is more powerful than the wind, who has conquered his senses, best among the wise, the son of the wind-god, the commander of the army of devotees. To that Lord Sri Rama’s messenger, the incomparable Hanuman, let me seek refuge.
      `,
    hindiTranslation: `
      जो मन की गति के समान तीव्र और वायु के समान वेगशाली हैं, जिन्होंने इन्द्रियों पर विजय प्राप्त की, जो बुद्धिमानों में श्रेष्ठ हैं, पवन देव के पुत्र हैं, वानर सेना के प्रमुख हैं और श्री राम के दूत हैं — ऐसे हनुमान जी की मैं शरण लेता हूँ।
      `,
    firstImage: "/Pranam Mantra/Hanuman-1.png",
    secondImage: "/Pranam Mantra/Hanuman-2.png"
  },
  {
    title: "Śrī Pañca-tattva Mahā-mantra",
    sanskrit: `
      jaya śrī-kṛṣṇa-caitanya prabhu-nityānanda
      śrī-advaita gadādhara śrīvāsādi-gaura-bhakta vṛnda
    `,
    transliteration: `
      (जय) श्री-कृष्ण-चैतन्य प्रभु नित्यानन्द।
      श्री-अद्वैत गदाधर श्रीवासादि-गौर-भक्त-वृन्द॥
    `,
    englishTranslation: `
      Sri Caitanya Mahaprabhu is always accompanied by His plenary expansion Sri Nityananda Prabhu, His incarnation Sri Advaita Prabhu, His internal potency Sri Gadādhara Prabhu, and His marginal potency Srīvāsa Prabhu. He is in the midst of them as the Supreme Personality of Godhead.
    `,
    hindiTranslation: `
      श्री चैतन्य महाप्रभु हमेशा अपने पूर्ण विस्तार श्री नित्यानंद प्रभु, अपने अवतार श्री अद्वैत प्रभु, अपनी आंतरिक शक्ति श्री गदाधर प्रभु, और अपनी सीमांत शक्ति श्रीवास प्रभु के साथ हैं। वे उनके बीच भगवान के परम व्यक्तित्व के रूप में हैं।
    `,
    firstImage: "/Pranam Mantra/Panchatattva-2 (2).png",
    secondImage: "/Pranam Mantra/Panchatattva-2.png"
  },
  {
    title: "Hare Kṛṣṇa Mahā-mantra",
    sanskrit: `
      hare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare
      hare rāma hare rāma rāma rāma hare hare
    `,
    transliteration: `
      हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।
      हरे राम हरे राम राम राम हरे हरे॥
    `,
    englishTranslation: `
      Dear Krishna, O energy of the Lord! Please engage me in Your service. (A devotee humbly requesting the supreme lordships to engage him/her in their Devotional Service)
    `,
    hindiTranslation: `
      प्रिय कृष्ण, हे भगवान की शक्ति! कृपया मुझे आपकी सेवा में लगाएँ। (एक भक्त विनम्रतापूर्वक परम प्रभु से उनकी भक्ति सेवा में लगाने की प्रार्थना करता है)
    `,
    firstImage: "/Pranam Mantra/HK Mahamantra-1.png",
    secondImage: "/Pranam Mantra/HK Mahamantra-2.png"
  },
  {
    title: "Śrī Vaiṣṇava Praṇāma",
    sanskrit: `
      vāñchā-kalpatarubhyaś ca kṛpā-sindhubhya eva ca
      patitānāṁ pāvanebhyo vaiṣṇavebhyo namo namaḥ
    `,
    transliteration: `
      वाञ्छा-कल्पतरुभ्यश्च कृपा-सिन्धुभ्य एव च।
      पतितानां पावनेभ्यो वैष्णवेभ्यो नमो नमः॥
    `,
    englishTranslation: `
      I offer my respectful obeisances unto all the Vaishnava devotees of the Lord. They are just like desire trees who can fulfill the desires of everyone, and they are full of compassion for the fallen conditioned souls.
    `,
    hindiTranslation: `
      मैं भगवान के सभी वैष्णव भक्तों को सादर प्रणाम करता हूँ। वे कल्पवृक्ष की तरह हैं जो हर किसी की इच्छाओं को पूरा कर सकते हैं, और वे पतित बद्ध आत्माओं के लिए करुणा से भरे हुए हैं।
    `,
    firstImage: "/Pranam Mantra/Vaishnava-1.png",
    secondImage: "/Pranam Mantra/Vaishnava-2.png"
  },
  {
    title: "Prasadam Honoring Mantra",
    sanskrit: `
      mahā-prasāde govinde
      nama-brahmaṇi vaiṣṇave
      svalpa-puṇya-vatāṁ rājan
      viśvāso naiva jāyate
      śarīra avidyā-jāl
      jaḍendriya tahe kāl
      jīve phele viṣaya-sāgore
      tā’ra madhye jihvā ati
      lobhamoy sudurmati
      tā’ke jeta kathina saṁsāre
      kṛṣṇa baṛo doyāmoy
      koribāre jihvā jay
      swa-prasāda-anna dilo bhāi
      sei annāmṛta pāo
      rādhā-kṛṣṇa-guṇa gāo
      preme ḍāko caitanya-nitai
    `,
    transliteration: `
      महाप्रसादे गोविन्दे नाम-ब्रह्मणि वैष्णवे।
      स्वल्पपुण्यवतां राजन् विश्वासो नैव जायते॥
      शरीर अविद्या जाल, जडेन्द्रिय ताहे काल,
      जीवे फेले विषय-सागरे।
      तारमध्ये जिह्वा अति, लोभमय सुदुर्मति,
      ताके जेता कठिन संसारे॥
      कृष्ण बड़ दयामय, करिबारे जिह्वा जय,
      स्वप्रसाद-अन्न दिलो भाई।
      सेइ अन्नामृत पाओ, राधाकृष्ण-गुण गाओ,
      प्रेमे डाक चैतन्य-निताई॥
    `,
    englishTranslation: `
      O King, for those who have amassed very few pious activities, their faith in mahā-prasāda, in Sri Govinda, in the Holy Name, and in the Vaishnava is never born.
      This material body is a network of ignorance, and the senses are one’s deadly enemies, for they throw the soul into this ocean of material sense enjoyment. Among those senses, the tongue is the most voracious and uncontrollable; it is very difficult to conquer the tongue in this world.
      Lord Krishna is very merciful and has given us the remnants of His own food just to control the tongue. Now please accept that nectarean Krishna-prasāda and sing the glories of Their Lordships Sri Sri Radha and Krishna, and in love call out “Chaitanya Nitai!”.
    `,
    hindiTranslation: `
      हे राजन, जिनके पास बहुत कम पुण्य कर्म हैं, उनमें महाप्रसाद, श्री गोविंद, पवित्र नाम और वैष्णव में विश्वास कभी नहीं जन्म लेता।
      यह भौतिक शरीर अज्ञान का जाल है, और इन्द्रियाँ जीव की घातक शत्रु हैं, क्योंकि वे जीव को भौतिक विषय भोग के सागर में फेंक देती हैं। उन इन्द्रियों में जिह्वा अत्यंत लोभी और अनियंत्रित है; इस संसार में जिह्वा को जीतना बहुत कठिन है।
      भगवान कृष्ण अत्यंत दयालु हैं और उन्होंने जिह्वा को नियंत्रित करने के लिए अपना प्रसाद दिया है। अब कृपया उस अमृतमय कृष्ण-प्रसाद को ग्रहण करें, श्री श्री राधा और कृष्ण के गुणों का गुणगान करें, और प्रेम से “चैतन्य निताई!” पुकारें।
    `,
    firstImage: "/Pranam Mantra/64.png",
    secondImage: "/Pranam Mantra/64.png"
  },
];

const PranamMantra: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getDirectImageUrl = (url: string) => {
    const idMatch = url.match(/\/d\/([^/]+)/) || url.match(/id=([^&]+)/);
    if (idMatch) {
      return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
    }
    return url;
  };

  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-yellow-100 via-pink-50 to-white pb-12">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 tracking-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-amber-600 bg-clip-text text-transparent">
            Śrī Pranāma Mantras
          </span>
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Explore the sacred Pranāma Mantras with beautiful visuals, Sanskrit, English, and Hindi meanings. Click on each tab to reveal the glory of our spiritual tradition.
        </p>

        {/* Tab Buttons */}
        <div className="relative mb-10">
          <div className="relative overflow-x-auto scrollbar-hide">
            <div className="flex space-x-3 px-6 py-4 bg-white/90 shadow-xl rounded-2xl border border-yellow-200 w-max min-w-full">
              {pranamMantras.map((mantra, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap px-4 py-2 text-sm md:text-base font-medium rounded-full border transition-all duration-200
                    ${
                      activeTab === index
                        ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-white border-yellow-600"
                        : "bg-white text-yellow-900 border-yellow-200 hover:bg-yellow-50 hover:border-yellow-400"
                    }`}
                >
                  {mantra.title}
                </button>
              ))}
            </div>
          </div>
          {/* Left Gradient Mask */}
          <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-yellow-100 to-transparent pointer-events-none rounded-l-2xl" />
          {/* Right Gradient Mask */}
          <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-yellow-100 to-transparent pointer-events-none rounded-r-2xl" />
        </div>

        {/* Mantra Card - Redesigned */}
        <div className="relative bg-white/95 rounded-3xl shadow-2xl overflow-hidden border border-yellow-200">
          {/* Decorative floating icons */}
          <div className="absolute -top-6 left-8 text-5xl opacity-20 pointer-events-none select-none">🌸</div>
          <div className="absolute -bottom-6 right-8 text-5xl opacity-20 pointer-events-none select-none">🪔</div>
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-200 to-transparent rounded-br-3xl z-10" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-200 to-transparent rounded-tl-3xl z-10" />

          <div className="p-6 md:p-12">
            {/* Mantra Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-8 text-center tracking-wide drop-shadow">
              {pranamMantras[activeTab].title}
            </h2>

            {/* Images and Text Sections */}
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* Left: English Section */}
              <div className="flex-1 flex flex-col gap-4 items-center">
                <div className="relative w-full">
                  <img
                    src={getDirectImageUrl(pranamMantras[activeTab].firstImage) || "https://via.placeholder.com/675x225?text=First+Image+Not+Found"}
                    alt={`${pranamMantras[activeTab].title} - First`}
                    className="w-full h-[32rem] object-cover rounded-2xl border-4 border-yellow-300 shadow-xl bg-yellow-50 hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-yellow-400/80 text-white text-xs px-3 py-1 rounded-full shadow">English</span>
                </div>
                <div className="bg-yellow-50 rounded-xl p-5 shadow-inner border border-yellow-100 w-full">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                    <span className="text-xl">🕉️</span> Sanskrit (English Script)
                  </h3>
                  <pre className="whitespace-pre-wrap text-gray-900 font-mono text-base mb-2">{pranamMantras[activeTab].sanskrit}</pre>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1 flex items-center gap-2">
                    <span className="text-xl">🌿</span> English Translation
                  </h3>
                  <pre className="whitespace-pre-wrap text-gray-900 font-sans text-base">{pranamMantras[activeTab].englishTranslation}</pre>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:flex flex-col justify-center items-center px-4">
                <div className="w-1 h-40 bg-gradient-to-b from-yellow-200 via-pink-200 to-yellow-200 rounded-full" />
                <span className="text-3xl mt-2 mb-2">✦</span>
              </div>

              {/* Right: Hindi Section */}
              <div className="flex-1 flex flex-col gap-4 items-center">
                <div className="relative w-full">
                  <img
                    src={getDirectImageUrl(pranamMantras[activeTab].secondImage) || "https://via.placeholder.com/675x225?text=Second+Image+Not+Found"}
                    alt={`${pranamMantras[activeTab].title} - Second`}
                    className="w-full h-[32rem] object-cover rounded-2xl border-4 border-pink-200 shadow-xl bg-pink-50 hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-pink-400/80 text-white text-xs px-3 py-1 rounded-full shadow">हिंदी</span>
                </div>
                <div className="bg-pink-50 rounded-xl p-5 shadow-inner border border-pink-100 w-full">
                  <h3 className="text-lg font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔱</span> हिंदी श्लोक
                  </h3>
                  <pre className="whitespace-pre-wrap text-gray-900 font-mono text-base mb-2">{pranamMantras[activeTab].transliteration}</pre>
                  <h3 className="text-lg font-semibold text-green-700 mb-1 flex items-center gap-2">
                    <span className="text-xl">🌱</span> हिंदी अनुवाद
                  </h3>
                  <pre className="whitespace-pre-wrap text-gray-900 font-sans text-base">{pranamMantras[activeTab].hindiTranslation}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center my-12">
          <div className="w-40 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-300 to-amber-600 shadow-lg" />
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8">
          <blockquote className="italic text-2xl text-yellow-700 font-semibold drop-shadow-md max-w-2xl mx-auto">
            “Chanting and remembering these mantras brings divine blessings and spiritual upliftment.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default PranamMantra;