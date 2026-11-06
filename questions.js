// questions.js — All Exams, Subjects, Monthly CA 2026 & PYQ Archives Database

// --- STANDARD SAMPLE QUESTIONS ---
var SAMPLE_ENV_T1 = [
  {
    q: "वन्यजीव संरक्षण अधिनियम (Wildlife Protection Act), 1972 के संदर्भ में 'अनुसूची I' (Schedule I) के तहत सूचीबद्ध जीवों को प्राप्त सुरक्षा का क्या स्तर है?",
    opts: [
      "इन्हें केवल वैज्ञानिक अनुसंधान के लिए बिना अनुमति शिकार किया जा सकता है।",
      "इन्हें कठोरतम कानूनी संरक्षण प्राप्त है और इनके शिकार पर सर्वाधिक कठोर दंड का प्रावधान है।",
      "इन्हें केवल राज्य सरकार की साधारण अधिसूचना द्वारा किसी भी समय अनुसूची से हटाया जा सकता है।",
      "यह केवल पौधों की संकटापन्न प्रजातियों के संरक्षण के लिए निर्धारित है।"
    ],
    ans: 1,
    exp: "वन्यजीव संरक्षण अधिनियम 1972 की अनुसूची I के अंतर्गत सूचीबद्ध प्रजातियों (जैसे बाघ, एशियाई शेर, ग्रेट इंडियन बस्टर्ड) को उच्चतम कानूनी संरक्षण प्राप्त होता है और इसके उल्लंघन पर सबसे कठोर सजा दी जाती है।"
  },
  {
    q: "निम्नलिखित में से कौन-सा आद्रभूमि स्थल (Ramsar Site) 'मोंट्रेक्स रिकॉर्ड' (Montreux Record) में वर्तमान में भारत से शामिल है?",
    opts: ["चिल्का झील", "केवलादेव राष्ट्रीय उद्यान", "वूलर झील", "सुंदरबन"],
    ans: 1,
    exp: "मोंट्रेक्स रिकॉर्ड उन रामसर स्थलों का रजिस्टर है जहाँ मानवीय हस्तक्षेप या प्रदूषण के कारण पारिस्थितिक स्वरूप में परिवर्तन आया है। वर्तमान में भारत से केवलादेव राष्ट्रीय उद्यान (राजस्थान) और लोकटक झील (मणिपुर) इसमें शामिल हैं (चिल्का झील को सफलतापूर्वक सुधार के बाद इससे बाहर कर दिया गया था)।"
  }
];

var SAMPLE_INT_ORG_T1 = [
  {
    q: "संयुक्त राष्ट्र सुरक्षा परिषद (UNSC) के स्थायी सदस्यों (P5) के पास उपलब्ध 'वीटो पावर' (Veto Power) का संवैधानिक आधार संयुक्त राष्ट्र चार्टर का कौन-सा अनुच्छेद है?",
    opts: ["अनुच्छेद 10", "अनुच्छेद 27(3)", "अनुच्छेद 51", "अनुच्छेद 99"],
    ans: 1,
    exp: "संयुक्त राष्ट्र चार्टर के अनुच्छेद 27(3) के अनुसार, सुरक्षा परिषद के गैर-प्रक्रियात्मक निर्णयों के लिए सभी पाँच स्थायी सदस्यों (P5) की सहमति आवश्यक होती है, जिसे सामान्यतः वीटो शक्ति कहा जाता है।"
  },
  {
    q: "शंघाई सहयोग संगठन (SCO) की क्षेत्रीय आतंकवाद-रोधी संरचना (RATS) की स्थायी कार्यकारी समिति का मुख्यालय कहाँ स्थित है?",
    opts: ["बीजिंग (चीन)", "ताशकंद (उज़्बेकिस्तान)", "अस्ताना (कज़ाकिस्तान)", "मॉस्को (रूस)"],
    ans: 1,
    exp: "SCO RATS (Regional Anti-Terrorist Structure) का स्थायी मुख्यालय ताशकंद, उज़्बेकिस्तान में स्थित है।"
  }
];

