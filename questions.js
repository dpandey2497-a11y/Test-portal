// questions.js — TestChakra Master Database

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
    exp: "विपणन सत्र 2027-28 के लिए रबी फसलों के MSP में सर्वाधिक वृद्धि सरसों और खसखस (Mustard & Rapeseed) पर दर्ज की गई है।"
  },
  {
    q: "2. PM-DHARA योजना के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "2. Identify the correct statement regarding PM-DHARA Scheme:",
    opts: ["₹1,86,405 करोड़ का कुल परिव्यय है।", "135 GW रिन्यूएबल एनर्जी इवेक्यूएशन विकसित करना है।", "50 GWh बैटरी स्टोरेज सिस्टम विकसित किया जाएगा।", "उपरोक्त में से एक से अधिक।"],
    opts_en: ["Total outlay is ₹1,86,405 crore.", "The project aims to develop 135 GW renewable energy evacuation.", "50 GWh battery storage capacity will be developed.", "More than one of the above."],
    ans: 3,
    exp: "PM-DHARA योजना भारत के ग्रिड एकीकरण को सशक्त बनाने के लिए 135 GW रिन्यूएबल एनर्जी इवेक्यूएशन तथा 50 GWh बैटरी स्टोरेज सिस्टम को सम्मिलित करती है।"
  },
  {
    q: "3. हाल ही में झारखंड को किस पारंपरिक लोक ताल वाद्य यंत्र के लिए भौगोलिक संकेतक (GI Tag) प्राप्त हुआ?",
    q_en: "3. Recently, Jharkhand received a GI Tag for which traditional folk percussion musical instrument?",
    opts: ["मांदर", "कुचाई सिल्क साड़ी", "केसरिया कलाकंद", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Mandar", "Kuchai Silk Saree", "Kesaria Kalakand", "More than one of the above"],
    ans: 0,
    exp: "पारंपरिक ताल वाद्य 'मांदर' को प्रतिष्ठित GI Tag प्रदान किया गया।"
  },
  {
    q: "4. खाद्य और कृषि संगठन (FAO) की वानिकी समिति के 28वें सत्र (COFO-28) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "4. Identify the correct statement regarding COFO-28:",
    opts: ["आयोजन रोम, इटली में किया गया।", "विषय 'भोजन, लचीलापन और समृद्धि के लिए वन' है।", "भारत का कुल वन और वृक्ष आवरण 25.17% है।", "उपरोक्त में से एक से अधिक।"],
    opts_en: ["Held in Rome, Italy.", "Theme: 'Forests for Food, Resilience, and Prosperity'.", "India's forest and tree cover stands at 25.17%.", "More than one of the above."],
    ans: 3,
    exp: "COFO-28 का आयोजन रोम (इटली) में हुआ जिसमें खाद्य सुरक्षा और वनों की संधारणीयता पर वैश्विक नीतियां निर्धारित की गईं।"
  },
  {
    q: "5. हाल ही में माइक्रोसॉफ्ट ने भारत में अपना चौथा क्लाउड क्षेत्र कहाँ शुरू किया है?",
    q_en: "5. Where did Microsoft recently launch its fourth cloud region in India?",
    opts: ["पुणे", "चेन्नई", "मुंबई", "हैदराबाद"],
    opts_en: ["Pune", "Chennai", "Mumbai", "Hyderabad"],
    ans: 3,
    exp: "माइक्रोसॉफ्ट ने हैदराबाद में अपना चौथा हाइपरस्केल डेटा सेंटर और क्लाउड रीजन स्थापित किया है।"
  },
  {
    q: "6. संयुक्त राष्ट्र सुरक्षा परिषद में सुधार से संबंधित 'L-69' किन देशों का समूह है?",
    q_en: "6. 'L-69' group regarding UN Security Council reforms represents which countries?",
    opts: ["विकासशील देशों का अंतर क्षेत्रीय समूह", "विकसित देशों का अंतर क्षेत्रीय समूह", "अफ्रीकी संघ के दस देशों का समूह", "यूरोपीय संघ के दस देशों का समूह"],
    opts_en: ["Cross-regional group of developing countries", "Cross-regional group of developed countries", "Group of 10 African Union nations", "Group of 10 European Union nations"],
    ans: 0,
    exp: "L-69 एशिया, अफ्रीका, लैटिन अमेरिका और छोटे द्वीपीय विकासशील राष्ट्रों (SIDS) का समूह है।"
  },
  {
    q: "7. FIDE रेटिंग में शामिल होने वाली भारत की सबसे कम उम्र की चेस प्लेयर कौन बन गई हैं?",
    q_en: "7. Who became the youngest Indian chess player to be included in FIDE ratings?",
    opts: ["एलेना मिश्रा", "मरियम फातिमा", "डी. गुकेश", "आर. प्रज्ञानंदा"],
    opts_en: ["Elena Mishra", "Maryam Fatima", "D. Gukesh", "R. Praggnanandhaa"],
    ans: 0,
    exp: "एलेना मिश्रा ने बेहद कम उम्र में अंतरराष्ट्रीय शतरंज महासंघ (FIDE) की आधिकारिक रेटिंग हासिल की।"
  },
  {
    q: "8. थीम 'शेयर्ड स्टोरीज, शेयर्ड फ्यूचर्स' के साथ 'ब्रिक्स थिएटर फेस्टिवल 2026' कहाँ आयोजित की गई है?",
    q_en: "8. Where was 'BRICS Theatre Festival 2026' held under the theme 'Shared Stories, Shared Futures'?",
    opts: ["नई दिल्ली", "पटना", "मुंबई", "भोपाल"],
    opts_en: ["New Delhi", "Patna", "Mumbai", "Bhopal"],
    ans: 0,
    exp: "ब्रिक्स थिएटर फेस्टिवल 2026 का आयोजन नई दिल्ली में संपन्न हुआ।"
  },
  {
    q: "9. भारत-मर्कोसुर तरजीही व्यापार समझौते (PTA) के संदर्भ में सही कथन की पहचान कीजिए?",
    q_en: "9. Identify the correct statement concerning India-Mercosur PTA:",
    opts: ["इलेक्ट्रॉनिक मूल प्रमाणपत्रों की स्वीकार्यता के लिए प्रथम अतिरिक्त प्रोटोकॉल पर हस्ताक्षर हुआ।", "यह 1 जून 2009 से लागू हुआ है।", "मर्कोसुर में पूर्ण सदस्य देश हैं।", "उपरोक्त में से एक से अधिक।"],
    opts_en: ["Signed First Additional Protocol for electronic Certificates of Origin.", "Enforced on 1 June 2009.", "Mercosur has full member nations.", "More than one of the above."],
    ans: 3,
    exp: "भारत और मर्कोसुर ने सीमा शुल्क सरलीकरण और इलेक्ट्रॉनिक सर्टिफिकेट ऑफ ओरिजिन को मान्यता देने हेतु प्रोटोकॉल पर सहमति व्यक्त की।"
  },
  {
    q: "10. हाल ही में खबरों में रहे मयून द्वीप किस जलडमरूमध्य में स्थित है?",
    q_en: "10. In which strait is Mayun Island situated, which was recently in the news?",
    opts: ["होर्मुज जलडमरूमध्य", "बाब अल-मंडेब जलडमरूमध्य", "मलक्का जलडमरूमध्य", "बोस्पोरस जलडमरूमध्य"],
    opts_en: ["Strait of Hormuz", "Bab-el-Mandeb Strait", "Strait of Malacca", "Bosphorus Strait"],
    ans: 1,
    exp: "मयून द्वीप लाल सागर और अदन की खाड़ी को जोड़ने वाले बाब अल-मंडेब जलडमरूमध्य में स्थित है।"
  }
];

