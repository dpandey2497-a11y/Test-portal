// ==========================================
// BPSC: BRICS MASTER TEST (TOP 50 REAL Qs)
// ==========================================
var BRICS_50_DATA = [
  {
    q: "1. 'BRIC' शब्द का सर्वप्रथम प्रयोग वर्ष 2001 में किस अर्थशास्त्री द्वारा किया गया था?",
    q_en: "1. The acronym 'BRIC' was first coined in 2001 by which economist?",
    opts: ["अमर्त्य सेन", "जिम ओ'नील", "जोसेफ स्टिग्लिट्ज़", "रघुराम राजन"],
    opts_en: ["Amartya Sen", "Jim O'Neill", "Joseph Stiglitz", "Raghuram Rajan"],
    ans: 1,
    exp: "गोल्डमैन सैक्स के अर्थशास्त्री जिम ओ'नील (Jim O'Neill) ने 2001 में अपने शोध पत्र 'Building Better Global Economic BRICs' में यह शब्द गढ़ा था।"
  },
  {
    q: "2. ब्रिक (BRIC) के विदेश मंत्रियों की पहली औपचारिक राजनयिक बैठक कब और कहाँ आयोजित की गई थी?",
    q_en: "2. When and where was the first formal diplomatic meeting of BRIC foreign ministers held?",
    opts: ["सितंबर 2006, न्यूयॉर्क", "जून 2009, येकातेरिनबर्ग", "दिसंबर 2008, साओ पाउलो", "अप्रैल 2011, सान्या"],
    opts_en: ["September 2006, New York", "June 2009, Yekaterinburg", "December 2008, Sao Paulo", "April 2011, Sanya"],
    ans: 0,
    exp: "सितंबर 2006 में संयुक्त राष्ट्र महासभा (UNGA) के 61वें सत्र के दौरान न्यूयॉर्क में पहली औपचारिक बैठक हुई थी।"
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
    q: "4. दक्षिण अफ्रीका किस वर्ष औपचारिक रूप से ब्रिक्स समूह में शामिल हुआ, जिससे इसका नाम 'BRICS' हो गया?",
    q_en: "4. In which year did South Africa formally join the group, expanding the acronym to 'BRICS'?",
    opts: ["2009", "2010", "2011", "2012"],
    opts_en: ["2009", "2010", "2011", "2012"],
    ans: 2,
    exp: "दक्षिण अफ्रीका दिसंबर 2010 में शामिल हुआ और अप्रैल 2011 में चीन के सान्या शिखर सम्मेलन में पहली बार पूर्ण सदस्य के रूप में भाग लिया।"
  },
  {
    q: "5. ब्रिक्स द्वारा स्थापित न्यू डेवलपमेंट बैंक (NDB) की स्थापना किस ऐतिहासिक घोषणापत्र के तहत हुई थी?",
    q_en: "5. The New Development Bank (NDB) was established under which historic BRICS declaration?",
    opts: ["दिल्ली घोषणापत्र (2012)", "डर्बन घोषणापत्र (2013)", "फोर्टालेजा घोषणापत्र (2014)", "उफ़ा घोषणापत्र (2015)"],
    opts_en: ["Delhi Declaration (2012)", "Durban Declaration (2013)", "Fortaleza Declaration (2014)", "Ufa Declaration (2015)"],
    ans: 2,
    exp: "2014 के 6वें शिखर सम्मेलन में ब्राजील के फोर्टालेजा घोषणापत्र के तहत NDB और CRA की स्थापना पर समझौता हुआ था।"
  },
  {
    q: "6. न्यू डेवलपमेंट बैंक (NDB) का मुख्यालय कहाँ स्थित है?",
    q_en: "6. Where is the headquarters of the New Development Bank (NDB) located?",
    opts: ["बीजिंग, चीन", "शंघाई, चीन", "मॉस्को, रूस", "जोहान्सबर्ग, दक्षिण अफ्रीका"],
    opts_en: ["Beijing, China", "Shanghai, China", "Moscow, Russia", "Johannesburg, South Africa"],
    ans: 1,
    exp: "न्यू डेवलपमेंट बैंक (NDB) का स्थायी मुख्यालय शंघाई (चीन) में स्थित है।"
  },
  {
    q: "7. न्यू डेवलपमेंट बैंक (NDB) के पहले अध्यक्ष (First President) कौन थे?",
    q_en: "7. Who was the first President of the New Development Bank (NDB)?",
    opts: ["मार्कोस ट्रॉयजो", "के. वी. कामथ", "डिल्मा रूसेफ", "उर्जित पटेल"],
    opts_en: ["Marcos Troyjo", "K. V. Kamath", "Dilma Rousseff", "Urjit Patel"],
    ans: 1,
    exp: "प्रख्यात भारतीय बैंकर के. वी. कामथ (K. V. Kamath) NDB के पहले अध्यक्ष बने थे (2015-2020)।"
  },
  {
    q: "8. न्यू डेवलपमेंट बैंक (NDB) की प्रारंभिक अधिकृत पूंजी (Initial Authorized Capital) कितनी थी?",
    q_en: "8. What was the initial authorized capital of the New Development Bank (NDB)?",
    opts: ["50 अरब अमेरिकी डॉलर", "100 अरब अमेरिकी डॉलर", "150 अरब अमेरिकी डॉलर", "200 अरब अमेरिकी डॉलर"],
    opts_en: ["$50 Billion", "$100 Billion", "$150 Billion", "$200 Billion"],
    ans: 1,
    exp: "NDB की प्रारंभिक अधिकृत पूंजी 100 बिलियन डॉलर रखी गई थी।"
  },
  {
    q: "9. ब्रिक्स आकस्मिक विदेशी मुद्रा भंडार व्यवस्था (CRA) की कुल आरंभिक निधि कितनी है?",
    q_en: "9. What is the total initial size of the BRICS Contingent Reserve Arrangement (CRA)?",
    opts: ["50 अरब अमेरिकी डॉलर", "100 अरब अमेरिकी डॉलर", "200 अरब अमेरिकी डॉलर", "75 अरब अमेरिकी डॉलर"],
    opts_en: ["$50 Billion", "$100 Billion", "$200 Billion", "$75 Billion"],
    ans: 1,
    exp: "CRA की स्थापना 100 बिलियन डॉलर के कोष के साथ अल्पकालिक भुगतान संतुलन संकट से निपटने हेतु की गई थी।"
  },
  {
    q: "10. ब्रिक्स CRA में सर्वाधिक व्यक्तिगत वित्तीय योगदान किस देश का है?",
    q_en: "10. Which country has the largest individual commitment in the BRICS CRA fund?",
    opts: ["रूस ($18B)", "भारत ($18B)", "चीन ($41B)", "ब्राजील ($18B)"],
    opts_en: ["Russia ($18B)", "India ($18B)", "China ($41B)", "Brazil ($18B)"],
    ans: 2,
    exp: "100 अरब डॉलर के CRA में चीन का योगदान 41 अरब डॉलर है; ब्राजील, रूस और भारत प्रत्येक का 18-18 अरब डॉलर है।"
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
    exp: "1 जनवरी 2024 से मिस्र, इथियोपिया, ईरान, सऊदी अरब और यूएई ब्रिक्स के पूर्ण सदस्य बने।"
  },
  {
    q: "12. जनवरी 2025 में किस दक्षिण-पूर्व एशियाई देश ने ब्रिक्स की पूर्ण सदस्यता औपचारिक रूप से ग्रहण की?",
    q_en: "12. Which Southeast Asian nation formally joined BRICS as a full member in January 2025?",
    opts: ["मलेशिया", "थाईलैंड", "इंडोनेशिया", "वियतनाम"],
    opts_en: ["Malaysia", "Thailand", "Indonesia", "Vietnam"],
    ans: 2,
    exp: "इंडोनेशिया जनवरी 2025 में औपचारिक रूप से ब्रिक्स का पूर्णकालिक सदस्य बना।"
  },
  {
    q: "13. 16वें ब्रिक्स शिखर सम्मेलन (अक्टूबर 2024) का आयोजन किस शहर में हुआ था?",
    q_en: "13. In which city was the 16th BRICS Leaders' Summit held in October 2024?",
    opts: ["उफ़ा (रूस)", "कज़ान (रूस)", "सेंट पीटर्सबर्ग (रूस)", "मॉस्को (रूस)"],
    opts_en: ["Ufa (Russia)", "Kazan (Russia)", "St. Petersburg (Russia)", "Moscow (Russia)"],
    ans: 1,
    exp: "16वां ब्रिक्स शिखर सम्मेलन 22-24 अक्टूबर 2024 को रूस के कज़ान (Kazan) शहर में आयोजित किया गया था।"
  },
  {
    q: "14. 16वें ब्रिक्स शिखर सम्मेलन (कज़ान) का आधिकारिक विषय (Theme) क्या था?",
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
    exp: "कज़ान शिखर सम्मेलन का आधिकारिक विषय 'न्यायसंगत वैश्विक विकास और सुरक्षा के लिए बहुपक्षवाद को सुदृढ़ बनाना' था।"
  },
  {
    q: "15. कज़ान घोषणापत्र 2024 के तहत गैर-सदस्य देशों के लिए किस नई श्रेणी को मंजूरी दी गई?",
    q_en: "15. Under the Kazan Declaration 2024, which new category was approved for aspiring nations?",
    opts: ["पर्यवेक्षक देश", "साझेदार देश (Partner Country)", "अस्थायी सदस्य", "संवाद साझेदार"],
    opts_en: ["Observer Status", "Partner Country Category", "Provisional Member", "Dialogue Partner"],
    ans: 1,
    exp: "कज़ान घोषणापत्र में 'ब्रिक्स साझेदार देश' (BRICS Partner Country) की श्रेणी और मानदंड स्वीकृत किए गए।"
  },
  {
    q: "16. भारत ने अब तक कुल कितनी बार ब्रिक्स शिखर सम्मेलन की मेजबानी की है?",
    q_en: "16. How many times has India hosted the annual BRICS Leaders' Summit so far?",
    opts: ["2 बार", "3 बार (2012, 2016, 2021)", "4 बार", "1 बार"],
    opts_en: ["Twice", "3 times (2012, 2016, 2021)", "4 times", "Once"],
    ans: 1,
    exp: "भारत ने 3 बार ब्रिक्स शिखर सम्मेलन की मेजबानी की है: 2012 (नई दिल्ली), 2016 (गोवा), और 2021 (नई दिल्ली - वर्चुअल)।"
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
    exp: "भारत की अध्यक्षता में 2021 का विषय 'BRICS@15: Intra-BRICS Cooperation for Continuity, Consolidation and Consensus' था।"
  },
  {
    q: "18. वर्ष 2016 में भारत में आयोजित 8वां ब्रिक्स शिखर सम्मेलन किस राज्य में आयोजित हुआ था?",
    q_en: "18. The 8th BRICS Summit hosted by India in 2016 took place in which state?",
    opts: ["महाराष्ट्र", "गोवा (बेनौलिम)", "गुजरात", "नई दिल्ली"],
    opts_en: ["Maharashtra", "Goa (Benaulim)", "Gujarat", "New Delhi"],
    ans: 1,
    exp: "अक्टूबर 2016 में 8वां ब्रिक्स शिखर सम्मेलन गोवा के बेनौलिम में आयोजित हुआ था।"
  },
  {
    q: "19. न्यू डेवलपमेंट बैंक (NDB) में गैर-ब्रिक्स देशों में से सर्वप्रथम शामिल होने वाले सदस्य कौन हैं?",
    q_en: "19. Which was among the first batch of non-BRICS nations admitted as members of NDB in 2021?",
    opts: ["बांग्लादेश, यूएई और उरुग्वे", "कनाडा, ऑस्ट्रेलिया और जापान", "जर्मनी और फ्रांस", "सऊदी अरब और कतर"],
    opts_en: ["Bangladesh, UAE and Uruguay", "Canada, Australia and Japan", "Germany and France", "Saudi Arabia and Qatar"],
    ans: 0,
    exp: "सितंबर 2021 में NDB ने बांग्लादेश, संयुक्त अरब अमीरात (UAE) और उरुग्वे को नए सदस्य के रूप में शामिल किया।"
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
    exp: "NDB के चार्टर के अनुसार किसी भी सदस्य देश के पास वीटो नहीं है और संस्थापक सदस्यों (BRICS) का वोटिंग शेयर 55% से कम नहीं हो सकता।"
  },
  {
    q: "21. ब्रिक्स में निर्णय लेने की सर्वोच्च विधिक और रणनीतिक प्रक्रिया किस सिद्धांत पर आधारित है?",
    q_en: "21. The highest decision-making process in BRICS is based on which fundamental principle?",
    opts: ["बहुमत मतदान", "पूर्ण आम सहमति (Consensus)", "रोटेशनल वीटो", "आर्थिक भारित मतदान"],
    opts_en: ["Simple Majority Voting", "Strict Consensus", "Rotational Veto", "Weighted Economic Voting"],
    ans: 1,
    exp: "ब्रिक्स की संपूर्ण कार्यप्रणाली और घोषणापत्र पूर्ण 'आम सहमति' (Consensus) के सिद्धांत पर आधारित होते हैं।"
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
    exp: "PPP आधार पर विस्तारित ब्रिक्स की जीडीपी विश्व की कुल जीडीपी के लगभग 36% से 37% हो चुकी है, जो G7 से भी अधिक है।"
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
    exp: "BRICS Pay का मुख्य उद्देश्य सदस्य देशों को अपनी घरेलू मुद्राओं में सुरक्षित और स्विफ्ट-मुक्त सीमा पार भुगतान की सुविधा देना है।"
  },
  {
    q: "25. वैश्विक कच्चे तेल उत्पादन में विस्तारित ब्रिक्स देशों की कुल हिस्सेदारी लगभग कितनी है?",
    q_en: "25. Expanded BRICS accounts for roughly what share of global oil production?",
    opts: ["लगभग 10%", "लगभग 20%", "लगभग 42-44%", "लगभग 75%"],
    opts_en: ["About 10%", "About 20%", "About 42-44%", "About 75%"],
    ans: 2,
    exp: "सऊदी अरब, यूएई, ईरान और रूस के साथ ब्रिक्स विश्व के कुल कच्चे तेल उत्पादन के 42% से अधिक का प्रतिनिधित्व करता है।"
  },
  {
    q: "26. ब्रिक्स वैक्सीन अनुसंधान एवं विकास केंद्र का शुभारंभ किस वर्ष किया गया था?",
    q_en: "26. In which year was the BRICS Vaccine R&D Centre virtually launched?",
    opts: ["2018", "2020", "2022", "2024"],
    opts_en: ["2018", "2020", "2022", "2024"],
    ans: 2,
    exp: "मार्च 2022 में चीन की अध्यक्षता के दौरान महामारी से निपटने और टीके साझा करने हेतु वर्चुअल 'BRICS Vaccine R&D Centre' शुरू किया गया।"
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
    exp: "ब्रिक्स कोई सैन्य गठबंधन (Military Alliance) नहीं है। इसके 3 स्तंभ हैं: राजनीतिक, आर्थिक और सांस्कृतिक।"
  },
  {
    q: "28. 'ब्रिक्स प्लस' (BRICS Plus) संवाद की अवधारणा औपचारिक रूप से किस शिखर सम्मेलन में प्रस्तुत की गई थी?",
    q_en: "28. The concept of 'BRICS Plus' outreach was formally introduced in which summit?",
    opts: ["2015 उफ़ा", "2017 ज़ियामेन (चीन)", "2019 ब्रासीलिया", "2023 जोहान्सबर्ग"],
    opts_en: ["2015 Ufa", "2017 Xiamen (China)", "2019 Brasilia", "2023 Johannesburg"],
    ans: 1,
    exp: "चीन ने 2017 के ज़ियामेन शिखर सम्मेलन में अन्य विकासशील देशों को जोड़ने हेतु 'BRICS Plus' रूपरेखा प्रस्तुत की थी।"
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
    exp: "रोटेशनल प्रेसीडेंसी के तहत वर्ष 2026 में 18वें ब्रिक्स शिखर सम्मेलन की मेजबानी भारत के पास है।"
  },
  {
    q: "31. वर्ष 2023 में 15वां ब्रिक्स शिखर सम्मेलन कहाँ आयोजित हुआ था, जिसमें ऐतिहासिक विस्तार की घोषणा हुई थी?",
    q_en: "31. Where was the 15th BRICS Summit (2023) held, where the historic expansion was announced?",
    opts: ["डरबन", "जोहान्सबर्ग, दक्षिण अफ्रीका", "केप टाउन", "प्रिटोरिया"],
    opts_en: ["Durban", "Johannesburg, South Africa", "Cape Town", "Pretoria"],
    ans: 1,
    exp: "अगस्त 2023 में जोहान्सबर्ग (दक्षिण अफ्रीका) में 15वें शिखर सम्मेलन के दौरान नए सदस्यों के प्रवेश की घोषणा की गई थी।"
  },
  {
    q: "32. अर्जेंटीना ने ब्रिक्स की सदस्यता में शामिल होने से किस कारणवश मना कर दिया था?",
    q_en: "32. Why did Argentina decline its formal entry into BRICS in late 2023?",
    opts: [
      "राष्ट्रपति जेवियर माइली की विदेश नीति में बदलाव के कारण",
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
    exp: "राष्ट्रपति जेवियर माइली ने पदभार ग्रहण करते ही अमेरिका के साथ संबंधों को प्राथमिकता देते हुए ब्रिक्स में शामिल न होने का निर्णय लिया।"
  },
  {
    q: "33. ब्रिक्स एनर्जी रिसर्च कोऑपरेशन प्लेटफॉर्म की स्थापना किस शिखर सम्मेलन में स्वीकृत हुई थी?",
    q_en: "33. In which summit was the establishment of the BRICS Energy Research Cooperation Platform approved?",
    opts: ["2016 गोवा", "2018 जोहान्सबर्ग", "2019 ब्रासीलिया", "2020 मॉस्को"],
    opts_en: ["2016 Goa", "2018 Johannesburg", "2019 Brasilia", "2020 Moscow"],
    ans: 1,
    exp: "2018 के 10वें जोहान्सबर्ग शिखर सम्मेलन में ऊर्जा क्षेत्र में संयुक्त अनुसंधान और डेटा साझा करने हेतु यह प्लेटफॉर्म बना।"
  },
  {
    q: "34. ब्रिक्स रिमोट सेंसिंग सैटेलाइट नक्षत्र समझौते पर किस वर्ष हस्ताक्षर हुए थे?",
    q_en: "34. In which year was the agreement on the BRICS Remote Sensing Satellite Constellation signed?",
    opts: ["2015", "2018", "2021", "2023"],
    opts_en: ["2015", "2018", "2021", "2023"],
    ans: 2,
    exp: "अगस्त 2021 में भारत की अध्यक्षता के दौरान इसरो (ISRO) सहित पांचों अंतरिक्ष एजेंसियों ने उपग्रह डेटा साझा करने के इस समझौते पर हस्ताक्षर किए।"
  },
  {
    q: "35. ब्रिक्स में भारत का मुख्य रणनीतिक दृष्टिकोण निम्नलिखित में से क्या है?",
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
    exp: "भारत ब्रिक्स को एक बहुध्रुवीय, गैर-पश्चिमी मंच मानता है जो वैश्विक शासन सुधार और विकासशील राष्ट्रों की संप्रभुता का समर्थन करता है।"
  },
  {
    q: "36. UNSC में भारत और ब्राजील की स्थायी सदस्यता की वैध आकांक्षाओं का समर्थन ब्रिक्स घोषणापत्रों में किस वर्ष से शामिल है?",
    q_en: "36. Aspiration of India and Brazil for permanent UNSC roles has been acknowledged since which summit?",
    opts: ["2009 येकातेरिनबर्ग", "2011 सान्या", "2014 फोर्टालेजा", "2018 जोहान्सबर्ग"],
    opts_en: ["2009 Yekaterinburg", "2011 Sanya", "2014 Fortaleza", "2018 Johannesburg"],
    ans: 1,
    exp: "2011 के सान्या शिखर सम्मेलन से ही घोषणापत्रों में भारत और ब्राजील की सुरक्षा परिषद में स्थायी भूमिका का समर्थन दर्ज किया जा रहा है।"
  },
  {
    q: "37. ब्रिक्स महिला व्यापार गठबंधन (BRICS Women's Business Alliance - WBA) की स्थापना किस वर्ष की गई थी?",
    q_en: "37. In which year was the BRICS Women's Business Alliance (WBA) established?",
    opts: ["2016", "2018", "2020", "2022"],
    opts_en: ["2016", "2018", "2020", "2022"],
    ans: 2,
    exp: "जुलाई 2020 में मॉस्को शिखर सम्मेलन के दौरान महिला उद्यमियों को वैश्विक व्यापार से जोड़ने हेतु WBA स्थापित हुआ।"
  },
  {
    q: "38. न्यू डेवलपमेंट बैंक (NDB) का भारत में क्षेत्रीय कार्यालय (IRO) कहाँ स्थित है?",
    q_en: "38. Where is the India Regional Office (IRO) of the New Development Bank located?",
    opts: ["मुंबई", "गिफ्ट सिटी, गांधीनगर (गुजरात)", "नई दिल्ली", "बेंगलुरु"],
    opts_en: ["Mumbai", "GIFT City, Gandhinagar (Gujarat)", "New Delhi", "Bengaluru"],
    ans: 1,
    exp: "NDB का भारतीय क्षेत्रीय कार्यालय गिफ्ट सिटी (GIFT City), गांधीनगर में स्थापित किया गया है।"
  },
  {
    q: "39. ब्रिक्स कृषि अनुसंधान मंच (BARP) का संचालन किस देश द्वारा किया जाता है?",
    q_en: "39. The operational coordination of the BRICS Agriculture Research Platform (BARP) was spearheaded by:",
    opts: ["भारत (ICAR, नई दिल्ली)", "चीन (बीजिंग)", "ब्राजील", "रूस"],
    opts_en: ["India (ICAR, New Delhi)", "China (Beijing)", "Brazil", "Russia"],
    ans: 0,
    exp: "2016 गोवा सम्मेलन में भारत के प्रस्ताव पर BARP बना और इसका संचालन ICAR, नई दिल्ली द्वारा किया गया।"
  },
  {
    q: "40. ब्रिक्स संसदीय मंच (BRICS Parliamentary Forum) की 12वीं बैठक 2026 में कहाँ आयोजित की गई थी?",
    q_en: "40. Where was the 12th BRICS Parliamentary Forum held in 2026?",
    opts: ["नई दिल्ली, भारत", "रियो डी जेनेरियो", "कज़ान", "बीजिंग"],
    opts_en: ["New Delhi, India", "Rio de Janeiro", "Kazan", "Beijing"],
    ans: 0,
    exp: "12वीं ब्रिक्स संसदीय बैठक का आयोजन नई दिल्ली में हुआ, जिसकी अध्यक्षता लोकसभा अध्यक्ष ने की।"
  },
  {
    q: "41. ब्रिक्स में डी-डॉलरीकरण (De-Dollarization) के प्रयासों के संबंध में भारत का आधिकारिक रुख क्या है?",
    q_en: "41. What is India's official stance regarding de-dollarization within BRICS?",
    opts: [
      "डॉलर के खिलाफ अभियान नहीं, बल्कि द्विपक्षीय व्यापार में स्थानीय मुद्राओं (जैसे रुपया) का उपयोग",
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
    exp: "भारत डॉलर-विरोधी आक्रामक गुट का हिस्सा बनने के बजाय विनिमय जोखिम घटाने हेतु रुपये और स्थानीय मुद्राओं में व्यापार का समर्थन करता है।"
  },
  {
    q: "42. ब्रिक्स आतंकवाद विरोधी रणनीति (BRICS Counter-Terrorism Strategy) किस वर्ष औपचारिक रूप से अंगीकृत की गई थी?",
    q_en: "42. In which year was the BRICS Counter-Terrorism Strategy formally adopted?",
    opts: ["2016", "2018", "2020", "2022"],
    opts_en: ["2016", "2018", "2020", "2022"],
    ans: 2,
    exp: "2020 के 12वें शिखर सम्मेलन में आतंकवाद विरोधी रणनीति को औपचारिक स्वीकृति दी गई थी।"
  },
  {
    q: "43. ब्रिक्स स्टार्टअप फोरम (BRICS Startup Forum) की स्थापना की घोषणा भारत द्वारा किस वर्ष की गई थी?",
    q_en: "43. In which year did India announce the launch of the BRICS Startup Forum?",
    opts: ["2021", "2022", "2023", "2024"],
    opts_en: ["2021", "2022", "2023", "2024"],
    ans: 2,
    exp: "अगस्त 2023 में जोहान्सबर्ग शिखर सम्मेलन के दौरान भारत के वाणिज्य और उद्योग मंत्री ने ब्रिक्स स्टार्टअप फोरम की घोषणा की।"
  },
  {
    q: "44. ब्रिक्स का कौन-सा सदस्य देश अफ्रीका महाद्वीप का पहला संस्थापक सदस्य बना था?",
    q_en: "44. Which member country was the first representative from the African continent in BRICS?",
    opts: ["मिस्र", "नाइजीरिया", "दक्षिण अफ्रीका", "इथियोपिया"],
    opts_en: ["Egypt", "Nigeria", "South Africa", "Ethiopia"],
    ans: 2,
    exp: "दक्षिण अफ्रीका 2010 में शामिल होकर ब्रिक्स में अफ्रीका का प्रतिनिधित्व करने वाला पहला देश बना।"
  },
  {
    q: "45. ब्रिक्स में शामिल होने वाला पहला यूरेशियाई/यूरोपीय संस्थापक देश कौन-सा है?",
    q_en: "45. Which transcontinental Eurasian nation is a founding member of BRICS?",
    opts: ["तुर्किये", "रूस", "बेलारूस", "सर्बिया"],
    opts_en: ["Turkiye", "Russia", "Belarus", "Serbia"],
    ans: 1,
    exp: "रूस यूरेशियाई महाशक्ति है और ब्रिक (BRIC) के मूल चार संस्थापक देशों में से एक है।"
  },
  {
    q: "46. कज़ान घोषणापत्र 2024 में जलवायु परिवर्तन से संबंधित किस वैश्विक समझौते का समर्थन दोहराया गया?",
    q_en: "46. The Kazan Declaration 2024 reaffirmed full commitment to which climate agreement?",
    opts: ["क्योटो प्रोटोकॉल", "पेरिस समझौता 2015 और यूएनएफसीसीसी (UNFCCC)", "मॉन्ट्रियल प्रोटोकॉल", "स्टॉकहोम कन्वेंशन"],
    opts_en: ["Kyoto Protocol", "Paris Agreement 2015 and UNFCCC", "Montreal Protocol", "Stockholm Convention"],
    ans: 1,
    exp: "कज़ान घोषणापत्र में पेरिस समझौते के सिद्धांतों और विकसित देशों द्वारा विकासशील देशों को जलवायु वित्त देने की आवश्यकता पर बल दिया गया।"
  },
  {
    q: "47. ब्रिक्स बिजनेस काउंसिल (BRICS Business Council) की स्थापना किस शिखर सम्मेलन में हुई थी?",
    q_en: "47. In which summit was the BRICS Business Council established?",
    opts: ["2011 सान्या", "2012 नई दिल्ली", "2013 डरबन", "2014 फोर्टालेजा"],
    opts_en: ["2011 Sanya", "2012 New Delhi", "2013 Durban", "2014 Fortaleza"],
    ans: 2,
    exp: "मार्च 2013 में दक्षिण अफ्रीका के डरबन में आयोजित 5वें शिखर सम्मेलन में ब्रिक्स बिजनेस काउंसिल की स्थापना की गई।"
  },
  {
    q: "48. न्यू डेवलपमेंट बैंक (NDB) द्वारा जारी ग्रीन बॉन्ड का मुख्य उपयोग किस क्षेत्र में किया जाता है?",
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
    exp: "NDB के ग्रीन बॉन्ड से जुटाया गया धन सौर-पवन ऊर्जा पार्कों, इलेक्ट्रिक मोबिलिटी और पर्यावरण-अनुकूल जल आपूर्ति परियोजनाओं में लगाया जाता है।"
  },
  {
    q: "49. ब्रिक्स थिंक टैंक काउंसिल (BTTC) का गठन किस वर्ष हुआ था?",
    q_en: "49. In which year was the BRICS Think Tanks Council (BTTC) established?",
    opts: ["2011", "2013 डरबन", "2016", "2019"],
    opts_en: ["2011", "2013 Durban", "2016", "2019"],
    ans: 1,
    exp: "वर्ष 2013 में डरबन सम्मेलन के दौरान सदस्य देशों के प्रमुख नीति विश्लेषकों और थिंक टैंकों के बीच BTTC का गठन हुआ।"
  },
  {
    q: "50. ब्रिक्स की कार्यप्रणाली के संदर्भ में 'शेरपा' (Sherpa) की प्राथमिक भूमिका क्या होती है?",
    q_en: "50. In BRICS diplomacy, what is the primary role of a 'Sherpa'?",
    opts: [
      "शिखर सम्मेलन की वार्ताओं और घोषणापत्रों का मसौदा तैयार करने वाले राष्ट्राध्यक्ष के विशेष दूत",
      "NDB बैंक का मुख्य ऑडिटर",
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
    exp: "शेरपा राष्ट्राध्यक्ष का वरिष्ठ प्रतिनिधि होता है जो वर्ष भर चलने वाली बैठकों का समन्वय करता है और नेताओं के घोषणापत्र का अंतिम मसौदा तैयार करता है।"
  }
];
