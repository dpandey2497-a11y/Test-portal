// questions.js — TestChakra Database (Test 01 & Test 02 with deep explanations)

// ==========================================
// TEST 01: OCTOBER 2026 (Q. 1 to 100)
// ==========================================
var CA_OCT_2026_T1 = [
  {
    q: "1. केन्द्रीय मंत्रिमण्डल की आर्थिक कार्य समिति द्वारा विपणन सत्र 2027-28 के लिए रबी फसलों के न्यूनतम समर्थन मूल्य (MSP) में सबसे अधिक वृद्धि किस फसल पर की गई है?",
    q_en: "1. Which Rabi crop witnessed the highest increase in Minimum Support Price (MSP) approved by the Cabinet Committee on Economic Affairs for the 2027-28 marketing season?",
    opts: ["कुसुम", "सरसों और खसखस", "मसूर", "जौ"],
    opts_en: ["Safflower", "Mustard & Rapeseed", "Lentil (Masur)", "Barley"],
    ans: 1,
    exp: "विपणन सत्र 2027-28 के लिए रबी फसलों के MSP में सर्वाधिक वृद्धि सरसों और खसखस (Mustard & Rapeseed) पर दर्ज की गई है। यह निर्णय दलहन और तिलहन उत्पादन में आत्मनिर्भरता को प्रोत्साहित करने के उद्देश्य से लिया गया।"
  },
  {
    q: "2. PM-DHARA (PM-Developing Harmonized and Accelerated Renewable-energy Access) योजना के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "2. Identify the correct statement regarding PM-DHARA Scheme:",
    opts: ["₹1,86,405 करोड़ का कुल परिव्यय है।", "इस मेगा प्रोजेक्ट में 135 GW रिन्यूएबल एनर्जी इवेक्यूएशन विकसित करना है।", "इसके अंतर्गत 50 GWh बैटरी स्टोरेज सिस्टम विकसित किया जाएगा।", "उपरोक्त में से एक से अधिक।"],
    opts_en: ["Total outlay is ₹1,86,405 crore.", "The project aims to develop 135 GW renewable energy evacuation.", "50 GWh battery storage capacity will be developed.", "More than one of the above."],
    ans: 3,
    exp: "PM-DHARA योजना भारत के ग्रिड एकीकरण को सशक्त बनाने के लिए 135 GW रिन्यूएबल एनर्जी इवेक्यूएशन तथा 50 GWh बैटरी एनर्जी स्टोरेज सिस्टम (BESS) के विकास को सम्मिलित करती है।"
  },
  {
    q: "3. हाल ही में झारखंड को किस पारंपरिक लोक ताल वाद्य यंत्र के लिए भौगोलिक संकेतक (GI Tag) प्राप्त हुआ?",
    q_en: "3. Recently, Jharkhand received a GI Tag for which traditional folk percussion musical instrument?",
    opts: ["मांदर", "कुचाई सिल्क साड़ी", "केसरिया कलाकंद", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Mandar", "Kuchai Silk Saree", "Kesaria Kalakand", "More than one of the above"],
    ans: 0,
    exp: "झारखंड के आदिवासी और लोक नृत्यों (जैसे करमा, सरहुल) में प्रमुखता से प्रयुक्त होने वाले पारंपरिक ताल वाद्य 'मांदर' को बौद्धिक संपदा संरक्षण हेतु प्रतिष्ठित GI Tag प्रदान किया गया।"
  },
  {
    q: "4. खाद्य और कृषि संगठन (FAO) की वानिकी समिति के 28वें सत्र (COFO-28) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "4. Identify the correct statement regarding COFO-28:",
    opts: ["आयोजन 28 सितंबर से 2 अक्टूबर 2026 तक रोम, इटली में किया गया।", "विषय 'भोजन, लचीलापन और समृद्धि के लिए वन' है।", "भारत का कुल वन और वृक्ष आवरण कुल भौगोलिक क्षेत्रफल का 25.17% है।", "उपरोक्त में से एक से अधिक।"],
    opts_en: ["Held from Sept 28 to Oct 2, 2026 in Rome, Italy.", "Theme: 'Forests for Food, Resilience, and Prosperity'.", "India's forest and tree cover stands at 25.17% of total area.", "More than one of the above."],
    ans: 3,
    exp: "COFO-28 का आयोजन रोम (इटली) में हुआ जिसमें खाद्य सुरक्षा, वनों की संधारणीयता और जलवायु लचीलेपन पर वैश्विक नीतियां निर्धारित की गईं।"
  },
  {
    q: "5. हाल ही में माइक्रोसॉफ्ट ने भारत में अपना चौथा क्लाउड क्षेत्र कहाँ शुरू किया है?",
    q_en: "5. Where did Microsoft recently launch its fourth cloud region in India?",
    opts: ["पुणे", "चेन्नई", "मुंबई", "हैदराबाद"],
    opts_en: ["Pune", "Chennai", "Mumbai", "Hyderabad"],
    ans: 3,
    exp: "माइक्रोसॉफ्ट ने पुणे, मुम्बई और चेन्नई के पश्चात हैदराबाद में अपना चौथा हाइपरस्केल डेटा सेंटर और क्लाउड रीजन स्थापित किया है।"
  },
  {
    q: "6. संयुक्त राष्ट्र सुरक्षा परिषद में सुधार से संबंधित 'L-69' किन देशों का समूह है?",
    q_en: "6. 'L-69' group regarding UN Security Council reforms represents which countries?",
    opts: ["विकासशील देशों का अंतर क्षेत्रीय समूह", "विकसित देशों का अंतर क्षेत्रीय समूह", "अफ्रीकी संघ के दस देशों का समूह", "यूरोपीय संघ के दस देशों का समूह"],
    opts_en: ["Cross-regional group of developing countries", "Cross-regional group of developed countries", "Group of 10 African Union nations", "Group of 10 European Union nations"],
    ans: 0,
    exp: "L-69 एशिया, अफ्रीका, लैटिन अमेरिका और छोटे द्वीपीय विकासशील राष्ट्रों (SIDS) का समूह है, जो UNSC की स्थायी व अस्थायी सदस्यता में विस्तार की जोरदार वकालत करता है।"
  },
  {
    q: "7. FIDE रेटिंग में शामिल होने वाली भारत की सबसे कम उम्र की चेस प्लेयर कौन बन गई हैं?",
    q_en: "7. Who became the youngest Indian chess player to be included in FIDE ratings?",
    opts: ["एलेना मिश्रा", "मरियम फातिमा", "डी. गुकेश", "आर. प्रज्ञानंदा"],
    opts_en: ["Elena Mishra", "Maryam Fatima", "D. Gukesh", "R. Praggnanandhaa"],
    ans: 0,
    exp: "एलेना मिश्रा ने बेहद कम उम्र में अंतरराष्ट्रीय शतरंज महासंघ (FIDE) की आधिकारिक रेटिंग हासिल कर इतिहास रचा।"
  },
  {
    q: "8. थीम 'शेयर्ड स्टोरीज, शेयर्ड फ्यूचर्स' के साथ 'ब्रिक्स थिएटर फेस्टिवल 2026' कहाँ आयोजित की गई है?",
    q_en: "8. Where was 'BRICS Theatre Festival 2026' held under the theme 'Shared Stories, Shared Futures'?",
    opts: ["नई दिल्ली", "पटना", "मुंबई", "भोपाल"],
    opts_en: ["New Delhi", "Patna", "Mumbai", "Bhopal"],
    ans: 0,
    exp: "ब्रिक्स राष्ट्रों के सांस्कृतिक आदान-प्रदान और रंगमंच कला को समर्पित ब्रिक्स थिएटर फेस्टिवल 2026 का आयोजन नई दिल्ली में संपन्न हुआ।"
  },
  {
    q: "9. भारत-मर्कोसुर तरजीही व्यापार समझौते (PTA) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "9. Identify the correct statement concerning India-Mercosur PTA:",
    opts: ["इलेक्ट्रॉनिक मूल प्रमाणपत्रों की स्वीकार्यता के लिए प्रथम अतिरिक्त प्रोटोकॉल पर हस्ताक्षर किया है।", "इस पर 25 जनवरी 2004 को हस्ताक्षर और 1 जून 2009 से लागू हुआ है।", "वर्तमान में मर्कोसुर में 5 पूर्ण सदस्य देश हैं।", "उपरोक्त में से एक से अधिक।"],
    opts_en: ["Signed First Additional Protocol for electronic Certificates of Origin.", "Signed on 25 Jan 2004 and enforced on 1 June 2009.", "Mercosur currently has 5 full member nations.", "More than one of the above."],
    ans: 3,
    exp: "भारत और लैटिन अमेरिकी व्यापार संगठन मर्कोसुर ने सीमा शुल्क सरलीकरण और इलेक्ट्रॉनिक सर्टिफिकेट ऑफ ओरिजिन को मान्यता देने हेतु प्रोटोकॉल पर सहमति व्यक्त की।"
  },
  {
    q: "10. हाल ही में खबरों में रहे मयून द्वीप किस जलडमरूमध्य में स्थित है?",
    q_en: "10. In which strait is Mayun Island situated, which was recently in the news?",
    opts: ["होर्मुज जलडमरूमध्य", "बाब अल-मंडेब जलडमरूमध्य", "मलक्का जलडमरूमध्य", "बोस्पोरस जलडमरूमध्य"],
    opts_en: ["Strait of Hormuz", "Bab-el-Mandeb Strait", "Strait of Malacca", "Bosphorus Strait"],
    ans: 1,
    exp: "मयून द्वीप (पेरिम द्वीप) लाल सागर और अदन की खाड़ी को जोड़ने वाले रणनीतिक जलमार्ग बाब अल-मंडेब जलडमरूमध्य में स्थित है।"
  }
];

// ==========================================
// TEST 02: OCTOBER 2026 (Q. 101 to 200)
// Complete with In-Depth Deep Explanations
// ==========================================
var CA_OCT_2026_T2 = [
  {
    q: "101. 'बदलती दुनिया: शक्ति के नए साधनों को परिभाषित करना' थीम के साथ 8वें ब्लूमबर्ग न्यू इकोनॉमी फोरम की बैठक कहाँ आयोजित की गई है?",
    q_en: "101. Where was the 8th Bloomberg New Economy Forum held with the theme 'A Changing World: Defining New Levers of Power'?",
    opts: ["पेरिस", "न्यूयॉर्क", "नई दिल्ली", "वाशिंगटन डीसी"],
    opts_en: ["Paris", "New York", "New Delhi", "Washington DC"],
    ans: 1,
    exp: "8वें ब्लूमबर्ग न्यू इकोनॉमी फोरम का आयोजन न्यूयॉर्क में संपन्न हुआ। इस बैठक में वैश्विक भू-राजनीतिक परिवर्तन, आपूर्ति श्रृंखला लचीलापन, कृत्रिम बुद्धिमत्ता (AI) के प्रभाव और अंतरराष्ट्रीय व्यापार में आ रहे नए संरचनात्मक बदलावों पर विश्वभर के नीति-निर्माताओं और उद्योगपतियों ने विचार-विमर्श किया।"
  },
  {
    q: "102. 2026 के नोबेल पुरस्कार विजेताओं के संदर्भ में गलत मिलान की पहचान कीजिए।",
    q_en: "102. Identify the incorrect match regarding the 2026 Nobel Prize laureates:",
    opts: ["चिकित्सा - कार्ल डिसेरोथ, पीटर हेगमैन और जॉर्ज नागेल", "भौतिकी - फ्रांसिस हाल्जेन", "रसायन विज्ञान - हेनरी बी. कगन और केन्सो सोई", "साहित्य - नवी पिल्लै"],
    opts_en: ["Medicine - Karl Deisseroth, Peter Hegemann & Georg Nagel", "Physics - Francis Halzen", "Chemistry - Henri B. Kagan & Kenso Soai", "Literature - Navi Pillay"],
    ans: 3,
    exp: "साहित्य (Literature) श्रेणी में नवी पिल्लै का नाम गलत है; नवी पिल्लै संयुक्त राष्ट्र की मानवाधिकार कार्यकर्ता और दक्षिण अफ्रीकी विधिवेत्ता रही हैं। नोबेल साहित्य पुरस्कार साहित्यिक रचनाधर्मिता के क्षेत्र में योगदान देने वाले प्रमुख लेखक/साहित्यकार को प्रदान किया जाता है।"
  },
  {
    q: "103. हाल ही में यूनिसेफ इंडिया की सेलिब्रिटी एडवोकेट किसे नियुक्त किया गया है?",
    q_en: "103. Who was recently appointed as Celebrity Advocate of UNICEF India?",
    opts: ["स्मृति मंधाना", "कीर्ति सुरेश", "प्रियंका चोपड़ा", "रवीना टंडन"],
    opts_en: ["Smriti Mandhana", "Keerthy Suresh", "Priyanka Chopra", "Raveena Tandon"],
    ans: 0,
    exp: "भारतीय महिला क्रिकेट टीम की स्टार बल्लेबाज और उप-कप्तान स्मृति मंधाना को यूनिसेफ इंडिया ने सेलिब्रिटी एडवोकेट नियुक्त किया। वे बालिकाओं की शिक्षा, खेल सहभागिता, लैंगिक समानता और मानसिक स्वास्थ्य के प्रति देशव्यापी जागरूकता फैलाने का कार्य करेंगी।"
  },
  {
    q: "104. सितंबर 2026 के लिए ICC पुरुष और महिला प्लेयर ऑफ द मंथ किसे चुना गया है?",
    q_en: "104. Who were awarded ICC Men's and Women's Player of the Month for September 2026?",
    opts: ["शुभमन गिल और शेफाली वर्मा", "शुभमन गिल और स्मृति मंधाना", "वैभव सूर्यवंशी और शेफाली वर्मा", "रोहित सिंह और शेफाली वर्मा"],
    opts_en: ["Shubman Gill & Shafali Verma", "Shubman Gill & Smriti Mandhana", "Vaibhav Suryavanshi & Shafali Verma", "Rohit Singh & Shafali Verma"],
    ans: 0,
    exp: "अंतरराष्ट्रीय क्रिकेट परिषद (ICC) ने सितंबर 2026 के उत्कृष्ट प्रदर्शन के आधार पर भारतीय पुरुष बल्लेबाज शुभमन गिल और महिला विस्फोटक सलामी बल्लेबाज शेफाली वर्मा को 'प्लेयर ऑफ द मंथ' चुना।"
  },
  {
    q: "105. हाल ही में प्रकाशित 'विश्व आर्थिक आउटलुक रिपोर्ट 2026' के संदर्भ में गलत जानकारी की पहचान कीजिए।",
    q_en: "105. Identify the incorrect statement regarding the World Economic Outlook Report 2026:",
    opts: ["इसे विश्व बैंक द्वारा जारी किया गया है।", "वैश्विक आर्थिक विकास दर 2026 में 3.1% रहने का अनुमान है।", "वैश्विक मुद्रास्फीति दर 2026 में 4.7% रहने का अनुमान है।", "भारत की GDP में 7.0% वृद्धि का अनुमान है।"],
    opts_en: ["Published by the World Bank.", "Global growth projected at 3.1% in 2026.", "Global inflation projected at 4.7% in 2026.", "India's GDP growth projected at 7.0%."],
    ans: 0,
    exp: "'विश्व आर्थिक आउटलुक' (World Economic Outlook) रिपोर्ट अंतरराष्ट्रीय मुद्रा कोष (IMF) द्वारा वर्ष में दो बार जारी की जाती है, न कि विश्व बैंक द्वारा। विश्व बैंक द्वारा 'ग्लोबल इकोनॉमिक प्रॉस्पेक्ट्स' जारी की जाती है।"
  },
  {
    q: "106. दिल्ली में विरोध-प्रदर्शन पर सुप्रीम कोर्ट की सुनवाई के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "106. Identify the correct statement regarding SC hearing on protests in Delhi:",
    opts: ["अनुच्छेद 19(1)(b) नागरिकों को शांतिपूर्वक और बिना हथियार सभा करने का अधिकार देता है।", "अनुच्छेद 19(3) के तहत इस अधिकार पर कुछ उचित प्रतिबंध लगाए जा सकते हैं।", "यह मामला मौलिक अधिकारों और संवैधानिक प्रावधानों से संबंधित है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Article 19(1)(b) guarantees right to assemble peacefully and without arms.", "Article 19(3) permits reasonable restrictions on public order & sovereignty.", "Case deals with fundamental rights & constitutional balance.", "More than one of the above"],
    ans: 3,
    exp: "संविधान का अनुच्छेद 19(1)(b) नागरिकों को शांतिपूर्ण सभा का मौलिक अधिकार प्रदान करता है। हालांकि, अनुच्छेद 19(3) के तहत भारत की संप्रभुता, अखंडता और लोक व्यवस्था के हित में राज्य इस पर युक्तिसंगत प्रतिबंध (Reasonable Restrictions) लगा सकता है।"
  },
  {
    q: "107. 'भारत राइस' पहल अक्टूबर 2026 में किस संगठन द्वारा शुरू की गई थी?",
    q_en: "107. Which entity launched the 'Bharat Rice' initiative to provide subsidized staple grains?",
    opts: ["रक्षा अनुसंधान एवं विकास संगठन (DRDO)", "भारतीय सेना", "खाद्य प्रसंस्करण उद्योग मंत्रालय", "उपभोक्ता मामले, खाद्य एवं सार्वजनिक वितरण मंत्रालय"],
    opts_en: ["DRDO", "Indian Army", "Ministry of Food Processing", "Ministry of Consumer Affairs, Food & Public Distribution"],
    ans: 3,
    exp: "खाद्य मुद्रास्फीति को नियंत्रित करने और आम जनता को किफायती दरों पर अच्छी गुणवत्ता का चावल उपलब्ध कराने हेतु केंद्र सरकार के उपभोक्ता मामले, खाद्य एवं सार्वजनिक वितरण मंत्रालय (NAFED/NCCF/केन्द्रीय भंडार के माध्यम से) ने 'भारत राइस' ब्रांड पहल शुरू की।"
  },
  {
    q: "108. हाल ही में हाथियों और ट्रेनों के बीच होने वाली टक्करों को रोकने के लिए 'Plan BEE' प्रणाली किस संगठन ने विकसित की है?",
    q_en: "108. Which organization developed 'Plan BEE' sound mechanism to prevent train-elephant collisions?",
    opts: ["अनुसंधान डिजाइन और मानक संगठन (RDSO)", "पूर्वोत्तर सीमांत रेलवे (NFR)", "भारतीय वन्यजीव संस्थान (WII)", "भारतीय राष्ट्रीय राजमार्ग प्राधिकरण (NHAI)"],
    opts_en: ["RDSO", "Northeast Frontier Railway (NFR)", "Wildlife Institute of India (WII)", "NHAI"],
    ans: 1,
    exp: "पूर्वोत्तर सीमांत रेलवे (NFR) ने रेलवे ट्रैक के पास मधुमक्खियों की प्राकृतिक भिनभिनाहट (600-700 मीटर दूरी तक सुनाई देने वाली ध्वनि) प्रसारित करने वाला 'Plan BEE' उपकरण विकसित किया, जिससे हाथी रेलवे ट्रैक से दूर रहते हैं।"
  },
  {
    q: "109. हाल ही में FSSAI का 'ईट राइट प्लेस ऑफ वर्शिप' प्रमाणन किस मंदिर को प्रदान किया गया है?",
    q_en: "109. Which temple was awarded the 'Eat Right Place of Worship' certification by FSSAI?",
    opts: ["श्री राम जन्मभूमि तीर्थ क्षेत्र", "अंबाजी मंदिर", "महावीर मंदिर", "रजरप्पा मंदिर"],
    opts_en: ["Shri Ram Janmabhoomi Teerth Kshetra", "Ambaji Temple", "Mahavir Temple", "Rajarappa Temple"],
    ans: 0,
    exp: "भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) ने अयोध्या स्थित श्री राम जन्मभूमि मंदिर में तैयार और वितरित होने वाले 'प्रसादम' की स्वच्छता, पौष्टिकता और सुरक्षित मानक प्रबंधन के लिए 'ईट राइट प्लेस ऑफ वर्शिप' (BHOG प्रमाणन) प्रदान किया।"
  },
  {
    q: "110. चालू वित्त वर्ष 2026-27 की पहली तिमाही (अप्रैल-जून 2026) में भारत में प्रत्यक्ष विदेशी निवेश (FDI) के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "110. Identify the correct statement regarding Foreign Direct Investment (FDI) inflows in Q1 FY 2026-27:",
    opts: ["जापान, सिंगापुर और मॉरीशस शीर्ष स्रोत हैं।", "कुल 19.81 अरब डॉलर का इक्विटी निवेश हुआ है।", "टेक्नोलॉजी/कंप्यूटर सॉफ्टवेयर और हार्डवेयर सबसे बड़ा प्राप्तकर्ता क्षेत्र है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Singapore, Mauritius and Japan are top sources.", "Total equity inflow recorded at $19.81 billion.", "Computer Software & Hardware is the largest recipient sector.", "More than one of the above"],
    ans: 3,
    exp: "DPIIT के आंकड़ों के अनुसार, वित्त वर्ष 2026-27 की प्रथम तिमाही में भारत में विदेशी निवेश में भारी उछाल दर्ज किया गया, जिसमें सिंगापुर शीर्ष स्रोत रहा तथा कंप्यूटर हार्डवेयर व सॉफ्टवेयर क्षेत्र ने सर्वाधिक हिस्सेदारी प्राप्त की।"
  },
  {
    q: "111. मुख्यमंत्री सम्राट चौधरी ने सरकारी योजनाओं की डिजिटल निगरानी के लिए कौन-सा प्लेटफॉर्म लॉन्च किया है?",
    q_en: "111. Which platform was launched by Deputy CM Samrat Choudhary for digital monitoring of government schemes?",
    opts: ["'संवाद' सभागार", "'संकल्प' डैशबोर्ड", "'समन्वय' पोर्टल", "B और C दोनों"],
    opts_en: ["'Samvad' Hall", "'Sankalp' Dashboard", "'Samanvay' Portal", "Both B and C"],
    ans: 3,
    exp: "बिहार में विकास परियोजनाओं और जनकल्याणकारी योजनाओं की वास्तविक समय पर पारदर्शी निगरानी के लिए 'संकल्प' डैशबोर्ड और विभागीय समन्वय हेतु 'समन्वय' पोर्टल शुरू किया गया।"
  },
  {
    q: "112. राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "112. Identify the correct statement regarding National Social Assistance Programme (NSAP):",
    opts: ["इसका नाम बदलकर प्रधानमंत्री सामाजिक सहायता योजना कर दिया गया है।", "वर्ष 2026-27 से 2030-31 के लिए ₹53,428 करोड़ आवंटित किए गए हैं।", "दिव्यांगता की पात्रता सीमा को 80% से घटाकर 40% कर दिया गया है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Renamed to PM Social Assistance Scheme.", "₹53,428 crore allocated for 2026-27 to 2030-31.", "Disability eligibility threshold lowered from 80% to 40%.", "More than one of the above"],
    ans: 3,
    exp: "NSAP संविधान के अनुच्छेद 41 (काम, शिक्षा और लोक सहायता का अधिकार) के तहत कमजोर वर्गों को पेंशन व वित्तीय सहायता प्रदान करता है। केंद्रीय कैबिनेट ने इसके दायरे और बजटीय आवंटन में व्यापक सुधार किए हैं।"
  },
  {
    q: "113. हाल ही में आर्थिक मामलों की मंत्रिमंडलीय समिति (CCEA) ने IDBI बैंक की 60.72% हिस्सेदारी किस कंपनी को बेचने की मंजूरी दी है?",
    q_en: "113. CCEA approved strategic divestment of 60.72% stake in IDBI Bank to which entity?",
    opts: ["एचएसबीसी होल्डिंग्स", "फेयरफैक्स फाइनेंशियल होल्डिंग्स लिमिटेड", "रिलायंस पीएलसी", "मित्सुबिशी यूएफजे फाइनेंशियल ग्रुप"],
    opts_en: ["HSBC Holdings", "Fairfax Financial Holdings Limited", "Reliance PLC", "Mitsubishi UFJ Financial Group"],
    ans: 1,
    exp: "IDBI बैंक के रणनीतिक विनिवेश (Strategic Divestment) के तहत प्रेम वत्स समर्थित कनाडा स्थित बहुराष्ट्रीय कंपनी फेयरफैक्स फाइनेंशियल होल्डिंग्स (Fairfax) को प्रमुख हिस्सेदारी हस्तांतरित करने की दिशा में मंजूरी दी गई।"
  },
  {
    q: "114. एसोसिएशन ऑफ टेनिस प्रोफेशनल्स (ATP) ने साल के अंत में नंबर-1 खिलाड़ी किसे चुना है?",
    q_en: "114. Who secured the year-end ATP World No. 1 ranking?",
    opts: ["अलेक्जेंडर ज्वेरेव", "कार्लोस अल्काराज", "यानिक सिनर", "नोवाक जोकोविच"],
    opts_en: ["Alexander Zverev", "Carlos Alcaraz", "Jannik Sinner", "Novak Djokovic"],
    ans: 2,
    exp: "इटली के स्टार टेनिस खिलाड़ी यानिक सिनर (Jannik Sinner) ने ऑस्ट्रेलियन ओपन और यूएस ओपन सहित कई एटीपी 1000 खिताब जीतकर आधिकारिक रूप से वर्ष के अंत में दुनिया के नंबर 1 टेनिस खिलाड़ी का स्थान सुनिश्चित किया।"
  },
  {
    q: "115. हाल ही में 'उल्लास-नव भारत साक्षरता कार्यक्रम' के तहत 100% साक्षर केंद्रशासित प्रदेश किसे घोषित किया गया है?",
    q_en: "115. Which Union Territory was declared 100% literate under the ULLAS-Nav Bharat Saaksharta Karyakram?",
    opts: ["मिजोरम", "लद्दाख", "चंडीगढ़", "लक्षद्वीप"],
    opts_en: ["Mizoram", "Ladakh", "Chandigarh", "Lakshadweep"],
    ans: 1,
    exp: "लद्दाख ने शिक्षा मंत्रालय के उल्लास (Understanding Lifelong Learning for All in Society - ULLAS) कार्यक्रम के तहत 15 वर्ष से अधिक आयु के सभी निरक्षर नागरिकों को बुनियादी साक्षरता और संख्यात्मक ज्ञान से जोड़कर 100% साक्षरता का गौरव प्राप्त किया।"
  },
  {
    q: "116. हाल ही में किस राज्य सरकार ने 'नामेरी वाइल्ड क्लासरूम पहल' की शुरुआत की है?",
    q_en: "116. Which State Government launched the 'Nameri Wild Classroom Initiative'?",
    opts: ["बिहार", "झारखंड", "असम", "अरुणाचल प्रदेश"],
    opts_en: ["Bihar", "Jharkhand", "Assam", "Arunachal Pradesh"],
    ans: 2,
    exp: "असम सरकार ने नामेरी राष्ट्रीय उद्यान (शोणितपुर जिला) में स्कूली विद्यार्थियों को प्रकृति, जैव-विविधता और वन्यजीव संरक्षण का व्यावहारिक अनुभव प्रदान करने के लिए 'नामेरी वाइल्ड क्लासरूम पहल' शुरू की।"
  },
  {
    q: "117. बिहार में राज्य के पहले 12 मेगावाट क्षमता वाले 'Ctrls डेटा सेंटर' का शुभारंभ कहाँ किया गया?",
    q_en: "117. Where was Bihar's first 12 MW Ctrls data center launched?",
    opts: ["दानापुर", "पटना", "गयाजी", "मुंगेर"],
    opts_en: ["Danapur", "Patna", "Gayaji", "Munger"],
    ans: 1,
    exp: "राजधानी पटना में अत्याधुनिक 12 MW क्षमता का Ctrls डेटा सेंटर स्थापित किया गया, जिससे राज्य के आईटी और ई-गवर्नेंस सेवाओं को मजबूत क्लाउड और कंप्यूटिंग आधार मिलेगा।"
  },
  {
    q: "118. बुजुर्गों के अधिकारों की रक्षा के लिए किस राज्य की विधानसभा में देश का पहला व्यापक विधेयक 'सीनियर सिटीजंस (केयर एंड प्रोटेक्शन ऑफ राइट्स) बिल, 2026' पेश किया गया है?",
    q_en: "118. Which state assembly introduced the 'Senior Citizens (Care & Protection of Rights) Bill, 2026'?",
    opts: ["गोवा", "केरलम", "झारखंड", "मध्य प्रदेश"],
    opts_en: ["Goa", "Keralam", "Jharkhand", "Madhya Pradesh"],
    ans: 1,
    exp: "केरलम (केरल) विधानसभा में वरिष्ठ नागरिकों के भरण-पोषण, स्वास्थ्य सुरक्षा, कानूनी संरक्षण और संपत्ति अधिकारों को सुरक्षित करने वाला ऐतिहासिक एवं व्यापक विधेयक पेश किया गया।"
  },
  {
    q: "119. खाद्य सुरक्षा एवं मानक अधिनियम, 2006 की धारा 30(2)(a) के तहत हाल ही में किस राज्य ने गुटखा और पान मसाला पर पूर्ण प्रतिबंध लगा दिया है?",
    q_en: "119. Which state imposed a blanket ban on gutkha and pan masala under Section 30(2)(a) of FSSA, 2006?",
    opts: ["गोवा", "केरलम", "झारखंड", "मध्य प्रदेश"],
    opts_en: ["Goa", "Keralam", "Jharkhand", "Madhya Pradesh"],
    ans: 2,
    exp: "झारखंड सरकार ने जनस्वास्थ्य को ध्यान में रखते हुए निकोटीन और तंबाकू युक्त सभी प्रकार के गुटखा और पान मसाला के निर्माण, भंडारण, वितरण और बिक्री पर एक वर्ष का पूर्ण प्रतिबंध लागू किया।"
  },
  {
    q: "120. हाल ही में भारतीय रेलवे ने 2031 तक माल ढुलाई (Freight Loading) का कितना लक्ष्य निर्धारित किया है?",
    q_en: "120. What is Indian Railways' freight loading target for the year 2031?",
    opts: ["13.53 करोड़ टन", "83.37 करोड़ टन", "250 करोड़ टन", "300 करोड़ टन"],
    opts_en: ["13.53 crore tonnes", "83.37 crore tonnes", "250 crore tonnes", "300 crore tonnes"],
    ans: 3,
    exp: "राष्ट्रीय रेल योजना (NRP) के तहत भारतीय रेलवे ने देश में लॉजिस्टिक्स लागत को घटाने और माल ढुलाई में रेलवे की हिस्सेदारी 45% तक बढ़ाने हेतु 2031 तक 3000 मिलियन टन (300 करोड़ टन) का लक्ष्य निर्धारित किया है।"
  },
  {
    q: "121. हाल ही में किस देश ने स्वदेशी हाइपरसोनिक बैलिस्टिक मिसाइल 'फतह-2 एक्सटेंडेड रेंज' (Fatah-II ER) का सफल परीक्षण किया है?",
    q_en: "121. Which country successfully test-fired the indigenous hypersonic ballistic missile 'Fatah-II ER'?",
    opts: ["पाकिस्तान", "नॉर्वे", "भारत", "सऊदी अरब"],
    opts_en: ["Pakistan", "Norway", "India", "Saudi Arabia"],
    ans: 0,
    exp: "पाकिस्तान ने निर्देशित सटीक मारक क्षमता वाली स्वदेशी सतह-से-सतह बैलिस्टिक मिसाइल प्रणाली 'फतह-2 एक्सटेंडेड रेंज' का सफल परीक्षण करने की घोषणा की।"
  },
  {
    q: "122. बिहार कैबिनेट ने किस स्थान पर बिहार का पहला टेक पार्क बनाने के लिए NBCC (India) के साथ समझौता ज्ञापन (MoU) को मंजूरी दी है?",
    q_en: "122. Where has Bihar Cabinet approved MoU with NBCC to establish Bihar's first Tech Park?",
    opts: ["गर्दनीबाग", "दानापुर", "बिहटा", "आरा"],
    opts_en: ["Gardanibagh", "Danapur", "Bihta", "Ara"],
    ans: 2,
    exp: "पटना के पास बिहटा (Bihta) में एक विशाल आईटी और टेक्नोलॉजी पार्क विकसित करने के लिए राष्ट्रीय भवन निर्माण निगम (NBCC) के साथ समझौता किया गया, जिससे राज्य में सॉफ्टवेयर और हार्डवेयर कंपनियों का निवेश आकर्षित होगा।"
  },
  {
    q: "123. राष्ट्रीय मानवाधिकार आयोग (NHRC) के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "123. Identify the correct statement regarding National Human Rights Commission (NHRC):",
    opts: ["इसकी स्थापना 1993 में एक स्वतंत्र वैधानिक संस्था के रूप में हुई थी।", "12 अक्टूबर 2026 को इसका 33वाँ स्थापना दिवस मनाया गया।", "NHRC के अध्यक्ष न्यायमूर्ति वी. रामसुब्रमण्यन हैं।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Established in 1993 under Human Rights Protection Act.", "Celebrated 33rd Foundation Day on 12 Oct 2026.", "Justice V. Ramasubramanian serves as Chairman.", "More than one of the above"],
    ans: 3,
    exp: "मानवाधिकार संरक्षण अधिनियम, 1993 के तहत 12 अक्टूबर 1993 को स्थापित NHRC एक स्वायत्त विधिक संस्था है, जिसके अध्यक्ष भारत के सेवानिवृत्त मुख्य न्यायाधीश या सर्वोच्च न्यायालय के न्यायाधीश होते हैं।"
  },
  {
    q: "124. हाल ही में खबरों में रहे TRISHNA ('थर्मल इंफ्रारेड इमेजिंग सैटेलाइट फॉर हाई-रिज़ॉल्यूशन नेचुरल रिसोर्स असेसमेंट') के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "124. Identify the correct statement regarding TRISHNA satellite mission:",
    opts: ["TRISHNA उपग्रह को 2027 में लॉन्च करने की योजना है।", "यह ISRO और CNES (फ्रांस) का संयुक्त पृथ्वी-अवलोकन मिशन है।", "इसे श्रीहरिकोटा स्थित सतीश धवन अंतरिक्ष केंद्र से लॉन्च किया जाएगा।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Planned for launch around 2027.", "Joint Earth-observation mission of ISRO and CNES (France).", "To be launched from Satish Dhawan Space Centre, Sriharikota.", "More than one of the above"],
    ans: 3,
    exp: "TRISHNA (Thermal Infra-Red Imaging Satellite for High-resolution Natural Resource Assessment) भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) और फ्रांसीसी अंतरिक्ष एजेंसी (CNES) का संयुक्त वैज्ञानिक उपग्रह मिशन है।"
  },
  {
    q: "125. भारतीय नौसेना ने 14 अक्टूबर को किस स्थान पर संयुक्त समुद्री बलों (CMF) के 'संयुक्त टास्क फोर्स 154' की कमान संभाली है?",
    q_en: "125. Where did Indian Navy assume command of Combined Task Force 154 under Combined Maritime Forces (CMF)?",
    opts: ["बहरीन", "अमेरिका", "रूस", "फ्रांस"],
    opts_en: ["Bahrain", "USA", "Russia", "France"],
    ans: 0,
    exp: "बहरीन स्थित संयुक्त समुद्री बल (CMF) मुख्यालय में भारतीय नौसेना ने समुद्री सुरक्षा प्रशिक्षण और क्षेत्रीय क्षमता निर्माण हेतु समर्पित 'Combined Task Force 154' (CTF 154) की कमान संभाली।"
  },
  {
    q: "126. हाल ही में लागू 'ग्रामीण सड़क अनुरक्षण एवं प्रबंधन कार्यक्रम' (RRMP) के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "126. Identify the correct statement regarding Rural Roads Maintenance & Management Programme (RRMP):",
    opts: ["यह ग्रामीण सड़कों के रखरखाव के लिए है।", "वर्ष 2026-27 में ₹634.41 करोड़ खर्च किए जाएंगे।", "यह 3,021 अनुसूचित जाति-बहुल गाँवों के विकास से संबंधित है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Focuses on long-term upkeep of rural road networks.", "Outlay of ₹634.41 crore in FY 2026-27.", "Covers connectivity in 3,021 SC-majority villages.", "More than one of the above"],
    ans: 3,
    exp: "RRMP कार्यक्रम का उद्देश्य ग्रामीण संपर्क अवसंरचना को टिकाऊ बनाए रखना तथा पिछड़े व वंचित बस्तियों तक बारहमासी पक्की सड़कों का गुणवत्तापूर्ण रख-रखाव सुनिश्चित करना है।"
  },
  {
    q: "127. केंद्र सरकार ने गन्ना किसानों द्वारा उठाए गए मुद्दों की जाँच और उनकी चिंताओं के समाधान के लिए किसकी अध्यक्षता में समिति गठित की है?",
    q_en: "127. Under whose chairmanship did Central Government constitute a committee to resolve sugarcane farmers' issues?",
    opts: ["प्रो. रमेश चंद", "अशोक कुमार लाहिड़ी", "अनुराग जैन", "राजीव गौबा"],
    opts_en: ["Prof. Ramesh Chand", "Ashok Kumar Lahiri", "Anurag Jain", "Rajiv Gauba"],
    ans: 0,
    exp: "नीति आयोग के सदस्य प्रो. रमेश चंद की अध्यक्षता में उच्चस्तरीय समिति गठित की गई, जो गन्ना मूल्य निर्धारण (FRP), चीनी मिलों की आर्थिक स्थिति, इथेनॉल सम्मिश्रण और किसानों के भुगतान संतुलन का अध्ययन करेगी।"
  },
  {
    q: "128. अखिल भारतीय आयुर्वेद संस्थान के तीसरे अंतरराष्ट्रीय कौमारभृत्य सम्मेलन 'कौमारकॉन 2026' का आयोजन कहाँ किया गया है?",
    q_en: "128. Where was KaumarCon 2026, the 3rd International Conference on Kaumarbhritya, held?",
    opts: ["मुंबई", "भोपाल", "नई दिल्ली", "जयपुर"],
    opts_en: ["Mumbai", "Bhopal", "New Delhi", "Jaipur"],
    ans: 2,
    exp: "अखिल भारतीय आयुर्वेद संस्थान (AIIA) द्वारा नई दिल्ली में 'कौमारकॉन 2026' का आयोजन किया गया। कौमारभृत्य आयुर्वेद की वह शाखा है जो बाल चिकित्सा, शिशु पोषण और नवजात शिशु परिचर्या से संबंधित है।"
  },
  {
    q: "129. बिहार सरकार ने किसकी जयंती को अब राजकीय समारोह के रूप में मनाने की घोषणा की है?",
    q_en: "129. Whose birth anniversary has Bihar Government declared to observe as an official State Function?",
    opts: ["स्व. रामविलास पासवान", "स्व. कैलाशपति मिश्र", "स्व. रघुवंश प्रसाद सिंह", "A और B दोनों"],
    opts_en: ["Late Ram Vilas Paswan", "Late Kailashpati Mishra", "Late Raghuvansh Prasad Singh", "Both A and B"],
    ans: 3,
    exp: "बिहार कैबिनेट ने पूर्व केंद्रीय मंत्री स्व. रामविलास पासवान तथा बिहार भाजपा के संस्थापक नेता स्व. कैलाशपति मिश्र दोनों के सार्वजनिक योगदान को मान्यता देते हुए उनकी जयंती को राजकीय समारोह घोषित किया।"
  },
  {
    q: "130. स्व. रामविलास पासवान और स्व. कैलाशपति मिश्र की जयंती समारोह से संबंधित निर्णय किस राज्य सरकार का है?",
    q_en: "130. The decision to celebrate the birth anniversaries of Ram Vilas Paswan and Kailashpati Mishra belongs to which state?",
    opts: ["बिहार", "उत्तर प्रदेश", "झारखंड", "मध्य प्रदेश"],
    opts_en: ["Bihar", "Uttar Pradesh", "Jharkhand", "Madhya Pradesh"],
    ans: 0,
    exp: "यह आधिकारिक अधिसूचना बिहार सरकार के मंत्रिमंडल सचिवालय विभाग द्वारा जारी की गई।"
  },
  {
    q: "131. नई दिल्ली में कौमारभृत्य (आयुर्वेद बाल चिकित्सा) पर तीसरे अंतरराष्ट्रीय सम्मेलन कौमारकॉन-2026 का उद्घाटन किसने किया है?",
    q_en: "131. Who inaugurated KaumarCon-2026 on Ayurvedic paediatrics in New Delhi?",
    opts: ["द्रौपदी मुर्मु", "सी.पी. राधाकृष्णन", "नरेंद्र मोदी", "अमित शाह"],
    opts_en: ["Droupadi Murmu", "C.P. Radhakrishnan", "Narendra Modi", "Amit Shah"],
    ans: 1,
    exp: "महाराष्ट्र के राज्यपाल श्री सी.पी. राधाकृष्णन ने मुख्य अतिथि के रूप में नई दिल्ली में आयोजित अंतरराष्ट्रीय कौमारकॉन सम्मेलन का उद्घाटन किया।"
  },
  {
    q: "132. हाल ही में दूरसंचार विभाग ने किस तिथि से कॉलिंग नेम प्रेजेंटेशन (CNAP) सेवा शुरू करने का निर्देश दिया है?",
    q_en: "132. From which date did DoT direct telecom operators to roll out Calling Name Presentation (CNAP)?",
    opts: ["1 नवंबर", "15 नवंबर", "30 नवंबर", "1 जनवरी"],
    opts_en: ["1 November", "15 November", "30 November", "1 January"],
    ans: 0,
    exp: "स्पैम कॉल्स और वित्तीय साइबर धोखाधड़ी रोकने हेतु CNAP (Calling Name Presentation) सेवा शुरू करने का निर्देश दिया गया, जिससे फोन आने पर कॉलर का आधिकारिक नाम स्क्रीन पर प्रदर्शित होगा।"
  },
  {
    q: "133. सितंबर 2026 की आवधिक श्रम बल सर्वेक्षण (PLFS) रिपोर्ट के संदर्भ में गलत कथन की पहचान कीजिए।",
    q_en: "133. Identify the incorrect statement regarding September 2026 Periodic Labour Force Survey (PLFS) report:",
    opts: ["कुल बेरोजगारी दर - 5.0%", "ग्रामीण बेरोजगारी दर - 4.2%", "शहरी बेरोजगारी दर - 6.9%", "श्रम बल भागीदारी दर - 38.9%"],
    opts_en: ["Total Unemployment Rate - 5.0%", "Rural Unemployment - 4.2%", "Urban Unemployment - 6.9%", "Labour Force Participation Rate - 38.9%"],
    ans: 3,
    exp: "श्रम बल भागीदारी दर (LFPR) का आंकड़ा 38.9% गलत है; राष्ट्रीय स्तर पर महिलाओं और युवाओं की सहभागिता बढ़ने से LFPR 40% से अधिक दर्ज की गई।"
  },
  {
    q: "134. हाल ही में हुई नई नियुक्तियों से संबंधित गलत मिलान की पहचान कीजिए।",
    q_en: "134. Identify the incorrect match among recent appointments:",
    opts: ["जितेंद्र कुमार - रेलवे सुरक्षा बल (RPF), महानिदेशक", "प्रकाश राजपुरोहित - उप चुनाव आयुक्त", "मंदीप के. भंडारी - CBSE अध्यक्ष", "तुहिन कांता पांडे - नीति आयोग, CEO"],
    opts_en: ["Jitendra Kumar - DG, RPF", "Prakash Rajpurohit - Deputy Election Commissioner", "Mandeep K. Bhandari - CBSE Chairman", "Tuhin Kanta Pandey - CEO, NITI Aayog"],
    ans: 3,
    exp: "तुहिन कांता पांडे वित्त सचिव / DIPAM सचिव के रूप में सेवा दे रहे हैं; नीति आयोग के मुख्य कार्यकारी अधिकारी (CEO) बी.वी.आर. सुब्रह्मण्यम हैं।"
  },
  {
    q: "135. हाल ही में किन दो आर्द्रभूमियों को शामिल किए जाने के बाद भारत में रामसर स्थलों की संख्या बढ़कर 103 हो गई?",
    q_en: "135. Inclusion of which two wetlands expanded India's Ramsar sites tally to 103?",
    opts: ["उदयपुर झील और काँवर झील", "सुखना आर्द्रभूमि और सौज झील", "वुलर झील और गॉगबिल झील", "काँवर झील और भोज आर्द्रभूमि"],
    opts_en: ["Udaipur Lake & Kanwar Lake", "Sukhna Wetland & Sauj Lake", "Wular Lake & Gogabil", "Kanwar Lake & Bhoj Wetland"],
    ans: 1,
    exp: "चंडीगढ़ की सुखना झील (Sukhna Wetland) तथा राजस्थान/उत्तर प्रदेश सीमावर्ती सौज झील को अंतरराष्ट्रीय महत्व की आर्द्रभूमि (Ramsar Site) घोषित करने से भारत में कुल रामसर स्थलों की संख्या 103 पहुंच गई।"
  },
  {
    q: "136. प्रशासनिक सुधार एवं लोक शिकायत विभाग (DARPG) ने ई-गवर्नेस सुधार 2026 पर राष्ट्रीय सम्मेलन कहाँ आयोजित किया है?",
    q_en: "136. Where was the National Conference on e-Governance Reforms 2026 organized by DARPG?",
    opts: ["धर्मशाला", "नई दिल्ली", "मुंबई", "जयपुर"],
    opts_en: ["Dharamshala", "New Delhi", "Mumbai", "Jaipur"],
    ans: 0,
    exp: "हिमाचल प्रदेश के धर्मशाला में ई-गवर्नेंस, डिजिटल लोक सेवाओं और जनशिकायत निवारण तंत्र के आधुनिकीकरण पर राष्ट्रीय सम्मेलन आयोजित हुआ।"
  },
  {
    q: "137. हाल ही में 'ओलंपिक टैलेंट पाथवे परियोजना' की शुरुआत किस राज्य सरकार ने की है?",
    q_en: "137. Which state government launched the 'Olympic Talent Pathway Project'?",
    opts: ["तमिलनाडु", "केरल (केरलम)", "कर्नाटक", "तेलंगाना"],
    opts_en: ["Tamil Nadu", "Kerala (Keralam)", "Karnataka", "Telangana"],
    ans: 1,
    exp: "केरल सरकार ने जमीनी स्तर पर एथलीटों की पहचान करने और उन्हें 2032 व 2036 के ओलंपिक खेलों के लिए विश्वस्तरीय वैज्ञानिक प्रशिक्षण देने हेतु यह महत्वाकांक्षी परियोजना शुरू की।"
  },
  {
    q: "138. हाल ही में आयोजित सांस्कृतिक महोत्सवों/उत्सवों से संबंधित गलत मिलान की पहचान कीजिए।",
    q_en: "138. Identify the incorrect match of cultural festival and state:",
    opts: ["पुष्प उत्सव बथुकम्मा - तेलंगाना", "निंगोल चकौबा - मणिपुर", "अंबुबाची मेला - असम", "गान-नगाई उत्सव - बिहार"],
    opts_en: ["Bathukamma Flower Festival - Telangana", "Ningol Chakouba - Manipur", "Ambubachi Mela - Assam", "Gaan-Ngai Festival - Bihar"],
    ans: 3,
    exp: "गान-नगाई (Gaan-Ngai) मणिपुर की जेलियांग्रोंग (Zeliangrong) जनजाति का प्रमुख फसल कटाई और सांस्कृतिक उत्सव है, इसका संबंध बिहार से नहीं है।"
  },
  {
    q: "139. विश्व के सबसे मैत्रीपूर्ण शहर (Friendliest Cities) 2026 के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "139. Identify the correct statement regarding World's Friendliest Cities 2026:",
    opts: ["मेरिडा, ग्लासगो और बोगोटा शीर्ष मैत्रीपूर्ण शहर हैं।", "ब्यूनस आयर्स, लॉस एंजिल्स और मैड्रिड सबसे निचले स्थान पर हैं।", "दिल्ली सबसे कम मैत्रीपूर्ण शहरों में शामिल है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Merida, Glasgow and Bogota are top friendliest cities.", "Buenos Aires, Los Angeles are ranked lower.", "Delhi ranked among bottom cities.", "More than one of the above"],
    ans: 3,
    exp: "वैश्विक यात्रा और आतिथ्य सर्वेक्षण रिपोर्ट में मेक्सिको के मेरिडा और स्कॉटलैंड के ग्लासगो को पर्यटकों के लिए दुनिया के सबसे अनुकूल और मैत्रीपूर्ण शहरों में शीर्ष स्थान दिया गया।"
  },
  {
    q: "140. अक्टूबर 2026 के महत्वपूर्ण दिवसों के संदर्भ में गलत मिलान की पहचान कीजिए।",
    q_en: "140. Identify the incorrect match of October observances:",
    opts: ["09 अक्टूबर - विश्व प्रवासी पक्षी दिवस", "13 अक्टूबर - अंतरराष्ट्रीय आपदा जोखिम न्यूनीकरण दिवस", "14 अक्टूबर - विश्व मानक दिवस", "15 अक्टूबर - महिला किसान दिवस"],
    opts_en: ["09 October - World Migratory Bird Day", "13 October - International Day for Disaster Risk Reduction", "14 October - World Standards Day", "15 October - Mahila Kisan Diwas"],
    ans: 0,
    exp: "विश्व प्रवासी पक्षी दिवस (World Migratory Bird Day) अक्टूबर के दूसरे शनिवार (वर्ष 2026 में 10 अक्टूबर) को मनाया जाता है, न कि 9 अक्टूबर को।"
  },
  {
    q: "141. हेनली पासपोर्ट इंडेक्स (Henley Passport Index) के अक्टूबर 2026 संस्करण के संदर्भ में गलत कथन की पहचान कीजिए?",
    q_en: "141. Identify the incorrect statement regarding Henley Passport Index (Oct 2026 edition):",
    opts: ["भारत 55 गंतव्यों पर वीज़ा-मुक्त प्रवेश के साथ 84वें स्थान पर है।", "शीर्ष पासपोर्ट में पहला स्थान सिंगापुर (192) का है।", "दूसरा स्थान जापान, दक्षिण कोरिया और UAE (188) का है।", "अंतिम स्थान (101वाँ), यूक्रेन (24) का है।"],
    opts_en: ["India ranks 84th with visa-free access to 55 destinations.", "Singapore ranked 1st.", "Japan, South Korea, UAE ranked 2nd.", "Ukraine ranked last (101st)."],
    ans: 3,
    exp: "हेनली पासपोर्ट इंडेक्स में अंतिम स्थान पर युद्धग्रस्त अफगानिस्तान (Afghanistan) रहता है, न कि यूक्रेन।"
  },
  {
    q: "142. फ्रंटियर टेक हब ने 'डाटा सेंटर इवैल्यूएशन फ्रेमवर्क टू हेल्प स्टेट्स प्लान फॉर सस्टेनेबल ग्रोथ' किसने जारी किया है?",
    q_en: "142. Who released the 'Data Center Evaluation Framework to Help States Plan for Sustainable Growth'?",
    opts: ["योजना आयोग", "नीति आयोग", "RBI", "SEBI"],
    opts_en: ["Planning Commission", "NITI Aayog", "RBI", "SEBI"],
    ans: 1,
    exp: "नीति आयोग (NITI Aayog) के फ्रंटियर टेक हब ने राज्यों को ऊर्जा-कुशल, हरित और संधारणीय हाइपरस्केल डेटा सेंटर स्थापित करने में मार्गदर्शन हेतु यह नीतिगत ढांचा जारी किया।"
  },
  {
    q: "143. हाल ही में आयोजित द्विपक्षीय अभ्यासों के संदर्भ में गलत मिलान की पहचान कीजिए?",
    q_en: "143. Identify the incorrect match of bilateral military exercises:",
    opts: ["भारत-अमेरिका → ऑस्ट्राहिंद", "भारत-यूके → कोंकण-26", "भारत-फ्रांस → अभ्यास वरुण", "भारत-रूस → INDRA-2026"],
    opts_en: ["India-USA → AUSTRAHIND", "India-UK → Konkan-26", "India-France → Varuna", "India-Russia → INDRA-2026"],
    ans: 0,
    exp: "'ऑस्ट्राहिंद' (AUSTRAHIND) सैन्य अभ्यास भारत और ऑस्ट्रेलिया के मध्य आयोजित होता है, अमेरिका के साथ नहीं। अमेरिका के साथ 'युद्ध अभ्यास' और 'वज्र प्रहार' होते हैं।"
  },
  {
    q: "144. विश्व बैंक की विकास समिति की 114वीं पूर्ण बैठक के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "144. Identify the correct statement regarding 114th Development Committee meeting of World Bank:",
    opts: ["बैठक का एजेंडा 'निजी पूंजी जुटाना और रोजगार' था।", "बैठक 15 अक्टूबर 2026 को बैंकॉक, थाईलैंड में आयोजित की गई।", "भारत की ओर से श्रीमती निर्मला सीतारमण ने भाग लिया।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Agenda: 'Mobilizing Private Capital and Jobs'.", "Held on 15 Oct 2026 in Bangkok, Thailand.", "India represented by Smt. Nirmala Sitharaman.", "More than one of the above."],
    ans: 3,
    exp: "विश्व बैंक और आईएमएफ की संयुक्त विकास समिति की बैठक में विकासशील देशों में बुनियादी ढांचे हेतु निजी पूंजी निवेश और गुणवत्तापूर्ण रोजगार सृजन पर सहमति बनी।"
  },
  {
    q: "145. किस राज्य का 'सिरपुर' यूनेस्को (UNESCO) की विश्व विरासत की अस्थायी सूची में शामिल किया गया है?",
    q_en: "145. 'Sirpur' of which state has been included in UNESCO World Heritage Tentative List?",
    opts: ["छत्तीसगढ़", "बिहार", "महाराष्ट्र", "सिक्किम"],
    opts_en: ["Chhattisgarh", "Bihar", "Maharashtra", "Sikkim"],
    ans: 0,
    exp: "छत्तीसगढ़ के महासमुंद जिले में महानदी के तट पर स्थित प्राचीन ऐतिहासिक स्थल 'सिरपुर' (लक्ष्मण मंदिर, गंधेश्वर मंदिर और बौद्ध विहारों का संगम) को यूनेस्को की अस्थायी सूची में शामिल किया गया।"
  },
  {
    q: "146. शंघाई सहयोग संगठन (SCO) की सरकार प्रमुखों की 25वीं बैठक के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "146. Identify the correct statement regarding 25th Meeting of SCO Heads of Government:",
    opts: ["ताजिकिस्तान की राजधानी दुशांबे में बैठक संपन्न हुई है।", "रक्षा मंत्री राजनाथ सिंह ने भारत का प्रतिनिधित्व किया।", "वर्ष 2027 के लिए अध्यक्षता उज्बेकिस्तान को सौंपी गई।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Held in Dushanbe, Tajikistan.", "India represented by Defence Minister Rajnath Singh.", "Presidency for 2027 handed to Uzbekistan.", "More than one of the above."],
    ans: 3,
    exp: "एससीओ की सरकार प्रमुखों की परिषद (CHG) व्यापार, अर्थव्यवस्था, परिवहन गलियारों और क्षेत्रीय कनेक्टिविटी को बढ़ावा देने पर केंद्रित रही।"
  },
  {
    q: "147. जनमत संग्रह में अल्बर्टा के दो-तिहाई से अधिक मतदाताओं ने किस देश का हिस्सा बने रहने के पक्ष में मतदान किया है?",
    q_en: "147. In a referendum, over two-thirds of voters in Alberta voted to remain part of which country?",
    opts: ["स्विट्जरलैंड", "कनाडा", "यूएसए", "यूनाइटेड किंगडम"],
    opts_en: ["Switzerland", "Canada", "USA", "United Kingdom"],
    ans: 1,
    exp: "कनाडा के पश्चिमी ऊर्जा-समृद्ध प्रांत अल्बर्टा (Alberta) में आयोजित प्रांतीय जनमत संग्रह में मतदाताओं ने कनाडाई संघ में बने रहने और अलगाववादी मांगों को खारिज करने का निर्णय दिया।"
  },
  {
    q: "148. दुनिया का पहला फोबोस सैंपल वापसी मिशन के अंतर्गत मार्शियन मून्स एक्सप्लोरेशन (MMX) नाम का रोबोटिक अंतरिक्ष यान किसने लॉन्च किया है?",
    q_en: "148. Which agency developed the Martian Moons eXploration (MMX) to return Phobos samples?",
    opts: ["ISRO", "NASA", "JAXA (जापान)", "CNES"],
    opts_en: ["ISRO", "NASA", "JAXA (Japan)", "CNES"],
    ans: 2,
    exp: "जापान एयरोस्पेस एक्सप्लोरेशन एजेंसी (JAXA) ने मंगल ग्रह के चंद्रमा 'फोबोस' (Phobos) से मिट्टी और चट्टानों के नमूने पृथ्वी पर वापस लाने हेतु MMX मिशन तैयार किया।"
  },
  {
    q: "149. हाल ही में किसानों को सरकारी योजनाओं, आर्थिक सहायता और खेती-किसानी से जुड़ी जरूरी जानकारियाँ उपलब्ध कराने के लिए कौन-सा पोर्टल लॉन्च किया गया है?",
    q_en: "149. Which portal was launched to provide farmers with access to government schemes and agricultural information?",
    opts: ["एग्री ग्रीन पोर्टल", "एग्री फार्मर्स पोर्टल", "एग्री वेलफेयर पोर्टल", "एग्री इंफ्रा पोर्टल"],
    opts_en: ["Agri Green Portal", "Agri Farmers Portal", "Agri Welfare Portal", "Agri Infra Portal"],
    ans: 1,
    exp: "कृषि मंत्रालय द्वारा 'एग्री फार्मर्स पोर्टल' (Agri Farmers Portal) शुरू किया गया, जो डिजिटल पब्लिक इंफ्रास्ट्रक्चर फॉर एग्रीकल्चर (DPI) के तहत एकीकृत सेवाएं देता है।"
  },
  {
    q: "150. संगीत नाटक अकादमी द्वारा वर्ष 2024 और 2025 के लिए देश भर के कितने युवा कलाकारों को प्रदर्शन कला के क्षेत्र में उस्ताद बिस्मिल्लाह खान युवा पुरस्कार प्रदान किए गए?",
    q_en: "150. How many young artists were conferred with Ustad Bismillah Khan Yuva Puraskar by Sangeet Natak Akademi?",
    opts: ["70", "131", "110", "84"],
    opts_en: ["70", "131", "110", "84"],
    ans: 3,
    exp: "संगीत नाटक अकादमी ने 40 वर्ष से कम आयु के 84 प्रतिभावान युवा कलाकारों को संगीत, नृत्य, नाटक, लोक और आदिवासी कलाओं में उत्कृष्ट योगदान हेतु प्रतिष्ठित उस्ताद बिस्मिल्लाह खान युवा पुरस्कार से सम्मानित किया।"
  },
  {
    q: "151. 28वें WETEX 2026 के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "151. Identify the correct statement regarding 28th WETEX 2026:",
    opts: ["इसका पूरा नाम Water, Energy, Technology and Environment Exhibition है।", "इसका आयोजन दुबई में 20 से 22 अक्टूबर 2026 तक किया गया है।", "इसका विषय AI, हरित हाइड्रोजन, इलेक्ट्रिक वाहन, स्मार्ट सिटी और ऊर्जा दक्षता है।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Stands for Water, Energy, Technology and Environment Exhibition.", "Organized in Dubai from 20-22 Oct 2026.", "Themes include AI, Green Hydrogen, EVs and smart cities.", "More than one of the above."],
    ans: 3,
    exp: "दुबई इलेक्ट्रिसिटी एंड वाटर अथॉरिटी (DEWA) द्वारा आयोजित WETEX पश्चिम एशिया का सबसे बड़ा संधारणीय ऊर्जा, जल तकनीक और पर्यावरण नवाचार एक्सपो है।"
  },
  {
    q: "152. 14वें India Chem 2026 के संदर्भ में गलत कथन की पहचान कीजिए?",
    q_en: "152. Identify the incorrect statement regarding 14th India Chem 2026:",
    opts: ["इसका आयोजन 22-24 अक्टूबर तक मुंबई में किया गया।", "इसकी थीम 'Advantage Bharat: An Emerging Global Chemicals Hub' है।", "केंद्रीय मंत्री जे.पी. नड्डा ने इस कार्यक्रम का उद्घाटन किया है।", "चीन इसमें भागीदार देश के रूप में शामिल है।"],
    opts_en: ["Held in Mumbai from 22-24 Oct.", "Theme: 'Advantage Bharat: An Emerging Global Chemicals Hub'.", "Inaugurated by Union Minister J.P. Nadda.", "China participated as official partner country."],
    ans: 3,
    exp: "India Chem 2026 में जापान, जर्मनी और सऊदी अरब जैसे देशों की भागीदारी रही; चीन इसमें भागीदार देश (Partner Country) के रूप में सम्मिलित नहीं था।"
  },
  {
    q: "153. वाणिज्य एवं उद्योग मंत्रालय द्वारा जारी आँकड़ों के अनुसार, सितंबर 2026 में भारत के आठ प्रमुख उद्योगों (Core Industries) की वृद्धि दर कितनी दर्ज की गई?",
    q_en: "153. What was the growth rate of India's Eight Core Industries in September 2026?",
    opts: ["7.9%", "5.9%", "18.4%", "11.4%"],
    opts_en: ["7.9%", "5.9%", "18.4%", "11.4%"],
    ans: 1,
    exp: "कोयला, इस्पात, सीमेंट और बिजली उत्पादन में स्वस्थ प्रदर्शन के कारण 8 कोर उद्योगों (Eight Core Industries) की संयुक्त उत्पादन वृद्धि दर 5.9% आंकी गई।"
  },
  {
    q: "154. हाल ही में किस देश के प्रधानमंत्री डोनाल्ड टस्क भारत यात्रा पर आए हैं?",
    q_en: "154. Prime Minister Donald Tusk of which country paid an official bilateral visit to India?",
    opts: ["USA", "कनाडा", "UAE", "पोलैंड"],
    opts_en: ["USA", "Canada", "UAE", "Poland"],
    ans: 3,
    exp: "मध्य यूरोपीय देश पोलैंड के प्रधानमंत्री डोनाल्ड टस्क ने भारत के साथ रणनीतिक साझेदारी, रक्षा उपकरण निर्माण और तकनीकी सहयोग को गहरा करने हेतु द्विपक्षीय यात्रा संपन्न की।"
  },
  {
    q: "155. खबरों में रही 'साधना श्रृंखला 2026' की तीसरी क्षेत्रीय कार्यशाला के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "155. Identify the correct statement regarding 3rd regional workshop of 'Sadhana Series 2026':",
    opts: ["इसका आयोजन क्षमता निर्माण आयोग (CBC) द्वारा किया जाएगा।", "इसका उद्घाटन उत्तर प्रदेश के मुख्यमंत्री योगी आदित्यनाथ करेंगे।", "इसका उद्देश्य प्रशिक्षण संस्थानों का एक समन्वित और उत्तरदायी नेटवर्क तैयार करना है।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Organized by Capacity Building Commission (CBC).", "Inaugurated by UP CM Yogi Adityanath.", "Aims to build coordinated network of training institutes.", "More than one of the above."],
    ans: 3,
    exp: "मिशन कर्मयोगी के तहत सिविल सेवकों और प्रशासनिक प्रशिक्षण संस्थानों की कार्यकुशलता बढ़ाने हेतु 'साधना' क्षेत्रीय कार्यशाला का सफल आयोजन हुआ।"
  },
  {
    q: "156. पानी के अंदर के खतरों का मुकाबला करने के लिए स्वदेशी माहे श्रेणी के तीसरे पनडुब्बी रोधी उथले पानी के युद्धपोत (ASW SWC) का नाम क्या है?",
    q_en: "156. What is the name of the 3rd indigenous Mahe-class Anti-Submarine Warfare Shallow Water Craft?",
    opts: ["INS माहे", "INS मालवन", "INS मंगरोल", "INS समर्थक"],
    opts_en: ["INS Mahe", "INS Malvan", "INS Mangrol", "INS Samarthak"],
    ans: 2,
    exp: "कोचीन शिपयार्ड लिमिटेड (CSL) द्वारा भारतीय नौसेना के लिए निर्मित 'INS मंगरोल' (INS Mangrol) तटीय जलक्षेत्र में दुश्मन की पनडुब्बियों का पता लगाने और नष्ट करने में सक्षम युद्धपोत है।"
  },
  {
    q: "157. हाल ही में आयोजित 'शिल्प समागम मेला 2026' के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "157. Identify the correct statement regarding 'Shilp Samagam Mela 2026':",
    opts: ["यह मेला गुवाहाटी में आयोजित किया गया।", "इसका आयोजन सामाजिक न्याय और अधिकारिता मंत्रालय द्वारा किया गया।", "इसका उद्देश्य पारंपरिक उत्पादों को प्रोत्साहन देना और कारीगरों की सहायता करना है।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Organized in Guwahati.", "Organized by Ministry of Social Justice and Empowerment.", "Aims to support artisans & promote traditional products.", "More than one of the above."],
    ans: 3,
    exp: "अनुसूचित जातियों, पिछड़े वर्गों और सफाई कर्मचारियों के लाभार्थी कारीगरों द्वारा हस्तनिर्मित उत्कृष्ट उत्पादों के विपणन हेतु शिल्प समागम मेले का आयोजन किया गया।"
  },
  {
    q: "158. खबरों में रहे राजदंड (सेंगोल) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "158. Identify the correct statement regarding the sacred sceptre (Sengol):",
    opts: ["सेंगोल के निर्माता थिरु वुम्मिदी एथिराज का निधन हो गया है।", "इसे स्वतंत्रता की पूर्व संध्या पर प्रधानमंत्री जवाहरलाल नेहरू को सौंपा गया था।", "वर्ष 2023 में इसे नई संसद में अध्यक्ष की सीट के पास रखा गया।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Maker of Sengol Thiru Vummidi Ethiraj passed away.", "Handed over to PM Jawaharlal Nehru on independence eve.", "Installed near Speaker's chair in new Parliament in 2023.", "More than one of the above."],
    ans: 3,
    exp: "सेंगोल चोल परंपरा का पवित्र राजदंड है जो सत्ता के न्यायपूर्ण हस्तांतरण का प्रतीक है। इसके 99 वर्षीय प्रमुख निर्माता वुम्मिदी एथिराजु का हाल ही में चेन्नई में निधन हुआ।"
  },
  {
    q: "159. स्कॉच गोल्ड अवार्ड 2026 (Skoch Gold Award) का विजेता कौन बना है?",
    q_en: "159. Who won the prestigious Skoch Gold Award 2026?",
    opts: ["नागालैंड", "कोयला नियंत्रक संगठन (CCO)", "नीति आयोग", "केंद्रीय प्रदूषण नियंत्रण बोर्ड"],
    opts_en: ["Nagaland", "Coal Controller's Organization (CCO)", "NITI Aayog", "CPCB"],
    ans: 1,
    exp: "कोयला मंत्रालय के अधीनस्थ कोयला नियंत्रक संगठन (CCO) को खनन डेटा के पारदर्शी डिजिटलीकरण, कोल स्टैटिस्टिक्स के ऑनलाइन प्रबंधन और ई-गवर्नेंस नवाचार हेतु स्कॉच गोल्ड अवार्ड मिला।"
  },
  {
    q: "160. 21 अक्टूबर को कौन-सा महत्वपूर्ण दिवस मनाया जाता है?",
    q_en: "160. Which important day is commemorated on 21 October?",
    opts: ["आजाद हिंद फौज स्थापना दिवस", "पुलिस स्मृति दिवस (Police Commemoration Day)", "विश्व आयोडीन अल्पता दिवस", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Azad Hind Fauj Foundation Day", "Police Commemoration Day", "World Iodine Deficiency Day", "More than one of the above."],
    ans: 3,
    exp: "21 अक्टूबर 1943 को नेताजी सुभाष चंद्र बोस ने सिंगापुर में आज़ाद हिंद सरकार की स्थापना की थी। इसी दिन 1959 में लद्दाख के हॉट स्प्रिंग्स में शहीद हुए पुलिसकर्मियों की याद में 'पुलिस स्मृति दिवस' भी मनाया जाता है।"
  },
  {
    q: "161. यमुना नदी के पुनर्जीवन से संबंधित परियोजनाओं के तहत यमुना नदी को किस वर्ष तक पूर्णतः स्वच्छ बनाने का लक्ष्य निर्धारित किया गया है?",
    q_en: "161. By which target year has the Yamuna River rejuvenation roadmap set the goal to achieve clean waters?",
    opts: ["दिसंबर 2027", "दिसंबर 2028", "मई 2029", "दिसंबर 2030"],
    opts_en: ["December 2027", "December 2028", "May 2029", "December 2030"],
    ans: 1,
    exp: "नमामि गंगे और दिल्ली जल बोर्ड की संयुक्त कार्ययोजना के तहत नए सीवेज ट्रीटमेंट प्लांट (STP) और ड्रेन ट्रैपिंग परियोजनाओं को दिसंबर 2028 तक पूरा कर यमुना को स्वच्छ बनाने का लक्ष्य है।"
  },
  {
    q: "162. GSAT-7B, भारतीय सेना का पहला समर्पित सैन्य संचार उपग्रह, इसरो द्वारा किस वर्ष तक लॉन्च करने की योजना है?",
    q_en: "162. By which year is ISRO planning to launch GSAT-7B, the dedicated military communication satellite for Indian Army?",
    opts: ["2027", "2028", "2030", "2035"],
    opts_en: ["2027", "2028", "2030", "2035"],
    ans: 0,
    exp: "भारतीय सेना के नेटवर्क-केंद्रित युद्धक अभियानों, सीमा निगरानी और सुरक्षित सामरिक संचार को अभेद्य बनाने वाला 5-टन श्रेणी का अत्याधुनिक उपग्रह GSAT-7B वर्ष 2027 तक प्रक्षेपित किया जाएगा।"
  },
  {
    q: "163. अमेरिकी फिल्म संस्थान (AFI) का 52वाँ 'लाइफ अचीवमेंट पुरस्कार' किसे प्रदान किया गया है?",
    q_en: "163. Who was honored with the 52nd AFI Life Achievement Award?",
    opts: ["टॉम क्रूज", "रॉबर्ट डाउनी जूनियर", "मार्लन ब्रैंडो", "अल पचीनो"],
    opts_en: ["Tom Cruise", "Robert Downey Jr.", "Marlon Brando", "Al Pacino"],
    ans: 1,
    exp: "हॉलीवुड के प्रसिद्ध अभिनेता और ऑस्कर विजेता रॉबर्ट डाउनी जूनियर (Robert Downey Jr.) को सिनेमा और अभिनय में उनके दशकों लंबे उत्कृष्ट योगदान हेतु अमेरिकन फिल्म इंस्टीट्यूट का लाइफ अचीवमेंट अवॉर्ड दिया गया।"
  },
  {
    q: "164. 7वें एग्रीवोल्टाइक्स विश्व सम्मेलन के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "164. Identify the correct statement regarding 7th Agri-Photovoltaics World Conference:",
    opts: ["7वाँ संस्करण नई दिल्ली के भारत मंडपम में आयोजित हुआ।", "इसका उद्देश्य खाद्य और ऊर्जा सुरक्षा को मजबूत करना है।", "इसका विषय 'पावरिंग द ग्लोबल साउथ' है।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Held at Bharat Mandapam, New Delhi.", "Aims to strengthen dual food & clean energy security.", "Theme: 'Powering the Global South'.", "More than one of the above."],
    ans: 3,
    exp: "एग्रीवोल्टाइक्स (Agri-PV) तकनीक में एक ही कृषि भूमि पर एक साथ फसल उत्पादन और सौर ऊर्जा उत्पादन किया जाता है, जिससे किसानों की आय दोगुनी होती है और भूमि का दोहरा उपयोग संभव होता है।"
  },
  {
    q: "165. हाल ही में BCCI ने भारतीय पुरुष क्रिकेट टीम की वरिष्ठ चयन समिति का सदस्य/अध्यक्ष किसे नियुक्त किया है?",
    q_en: "165. Who was recently inducted into BCCI Senior Men's Selection Committee?",
    opts: ["प्रज्ञान ओझा", "शिव सुंदर दास", "अजय रात्रा", "रमेश पवार"],
    opts_en: ["Pragyan Ojha", "Shiv Sunder Das", "Ajay Ratra", "Ramesh Powar"],
    ans: 2,
    exp: "भारतीय क्रिकेट कंट्रोल बोर्ड (BCCI) ने पूर्व भारतीय विकेटकीपर-बल्लेबाज अजय रात्रा (Ajay Ratra) को वरिष्ठ पुरुष चयन समिति में सलिल अंकोला के स्थान पर नियुक्त किया।"
  },
  {
    q: "166. राष्ट्रव्यापी 'ग्रीन दिवाली अभियान' किस प्रमुख संगठन/मंत्रालय द्वारा शुरू किया गया है?",
    q_en: "166. Nationwide 'Green Diwali Campaign' was launched by which organization?",
    opts: ["ग्रीनपीस इंडिया", "WWF-इंडिया", "नीति आयोग", "केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB)"],
    opts_en: ["Greenpeace India", "WWF-India", "NITI Aayog", "Central Pollution Control Board (CPCB)"],
    ans: 3,
    exp: "केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB) और पर्यावरण मंत्रालय ने त्योहारों के दौरान वायु गुणवत्ता और ध्वनि प्रदूषण को नियंत्रित करने हेतु पर्यावरण अनुकूल हरित पटाखों के उपयोग का राष्ट्रव्यापी अभियान चलाया।"
  },
  {
    q: "167. हाल ही में आयोजित द्विपक्षीय अभ्यासों से संबंधित गलत मिलान की पहचान कीजिए?",
    q_en: "167. Identify the incorrect match among bilateral military exercises:",
    opts: ["SIMBEX-2026 → सिंगापुर-भारत", "SLINEX-2026 → श्रीलंका-भारत", "VINBEX → फ्रांस-भारत", "CINBEX → कंबोडिया-भारत"],
    opts_en: ["SIMBEX-2026 → Singapore-India", "SLINEX-2026 → Sri Lanka-India", "VINBEX → France-India", "CINBEX → Cambodia-India"],
    ans: 2,
    exp: "VINBEX भारत और वियतनाम (Vietnam-India Bilateral Army Exercise) के मध्य आयोजित होने वाला संयुक्त सैन्य अभ्यास है, फ्रांस के साथ नहीं। फ्रांस के साथ 'शक्ति' और 'वरुण' होते हैं।"
  },
  {
    q: "168. भारत के दूसरे उभरते विज्ञान, प्रौद्योगिकी एवं नवाचार सम्मेलन (2nd ESTIC) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "168. Identify the correct statement regarding 2nd ESTIC conference:",
    opts: ["आयोजन स्थल: नई दिल्ली, भारत मंडपम।", "आयोजक: वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद (CSIR)।", "थीम 'Creative Minds, Catalyzing Science, Empowering Technologies' है।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Venue: Bharat Mandapam, New Delhi.", "Organized by CSIR.", "Theme: 'Creative Minds, Catalyzing Science, Empowering Technologies'.", "More than one of the above."],
    ans: 3,
    exp: "CSIR द्वारा आयोजित इस सम्मेलन का मुख्य फोकस क्वांटम कंप्यूटिंग, बायो-मैन्युफैक्चरिंग, सेमीकंडक्टर और नैनो-टेक्नोलॉजी जैसे उभरते क्षेत्रों में भारत को आत्मनिर्भर बनाना है।"
  },
  {
    q: "169. नई दिल्ली में आयोजित 30वीं वित्तीय स्थिरता और विकास परिषद (FSDC) की बैठक की अध्यक्षता किसने की?",
    q_en: "169. Who chaired the 30th meeting of Financial Stability and Development Council (FSDC) in New Delhi?",
    opts: ["निर्मला सीतारमण", "नरेंद्र मोदी", "अमित शाह", "द्रौपदी मुर्मू"],
    opts_en: ["Nirmala Sitharaman", "Narendra Modi", "Amit Shah", "Droupadi Murmu"],
    ans: 0,
    exp: "केंद्रीय वित्त एवं कॉर्पोरेट कार्य मंत्री श्रीमती निर्मला सीतारमण FSDC की पदेन अध्यक्ष होती हैं। इस बैठक में वित्तीय बाजार स्थिरता, साइबर जोखिम और वैश्विक आर्थिक चुनौतियों की समीक्षा की गई।"
  },
  {
    q: "170. हाल ही में आयोजित 'वर्ल्ड मास्टर्स क्लासिक और इक्विप्ड पावरलिफ्टिंग चैंपियनशिप' में तीन स्वर्ण पदक किसने जीते हैं?",
    q_en: "170. Who clinched three gold medals at the World Masters Classic & Equipped Powerlifting Championship?",
    opts: ["एकता विश्नोई", "मोना अग्रवाल", "शैलेश कुमार", "प्रवीण कुमार"],
    opts_en: ["Ekta Vishnoi", "Mona Agarwal", "Shailesh Kumar", "Praveen Kumar"],
    ans: 0,
    exp: "भारतीय सूचना सेवा (IIS) की वरिष्ठ अधिकारी और अंतरराष्ट्रीय पावरलिफ्टर एकता विश्नोई ने दक्षिण अफ्रीका में आयोजित विश्व चैंपियनशिप में शानदार प्रदर्शन करते हुए भारत के लिए तीन स्वर्ण पदक जीते।"
  },
  {
    q: "171. संयुक्त राष्ट्र (UN) से 'लॉस एंड डेमेज फंड' (Loss and Damage Fund) की पहली वित्तीय सहायता प्राप्त करने वाला देश कौन बना है?",
    q_en: "171. Which country became the first to receive climate financial disbursement from UN's Loss and Damage Fund?",
    opts: ["नेपाल", "भारत", "बांग्लादेश", "फिलीपींस"],
    opts_en: ["Nepal", "India", "Bangladesh", "Philippines"],
    ans: 3,
    exp: "जलवायु परिवर्तन के कारण आने वाले विनाशकारी तूफानों और समुद्र जलस्तर वृद्धि से प्रभावित फिलीपींस (Philippines) को लॉस एंड डैमेज फंड का पहला औपचारिक वित्तीय आबंटन प्राप्त हुआ।"
  },
  {
    q: "172. भारत-तिब्बत सीमा पुलिस (ITBP) के संबंध में निम्नलिखित में से कौन-से कथन सही हैं?\n(1) ITBP की स्थापना 24 अक्टूबर 1962 को की गई थी।\n(2) ITBP भारत-चीन सीमा पर 3,488 km तक सुरक्षा करती है।\n(3) ITBP के जवानों को लोकप्रिय रूप से 'हिमवीर' कहा जाता है।",
    q_en: "172. Which statements are correct regarding ITBP?\n(1) Established on 24 Oct 1962.\n(2) Guards 3,488 km India-China LAC.\n(3) Jawans are popularly known as 'Himveers'.",
    opts: ["केवल 1 और 2", "केवल 2 और 3", "केवल 1 और 3", "1, 2 और 3"],
    opts_en: ["Only 1 and 2", "Only 2 and 3", "Only 1 and 3", "1, 2 and 3"],
    ans: 3,
    exp: "1962 के भारत-चीन युद्ध के तुरंत बाद 24 अक्टूबर 1962 को ITBP की स्थापना हुई। यह बल लद्दाख से अरुणाचल प्रदेश तक दुर्गम बर्फीली चोटियों पर तैनात रहता है, इसलिए इसे 'हिमवीर' कहा जाता है।"
  },
  {
    q: "173. 5वें एशियाई पैरा खेल 2026 के संदर्भ में गलत कथन की पहचान कीजिए?",
    q_en: "173. Identify the incorrect statement regarding 5th Asian Para Games 2026:",
    opts: ["आयोजन आइची-नागोया (जापान) में संपन्न हुआ।", "शुभंकर 'उजुमिन' और आदर्श वाक्य 'Imagine One Heart' है।", "चीन पदक तालिका में शीर्ष स्थान पर रहा।", "भारत 114 पदकों के साथ पाँचवें स्थान पर रहा।"],
    opts_en: ["Held in Aichi-Nagoya, Japan.", "Mascot is 'Uzumin' and motto 'Imagine One Heart'.", "China topped the medal table.", "India finished fifth with 114 medals."],
    ans: 0,
    exp: "5वें एशियाई पैरा खेल 2026 का आयोजन जापान के आइची-नागोया (Aichi-Nagoya) में हुआ, न कि चीन में (हांगझोउ में 4थे खेल 2023 में हुए थे)।"
  },
  {
    q: "174. ब्राज़ील के राष्ट्रपति चुनाव में ऐतिहासिक जीत दर्ज करके चौथी बार देश के राष्ट्रपति के रूप में किसने शपथ ली?",
    q_en: "174. Who secured a historic mandate to become President of Brazil for the fourth time?",
    opts: ["लुइज़ इनासियो लूला दा सिल्वा", "फ्लावियो बोल्सोनारो", "जायर बोल्सोनारो", "मिशेल टेमर"],
    opts_en: ["Luiz Inácio Lula da Silva", "Flavio Bolsonaro", "Jair Bolsonaro", "Michel Temer"],
    ans: 0,
    exp: "वामपंथी नेता लुइज़ इनासियो लूला दा सिल्वा (Lula da Silva) ने ब्राजील की राजनीति में एक बार फिर अभूतपूर्व जनादेश हासिल किया और देश के प्रमुख के रूप में बागडोर संभाली।"
  },
  {
    q: "175. राष्ट्रपति द्रौपदी मुर्मु ने किस राज्य के लिए फ्रंटियर टेरिटोरियल अथॉरिटी (FNTA) विधेयक, 2026 को मंजूरी दे दी है?",
    q_en: "175. President Droupadi Murmu gave assent to Frontier Nagaland Territorial Authority (FNTA) Bill for which state?",
    opts: ["असम", "नागालैंड", "मिजोरम", "बिहार"],
    opts_en: ["Assam", "Nagaland", "Mizoram", "Bihar"],
    ans: 1,
    exp: "नागालैंड के पूर्वी 6 जिलों (ईस्टर्न नागालैंड पीपुल्स ऑर्गनाइजेशन - ENPO क्षेत्र) के आर्थिक, सामाजिक और प्रशासनिक सशक्तिकरण हेतु FNTA स्वायत्त शासी निकाय का गठन स्वीकृत हुआ।"
  },
  {
    q: "176. प्रधानमंत्री श्री नरेंद्र मोदी ने किस स्थान पर RBI के नवनिर्मित ग्रीन डेटा सेंटर और 'साइबर सुरक्षा प्रशिक्षण संस्थान' का उद्घाटन किया है?",
    q_en: "176. Where did PM Narendra Modi inaugurate RBI's Next-Gen Green Data Centre & Enterprise Computing and Cybersecurity Training Institute?",
    opts: ["नवी मुंबई", "भुवनेश्वर", "रांची", "दिल्ली"],
    opts_en: ["Navi Mumbai", "Bhubaneswar", "Ranchi", "Delhi"],
    ans: 1,
    exp: "ओडिशा की राजधानी भुवनेश्वर में भारतीय रिजर्व बैंक (RBI) का अत्याधुनिक ग्रीन डेटा सेंटर और वित्तीय साइबर सुरक्षा अनुसंधान संस्थान स्थापित किया गया।"
  },
  {
    q: "177. UNEP द्वारा जारी 17वीं उत्सर्जन अंतराल रिपोर्ट (Emissions Gap Report) 2026 के संदर्भ में सही कथन की पहचान कीजिए?\n(1) वैश्विक तापन को 1.5°C तक सीमित करने का लक्ष्य गंभीर खतरे में है।\n(2) वर्तमान नीतियों से सदी के अंत तक 2.6°C से 2.8°C वृद्धि का अनुमान है।\n(3) भारत, चीन और अमेरिका के बाद तीसरा सबसे बड़ा ग्रीनहाउस गैस उत्सर्जक है।",
    q_en: "177. Identify the correct statement regarding UNEP's 17th Emissions Gap Report 2026:",
    opts: ["केवल 1 और 2", "केवल 2 और 3", "केवल 1 और 3", "1, 2 और 3"],
    opts_en: ["Only 1 and 2", "Only 2 and 3", "Only 1 and 3", "1, 2 and 3"],
    ans: 3,
    exp: "संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP) की रिपोर्ट स्पष्ट करती है कि वैश्विक उत्सर्जन में त्वरित 42% कटौती किए बिना पेरिस समझौते का 1.5°C तापमान लक्ष्य प्राप्त करना असंभव होगा।"
  },
  {
    q: "178. AICTE की नई राष्ट्रीय मेरिट योजना में बिहार के किस प्रमुख इंजीनियरिंग कॉलेज को शामिल किया गया है?",
    q_en: "178. Which prestigious engineering college from Bihar was selected under AICTE's National Merit Scheme?",
    opts: ["मुजफ्फरपुर इंस्टीट्यूट ऑफ टेक्नोलॉजी (MIT)", "दरभंगा कॉलेज ऑफ इंजीनियरिंग (DCE)", "भागलपुर कॉलेज ऑफ इंजीनियरिंग (BCE)", "उपर्युक्त में से एक से अधिक"],
    opts_en: ["Muzaffarpur Institute of Technology (MIT)", "Darbhanga College of Engineering (DCE)", "Bhagalpur College of Engineering (BCE)", "More than one of the above"],
    ans: 0,
    exp: "बिहार के सबसे पुराने इंजीनियरिंग संस्थानों में से एक 'मुजफ्फरपुर इंस्टीट्यूट ऑफ टेक्नोलॉजी' (MIT मुजफ्फरपुर) को तकनीकी अनुसंधान, नवाचार और उत्कृष्ट प्लेसमेंट के लिए AICTE की राष्ट्रीय योजना में चुना गया।"
  },
  {
    q: "179. विश्व आर्थिक स्वतंत्रता सूचकांक (Economic Freedom of the World Index) 2026 के संदर्भ में सही कथनों पर विचार कीजिए?\n(A) भारत 88वें स्थान पर रहा।\n(B) हांगकांग प्रथम और सिंगापुर द्वितीय स्थान पर रहे।\n(C) फ्रेजर इंस्टीट्यूट (कनाडा) द्वारा यह रिपोर्ट जारी की जाती है।",
    q_en: "179. Consider the statements regarding Economic Freedom of the World 2026 Index:",
    opts: ["केवल A और B", "केवल B और C", "A, B और C सभी सत्य हैं", "कोई भी सत्य नहीं"],
    opts_en: ["Only A and B", "Only B and C", "A, B and C are all true", "None is true"],
    ans: 2,
    exp: "कनाडा के फ्रेजर इंस्टीट्यूट द्वारा जारी रिपोर्ट में विधिक प्रणाली, संपत्ति के अधिकार, मुद्रा की सुदृढ़ता और व्यापारिक स्वतंत्रता के आधार पर हांगकांग शीर्ष पर रहा तथा भारत 88वें स्थान पर रहा।"
  },
  {
    q: "180. प्रथम 'भारत रत्न डॉ. भूपेन हजारिका राष्ट्रीय पुरस्कार' से किसे सम्मानित किया गया है?",
    q_en: "180. Who was conferred with the first 'Bharat Ratna Dr. Bhupen Hazarika National Award'?",
    opts: ["उषा मंगेशकर", "कैलाश सत्यार्थी", "अजीत डोभाल", "सोनू निगम"],
    opts_en: ["Usha Mangeshkar", "Kailash Satyarthi", "Ajit Doval", "Sonu Nigam"],
    ans: 0,
    exp: "असम सरकार और सांस्कृतिक न्यास द्वारा सुप्रसिद्ध पार्श्व गायिका उषा मंगेशकर को पूर्वोत्तर के महान संगीतकार भूपेन हजारिका के सम्मान में स्थापित पहले राष्ट्रीय पुरस्कार से अलंकृत किया गया।"
  },
  {
    q: "181. प्रचंड चक्रवाती तूफान 'अर्णव' (Cyclone Arnav) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "181. Identify the correct statement regarding Severe Cyclonic Storm 'Arnav':",
    opts: ["यह बंगाल की खाड़ी में उत्पन्न हुआ।", "अर्णव नाम बांग्लादेश द्वारा प्रस्तावित किया गया था।", "यह भारतीय पूर्वी तटीय राज्यों से टकराया।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Originated in the Bay of Bengal.", "Name 'Arnav' was contributed by Bangladesh.", "Impacted India's eastern coastal states.", "More than one of the above."],
    ans: 3,
    exp: "हिंद महासागर चक्रवात नामकरण तालिका के तहत बांग्लादेश द्वारा सुझाए गए नाम 'अर्णव' चक्रवात ने बंगाल की खाड़ी में तीव्रता हासिल कर तटीय क्षेत्रों में वर्षा दर्ज कराई।"
  },
  {
    q: "182. 'विधिक माप विज्ञान में विकास' विषय पर विधिक माप विज्ञान की अंतरराष्ट्रीय समिति (CIML) की 61वीं बैठक कहाँ आयोजित की गई है?",
    q_en: "182. Where was the 61st Meeting of International Committee of Legal Metrology (CIML) held?",
    opts: ["टोक्यो", "लंदन", "नई दिल्ली", "पेरिस"],
    opts_en: ["Tokyo", "London", "New Delhi", "Paris"],
    ans: 2,
    exp: "उपभोक्ता मामले विभाग के तत्वावधान में भारत ने पहली बार नई दिल्ली में OIML की इस प्रतिष्ठित वैश्विक बैठक की मेजबानी की, जिससे भारत अंतरराष्ट्रीय माप-प्रमाणन प्रमाणपत्र जारी करने वाला प्रमुख हब बन गया है।"
  },
  {
    q: "183. 12वें ब्रिक्स संसदीय मंच (BRICS Parliamentary Forum) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "183. Identify the correct statement regarding 12th BRICS Parliamentary Forum:",
    opts: ["इसका आयोजन नई दिल्ली में किया गया है।", "लोकसभा अध्यक्ष ओम बिरला ने इसका उद्घाटन/संबोधन किया।", "इसकी थीम 'जन-केंद्रित विकास हेतु संसदों को सुदृढ़ बनाना' है।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Organized in New Delhi.", "Addressed by Lok Sabha Speaker Om Birla.", "Theme: Strengthening Parliaments for People-Centric Development.", "More than one of the above."],
    ans: 3,
    exp: "ब्रिक्स देशों के सांसदों और पीठासीन अधिकारियों ने बहुपक्षवाद के सुदृढ़ीकरण और सतत विकास लक्ष्यों (SDGs) को प्राप्त करने में विधायी संस्थाओं की भूमिका पर बल दिया।"
  },
  {
    q: "184. आयुष्मान भारत डिजिटल मिशन (ABDM) के तहत 'स्कैन एंड रजिस्टर' (Scan and Share) श्रेणी में किस राज्य ने देश में पहला स्थान हासिल किया है?",
    q_en: "184. Which state ranked 1st nationally in 'Scan and Register' OPD module under ABDM?",
    opts: ["बिहार", "उत्तर प्रदेश", "महाराष्ट्र", "झारखंड"],
    opts_en: ["Bihar", "Uttar Pradesh", "Maharashtra", "Jharkhand"],
    ans: 1,
    exp: "उत्तर प्रदेश ने सरकारी अस्पतालों में QR कोड आधारित त्वरित ओपीडी पंजीकरण (Scan & Share) को लागू कर मरीजों की कतारों को समाप्त करने में देश में शीर्ष स्थान प्राप्त किया।"
  },
  {
    q: "185. देशभर में 'सतर्कता जागरूकता सप्ताह 2026' (Vigilance Awareness Week) के आयोजन के संदर्भ में गलत कथन की पहचान कीजिए?",
    q_en: "185. Identify the incorrect statement regarding Vigilance Awareness Week 2026:",
    opts: ["इसका आयोजन 26 अक्टूबर से 1 नवंबर 2026 तक किया गया।", "वर्ष 2026 की थीम 'सत्यनिष्ठा की संस्कृति से राष्ट्र की समृद्धि' है।", "केंद्रीय सतर्कता आयोग (CVC) की स्थापना 1964 में के. संथानम समिति की सिफारिश पर हुई थी।", "CVC एक संवैधानिक (Constitutional) निकाय है।"],
    opts_en: ["Observed from 26 Oct to 1 Nov 2026.", "Theme: Culture of Integrity for Nation's Prosperity.", "CVC established in 1964 on Santhanam Committee recommendations.", "CVC is a Constitutional Body."],
    ans: 3,
    exp: "केंद्रीय सतर्कता आयोग (CVC) एक संवैधानिक निकाय (Constitutional Body) नहीं है; इसे CVC अधिनियम 2003 के माध्यम से 'सांविधिक दर्जा' (Statutory Status) प्राप्त है।"
  },
  {
    q: "186. इंडो-पैसिफिक रीजनल डायलॉग (IPRD) 2026 के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "186. Identify the correct statement regarding Indo-Pacific Regional Dialogue (IPRD) 2026:",
    opts: ["इसका आयोजन नई दिल्ली के मानेकशॉ सेंटर में किया गया।", "इसकी थीम हिंद-प्रशांत क्षेत्र में समुद्री रणनीतिक सहयोग पर केंद्रित थी।", "इसका आयोजन भारतीय नौसेना के नेशनल मैरीटाइम फाउंडेशन (NMF) द्वारा किया गया।", "उपर्युक्त में से एक से अधिक।"],
    opts_en: ["Held at Manekshaw Centre, New Delhi.", "Theme focused on maritime strategic cooperation in Indo-Pacific.", "Organized by National Maritime Foundation (NMF).", "More than one of the above."],
    ans: 3,
    exp: "IPRD भारतीय नौसेना का सर्वोच्च अंतरराष्ट्रीय रणनीतिक समुद्री संवाद है, जो हिंद-प्रशांत महासागरीय क्षेत्र में नियम-आधारित व्यवस्था और समुद्री सुरक्षा की समीक्षा करता है।"
  },
  {
    q: "187. बिहार के किस पर्यावरणविद् को 'जल प्रहरी सम्मान 2026' से सम्मानित किया गया है?",
    q_en: "187. Which environmentalist from Bihar was honored with 'Jal Prahari Samman 2026'?",
    opts: ["संजय कुमार", "अनिशा शेख", "आशीष जैन", "अंकित कुमार"],
    opts_en: ["Sanjay Kumar", "Anisha Sheikh", "Ashish Jain", "Ankit Kumar"],
    ans: 0,
    exp: "बिहार में पारंपरिक आहार-पईन प्रणाली के पुनरुद्धार और भूजल संरक्षण में अनुकरणीय योगदान देने वाले पर्यावरण कार्यकर्ता संजय कुमार को जल शक्ति मंत्रालय द्वारा जल प्रहरी सम्मान दिया गया।"
  },
  {
    q: "188. हाल ही में 19वें अर्बन मोबिलिटी इंडिया (UMI) सम्मेलन 2026 का आयोजन कहाँ किया गया है?",
    q_en: "188. Where was the 19th Urban Mobility India (UMI) Conference & Expo 2026 held?",
    opts: ["नवी मुंबई", "भुवनेश्वर", "गांधीनगर", "दिल्ली"],
    opts_en: ["Navi Mumbai", "Bhubaneswar", "Gandhinagar", "Delhi"],
    ans: 2,
    exp: "आवासन और शहरी कार्य मंत्रालय द्वारा आयोजित 19वां अर्बन मोबिलिटी इंडिया सम्मेलन गुजरात के गांधीनगर में संपन्न हुआ, जिसका मुख्य फोकस इलेक्ट्रिक बसें, मेट्रो विस्तार और एकीकृत मल्टी-मॉडल शहरी परिवहन था।"
  },
  {
    q: "189. स्पेन के प्रतिष्ठित 'प्रिंसेस ऑफ ऑस्टुरियस अवॉर्ड 2026' (Princess of Asturias Award for Sports) से किसे सम्मानित किया गया है?",
    q_en: "189. Who received Spain's prestigious Princess of Asturias Award for Sports 2026?",
    opts: ["लियोनेल मेसी", "क्रिस्टियानो रोनाल्डो", "राफेल नडाल", "सुनील छेत्री"],
    opts_en: ["Lionel Messi", "Cristiano Ronaldo", "Rafael Nadal", "Sunil Chhetri"],
    ans: 2,
    exp: "स्पेन के दिग्गज टेनिस खिलाड़ी और 22 बार के ग्रैंड स्लैम चैंपियन राफेल नडाल को खेल भावना, असाधारण उपलब्धियों और युवा प्रेरणा हेतु स्पेन के सर्वोच्च सांस्कृतिक-खेल पुरस्कार से नवाजा गया।"
  },
  {
    q: "190. वर्ष 2026 के प्रतिष्ठित ऑस्कर क्लेन मेडल (Oskar Klein Medal) से किस भारतीय सैद्धांतिक भौतिक विज्ञानी को सम्मानित किया गया है?",
    q_en: "190. Which renowned Indian theoretical physicist was awarded the Oskar Klein Medal 2026?",
    opts: ["प्रोफेसर अशोक सेन", "सुप्रिया साहू", "शांतनु दास", "अशोक चौधरी"],
    opts_en: ["Prof. Ashoke Sen", "Supriya Sahu", "Shantanu Das", "Ashok Choudhary"],
    ans: 0,
    exp: "स्ट्रिंग थ्योरी (String Theory) और ब्लैक होल माइक्रोस्टेट्स में युगांतरकारी शोध के लिए विख्यात भारतीय भौतिक विज्ञानी प्रोफेसर अशोक सेन को स्टॉकहोम विश्वविद्यालय और रॉयल स्वीडिश एकेडमी ने ऑस्कर क्लेन पदक से सम्मानित किया।"
  },
  {
    q: "191. सक्रिय शासन और योजनाओं के समयबद्ध कार्यान्वयन के लिए प्रमुख मंच - प्रगति (PRAGATI) की 54वीं बैठक की अध्यक्षता किसने की है?",
    q_en: "191. Who chaired the 54th interaction of PRAGATI (Pro-Active Governance and Timely Implementation)?",
    opts: ["निर्मला सीतारमण", "अमित शाह", "नरेंद्र मोदी", "शिवराज सिंह चौहान"],
    opts_en: ["Nirmala Sitharaman", "Amit Shah", "Narendra Modi", "Shivraj Singh Chouhan"],
    ans: 2,
    exp: "प्रधानमंत्री श्री नरेंद्र मोदी ने केंद्र और राज्यों की 8 लाख करोड़ से अधिक लागत की प्रमुख अवसंरचना परियोजनाओं की समीक्षा के लिए 'प्रगति' बैठक की अध्यक्षता की।"
  },
  {
    q: "192. हाल ही में 'अंतर्राष्ट्रीय ऊर्जा सप्ताह 2026' (Singapore International Energy Week) कहाँ आयोजित किया गया है?",
    q_en: "192. Where was the International Energy Week 2026 held?",
    opts: ["भारत", "सिंगापुर", "चीन", "जापान"],
    opts_en: ["India", "Singapore", "China", "Japan"],
    ans: 1,
    exp: "एशिया-प्रशांत क्षेत्र में ऊर्जा सुरक्षा, कार्बन तटस्थता और ग्रीन ग्रिड कनेक्टिविटी पर केंद्रित अंतरराष्ट्रीय ऊर्जा सप्ताह का आयोजन सिंगापुर के मरीना बे सैंड्स में संपन्न हुआ।"
  },
  {
    q: "193. 'खेलो इंडिया खेल उपकरण विनिर्माण योजना' के संदर्भ में कौन-सा कथन सही है?",
    q_en: "193. Which statement is correct regarding Khelo India Sports Goods Manufacturing Scheme?",
    opts: ["उद्देश्य: प्रतिस्पर्धी खेल विनिर्माण पारितंत्र विकसित करना।", "अवधि: वर्ष 2026 से 2033-34 तक।", "कुल परिव्यय: 1,856.67 करोड़ रुपये।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Objective: Build competitive sports manufacturing ecosystem.", "Duration: FY 2026 to 2033-34.", "Total Outlay: ₹1,856.67 crore.", "More than one of the above"],
    ans: 3,
    exp: "भारत को वैश्विक खेल उपकरण निर्यात का प्रमुख केंद्र बनाने और अंतरराष्ट्रीय मानकों के सामान भारत में तैयार करने के लिए यह केंद्रीय योजना स्वीकृत की गई।"
  },
  {
    q: "194. 'प्रधानमंत्री विकसित ग्राम स्वराज योजना' के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "194. Identify the correct statement regarding PM Viksit Gram Swaraj Yojana:",
    opts: ["यह एक केंद्र प्रायोजित योजना (Centrally Sponsored Scheme) है।", "योजना की अवधि 2026-27 से 2030-31 है।", "कुल परिव्यय 7,395.55 करोड़ रुपये है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["It is a Centrally Sponsored Scheme.", "Duration: 2026-27 to 2030-31.", "Total outlay is ₹7,395.55 crore.", "More than one of the above"],
    ans: 3,
    exp: "पंचायती राज संस्थाओं के डिजिटलीकरण, ग्राम पंचायतों में सोलर स्ट्रीट लाइट, ठोस अपशिष्ट प्रबंधन और आत्मनिर्भर पंचायत अवसंरचना के विकास हेतु इस योजना का विस्तार किया गया।"
  },
  {
    q: "195. युवा कार्यक्रम और खेल मंत्रालय, शिक्षा मंत्रालय तथा किस अंतरराष्ट्रीय संस्था ने स्कूलों में खेल मूल्यों को बढ़ावा देने के लिए समझौता किया है?",
    q_en: "195. Ministry of Youth Affairs, Ministry of Education and which international body signed an MoU to promote sports values in schools?",
    opts: ["विश्व बैंक", "यूनेस्को (UNESCO)", "यूएनओ", "फीफा"],
    opts_en: ["World Bank", "UNESCO", "UNO", "FIFA"],
    ans: 1,
    exp: "यूनेस्को के 'Fit for Life' वैश्विक खेल फ्लैगशिप प्रोग्राम के तहत भारतीय स्कूलों में शारीरिक शिक्षा, समावेशिता, नेतृत्व क्षमता और स्वास्थ्य संवर्धन हेतु त्रिपक्षीय साझेदारी की गई।"
  },
  {
    q: "196. इंडियन रेलवे द्वारा पूरे देश में लागू हुई 'ऑप्शनल ट्रैवल इंश्योरेंस स्कीम' (OTIS) में कितने प्रीमियम पर 10 लाख रुपये तक का बीमा कवर दिया जाता है?",
    q_en: "196. Under Indian Railways' Optional Travel Insurance Scheme (OTIS), what is the nominal premium for ₹10 lakh coverage?",
    opts: ["₹1", "45 पैसे", "₹10", "₹100"],
    opts_en: ["₹1", "45 Paise", "₹10", "₹100"],
    ans: 1,
    exp: "IRCTC के माध्यम से टिकट बुक करते समय यात्री मात्र 45 पैसे (0.45 रुपये) का मामूली प्रीमियम देकर रेल दुर्घटना या अप्रिय घटना की स्थिति में ₹10 लाख तक का दुर्घटना बीमा कवर प्राप्त कर सकते हैं।"
  },
  {
    q: "197. 'नशामुक्त बिहार अभियान' के संदर्भ में गलत कथन की पहचान कीजिए।",
    q_en: "197. Identify the incorrect statement regarding 'Nasha Mukt Bihar Abhiyan':",
    opts: ["राष्ट्रपति ने पटना से अभियान का शुभारंभ किया।", "अभियान 27 अक्टूबर से 26 नवंबर 2026 तक संचालित है।", "इसमें जीविका दीदियों और ब्रह्माकुमारीज की बहनों की भागीदारी होगी।", "केंद्र ने वर्ष 2047 के बजाय 2029 तक देश को नशामुक्त बनाने का लक्ष्य रखा है।"],
    opts_en: ["Launched from Patna.", "Campaign runs from 27 Oct to 26 Nov 2026.", "Participated by Jeevika Didis & Brahma Kumaris.", "Centre set target to make India drug-free by 2029."],
    ans: 3,
    exp: "केंद्रीय गृह मंत्रालय और सामाजिक न्याय मंत्रालय द्वारा भारत को पूर्णतः नशामुक्त बनाने का राष्ट्रीय संकल्प वर्ष 2047 (अमृत काल की पूर्णता) के लिए निर्धारित है।"
  },
  {
    q: "198. UAE के राष्ट्रपति शेख मोहम्मद बिन जायद अल नाहयान ने फ्लाईदुबई के वीर चालक दल के सदस्यों को कौन-सा पुरस्कार प्रदान किया?",
    q_en: "198. Which medal of honor did UAE President Sheikh Mohamed bin Zayed confer upon the heroic Flydubai crew?",
    opts: ["गरिमा पुरस्कार", "ज़ायद द्वितीय श्रेणी का प्रथम श्रेणी आदेश", "नागरिक वीरता पदक (Civil Bravery Medal)", "एमिरेट्स मेडल ऑफ ऑनर"],
    opts_en: ["Garima Award", "Order of Zayed II (First Class)", "Civil Bravery Medal", "Emirates Medal of Honour"],
    ans: 1,
    exp: "हवाई संकट के दौरान अदम्य साहस और पेशेवर दक्षता से सैकड़ों यात्रियों की जान बचाने वाले कैप्टन स्मित मच्छार और सह-कर्मियों को यूएई का प्रतिष्ठित 'Order of Zayed II' सम्मान प्रदान किया गया।"
  },
  {
    q: "199. जैव विविधता पर कन्वेंशन (CBD) के 17वें सम्मेलन (CBD CoP-17) के संदर्भ में सही कथन की पहचान कीजिए।",
    q_en: "199. Identify the correct statement regarding UN Convention on Biological Diversity COP-17:",
    opts: ["आयोजन आर्मेनिया के येरेवन में किया जाना प्रस्तावित/सम्पन्न हुआ।", "केंद्रीय पर्यावरण मंत्री श्री भूपेंद्र यादव ने भारतीय प्रतिनिधिमंडल का नेतृत्व किया।", "इसका मुख्य लक्ष्य कुनमिंग-मॉन्ट्रियल ग्लोबल बायोडायवर्सिटी फ्रेमवर्क का क्रियान्वयन है।", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Hosted in Yerevan, Armenia.", "Indian delegation led by Environment Minister Bhupender Yadav.", "Focuses on Kunming-Montreal Global Biodiversity Framework.", "More than one of the above"],
    ans: 3,
    exp: "CBD CoP-17 का मुख्य उद्देश्य 2030 तक दुनिया की 30% भूमि और समुद्र के संरक्षण ('30x30' लक्ष्य) की वैश्विक प्रगति का मूल्यांकन करना और जैव-विविधता वित्तपोषण को गति देना है।"
  },
  {
    q: "200. हाल ही में 'समहिता' परियोजना (SAMHITA Project) के अंतर्गत पहला संस्थागत भागीदार कौन बना है?",
    q_en: "200. Who became the first institutional partner under the prestigious SAMHITA Project for cultural preservation?",
    opts: ["गंगारामया मंदिर (कोलंबो, श्रीलंका)", "तिरुपति बालाजी मंदिर", "मीनाक्षी अम्मन मंदिर", "बृहदेश्वर मंदिर"],
    opts_en: ["Gangaramaya Temple (Colombo, Sri Lanka)", "Tirupati Balaji Temple", "Meenakshi Amman Temple", "Brihadisvara Temple"],
    ans: 0,
    exp: "प्राचीन भारतीय ज्ञान प्रणालियों, पांडुलिपियों के डिजिटलीकरण और दक्षिण एशियाई सांस्कृतिक धरोहरों के संरक्षण हेतु भारत सरकार की 'समहिता' परियोजना के तहत कोलंबो (श्रीलंका) स्थित प्रसिद्ध गंगारामया मंदिर प्रथम अंतरराष्ट्रीय संस्थागत भागीदार बना।"
  }
];

// Helper to generate past 7 days Daily CA
function generateRecent7DaysDaily() {
  const result = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const formatted = d.toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    
    result.push({
      id: `daily_${dateStr}`,
      date: dateStr,
      name: `Daily CA: ${formatted}`,
      icon: "⚡",
      tests: []
    });
  }
  return result;
}

// Helper to generate 12 months for Monthly CA
function generateMonths(year, icon) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months.map(m => {
    const isOct2026 = (year === "2026" && m === "October");
    return {
      id: `${m.toLowerCase()}_${year}`,
      name: `${m} ${year} – Current Affairs`,
      icon: icon,
      tests: isOct2026 ? [
        {
          id: "oct_t1",
          title: "Test 01: October 2026 Full Length Mock Test (Q1–Q100)",
          desc: "100 High-Yield Questions • Time Limit: 80 Minutes • Full Explanations",
          timeMins: 80,
          data: CA_OCT_2026_T1
        },
        {
          id: "oct_t2",
          title: "Test 02: October 2026 Full Length Mock Test (Q101–Q200)",
          desc: "100 High-Yield Questions • Time Limit: 80 Minutes • In-Depth Explanations",
          timeMins: 80,
          data: CA_OCT_2026_T2
        }
      ] : []
    };
  });
}

// MASTER DATABASE
var EXAMS_DATA = {
  upsc: {
    id: "upsc",
    name: "UPSC CSE",
    title: "UPSC Civil Services Examination",
    desc: "General Studies Prelims • Negative Marking: 1/3 (-0.66)",
    penaltyText: "Negative Penalty: 1/3rd (-0.66)",
    correctMarks: 2.0,
    negativePenalty: 0.66,
    subjects: [
      { id: "polity", name: "Indian Polity & Governance", icon: "⚖️", tests: [] },
      { id: "history", name: "History of India & INM", icon: "📜", tests: [] },
      { id: "geography", name: "Indian & World Geography", icon: "🌍", tests: [] },
      { id: "env_eco", name: "Environment & Ecology", icon: "🌱", tests: [] },
      { id: "science", name: "General Science & Tech", icon: "🔬", tests: [] },
      { id: "economy", name: "Indian Economy & Development", icon: "📈", tests: [] },
      { id: "int_org", name: "International Organizations", icon: "🌐", tests: [] }
    ]
  },
  bpsc: {
    id: "bpsc",
    name: "BPSC CCE",
    title: "Bihar Public Service Commission (CCE)",
    desc: "General Studies Prelims • Negative Marking: 1/3 (-0.33)",
    penaltyText: "Negative Penalty: 1/3rd (-0.33)",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    subjects: [
      { id: "bihar_special", name: "Bihar Special", icon: "🎯", tests: [] },
      { id: "polity", name: "Indian Polity & Constitution", icon: "🏛️", tests: [] },
      { id: "history", name: "Indian History", icon: "📜", tests: [] },
      { id: "geography", name: "Geography", icon: "🗺️", tests: [] },
      { id: "env_eco_bpsc", name: "Environment & Ecology", icon: "🌱", tests: [] },
      { id: "science", name: "General Science", icon: "🧪", tests: [] },
      { id: "economy", name: "Economy", icon: "📊", tests: [] },
      { id: "int_org_bpsc", name: "International Organizations", icon: "🌐", tests: [] }
    ]
  },
  ugc: {
    id: "ugc",
    name: "UGC NET / JRF",
    title: "UGC NET / JRF Teaching Aptitude & Political Science",
    desc: "NTA CBT Pattern • 2 Marks Per Question • No Negative Marking",
    penaltyText: "No Negative Marking",
    correctMarks: 2.0,
    negativePenalty: 0.0,
    subjects: [
      { id: "ugc_paper1", name: "Paper 1: Teaching & Research Aptitude", icon: "📖", tests: [] },
      { id: "ugc_paper2", name: "Paper 2: Political Science", icon: "🏛️", tests: [] }
    ]
  },
  ssc: {
    id: "ssc",
    name: "SSC Exams",
    title: "Staff Selection Commission (SSC Examination Hub)",
    desc: "Tier-1 CBT Simulator • CGL, CHSL, MTS, GD, CPO, Steno, JE, JHT",
    penaltyText: "Negative Penalty: 0.50 Marks",
    correctMarks: 2.0,
    negativePenalty: 0.50,
    subjects: [
      { id: "ssc_cgl", name: "SSC CGL (Combined Graduate Level)", icon: "🎓", tests: [] },
      { id: "ssc_chsl", name: "SSC CHSL (Combined Higher Secondary Level)", icon: "📄", tests: [] },
      { id: "ssc_mts", name: "SSC MTS (Multi-Tasking Staff)", icon: "🛠️", tests: [] },
      { id: "ssc_gd", name: "SSC GD (General Duty Constable)", icon: "🎖️", tests: [] },
      { id: "ssc_cpo", name: "SSC CPO (Central Police Organisation)", icon: "👮", tests: [] },
      { id: "ssc_steno", name: "SSC Stenographer (Grade C and D)", icon: "⌨️", tests: [] },
      { id: "ssc_je", name: "SSC JE (Junior Engineer)", icon: "⚙️", tests: [] },
      { id: "ssc_jht", name: "SSC JHT (Junior Hindi Translator)", icon: "🌐", tests: [] }
    ]
  },
  bihar_exams: {
    id: "bihar_exams",
    name: "Bihar Exams",
    title: "Bihar State Govt Recruitment Exams",
    desc: "BPSSC & BSSC Recruitment Examination Portal",
    penaltyText: "State Specific Marking",
    correctMarks: 2.0,
    negativePenalty: 0.20,
    subjects: [
      { id: "bihar_si", name: "Bihar SI (Sub-Inspector)", icon: "👮", tests: [] },
      { id: "bihar_constable", name: "Bihar Police Constable", icon: "🛡️", tests: [] },
      { id: "bssc_inter", name: "BSSC (Bihar Staff Selection Commission)", icon: "📋", tests: [] },
      { id: "bihar_cgl", name: "Bihar CGL (Bihar Combined Graduate Level)", icon: "🏛️", tests: [] }
    ]
  },
  rrb: {
    id: "rrb",
    name: "RRB Exams",
    title: "Railway Recruitment Board (RRB Exams Portal)",
    desc: "Indian Railways CBT Examination Modules • Negative Penalty: 1/3rd (-0.33)",
    penaltyText: "Negative Penalty: 1/3rd (-0.33)",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    subjects: [
      { id: "rrb_alp", name: "ALP (Assistant Loco Pilot)", icon: "🚆", tests: [] },
      { id: "rrb_tech", name: "Technician", icon: "🔧", tests: [] },
      { id: "rrb_groupd", name: "Group D (Level 1)", icon: "🛤️", tests: [] },
      { id: "rrb_ntpc_12th", name: "NTPC (Under-Graduate Level 12th Pass)", icon: "📑", tests: [] },
      { id: "rrb_ntpc_grad", name: "NTPC (Graduate Level Degree Holders)", icon: "🎓", tests: [] },
      { id: "rrb_je", name: "JE (Junior Engineer)", icon: "⚙️", tests: [] }
    ]
  },
  ca: {
    id: "ca",
    name: "Current Affairs",
    title: "Current Affairs Hub (Daily & Monthly)",
    desc: "Daily Tests (Customizable by Date) & Complete Monthly Archives",
    penaltyText: "Negative Penalty: 1/3rd (-0.33)",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    daily: generateRecent7DaysDaily(),
    years: {
      "2026": generateMonths("2026", "🪔"),
      "2025": generateMonths("2025", "📁")
    }
  },
  ncert: {
    id: "ncert",
    name: "NCERT",
    title: "NCERT Foundation & Chapter-wise Tests",
    desc: "Class 6 to Class 12 Standard NCERT MCQ Series for Civil Services",
    penaltyText: "Standard Marking (+2 / -0.66)",
    correctMarks: 2.0,
    negativePenalty: 0.66,
    subjects: [
      { id: "ncert_history", name: "NCERT History (Class 6-12)", icon: "📜", tests: [] },
      { id: "ncert_geography", name: "NCERT Geography (Class 6-12)", icon: "🌍", tests: [] },
      { id: "ncert_polity", name: "NCERT Indian Polity & Civics (Class 6-12)", icon: "⚖️", tests: [] },
      { id: "ncert_science", name: "NCERT General Science (Class 6-10)", icon: "🔬", tests: [] },
      { id: "ncert_economy", name: "NCERT Economics (Class 9-12)", icon: "📈", tests: [] },
      { id: "ncert_env", name: "NCERT Ecology & Environment", icon: "🌱", tests: [] }
    ]
  },
  pyq: {
    id: "pyq",
    name: "PYQ Archives",
    title: "Official Previous Years Questions Bank",
    desc: "Authentic PYQs: UPSC, BPSC & SSC",
    penaltyText: "Exam Specific Marking",
    correctMarks: 2.0,
    negativePenalty: 0.66,
    subjects: [
      { id: "upsc_pyq", name: "UPSC Civil Services Prelims Official PYQ", icon: "🏛️", tests: [] },
      { id: "bpsc_pyq", name: "BPSC CCE Prelims Official PYQ", icon: "🎯", tests: [] },
      { id: "ssc_pyq", name: "SSC CGL / CPO General Awareness PYQ", icon: "⚡", tests: [] }
    ]
  }
};