for (var i = 11; i <= 100; i++) {
  CA_OCT_2026_T1.push({
    q: i + ". अक्टूबर 2026 राष्ट्रीय एवं अंतरराष्ट्रीय परिदृश्य - अभ्यास प्रश्न सेट " + i,
    q_en: i + ". October 2026 Current Affairs Mock Practice Question " + i,
    opts: ["विकल्प A (सत्य)", "विकल्प B", "विकल्प C", "उपरोक्त में से एक से अधिक"],
    opts_en: ["Option A (Correct)", "Option B", "Option C", "More than one of the above"],
    ans: 0,
    exp: "अक्टूबर 2026 समसामयिकी तथ्य एवं राष्ट्रीय घटनाक्रम का आधिकारिक संदर्भ।"
  });
}

// ==========================================
// TEST 02: OCTOBER 2026 (Q. 1 to 100)
// ==========================================
var CA_OCT_2026_T2 = [
  {
    q: "1. 'बदलती दुनिया: शक्ति के नए साधनों को परिभाषित करना' थीम के साथ 8वें ब्लूमबर्ग न्यू इकोनॉमी फोरम की बैठक कहाँ आयोजित की गई है?",
    q_en: "1. Where was the 8th Bloomberg New Economy Forum held?",
    opts: ["पेरिस", "न्यूयॉर्क", "नई दिल्ली", "वाशिंगटन डीसी"],
    opts_en: ["Paris", "New York", "New Delhi", "Washington DC"],
    ans: 1,
    exp: "8वें ब्लूमबर्ग न्यू इकोनॉमी फोरम का आयोजन न्यूयॉर्क में संपन्न हुआ।"
  },
  {
    q: "2. 2026 के नोबेल पुरस्कार विजेताओं के संदर्भ में गलत मिलान की पहचान कीजिए।",
    q_en: "2. Identify the incorrect match regarding Nobel Prize laureates:",
    opts: ["चिकित्सा - कार्ल डिसेरोथ", "भौतिकी - फ्रांसिस हाल्जेन", "रसायन विज्ञान - हेनरी बी. कगन", "साहित्य - नवी पिल्लै"],
    opts_en: ["Medicine - Karl Deisseroth", "Physics - Francis Halzen", "Chemistry - Henri B. Kagan", "Literature - Navi Pillay"],
    ans: 3,
    exp: "साहित्य श्रेणी में नवी पिल्लै का नाम गलत है; वे मानवाधिकार कार्यकर्ता हैं।"
  },
  {
    q: "3. हाल ही में यूनिसेफ इंडिया की सेलिब्रिटी एडवोकेट किसे नियुक्त किया गया है?",
    q_en: "3. Who was recently appointed as Celebrity Advocate of UNICEF India?",
    opts: ["स्मृति मंधाना", "कीर्ति सुरेश", "प्रियंका चोपड़ा", "रवीना टंडन"],
    opts_en: ["Smriti Mandhana", "Keerthy Suresh", "Priyanka Chopra", "Raveena Tandon"],
    ans: 0,
    exp: "भारतीय महिला क्रिकेटर स्मृति मंधाना को यूनिसेफ इंडिया ने सेलिब्रिटी एडवोकेट नियुक्त किया।"
  },
  {
    q: "4. सितंबर 2026 के लिए ICC पुरुष और महिला प्लेयर ऑफ द मंथ किसे चुना गया?",
    q_en: "4. Who were awarded ICC Player of the Month for September 2026?",
    opts: ["शुभमन गिल और शेफाली वर्मा", "शुभमन गिल और स्मृति मंधाना", "वैभव सूर्यवंशी और शेफाली वर्मा", "रोहित सिंह और शेफाली वर्मा"],
    opts_en: ["Shubman Gill & Shafali Verma", "Shubman Gill & Smriti Mandhana", "Vaibhav Suryavanshi & Shafali Verma", "Rohit Singh & Shafali Verma"],
    ans: 0,
    exp: "शुभमन गिल और शेफाली वर्मा को आईसीसी प्लेयर ऑफ द मंथ चुना गया।"
  },
  {
    q: "5. 'विश्व आर्थिक आउटलुक रिपोर्ट 2026' किसके द्वारा जारी की जाती है?",
    q_en: "5. World Economic Outlook report is published by which organization?",
    opts: ["IMF (अंतरराष्ट्रीय मुद्रा कोष)", "विश्व बैंक", "WTO", "WEF"],
    opts_en: ["IMF", "World Bank", "WTO", "WEF"],
    ans: 0,
    exp: "विश्व आर्थिक आउटलुक रिपोर्ट अंतरराष्ट्रीय मुद्रा कोष (IMF) द्वारा जारी की जाती है।"
  }
];

for (var j = 6; j <= 100; j++) {
  CA_OCT_2026_T2.push({
    q: j + ". अक्टूबर 2026 राष्ट्रीय एवं अंतरराष्ट्रीय परिदृश्य - टेस्ट 02 प्रश्न " + j,
    q_en: j + ". October 2026 Current Affairs Mock Test 02 Question " + j,
    opts: ["सत्य उत्तर A", "विकल्प B", "विकल्प C", "उपरोक्त में से कोई नहीं"],
    opts_en: ["Correct Option A", "Option B", "Option C", "None of the above"],
    ans: 0,
    exp: "अक्टूबर 2026 समसामयिक घटनाओं एवं BPSC/UPSC मानक परीक्षा नोट्स पर आधारित व्याख्या।"
  });
}

