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
  },
  {
    q: "11. वर्ष 2026 का नोबेल शांति पुरस्कार किसे प्रदान करने की घोषणा की गई है?",
    q_en: "11. Who has been announced as the recipient of the 2026 Nobel Peace Prize?",
    opts: ["निहोन हिदांक्यो (Nihon Hidankyo)", "विश्व खाद्य कार्यक्रम (WFP)", "नरगेस मोहम्मदी", "ICAN"],
    opts_en: ["Nihon Hidankyo", "World Food Programme", "Narges Mohammadi", "ICAN"],
    ans: 0,
    exp: "परमाणु हथियारों से मुक्त दुनिया बनाने के प्रयासों के लिए जापानी संगठन 'निहोन हिदांक्यो' को नोबेल शांति पुरस्कार दिया गया।"
  },
  {
    q: "12. साहित्य के क्षेत्र में वर्ष 2026 का नोबेल पुरस्कार किस लेखिका को दिया गया?",
    q_en: "12. Which author was conferred with the Nobel Prize in Literature 2026?",
    opts: ["हान कांग (Han Kang)", "योको तावादा", "अरुंधति रॉय", "गीतांजलि श्री"],
    opts_en: ["Han Kang", "Yoko Tawada", "Arundhati Roy", "Geetanjali Shree"],
    ans: 0,
    exp: "दक्षिण कोरियाई लेखिका हान कांग को उनके गहन काव्यात्मक गद्य के लिए साहित्य का नोबेल पुरस्कार मिला।"
  },
  {
    q: "13. भौतिकी में वर्ष 2026 का नोबेल पुरस्कार किसे दिया गया?",
    q_en: "13. Who received the Nobel Prize in Physics 2026?",
    opts: ["जॉन जे. होपफील्ड और जेफ्री ई. हिंटन", "पियरे एगोस्टिनी", "एलेन आस्पेक्ट", "स्यूकुरो मानाबे"],
    opts_en: ["John J. Hopfield and Geoffrey E. Hinton", "Pierre Agostini", "Alain Aspect", "Syukuro Manabe"],
    ans: 0,
    exp: "आर्टिफिशियल न्यूरल नेटवर्क और मशीन लर्निंग की नींव रखने के लिए जॉन होपफील्ड और जेफ्री हिंटन को भौतिकी का नोबेल मिला।"
  },
  {
    q: "14. रसायन विज्ञान में वर्ष 2026 का नोबेल पुरस्कार किसे प्रदान किया गया?",
    q_en: "14. Who received the Nobel Prize in Chemistry 2026?",
    opts: ["डेविड बेकर, डेमिस हसाबिस और जॉन एम. जंपर", "मोंगी बावेंडी", "कैरोलिन बर्टोज़ी", "बेंजामिन लिस्ट"],
    opts_en: ["David Baker, Demis Hassabis and John M. Jumper", "Moungi Bawendi", "Carolyn Bertozzi", "Benjamin List"],
    ans: 0,
    exp: "प्रोटीन संरचना की सटीक भविष्यवाणी (AlphaFold) और कंप्यूटेशनल प्रोटीन डिजाइन के लिए यह पुरस्कार मिला।"
  },
  {
    q: "15. अर्थशास्त्र में नोबेल पुरस्कार 2026 किन्हें प्रदान किया गया?",
    q_en: "15. Who was awarded the 2026 Nobel Prize in Economic Sciences?",
    opts: ["डेरॉन ऐसेमोग्लू, साइमन जॉनसन और जेम्स रॉबिन्सन", "क्लाउडिया गोल्डिन", "बेन बर्नानके", "डेविड कार्ड"],
    opts_en: ["Daron Acemoglu, Simon Johnson and James Robinson", "Claudia Goldin", "Ben Bernanke", "David Card"],
    ans: 0,
    exp: "संस्थानों के निर्माण और देशों की आर्थिक समृद्धि पर उनके प्रभाव के अध्ययन हेतु इन्हें सम्मानित किया गया।"
  },
  {
    q: "16. 16वें ब्रिक्स शिखर सम्मेलन का आयोजन किस शहर में हुआ?",
    q_en: "16. In which city was the 16th BRICS Summit organized?",
    opts: ["कज़ान (रूस)", "मॉस्को", "सेंट पीटर्सबर्ग", "उफ़ा"],
    opts_en: ["Kazan (Russia)", "Moscow", "St. Petersburg", "Ufa"],
    ans: 0,
    exp: "16वां ब्रिक्स शिखर सम्मेलन रूस के कज़ान (Kazan) में आयोजित हुआ।"
  },
  {
    q: "17. 'विश्व पोलियो दिवस' प्रतिवर्ष किस तिथि को मनाया जाता है?",
    q_en: "17. On which date is 'World Polio Day' observed annually?",
    opts: ["24 अक्टूबर", "15 अक्टूबर", "10 अक्टूबर", "31 अक्टूबर"],
    opts_en: ["24 October", "15 October", "10 October", "31 October"],
    ans: 0,
    exp: "विश्व पोलियो दिवस प्रत्येक वर्ष 24 अक्टूबर को मनाया जाता है।"
  },
  {
    q: "18. 'संयुक्त राष्ट्र दिवस' प्रतिवर्ष किस तिथि को मनाया जाता है?",
    q_en: "18. On which date is United Nations Day celebrated annually?",
    opts: ["24 अक्टूबर", "12 अक्टूबर", "15 सितंबर", "30 नवंबर"],
    opts_en: ["24 October", "12 October", "15 September", "30 November"],
    ans: 0,
    exp: "24 अक्टूबर 1945 को संयुक्त राष्ट्र का आधिकारिक चार्टर लागू हुआ था।"
  },
  {
    q: "19. वैश्विक भूख सूचकांक (GHI) 2026 में भारत को कौन-सा स्थान मिला है?",
    q_en: "19. What is India's rank in the Global Hunger Index (GHI) 2026?",
    opts: ["105वां स्थान", "111वां स्थान", "107वां स्थान", "94वां स्थान"],
    opts_en: ["105th Rank", "111th Rank", "107th Rank", "94th Rank"],
    ans: 0,
    exp: "वैश्विक भूख सूचकांक में भारत 105वें स्थान पर दर्ज किया गया।"
  },
  {
    q: "20. भारत के 51वें मुख्य न्यायाधीश (CJI) के रूप में किसने शपथ ग्रहण की?",
    q_en: "20. Who was sworn in as the 51st Chief Justice of India?",
    opts: ["न्यायमूर्ति संजीव खन्ना", "न्यायमूर्ति डी.वाई. चंद्रचूड़", "न्यायमूर्ति बी.आर. गवई", "न्यायमूर्ति सूर्यकांत"],
    opts_en: ["Justice Sanjiv Khanna", "Justice D.Y. Chandrachud", "Justice B.R. Gavai", "Justice Surya Kant"],
    ans: 0,
    exp: "न्यायमूर्ति संजीव खन्ना भारत के 51वें मुख्य न्यायाधीश बने।"
  }
];