var UPSC_POLITY_T1 = [
  {
    q: "जवाहरलाल नेहरू द्वारा प्रस्तुत 'उद्देश्य प्रस्ताव' (Objectives Resolution) और उद्देशिका के विकास के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. जवाहरलाल नेहरू ने 13 दिसंबर, 1946 को संविधान सभा में उद्देश्य प्रस्ताव रखा, जिसे सभा ने 22 जनवरी, 1947 को सर्वसम्मति से स्वीकार किया।\n2. मूल उद्देश्य प्रस्ताव में अवशिष्ट शक्तियां केंद्र/संघ के पास रखने का प्रावधान था।\n3. संविधान सभा द्वारा प्रस्तावना को सबसे अंत में 17 अक्टूबर, 1949 को पारित किया गया।\n\nउपर्युक्त में से कौन-सा/से कथन सही है/हैं?",
    opts: ["केवल 1 और 2", "केवल 2 और 3", "केवल 1 और 3", "1, 2 और 3"],
    ans: 2,
    exp: "• कथन 1 सही है: 13 दिसंबर, 1946 को उद्देश्य प्रस्ताव रखा गया और 22 जनवरी, 1947 को स्वीकार हुआ।\n• कथन 2 गलत है: मूल प्रस्ताव में अवशिष्ट शक्तियां राज्यों/इकाइयों के पास रखने का प्रावधान था।\n• कथन 3 सही है।"
  }
];

var BPSC_POLITY_T1 = [
  {
    q: "प्रस्तावना को 'संविधान का परिचय-पत्र' (Identity Card of the Constitution) किसने कहा था?",
    opts: ["के.एम. मुंशी", "एन.ए. पालकीवाला", "अर्नेस्ट बार्कर", "डॉ. बी.आर. अंबेडकर"],
    ans: 1,
    exp: "प्रख्यात न्यायविद एन.ए. पालकीवाला ने प्रस्तावना को संविधान का परिचय-पत्र कहा था।"
  }
];

var SAMPLE_BIHAR_SPECIAL_T1 = [
  {
    q: "1857 की क्रांति के समय पटना में विद्रोह का सफल नेतृत्व किस पुस्तक विक्रेता ने किया था?",
    opts: ["बाबू कुंवर सिंह", "पीर अली खाँ", "इनायत अली", "अमर सिंह"],
    ans: 1,
    exp: "3 जुलाई 1857 को पटना सिटी के गुरहट्टा मोहल्ले के पुस्तक विक्रेता पीर अली खाँ ने अंग्रेजों के विरुद्ध विद्रोह का नेतृत्व किया था।"
  },
  {
    q: "बिहार के किस जिले में गंगा नदी सबसे लंबी दूरी (लगभग 99 किमी) तय करती है?",
    opts: ["भागलपुर", "पटना", "कटिहार", "बेगूसराय"],
    ans: 1,
    exp: "गंगा नदी बिहार के 12 जिलों से होकर गुजरती है, जिसमें सर्वाधिक लंबाई (लगभग 99 किमी) पटना जिले में है।"
  }
];

var SAMPLE_HISTORY_T1 = [
  {
    q: "हड़प्पा सभ्यता के किस स्थल से 'गोदीबाड़ा' (Dockyard) के पुरातात्विक साक्ष्य मिले हैं?",
    opts: ["कालीबंगा", "लोथल", "धोलावीरा", "बनावली"],
    ans: 1,
    exp: "गुजरात के भोगावा नदी के तट पर स्थित लोथल से प्रसिद्ध गोदीबाड़ा के साक्ष्य मिले हैं।"
  }
];

var SAMPLE_GEOGRAPHY_T1 = [
  {
    q: "भारत की मानक समय रेखा (Standard Meridian) 82°30' E निम्नलिखित में से किस राज्य से होकर नहीं गुजरती है?",
    opts: ["उत्तर प्रदेश", "मध्य प्रदेश", "ओडिशा", "बिहार"],
    ans: 3,
    exp: "82°30' E रेखा 5 राज्यों से गुजरती है: UP, MP, Chhattisgarh, Odisha aur Andhra Pradesh. Yeh Bihar se hokar nahi guzarti."
  }
];

var SAMPLE_SCIENCE_T1 = [
  {
    q: "प्रकाश वर्ष (Light Year) निम्नलिखित में से किस भौतिक राशि की इकाई है?",
    opts: ["समय", "दूरी", "प्रकाश की गति", "प्रकाश की तीव्रता"],
    ans: 1,
    exp: "प्रकाश वर्ष निर्वात में प्रकाश द्वारा एक वर्ष में तय की गई दूरी का मात्रक है।"
  }
];

var SAMPLE_ECONOMY_T1 = [
  {
    q: "भारत में 'राष्ट्रीय आय' (National Income) की गणना का मुख्य दायित्व किस संस्था पर है?",
    opts: ["नीति आयोग", "वित्त मंत्रालय", "राष्ट्रीय सांख्यिकी कार्यालय (NSO)", "भारतीय रिजर्व बैंक"],
    ans: 2,
    exp: "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI) के तहत NSO राष्ट्रीय आय की गणना करता है।"
  }
];