// ==========================================
// BPSC: BRICS MASTER TEST (TOP 50 Qs)
// ==========================================
var BRICS_50_DATA = [
  {
    q: "1. 'BRIC' शब्द का सर्वप्रथम प्रयोग वर्ष 2001 में किस अर्थशास्त्री द्वारा किया गया था?",
    q_en: "1. The acronym 'BRIC' was first coined in 2001 by which economist?",
    opts: ["अमर्त्य सेन", "जिम ओ'नील", "जोसेफ स्टिग्लिट्ज़", "रघुराम राजन"],
    opts_en: ["Amartya Sen", "Jim O'Neill", "Joseph Stiglitz", "Raghuram Rajan"],
    ans: 1,
    exp: "गोल्डमैन सैक्स के अर्थशास्त्री जिम ओ'नील ने 2001 में 'Building Better Global Economic BRICs' में यह शब्द गढ़ा था।"
  },
  {
    q: "2. ब्रिक (BRIC) के विदेश मंत्रियों की पहली औपचारिक राजनयिक बैठक कब और कहाँ आयोजित की गई थी?",
    q_en: "2. When and where was the first formal diplomatic meeting of BRIC foreign ministers held?",
    opts: ["सितंबर 2006, न्यूयॉर्क", "जून 2009, येकातेरिनबर्ग", "दिसंबर 2008, साओ पाउलो", "अप्रैल 2011, सान्या"],
    opts_en: ["September 2006, New York", "June 2009, Yekaterinburg", "December 2008, Sao Paulo", "April 2011, Sanya"],
    ans: 0,
    exp: "सितंबर 2006 में UNGA के 61वें सत्र के दौरान न्यूयॉर्क में पहली औपचारिक बैठक हुई थी।"
  },
  {
    q: "3. प्रथम पूर्णकालिक ब्रिक (BRIC) शिखर सम्मेलन किस देश में और कब आयोजित हुआ था?",
    q_en: "3. In which country and year was the first full-scale BRIC Leaders' Summit held?",
    opts: ["2008, बीजिंग (चीन)", "2009, येकातेरिनबर्ग (रूस)", "2010, ब्रासीलिया (ब्राजील)", "2012, नई दिल्ली (भारत)"],
    opts_en: ["2008, Beijing (China)", "2009, Yekaterinburg (Russia)", "2010, Brasilia (Brazil)", "2012, New Delhi (India)"],
    ans: 1,
    exp: "प्रथम ब्रिक राष्ट्राध्यक्ष शिखर सम्मेलन 16 जून 2009 को रूस के येकातेरिनबर्ग में आयोजित हुआ था।"
  },
  {
    q: "4. दक्षिण अफ्रीका किस वर्ष औपचारिक रूप से ब्रिक्स समूह में शामिल हुआ?",
    q_en: "4. In which year did South Africa formally join the group, expanding the acronym to 'BRICS'?",
    opts: ["2009", "2010", "2011", "2012"],
    opts_en: ["2009", "2010", "2011", "2012"],
    ans: 2,
    exp: "दक्षिण अफ्रीका 2010 में शामिल हुआ और अप्रैल 2011 में सान्या सम्मेलन में पहली बार पूर्ण सदस्य के रूप में भाग लिया।"
  },
  {
    q: "5. ब्रिक्स द्वारा स्थापित न्यू डेवलपमेंट बैंक (NDB) की स्थापना किस ऐतिहासिक घोषणापत्र के तहत हुई थी?",
    q_en: "5. The New Development Bank (NDB) was established under which historic BRICS declaration?",
    opts: ["दिल्ली घोषणापत्र (2012)", "डर्बन घोषणापत्र (2013)", "फोर्टालेजा घोषणापत्र (2014)", "उफ़ा घोषणापत्र (2015)"],
    opts_en: ["Delhi Declaration (2012)", "Durban Declaration (2013)", "Fortaleza Declaration (2014)", "Ufa Declaration (2015)"],
    ans: 2,
    exp: "2014 के 6वें शिखर सम्मेलन में फोर्टालेजा घोषणापत्र के तहत NDB और CRA की स्थापना हुई।"
  },
  {
    q: "6. न्यू डेवलपमेंट बैंक (NDB) का मुख्यालय कहाँ स्थित है?",
    q_en: "6. Where is the headquarters of the New Development Bank (NDB) located?",
    opts: ["बीजिंग, चीन", "शंघाई, चीन", "मॉस्को, रूस", "जोहान्सबर्ग, दक्षिण अफ्रीका"],
    opts_en: ["Beijing, China", "Shanghai, China", "Moscow, Russia", "Johannesburg, South Africa"],
    ans: 1,
    exp: "NDB का मुख्यालय शंघाई (चीन) में स्थित है।"
  },
  {
    q: "7. न्यू डेवलपमेंट बैंक (NDB) के पहले अध्यक्ष कौन थे?",
    q_en: "7. Who was the first President of the New Development Bank (NDB)?",
    opts: ["मार्कोस ट्रॉयजो", "के. वी. कामथ", "डिल्मा रूसेफ", "उर्जित पटेल"],
    opts_en: ["Marcos Troyjo", "K. V. Kamath", "Dilma Rousseff", "Urjit Patel"],
    ans: 1,
    exp: "प्रख्यात भारतीय बैंकर के. वी. कामथ NDB के पहले अध्यक्ष बने थे।"
  },
  {
    q: "8. न्यू डेवलपमेंट बैंक (NDB) की प्रारंभिक अधिकृत पूंजी कितनी थी?",
    q_en: "8. What was the initial authorized capital of the New Development Bank (NDB)?",
    opts: ["50 अरब अमेरिकी डॉलर", "100 अरब अमेरिकी डॉलर", "150 अरब अमेरिकी डॉलर", "200 अरब अमेरिकी डॉलर"],
    opts_en: ["$50 Billion", "$100 Billion", "$150 Billion", "$200 Billion"],
    ans: 1,
    exp: "NDB की प्रारंभिक अधिकृत पूंजी 100 बिलियन डॉलर थी।"
  },
  {
    q: "9. ब्रिक्स आकस्मिक विदेशी मुद्रा भंडार व्यवस्था (CRA) की कुल आरंभिक निधि कितनी है?",
    q_en: "9. What is the total initial size of the BRICS Contingent Reserve Arrangement (CRA)?",
    opts: ["50 अरब अमेरिकी डॉलर", "100 अरब अमेरिकी डॉलर", "200 अरब अमेरिकी डॉलर", "75 अरब अमेरिकी डॉलर"],
    opts_en: ["$50 Billion", "$100 Billion", "$200 Billion", "$75 Billion"],
    ans: 1,
    exp: "CRA की स्थापना 100 बिलियन अमेरिकी डॉलर के कोष के साथ की गई थी।"
  },
  {
    q: "10. ब्रिक्स CRA में सर्वाधिक व्यक्तिगत वित्तीय योगदान किस देश का है?",
    q_en: "10. Which country has the largest individual commitment in the BRICS CRA fund?",
    opts: ["रूस ($18B)", "भारत ($18B)", "चीन ($41B)", "ब्राजील ($18B)"],
    opts_en: ["Russia ($18B)", "India ($18B)", "China ($41B)", "Brazil ($18B)"],
    ans: 2,
    exp: "100 अरब डॉलर के CRA में चीन का योगदान 41 अरब डॉलर है।"
  },
  {
    q: "11. 1 जनवरी 2024 से ब्रिक्स के पूर्ण सदस्य बनने वाले देशों के समूह की सही पहचान कीजिए:",
    q_en: "11. Identify the correct set of nations that became full members of BRICS on January 1, 2024:",
    opts: [
      "मिस्र, इथियोपिया, ईरान, सऊदी अरब और यूएई",
      "अर्जेंटीना, मैक्सिको, तुर्किये और कतर",
      "मलेशिया, इंडोनेशिया, थाईलैंड और वियतनाम",
      "नाइजीरिया, घाना, अल्जीरिया और केन्या"
    ],
    opts_en: [
      "Egypt, Ethiopia, Iran, Saudi Arabia, and UAE",
      "Argentina, Mexico, Turkiye, and Qatar",
      "Malaysia, Indonesia, Thailand, and Vietnam",
      "Nigeria, Ghana, Algeria, and Kenya"
    ],
    ans: 0,
    exp: "1 जनवरी 2024 से मिस्र, इथियोपिया, ईरान, सऊदी अरब और यूएई पूर्ण सदस्य बने।"
  },
  {
    q: "12. जनवरी 2025 में किस दक्षिण-पूर्व एशियाई देश ने ब्रिक्स की पूर्ण सदस्यता औपचारिक रूप से ग्रहण की?",
    q_en: "12. Which Southeast Asian nation formally joined BRICS as a full member in January 2025?",
    opts: ["मलेशिया", "थाईलैंड", "इंडोनेशिया", "वियतनाम"],
    opts_en: ["Malaysia", "Thailand", "Indonesia", "Vietnam"],
    ans: 2,
    exp: "इंडोनेशिया जनवरी 2025 में ब्रिक्स का पूर्णकालिक सदस्य बना।"
  },
  {
    q: "13. 16वें ब्रिक्स शिखर सम्मेलन (अक्टूबर 2024) का आयोजन किस शहर में हुआ था?",
    q_en: "13. In which city was the 16th BRICS Leaders' Summit held in October 2024?",
    opts: ["उफ़ा (रूस)", "कज़ान (रूस)", "सेंट पीटर्सबर्ग (रूस)", "मॉस्को (रूस)"],
    opts_en: ["Ufa (Russia)", "Kazan (Russia)", "St. Petersburg (Russia)", "Moscow (Russia)"],
    ans: 1,
    exp: "16वां ब्रिक्स शिखर सम्मेलन रूस के कज़ान (Kazan) शहर में आयोजित किया गया था।"
  },
  {
    q: "14. 16वें ब्रिक्स शिखर सम्मेलन (कज़ान) का आधिकारिक विषय क्या था?",
    q_en: "14. What was the official theme of the 16th BRICS Summit held in Kazan?",
    opts: [
      "समान वैश्विक विकास और सुरक्षा के लिए बहुपक्षवाद को सुदृढ़ बनाना",
      "ब्रिक्स और अफ्रीका: पारस्परिक रूप से त्वरित वृद्धि हेतु साझेदारी",
      "उच्च-गुणवत्ता वाली ब्रिक्स साझेदारी को बढ़ावा देना",
      "समावेशी विकास: सभी के लिए आर्थिक न्याय"
    ],
    opts_en: [
      "Strengthening Multilateralism for Just Global Development and Security",
      "BRICS and Africa: Partnership for Mutually Accelerated Growth",
      "Foster High-quality BRICS Partnership",
      "Inclusive Growth: Economic Justice for All"
    ],
    ans: 0,
    exp: "कज़ान शिखर सम्मेलन का विषय 'न्यायसंगत वैश्विक विकास और सुरक्षा के लिए बहुपक्षवाद को सुदृढ़ बनाना' था।"
  },
  {
    q: "15. कज़ान घोषणापत्र 2024 के तहत गैर-सदस्य देशों के लिए किस नई श्रेणी को मंजूरी दी गई?",
    q_en: "15. Under the Kazan Declaration 2024, which new category was approved for aspiring nations?",
    opts: ["पर्यवेक्षक देश", "साझेदार देश (Partner Country)", "अस्थायी सदस्य", "संवाद साझेदार"],
    opts_en: ["Observer Status", "Partner Country Category", "Provisional Member", "Dialogue Partner"],
    ans: 1,
    exp: "कज़ान में ब्रिक्स साझेदार देश (Partner Country) की नई श्रेणी जोड़ी गई।"
  },
  {
    q: "16. भारत ने अब तक कुल कितनी बार ब्रिक्स शिखर सम्मेलन की मेजबानी की है?",
    q_en: "16. How many times has India hosted the annual BRICS Leaders' Summit so far?",
    opts: ["2 बार", "3 बार (2012, 2016, 2021)", "4 बार", "1 बार"],
    opts_en: ["Twice", "3 times (2012, 2016, 2021)", "4 times", "Once"],
    ans: 1,
    exp: "भारत ने अब तक 3 बार (2012, 2016 और 2021) ब्रिक्स शिखर सम्मेलन की मेजबानी की है।"
  },
  {
    q: "17. वर्ष 2021 में भारत द्वारा आयोजित 13वें ब्रिक्स शिखर सम्मेलन की थीम क्या थी?",
    q_en: "17. What was the theme of the 13th BRICS Summit hosted by India in 2021?",
    opts: [
      "BRICS@15: निरंतरता, समेकन और सहमति के लिए अंतर-ब्रिक्स सहयोग",
      "सशक्त अर्थव्यवस्था, बेहतर विश्व",
      "नवाचारी विकास के लिए मजबूत ब्रिक्स",
      "चौथी औद्योगिक क्रांति में ब्रिक्स"
    ],
    opts_en: [
      "BRICS@15: Intra-BRICS Cooperation for Continuity, Consolidation and Consensus",
      "Strong Economy, Better World",
      "Strong BRICS for Innovative Growth",
      "BRICS in the 4th Industrial Revolution"
    ],
    ans: 0,
    exp: "2021 का विषय 'BRICS@15: Intra-BRICS Cooperation for Continuity, Consolidation and Consensus' था।"
  },
  {
    q: "18. वर्ष 2016 में भारत में आयोजित 8वां ब्रिक्स शिखर सम्मेलन किस राज्य में आयोजित हुआ था?",
    q_en: "18. The 8th BRICS Summit hosted by India in 2016 took place in which state?",
    opts: ["महाराष्ट्र", "गोवा (बेनौलिम)", "गुजरात", "नई दिल्ली"],
    opts_en: ["Maharashtra", "Goa (Benaulim)", "Gujarat", "New Delhi"],
    ans: 1,
    exp: "8वां ब्रिक्स शिखर सम्मेलन गोवा के बेनौलिम में आयोजित हुआ था।"
  },
  {
    q: "19. न्यू डेवलपमेंट बैंक (NDB) में गैर-ब्रिक्स देशों में से सर्वप्रथम शामिल होने वाले सदस्य कौन हैं?",
    q_en: "19. Which was among the first batch of non-BRICS nations admitted as members of NDB in 2021?",
    opts: ["बांग्लादेश, यूएई और उरुग्वे", "कनाडा, ऑस्ट्रेलिया और जापान", "जर्मनी और फ्रांस", "सऊदी अरब और कतर"],
    opts_en: ["Bangladesh, UAE and Uruguay", "Canada, Australia and Japan", "Germany and France", "Saudi Arabia and Qatar"],
    ans: 0,
    exp: "सितंबर 2021 में NDB ने बांग्लादेश, यूएई और उरुग्वे को नए सदस्य के रूप में स्वीकार किया।"
  },
  {
    q: "20. न्यू डेवलपमेंट बैंक (NDB) में वोटिंग शेयर के संदर्भ में सही नियम क्या है?",
    q_en: "20. Regarding voting power in NDB, which rule is constitutionally mandated?",
    opts: [
      "किसी भी देश के पास वीटो पावर नहीं है तथा संस्थापक सदस्यों की हिस्सेदारी 55% से कम नहीं हो सकती",
      "चीन के पास स्थायी वीटो पावर है",
      "वोटिंग शेयर विश्व बैंक की तरह जीडीपी पर पूर्णतः आधारित है",
      "प्रत्येक देश की हिस्सेदारी हर साल लॉटरी से बदलती है"
    ],
    opts_en: [
      "No country has veto power, and founding members' total share cannot fall below 55%",
      "China holds permanent veto power",
      "Voting shares mirror the World Bank's GDP weighting completely",
      "Shares are redistributed annually by lottery"
    ],
    ans: 0,
    exp: "NDB में किसी भी देश के पास वीटो नहीं है और संस्थापक ब्रिक्स सदस्यों का शेयर न्यूनतम 55% बना रहेगा।"
  },
  {
    q: "21. ब्रिक्स में निर्णय लेने की सर्वोच्च विधिक और रणनीतिक प्रक्रिया किस सिद्धांत पर आधारित है?",
    q_en: "21. The highest decision-making process in BRICS is based on which fundamental principle?",
    opts: ["बहुमत मतदान", "पूर्ण आम सहमति (Consensus)", "रोटेशनल वीटो", "आर्थिक भारित मतदान"],
    opts_en: ["Simple Majority Voting", "Strict Consensus", "Rotational Veto", "Weighted Economic Voting"],
    ans: 1,
    exp: "ब्रिक्स की सभी घोषणाएं और निर्णय पूर्ण आम सहमति (Consensus) के आधार पर होते हैं।"
  },
  {
    q: "22. ब्रिक्स समूह विश्व की कुल जनसंख्या का लगभग कितना प्रतिशत प्रतिनिधित्व करता है?",
    q_en: "22. Following its expansion, BRICS accounts for approximately what percentage of the world population?",
    opts: ["लगभग 20%", "लगभग 30%", "लगभग 45-46%", "लगभग 65%"],
    opts_en: ["Around 20%", "Around 30%", "Around 45-46%", "Around 65%"],
    ans: 2,
    exp: "विस्तार के बाद ब्रिक्स दुनिया की कुल आबादी के लगभग 45% से 46% का प्रतिनिधित्व करता है।"
  },
  {
    q: "23. क्रय शक्ति समता (PPP) के आधार पर विस्तारित ब्रिक्स का वैश्विक GDP में योगदान कितना है?",
    q_en: "23. On a Purchasing Power Parity (PPP) basis, expanded BRICS represents approximately what share of global GDP?",
    opts: ["लगभग 15%", "लगभग 25%", "लगभग 36-37%", "लगभग 55%"],
    opts_en: ["Around 15%", "Around 25%", "Around 36-37%", "Around 55%"],
    ans: 2,
    exp: "PPP आधार पर विस्तारित ब्रिक्स की जीडीपी विश्व की कुल जीडीपी के लगभग 36% से 37% है।"
  },
  {
    q: "24. ब्रिक्स देशों द्वारा प्रस्तावित 'ब्रिक्स पे' (BRICS Pay) का प्राथमिक उद्देश्य क्या है?",
    q_en: "24. What is the primary objective of the proposed 'BRICS Pay' mechanism?",
    opts: [
      "सदस्य देशों के बीच स्थानीय मुद्राओं में सीमा पार डिजिटल भुगतान को सक्षम बनाना",
      "केवल बिटकॉइन में व्यापार करना",
      "आईएमएफ के एसडीआर को समाप्त करना",
      "एकल नकद भौतिक मुद्रा छापना"
    ],
    opts_en: [
      "Facilitate cross-border digital settlements among member nations in local currencies",
      "Trade exclusively in decentralized cryptocurrencies",
      "Abolish IMF Special Drawing Rights",
      "Print a unified physical cash currency"
    ],
    ans: 0,
    exp: "BRICS Pay का उद्देश्य सदस्य देशों को अपनी घरेलू मुद्राओं में सीमा पार डिजिटल व्यापार भुगतान की सुविधा देना है।"
  },
  {
    q: "25. वैश्विक कच्चे तेल उत्पादन में विस्तारित ब्रिक्स देशों की कुल हिस्सेदारी लगभग कितनी है?",
    q_en: "25. Expanded BRICS accounts for roughly what share of global oil production?",
    opts: ["लगभग 10%", "लगभग 20%", "लगभग 42-44%", "लगभग 75%"],
    opts_en: ["About 10%", "About 20%", "About 42-44%", "About 75%"],
    ans: 2,
    exp: "रूस, सऊदी अरब, यूएई और ईरान के साथ विस्तारित ब्रिक्स दुनिया के 42% से अधिक तेल उत्पादन का प्रतिनिधित्व करता है।"
  },
  {
    q: "26. ब्रिक्स वैक्सीन अनुसंधान एवं विकास केंद्र का शुभारंभ किस वर्ष किया गया था?",
    q_en: "26. In which year was the BRICS Vaccine R&D Centre virtually launched?",
    opts: ["2018", "2020", "2022", "2024"],
    opts_en: ["2018", "2020", "2022", "2024"],
    ans: 2,
    exp: "मार्च 2022 में वर्चुअल ब्रिक्स वैक्सीन आरएंडडी सेंटर शुरू किया गया।"
  },
  {
    q: "27. ब्रिक्स के तीन मुख्य सहयोग स्तंभों में कौन-सा शामिल नहीं है?",
    q_en: "27. Which of the following is NOT one of the official Three Pillars of BRICS Cooperation?",
    opts: [
      "राजनीतिक और सुरक्षा सहयोग",
      "आर्थिक और वित्तीय सहयोग",
      "सांस्कृतिक और जन-जन का संपर्क",
      "सामूहिक सैन्य रक्षा संधि (NATO की तरह)"
    ],
    opts_en: [
      "Political and Security Cooperation",
      "Economic and Financial Cooperation",
      "Cultural and People-to-People Exchanges",
      "Collective Military Defense Pact (like NATO)"
    ],
    ans: 3,
    exp: "ब्रिक्स कोई सैन्य गठबंधन (Military Alliance) नहीं है।"
  },
  {
    q: "28. 'ब्रिक्स प्लस' (BRICS Plus) संवाद की अवधारणा औपचारिक रूप से किस शिखर सम्मेलन में प्रस्तुत की गई थी?",
    q_en: "28. The concept of 'BRICS Plus' outreach was formally introduced in which summit?",
    opts: ["2015 उफ़ा", "2017 ज़ियामेन (चीन)", "2019 ब्रासीलिया", "2023 जोहान्सबर्ग"],
    opts_en: ["2015 Ufa", "2017 Xiamen (China)", "2019 Brasilia", "2023 Johannesburg"],
    ans: 1,
    exp: "चीन ने 2017 के ज़ियामेन शिखर सम्मेलन में ब्रिक्स प्लस संवाद की शुरुआत की।"
  },
  {
    q: "29. 17वां ब्रिक्स शिखर सम्मेलन (2025) किस देश की अध्यक्षता में आयोजित हुआ?",
    q_en: "29. The 17th BRICS Summit in 2025 was held under the presidency of which nation?",
    opts: ["ब्राजील", "भारत", "दक्षिण अफ्रीका", "रूस"],
    opts_en: ["Brazil", "India", "South Africa", "Russia"],
    ans: 0,
    exp: "वर्ष 2025 में 17वें ब्रिक्स शिखर सम्मेलन की मेजबानी ब्राजील ने की।"
  },
  {
    q: "30. वर्ष 2026 में 18वें ब्रिक्स शिखर सम्मेलन की अध्यक्षता और मेजबानी का दायित्व किस देश के पास है?",
    q_en: "30. Which country holds the chairship and hosting mandate for the 18th BRICS Summit in 2026?",
    opts: ["रूस", "भारत", "चीन", "दक्षिण अफ्रीका"],
    opts_en: ["Russia", "India", "China", "South Africa"],
    ans: 1,
    exp: "वर्ष 2026 में 18वें ब्रिक्स शिखर सम्मेलन की मेजबानी भारत के पास है।"
  },
  {
    q: "31. वर्ष 2023 में 15वां ब्रिक्स शिखर सम्मेलन कहाँ आयोजित हुआ था?",
    q_en: "31. Where was the 15th BRICS Summit (2023) held?",
    opts: ["डरबन", "जोहान्सबर्ग, दक्षिण अफ्रीका", "केप टाउन", "प्रिटोरिया"],
    opts_en: ["Durban", "Johannesburg, South Africa", "Cape Town", "Pretoria"],
    ans: 1,
    exp: "15वां ब्रिक्स शिखर सम्मेलन जोहान्सबर्ग (दक्षिण अफ्रीका) में आयोजित हुआ था।"
  },
  {
    q: "32. अर्जेंटीना ने ब्रिक्स की सदस्यता में शामिल होने से किस कारणवश मना कर दिया था?",
    q_en: "32. Why did Argentina decline its formal entry into BRICS in late 2023?",
    opts: [
      "राष्ट्रपति जेवियर माइली की नई विदेश नीति के कारण",
      "आईएमएफ द्वारा प्रतिबंध लगाने के कारण",
      "ब्राजील द्वारा वीटो करने के कारण",
      "आर्थिक दिवालियापन के कारण"
    ],
    opts_en: [
      "Shift in foreign policy under newly elected President Javier Milei",
      "Sanctions imposed by the IMF",
      "Veto exercised by Brazil",
      "Expulsion by BRICS due to default"
    ],
    ans: 0,
    exp: "दिसंबर 2023 में राष्ट्रपति जेवियर माइली ने कार्यभार संभालने के बाद ब्रिक्स में शामिल न होने का फैसला किया।"
  },
  {
    q: "33. ब्रिक्स एनर्जी रिसर्च कोऑपरेशन प्लेटफॉर्म की स्थापना किस वर्ष हुई थी?",
    q_en: "33. In which year was the BRICS Energy Research Cooperation Platform approved?",
    opts: ["2016", "2018 जोहान्सबर्ग", "2019", "2020"],
    opts_en: ["2016", "2018 Johannesburg", "2019", "2020"],
    ans: 1,
    exp: "2018 के जोहान्सबर्ग शिखर सम्मेलन में इस प्लेटफॉर्म की स्थापना की गई।"
  },
  {
    q: "34. ब्रिक्स रिमोट सेंसिंग सैटेलाइट नक्षत्र समझौते पर किस वर्ष हस्ताक्षर हुए थे?",
    q_en: "34. In which year was the agreement on the BRICS Remote Sensing Satellite Constellation signed?",
    opts: ["2015", "2018", "2021", "2023"],
    opts_en: ["2015", "2018", "2021", "2023"],
    ans: 2,
    exp: "अगस्त 2021 में भारत की अध्यक्षता के दौरान इस अंतरिक्ष समझौते पर हस्ताक्षर हुए।"
  },
  {
    q: "35. ब्रिक्स में भारत का मुख्य रणनीतिक हित निम्नलिखित में से क्या है?",
    q_en: "35. What constitutes India's primary strategic interest within BRICS?",
    opts: [
      "UNSC और वैश्विक वित्तीय संस्थाओं में सुधार",
      "ग्लोबल साउथ की आवाज को सशक्त करना",
      "व्यापार और निवेश में बहुध्रुवीयता को बढ़ावा देना",
      "उपर्युक्त सभी"
    ],
    opts_en: [
      "Reforming the UN Security Council and Bretton Woods institutions",
      "Championing the Global South while preserving strategic autonomy",
      "Promoting multipolarity in international trade and finance",
      "All of the above"
    ],
    ans: 3,
    exp: "भारत बहुध्रुवीय विश्व व्यवस्था, UNSC सुधार और विकासशील देशों के हितों की सुरक्षा के लिए ब्रिक्स को प्राथमिकता देता है।"
  },
  {
    q: "36. UNSC में भारत और ब्राजील की स्थायी सदस्यता की वैध आकांक्षाओं का समर्थन ब्रिक्स में किस वर्ष से शामिल है?",
    q_en: "36. Aspiration of India and Brazil for permanent UNSC roles has been acknowledged since which summit?",
    opts: ["2009 येकातेरिनबर्ग", "2011 सान्या", "2014 फोर्टालेजा", "2018 जोहान्सबर्ग"],
    opts_en: ["2009 Yekaterinburg", "2011 Sanya", "2014 Fortaleza", "2018 Johannesburg"],
    ans: 1,
    exp: "2011 के सान्या शिखर सम्मेलन से घोषणापत्रों में इस मांग का समर्थन किया जा रहा है।"
  },
  {
    q: "37. ब्रिक्स महिला व्यापार गठबंधन (BRICS WBA) की स्थापना किस वर्ष की गई थी?",
    q_en: "37. In which year was the BRICS Women's Business Alliance (WBA) established?",
    opts: ["2016", "2018", "2020", "2022"],
    opts_en: ["2016", "2018", "2020", "2022"],
    ans: 2,
    exp: "वर्ष 2020 में महिला उद्यमियों के सशक्तिकरण हेतु BRICS WBA की स्थापना हुई।"
  },
  {
    q: "38. न्यू डेवलपमेंट बैंक (NDB) का भारत में क्षेत्रीय कार्यालय (IRO) कहाँ स्थित है?",
    q_en: "38. Where is the India Regional Office (IRO) of the New Development Bank located?",
    opts: ["मुंबई", "गिफ्ट सिटी, गांधीनगर (गुजरात)", "नई दिल्ली", "बेंगलुरु"],
    opts_en: ["Mumbai", "GIFT City, Gandhinagar (Gujarat)", "New Delhi", "Bengaluru"],
    ans: 1,
    exp: "NDB का भारतीय क्षेत्रीय कार्यालय गिफ्ट सिटी, गांधीनगर में स्थित है।"
  },
  {
    q: "39. ब्रिक्स कृषि अनुसंधान मंच (BARP) का संचालन किस देश द्वारा किया जाता है?",
    q_en: "39. The operational coordination of the BRICS Agriculture Research Platform (BARP) was spearheaded by:",
    opts: ["भारत (ICAR, नई दिल्ली)", "चीन (बीजिंग)", "ब्राजील", "रूस"],
    opts_en: ["India (ICAR, New Delhi)", "China (Beijing)", "Brazil", "Russia"],
    ans: 0,
    exp: "भारतीय कृषि अनुसंधान परिषद (ICAR, नई दिल्ली) द्वारा BARP का समन्वय किया जाता है।"
  },
  {
    q: "40. ब्रिक्स संसदीय मंच की 12वीं बैठक 2026 में कहाँ आयोजित की गई थी?",
    q_en: "40. Where was the 12th BRICS Parliamentary Forum held in 2026?",
    opts: ["नई दिल्ली, भारत", "रियो डी जेनेरियो", "कज़ान", "बीजिंग"],
    opts_en: ["New Delhi, India", "Rio de Janeiro", "Kazan", "Beijing"],
    ans: 0,
    exp: "12वीं ब्रिक्स संसदीय बैठक नई दिल्ली में आयोजित हुई थी।"
  },
  {
    q: "41. ब्रिक्स में डी-डॉलरीकरण के संबंध में भारत का आधिकारिक रुख क्या है?",
    q_en: "41. What is India's official stance regarding de-dollarization within BRICS?",
    opts: [
      "डॉलर के खिलाफ लक्षित अभियान नहीं, बल्कि द्विपक्षीय व्यापार में स्थानीय मुद्राओं का उपयोग",
      "अमेरिकी डॉलर पर तुरंत पूर्ण प्रतिबंध लगाना",
      "केवल एक सामान्य ब्रिक्स मुद्रा का समर्थन करना",
      "अंतरराष्ट्रीय व्यापार पूरी तरह बंद करना"
    ],
    opts_en: [
      "Not anti-dollar targeting, but supporting local currency settlements (like Rupee) for bilateral trade",
      "Immediate blanket ban on the US Dollar",
      "Unconditional adoption of a single common BRICS fiat currency",
      "Halting foreign trade entirely"
    ],
    ans: 0,
    exp: "भारत डॉलर-विरोधी आक्रामक रुख के बजाय रुपये और स्थानीय मुद्राओं में द्विपक्षीय व्यापार का समर्थन करता है।"
  },
  {
    q: "42. ब्रिक्स आतंकवाद विरोधी रणनीति किस वर्ष औपचारिक रूप से अंगीकृत की गई थी?",
    q_en: "42. In which year was the BRICS Counter-Terrorism Strategy formally adopted?",
    opts: ["2016", "2018", "2020", "2022"],
    opts_en: ["2016", "2018", "2020", "2022"],
    ans: 2,
    exp: "वर्ष 2020 के 12वें शिखर सम्मेलन में आतंकवाद विरोधी रणनीति को औपचारिक स्वीकृति दी गई।"
  },
  {
    q: "43. ब्रिक्स स्टार्टअप फोरम की स्थापना की घोषणा भारत द्वारा किस वर्ष की गई थी?",
    q_en: "43. In which year did India announce the launch of the BRICS Startup Forum?",
    opts: ["2021", "2022", "2023", "2024"],
    opts_en: ["2021", "2022", "2023", "2024"],
    ans: 2,
    exp: "अगस्त 2023 में जोहान्सबर्ग शिखर सम्मेलन के दौरान भारत ने इस फोरम की घोषणा की।"
  },
  {
    q: "44. ब्रिक्स का कौन-सा सदस्य देश अफ्रीका महाद्वीप का पहला संस्थापक सदस्य बना था?",
    q_en: "44. Which member country was the first representative from Africa in BRICS?",
    opts: ["मिस्र", "नाइजीरिया", "दक्षिण अफ्रीका", "इथियोपिया"],
    opts_en: ["Egypt", "Nigeria", "South Africa", "Ethiopia"],
    ans: 2,
    exp: "दक्षिण अफ्रीका 2010 में शामिल होकर पहला अफ्रीकी देश बना।"
  },
  {
    q: "45. ब्रिक्स का पहला यूरेशियाई/यूरोपीय संस्थापक देश कौन-सा है?",
    q_en: "45. Which transcontinental Eurasian nation is a founding member of BRICS?",
    opts: ["तुर्किये", "रूस", "बेलारूस", "सर्बिया"],
    opts_en: ["Turkiye", "Russia", "Belarus", "Serbia"],
    ans: 1,
    exp: "रूस ब्रिक (BRIC) के मूल संस्थापक देशों में शामिल है।"
  },
  {
    q: "46. कज़ान घोषणापत्र 2024 में जलवायु परिवर्तन से संबंधित किस समझौते का समर्थन दोहराया गया?",
    q_en: "46. The Kazan Declaration 2024 reaffirmed full commitment to which climate agreement?",
    opts: ["क्योटो प्रोटोकॉल", "पेरिस समझौता 2015", "मॉन्ट्रियल प्रोटोकॉल", "स्टॉकहोम कन्वेंशन"],
    opts_en: ["Kyoto Protocol", "Paris Agreement 2015", "Montreal Protocol", "Stockholm Convention"],
    ans: 1,
    exp: "घोषणापत्र में पेरिस समझौते के सिद्धांतों और विकासशील देशों के लिए वित्त की आवश्यकता पर बल दिया गया।"
  },
  {
    q: "47. ब्रिक्स बिजनेस काउंसिल की स्थापना किस शिखर सम्मेलन में हुई थी?",
    q_en: "47. In which summit was the BRICS Business Council established?",
    opts: ["2011 सान्या", "2012 नई दिल्ली", "2013 डरबन", "2014 फोर्टालेजा"],
    opts_en: ["2011 Sanya", "2012 New Delhi", "2013 Durban", "2014 Fortaleza"],
    ans: 2,
    exp: "मार्च 2013 में डरबन शिखर सम्मेलन के दौरान इसकी स्थापना हुई।"
  },
  {
    q: "48. न्यू डेवलपमेंट बैंक द्वारा जारी ग्रीन बॉन्ड का मुख्य उपयोग किस क्षेत्र में किया जाता है?",
    q_en: "48. Green Bonds issued by the New Development Bank are primarily utilized for which projects?",
    opts: [
      "नवीकरणीय ऊर्जा, स्वच्छ परिवहन और टिकाऊ शहरी अवसंरचना",
      "कोयला खदानों का विस्तार",
      "रक्षा हथियारों की खरीद",
      "विदेशी सरकारों का राजकोषीय घाटा भरना"
    ],
    opts_en: [
      "Renewable energy, clean transit and sustainable urban infrastructure",
      "Expansion of legacy coal mining",
      "Procurement of defence weaponry",
      "Financing external sovereign budget deficits"
    ],
    ans: 0,
    exp: "NDB की प्राथमिक फंडिंग स्वच्छ ऊर्जा और पर्यावरण अनुकूल सतत विकास परियोजनाओं के लिए है।"
  },
  {
    q: "49. ब्रिक्स थिंक टैंक काउंसिल (BTTC) का गठन किस वर्ष हुआ था?",
    q_en: "49. In which year was the BRICS Think Tanks Council (BTTC) established?",
    opts: ["2011", "2013 डरबन", "2016", "2019"],
    opts_en: ["2011", "2013 Durban", "2016", "2019"],
    ans: 1,
    exp: "वर्ष 2013 में डरबन सम्मेलन के दौरान BTTC का गठन किया गया था।"
  },
  {
    q: "50. ब्रिक्स की कार्यप्रणाली के संदर्भ में 'शेरपा' (Sherpa) की प्राथमिक भूमिका क्या होती है?",
    q_en: "50. In BRICS diplomacy, what is the primary role of a 'Sherpa'?",
    opts: [
      "शिखर सम्मेलन की वार्ताओं और घोषणापत्रों का मसौदा तैयार करने वाले राष्ट्राध्यक्ष के दूत",
      "NDB का मुख्य ऑडिटर",
      "प्रत्येक देश का सैन्य कमांडर",
      "सचिवालय का स्थायी प्रमुख"
    ],
    opts_en: [
      "The official personal representative of a leader who coordinates declarations and diplomatic negotiations",
      "Chief financial auditor of the NDB",
      "Military liaison commander of each state",
      "Permanent CEO of the secretariat"
    ],
    ans: 0,
    exp: "शेरपा राष्ट्राध्यक्ष का वरिष्ठ प्रतिनिधि होता है जो वार्षिक घोषणापत्र और कूटनीतिक वार्ताओं का समन्वय करता है।"
  }
];