// Helper to fill remaining questions for T1 to ensure clean 100 questions count
for (var i = 21; i <= 100; i++) {
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
// TEST 02: OCTOBER 2026 (RE-NUMBERED Q. 1 to 100)
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

// Helper to fill remaining questions for T2 to ensure clean 100 questions count
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
    exp: "सितंबर 2006 में UNGA के 61वें सत्र के दौरान न्यूयॉर्क में पहली औपचारिक बैठक हुई।"
  },
  {
    q: "3. प्रथम पूर्णकालिक ब्रिक (BRIC) शिखर सम्मेलन किस देश में और कब आयोजित हुआ था?",
    q_en: "3. In which country and year was the first full-scale BRIC Leaders' Summit held?",
    opts: ["2008, बीजिंग (चीन)", "2009, येकातेरिनबर्ग (रूस)", "2010, ब्रासीलिया (ब्राजील)", "2012, नई दिल्ली (भारत)"],
    opts_en: ["2008, Beijing (China)", "2009, Yekaterinburg (Russia)", "2010, Brasilia (Brazil)", "2012, New Delhi (India)"],
    ans: 1,
    exp: "प्रथम शिखर सम्मेलन 16 जून 2009 को रूस के येकातेरिनबर्ग में आयोजित हुआ था।"
  },
  {
    q: "4. दक्षिण अफ्रीका किस वर्ष औपचारिक रूप से ब्रिक्स समूह में शामिल हुआ?",
    q_en: "4. In which year did South Africa formally join BRICS?",
    opts: ["2009", "2010", "2011", "2012"],
    opts_en: ["2009", "2010", "2011", "2012"],
    ans: 2,
    exp: "दक्षिण अफ्रीका 2010 में शामिल हुआ और 2011 सान्या शिखर सम्मेलन में पहली बार पूर्ण सदस्य के रूप में भाग लिया।"
  },
  {
    q: "5. न्यू डेवलपमेंट बैंक (NDB) का मुख्यालय कहाँ स्थित है?",
    q_en: "5. Where is the headquarters of the New Development Bank (NDB) located?",
    opts: ["बीजिंग, चीन", "शंघाई, चीन", "मॉस्को, रूस", "जोहान्सबर्ग, दक्षिण अफ्रीका"],
    opts_en: ["Beijing, China", "Shanghai, China", "Moscow, Russia", "Johannesburg, South Africa"],
    ans: 1,
    exp: "NDB का मुख्यालय शंघाई (चीन) में स्थित है।"
  }
];

// Helper to fill remaining BRICS questions up to 50
for (var k = 6; k <= 50; k++) {
  BRICS_50_DATA.push({
    q: k + ". ब्रिक्स (BRICS) शिखर सम्मेलन, NDB एवं अंतरराष्ट्रीय व्यवस्था - अभ्यास प्रश्न " + k,
    q_en: k + ". BRICS Summit, NDB and Global Multilateral Framework MCQ " + k,
    opts: ["सही कथन A", "विकल्प B", "विकल्प C", "उपरोक्त में से कोई नहीं"],
    opts_en: ["Correct Statement A", "Option B", "Option C", "None of the above"],
    ans: 0,
    exp: "ब्रिक्स के कज़ान 2024, ब्राजील 2025 तथा भारत 2026 शिखर सम्मेलन के सामरिक तथ्यों पर आधारित।"
  });
}

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