// PYQ SAMPLES
var SAMPLE_UPSC_PYQ = [
  {
    q: "[UPSC CSE Prelims PYQ]\nनिम्नलिखित में से कौन-सा एक 'विश्व आर्थिक मंच' (World Economic Forum) द्वारा प्रकाशित किया जाता है?",
    opts: ["वैश्विक प्रतिस्पर्धात्मकता सूचकांक (Global Competitiveness Index)", "वैश्विक आर्थिक संभावनाएं (Global Economic Prospects)", "विश्व विकास रिपोर्ट (World Development Report)", "अंतर्राष्ट्रीय वित्तीय स्थिरता रिपोर्ट"],
    ans: 0,
    exp: "ग्लोबल कॉम्पिटिटिवनेस इंडेक्स (GCI) और ग्लोबल जेंडर गैप इंडेक्स WEF द्वारा प्रकाशित किए जाते हैं, जबकि वर्ल्ड डेवलपमेंट रिपोर्ट विश्व बैंक द्वारा जारी की जाती है।"
  }
];

var SAMPLE_BPSC_PYQ = [
  {
    q: "[BPSC Prelims PYQ]\nचंपारण में गांधीजी को किसानों की समस्याओं को देखने के लिए किसने आमंत्रित किया था?",
    opts: ["राजकुमार शुक्ल", "राजेन्द्र प्रसाद", "ब्रजकिशोर प्रसाद", "अनुग्रह नारायण सिन्हा"],
    ans: 0,
    exp: "1916 के कांग्रेस के लखनऊ अधिवेशन में राजकुमार शुक्ल ने महात्मा गांधी से मुलाकात कर उन्हें चंपारण के नीलहा किसानों की दुर्दशा देखने के लिए आमंत्रित किया था।"
  }
];

var SAMPLE_SSC_PYQ = [
  {
    q: "[SSC CGL PYQ]\nभारतीय संविधान के किस अनुच्छेद के तहत वित्तीय आपातकाल (Financial Emergency) घोषित किया जा सकता है?",
    opts: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 368"],
    ans: 2,
    exp: "अनुच्छेद 360 के तहत राष्ट्रपति वित्तीय आपातकाल घोषित कर सकते हैं। भारत में अब तक एक बार भी वित्तीय आपातकाल लागू नहीं हुआ है।"
  }
];

// 2026 Monthly Sample Question Helper
function createMonthlyCaQuestion(monthName) {
  return [
    {
      q: `${monthName} 2026 समसामयिकी (Current Affairs):\nहाल ही में भारत सरकार द्वारा घोषित सतत विकास एवं जलवायु अनुकूलन पहल के संदर्भ में निम्नलिखित प्राथमिकताओं पर ध्यान केंद्रित किया गया है। इसका प्रमुख उद्देश्य क्या है?`,
      opts: [
        "हरित ऊर्जा गलियारे का तीव्र विस्तार एवं कार्बन उत्सर्जन में कमी",
        "पारंपरिक जीवाश्म ईंधनों पर पूर्णतः निर्भरता बढ़ाना",
        "वन्यजीव क्षेत्रों का वाणिज्यिक रूपांतरण",
        "उपर्युक्त में से कोई नहीं"
      ],
      ans: 0,
      exp: `${monthName} 2026 के राष्ट्रीय परिदृश्य के अनुसार, भारत की दीर्घकालिक रणनीति शून्य शुद्ध कार्बन (Net Zero) उत्सर्जन और नवीकरणीय ऊर्जा अवसंरचना के संवर्धन पर केंद्रित है।`
    }
  ];
}

// 12 Months Data Builder for 2026
const MONTHS_2026 = [
  { id: "jan_2026", name: "January 2026", icon: "❄️" },
  { id: "feb_2026", name: "February 2026", icon: "🏛️" },
  { id: "mar_2026", name: "March 2026", icon: "🌱" },
  { id: "apr_2026", name: "April 2026", icon: "☀️" },
  { id: "may_2026", name: "May 2026", icon: "🔥" },
  { id: "jun_2026", name: "June 2026", icon: "🌧️" },
  { id: "jul_2026", name: "July 2026", icon: "⚡" },
  { id: "aug_2026", name: "August 2026", icon: "🇮🇳" },
  { id: "sep_2026", name: "September 2026", icon: "📚" },
  { id: "oct_2026", name: "October 2026", icon: "🪔" },
  { id: "nov_2026", name: "November 2026", icon: "🌾" },
  { id: "dec_2026", name: "December 2026", icon: "🎯" }
];