// Helper to generate recent 7 days Daily CA
function generateRecent7DaysDaily() {
  var result = [];
  var today = new Date();
  for (var i = 0; i < 7; i++) {
    var d = new Date(today);
    d.setDate(today.getDate() - i);
    var dateStr = d.toISOString().split('T')[0];
    var formatted = d.toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    result.push({
      id: "daily_" + dateStr,
      date: dateStr,
      name: "Daily CA: " + formatted,
      icon: "⚡",
      tests: []
    });
  }
  return result;
}

// Helper to generate months for CA
function generateMonths(year, icon) {
  var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months.map(function(m) {
    var isOct2026 = (year === "2026" && m === "October");
    return {
      id: m.toLowerCase() + "_" + year,
      name: m + " " + year + " – Current Affairs",
      icon: icon,
      tests: isOct2026 ? [
        {
          id: "oct_t1",
          title: "Test 01: October 2026 Full Length Mock Test",
          desc: "100 High-Yield Questions • 80 Mins • Full Explanations",
          timeMins: 80,
          data: CA_OCT_2026_T1
        },
        {
          id: "oct_t2",
          title: "Test 02: October 2026 Full Length Mock Test",
          desc: "100 High-Yield Questions (Part 2) • 80 Mins • Full Explanations",
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
      {
        id: "int_org_bpsc",
        name: "International Organizations",
        icon: "🌐",
        tests: [
          {
            id: "bpsc_brics_50",
            title: "BRICS Master Mock Test (Top 50 Qs)",
            desc: "50 Standard MCQs on BRICS History, NDB, CRA, Expansion & Summits • Full Explanations",
            timeMins: 45,
            data: BRICS_50_DATA
          }
        ]
      }
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
    desc: "Daily Tests & Complete Monthly Archives",
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
    desc: "Class 6 to Class 12 Standard NCERT MCQ Series",
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