const caSubjects2026 = MONTHS_2026.map(m => ({
  id: m.id,
  name: `${m.name} - Current Affairs Round-up`,
  icon: m.icon,
  tests: [
    {
      id: `${m.id}_t1`,
      title: `${m.name} Mock Test 01`,
      desc: `High-yield national, international and state current events of ${m.name}`,
      timeMins: 15,
      data: createMonthlyCaQuestion(m.name)
    }
  ]
}));

// MASTER EXAM, SUBJECTS & PYQ DATA
var EXAMS_DATA = {
  // 1. UPSC CSE
  upsc: {
    id: "upsc",
    name: "UPSC CSE",
    title: "UPSC Civil Services Examination",
    desc: "General Studies Prelims • Negative Marking: 1/3 (-0.66)",
    penaltyText: "Negative Penalty: 1/3rd (-0.66)",
    correctMarks: 2.0,
    negativePenalty: 0.66,
    subjects: [
      {
        id: "env_eco",
        name: "Environment & Ecology (पर्यावरण एवं पारिस्थितिकी)",
        icon: "🌱",
        tests: [
          {
            id: "t1",
            title: "Environment Test 1: Biodiversity, Ramsar & Wildlife Acts",
            desc: "UPSC Standard Conceptual & Legislative Questions",
            timeMins: 20,
            data: SAMPLE_ENV_T1
          }
        ]
      },
      {
        id: "int_org",
        name: "International Organizations (अंतर्राष्ट्रीय संगठन)",
        icon: "🌐",
        tests: [
          {
            id: "t1",
            title: "Intl Org Test 1: UN Bodies, Bretton Woods, Treaties & Summits",
            desc: "High-Priority Treaties & Geopolitical Groupings",
            timeMins: 15,
            data: SAMPLE_INT_ORG_T1
          }
        ]
      },
      {
        id: "polity",
        name: "Indian Polity & Governance",
        icon: "⚖️",
        tests: [
          {
            id: "t1",
            title: "Polity Test 1: Preamble & Constitutional Framework",
            desc: "High-Yield Questions with Deep Analysis",
            timeMins: 15,
            data: UPSC_POLITY_T1
          }
        ]
      },
      {
        id: "history",
        name: "History of India & INM",
        icon: "📜",
        tests: [
          {
            id: "t1",
            title: "History Test 1: Ancient, Medieval & Modern India",
            desc: "Standard Conceptual Questions",
            timeMins: 15,
            data: SAMPLE_HISTORY_T1
          }
        ]
      },
      {
        id: "geography",
        name: "Indian & World Geography",
        icon: "🌍",
        tests: [
          {
            id: "t1",
            title: "Geography Test 1: Physical & Political Geography",
            desc: "Map based and conceptual mock test",
            timeMins: 15,
            data: SAMPLE_GEOGRAPHY_T1
          }
        ]
      },
      {
        id: "science",
        name: "General Science & Tech",
        icon: "🔬",
        tests: [
          {
            id: "t1",
            title: "Science Test 1: Applied Science & Emerging Tech",
            desc: "UPSC Prelims Standard Questions",
            timeMins: 15,
            data: SAMPLE_SCIENCE_T1
          }
        ]
      },
      {
        id: "economy",
        name: "Indian Economy & Social Development",
        icon: "📈",
        tests: [
          {
            id: "t1",
            title: "Economy Test 1: Macroeconomics & Budget Concepts",
            desc: "High-yield Economy Questions",
            timeMins: 15,
            data: SAMPLE_ECONOMY_T1
          }
        ]
      }
    ]
  },

  // 2. BPSC CCE
  bpsc: {
    id: "bpsc",
    name: "BPSC CCE",
    title: "Bihar Public Service Commission (CCE)",
    desc: "General Studies Prelims • Negative Marking: 1/3 (-0.33)",
    penaltyText: "Negative Penalty: 1/3rd (-0.33)",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    subjects: [
      {
        id: "bihar_special",
        name: "Bihar Special (इतिहास, भूगोल व राजव्यवस्था)",
        icon: "🎯",
        tests: [
          {
            id: "t1",
            title: "Bihar Special Test 1: History, Geography & Schemes",
            desc: "Targeted Mock for BPSC 71st/72nd CCE",
            timeMins: 20,
            data: SAMPLE_BIHAR_SPECIAL_T1
          }
        ]
      },
      {
        id: "env_eco_bpsc",
        name: "Environment & Ecology (पर्यावरण एवं पारिस्थितिकी)",
        icon: "🌱",
        tests: [
          {
            id: "t1",
            title: "Environment Test 1: Ecology & Forest Reports",
            desc: "ISFR & National Environmental Issues",
            timeMins: 15,
            data: SAMPLE_ENV_T1
          }
        ]
      },
      {
        id: "int_org_bpsc",
        name: "International Organizations & Treaties",
        icon: "🌐",
        tests: [
          {
            id: "t1",
            title: "Intl Org Test 1: Multilateral Summits & Headquarters",
            desc: "Standard Facts for BPSC Prelims",
            timeMins: 15,
            data: SAMPLE_INT_ORG_T1
          }
        ]
      },
      {
        id: "polity",
        name: "Indian Polity & Constitution",
        icon: "🏛️",
        tests: [
          {
            id: "t1",
            title: "Polity Test 1: Preamble, Thinkers & Articles",
            desc: "Standard Questions with Detailed Solutions",
            timeMins: 20,
            data: BPSC_POLITY_T1
          }
        ]
      },
      {
        id: "history",
        name: "Indian History (प्राचीन, मध्यकालीन, आधुनिक)",
        icon: "📜",
        tests: [
          {
            id: "t1",
            title: "History Test 1: Comprehensive History Mock",
            desc: "Targeted questions for BPSC Prelims",
            timeMins: 15,
            data: SAMPLE_HISTORY_T1
          }
        ]
      },
      {
        id: "geography",
        name: "Geography (भारत एवं विश्व का भूगोल)",
        icon: "🗺️",
        tests: [
          {
            id: "t1",
            title: "Geography Test 1: Indian & Physical Geography",
            desc: "NCERT & Standard Reference Questions",
            timeMins: 15,
            data: SAMPLE_GEOGRAPHY_T1
          }
        ]
      },
      {
        id: "science",
        name: "General Science (भौतिक, रसायन व जीव विज्ञान)",
        icon: "🧪",
        tests: [
          {
            id: "t1",
            title: "General Science Test 1: Complete Science Mock",
            desc: "High-scoring 30-mark section for BPSC",
            timeMins: 15,
            data: SAMPLE_SCIENCE_T1
          }
        ]
      },
      {
        id: "economy",
        name: "Indian & Bihar Economy",
        icon: "📊",
        tests: [
          {
            id: "t1",
            title: "Economy Test 1: Bihar Economic Survey & Budget Basics",
            desc: "Standard Exam Questions",
            timeMins: 15,
            data: SAMPLE_ECONOMY_T1
          }
        ]
      }
    ]
  },

  // 3. UGC NET / JRF
  ugc: {
    id: "ugc",
    name: "UGC NET / JRF",
    title: "UGC NET / JRF Political Science & Paper 1",
    desc: "NTA Pattern • No Negative Marking",
    penaltyText: "No Negative Marking",
    correctMarks: 2.0,
    negativePenalty: 0.0,
    subjects: [
      {
        id: "polity",
        name: "Political Theory, Thought & Institutions",
        icon: "🎓",
        tests: [
          {
            id: "t1",
            title: "Test 1: Constitutionalism & Political Thinkers",
            desc: "Conceptual Level Questions with Academic References",
            timeMins: 20,
            data: UPSC_POLITY_T1
          }
        ]
      }
    ]
  },

  // 4. CURRENT AFFAIRS (JANUARY 2026 TO DECEMBER 2026)
  ca: {
    id: "ca",
    name: "Current Affairs 2026",
    title: "Year 2026 Monthly Current Affairs Bank",
    desc: "Complete Month-wise Coverage from January 2026 to December 2026",
    penaltyText: "Negative Penalty: 1/3rd (-0.33)",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    subjects: caSubjects2026
  },

  // 5. PREVIOUS YEAR PAPERS (PYQ ARCHIVES)
  pyq: {
    id: "pyq",
    name: "PYQ Archives",
    title: "Official Previous Years Questions Bank",
    desc: "Authentic PYQs with In-Depth Solutions: UPSC, BPSC & SSC",
    penaltyText: "Exam Specific Marking",
    correctMarks: 2.0,
    negativePenalty: 0.66,
    subjects: [
      {
        id: "upsc_pyq",
        name: "UPSC Civil Services Prelims PYQ",
        icon: "🏛️",
        tests: [
          {
            id: "t1",
            title: "UPSC CSE Prelims Official PYQ Set 1",
            desc: "Authentic Questions with Deep Analysis & Answer Key",
            timeMins: 20,
            data: SAMPLE_UPSC_PYQ
          }
        ]
      },
      {
        id: "bpsc_pyq",
        name: "BPSC CCE Prelims Official PYQ",
        icon: "🎯",
        tests: [
          {
            id: "t1",
            title: "BPSC CCE Prelims Official PYQ Set 1",
            desc: "Authentic Questions from
