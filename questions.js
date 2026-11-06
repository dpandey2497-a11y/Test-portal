// questions.js — All Exams, Subjects & Test Series Database

var UPSC_POLITY_T1 = [
  {
    q: "जवाहरलाल नेहरू द्वारा प्रस्तुत 'उद्देश्य प्रस्ताव' (Objectives Resolution) और उद्देशिका के विकास के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. जवाहरलाल नेहरू ने 13 दिसंबर, 1946 को संविधान सभा में उद्देश्य प्रस्ताव रखा, जिसे सभा ने 22 जनवरी, 1947 को सर्वसम्मति से स्वीकार किया।\n2. मूल उद्देश्य प्रस्ताव में अवशिष्ट शक्तियां केंद्र/संघ के पास रखने का प्रावधान था।\n3. संविधान सभा द्वारा प्रस्तावना को सबसे अंत में 17 अक्टूबर, 1949 को पारित किया गया।\n\nउपर्युक्त में से कौन-सा/से कथन सही है/हैं?",
    opts: ["केवल 1 और 2", "केवल 2 और 3", "केवल 1 और 3", "1, 2 और 3"],
    ans: 2,
    exp: "• कथन 1 सही है: 13 दिसंबर, 1946 को उद्देश्य प्रस्ताव रखा गया और 22 जनवरी, 1947 को स्वीकार हुआ।\n• कथन 2 गलत है: मूल प्रस्ताव में अवशिष्ट शक्तियां राज्यों/इकाइयों के पास रखने का प्रावधान था।\n• कथन 3 सही है।"
  },
  {
    q: "संविधान की प्रस्तावना में निहित 'संप्रभुता' (Sovereignty) के संदर्भ में कौन-सा कथन असत्य है?",
    opts: [
      "भारत किसी भी विदेशी क्षेत्र का अधिग्रहण कर सकता है।",
      "भारत की राष्ट्रमंडल सदस्यता उसकी संप्रभुता को कानूनी रूप से सीमित करती है।",
      "'हम भारत के लोग' लोकप्रिय संप्रभुता का प्रतीक है।",
      "भारत आंतरिक एवं बाह्य दोनों मामलों में पूर्ण स्वतंत्र है।"
    ],
    ans: 1,
    exp: "राष्ट्रमंडल (Commonwealth) की सदस्यता स्वैच्छिक है और यह भारत की संप्रभुता को तनिक भी सीमित नहीं करती।"
  }
];

var BPSC_POLITY_T1 = [
  {
    q: "प्रस्तावना को 'संविधान का परिचय-पत्र' (Identity Card of the Constitution) किसने कहा था?",
    opts: ["के.एम. मुंशी", "एन.ए. पालकीवाला", "अर्नेस्ट बार्कर", "डॉ. बी.आर. अंबेडकर"],
    ans: 1,
    exp: "प्रख्यात न्यायविद एन.ए. पालकीवाला ने प्रस्तावना को संविधान का परिचय-पत्र कहा था।"
  },
  {
    q: "प्रस्तावना को संविधान का 'कुंजी-स्वर' (Key-Note) किसने माना था?",
    opts: ["अर्नेस्ट बार्कर", "के.सी. व्हीयर", "आइवर जेनिंग्स", "अल्लादी कृष्णास्वामी अय्यर"],
    ans: 0,
    exp: "अंग्रेज राजनीतिशास्त्री सर अर्नेस्ट बार्कर ने प्रस्तावना को संविधान का 'कुंजी-स्वर' (Key-Note) कहा था।"
  }
];

var SAMPLE_HISTORY_T1 = [
  {
    q: "हड़प्पा सभ्यता के किस स्थल से 'गोदीबाड़ा' (Dockyard) के पुरातात्विक साक्ष्य मिले हैं?",
    opts: ["कालीबंगा", "लोथल", "धोलावीरा", "बनावली"],
    ans: 1,
    exp: "गुजरात के भोगावा नदी के तट पर स्थित लोथल से प्रसिद्ध गोदीबाड़ा (डॉकयार्ड) के साक्ष्य मिले हैं।"
  },
  {
    q: "बक्सर के ऐतिहासिक युद्ध (1764) में ब्रिटिश सेना का मुख्य सेनापति कौन था?",
    opts: ["रॉबर्ट क्लाइव", "हेक्टर मुनरो", "लॉर्ड हेस्टिंग्स", "वारेन हेस्टिंग्स"],
    ans: 1,
    exp: "22 अक्टूबर 1764 को हुए बक्सर के युद्ध में अंग्रेजी सेना का नेतृत्व मेजर हेक्टर मुनरो ने किया था।"
  }
];

var SAMPLE_GEOGRAPHY_T1 = [
  {
    q: "भारत की मानक समय रेखा (Standard Meridian) 82°30' E निम्नलिखित में से किस राज्य से होकर नहीं गुजरती है?",
    opts: ["उत्तर प्रदेश", "मध्य प्रदेश", "ओडिशा", "बिहार"],
    ans: 3,
    exp: "82°30' E रेखा 5 राज्यों से गुजरती है: उत्तर प्रदेश, मध्य प्रदेश, छत्तीसगढ़, ओडिशा और आंध्र प्रदेश। यह बिहार से होकर नहीं गुजरती।"
  }
];

var SAMPLE_SCIENCE_T1 = [
  {
    q: "प्रकाश वर्ष (Light Year) निम्नलिखित में से किस भौतिक राशि की इकाई है?",
    opts: ["समय", "दूरी", "प्रकाश की गति", "प्रकाश की तीव्रता"],
    ans: 1,
    exp: "प्रकाश वर्ष निर्वात में प्रकाश द्वारा एक वर्ष में तय की गई दूरी का मात्रक है (1 Light Year ≈ 9.46 × 10^15 m)।"
  }
];

var SAMPLE_ECONOMY_T1 = [
  {
    q: "भारत में 'राष्ट्रीय आय' (National Income) की गणना का मुख्य दायित्व किस संस्था पर है?",
    opts: ["नीति आयोग", "वित्त मंत्रालय", "राष्ट्रीय सांख्यिकी कार्यालय (NSO)", "भारतीय रिजर्व बैंक"],
    ans: 2,
    exp: "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI) के तहत राष्ट्रीय सांख्यिकी कार्यालय (NSO) राष्ट्रीय आय की गणना करता है।"
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

var SAMPLE_CURRENT_AFFAIRS_T1 = [
  {
    q: "हाल ही में चर्चा में रहा 'प्रोजेक्ट चीता' के तहत कूनो नेशनल पार्क के बाद किस नए अभयारण्य को चीतों के दूसरे घर के रूप में विकसित किया गया है?",
    opts: ["गांधी सागर वन्यजीव अभयारण्य", "नौरादेही अभयारण्य", "माधव राष्ट्रीय उद्यान", "बांधवगढ़"],
    ans: 0,
    exp: "मध्य प्रदेश के मंदसौर जिले में स्थित गांधी सागर वन्यजीव अभयारण्य को भारत में चीतों के लिए दूसरे आवास के रूप में तैयार किया गया है।"
  }
];

// MASTER EXAM & SUBJECTS DATA
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
            title: "History Test 1: Ancient & Modern India",
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
            title: "Science Test 1: General Science & Applied Tech",
            desc: "UPSC Prelims Standard Questions",
            timeMins: 15,
            data: SAMPLE_SCIENCE_T1
          }
        ]
      },
      {
        id: "economy",
        name: "Indian Economy & Development",
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
            title: "Bihar Special Test 1: History, Geography & Culture",
            desc: "Special Mock for BPSC 71st/72nd CCE",
            timeMins: 20,
            data: SAMPLE_BIHAR_SPECIAL_T1
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
            title: "Polity Test 1: Preamble, Thinkers & Political Theory",
            desc: "11 Standard Questions with Detailed Solutions",
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
            title: "History Test 1: Complete History Mock",
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
            title: "Geography Test 1: Indian Geography",
            desc: "NCERT & Standard Reference Questions",
            timeMins: 15,
            data: SAMPLE_GEOGRAPHY_T1
          }
        ]
      },
      {
        id: "science",
        name: "General Science (सामान्य विज्ञान)",
        icon: "🧪",
        tests: [
          {
            id: "t1",
            title: "General Science Test 1: Physics, Chem & Bio",
            desc: "High-scoring section for BPSC",
            timeMins: 15,
            data: SAMPLE_SCIENCE_T1
          }
        ]
      },
      {
        id: "economy",
        name: "Indian Economy (भारतीय अर्थव्यवस्था)",
        icon: "📊",
        tests: [
          {
            id: "t1",
            title: "Economy Test 1: Basics & Economic Survey",
            desc: "Standard Exam Questions",
            timeMins: 15,
            data: SAMPLE_ECONOMY_T1
          }
        ]
      }
    ]
  },
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
        name: "Political Theory & Thought",
        icon: "🎓",
        tests: [
          {
            id: "t1",
            title: "Test 1: Constitutionalism & Thinkers",
            desc: "Conceptual Level Questions with Academic References",
            timeMins: 20,
            data: UPSC_POLITY_T1
          }
        ]
      }
    ]
  },
  ca: {
    id: "ca",
    name: "Current Affairs",
    title: "National & International Current Affairs",
    desc: "Monthly, Weekly & Annual Roundups for Civil Services",
    penaltyText: "Standard Marking",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    subjects: [
      {
        id: "national_ca",
        name: "National & International Events",
        icon: "🌐",
        tests: [
          {
            id: "t1",
            title: "Current Affairs Test 1: Recent Developments",
            desc: "High-priority GK & Current Issues",
            timeMins: 15,
            data: SAMPLE_CURRENT_AFFAIRS_T1
          }
        ]
      },
      {
        id: "state_ca",
        name: "State Special Current Affairs (Bihar & Others)",
        icon: "📰",
        tests: [
          {
            id: "t1",
            title: "Bihar State Affairs Test 1: Key Schemes & Events",
            desc: "Special Coverage for BPSC",
            timeMins: 15,
            data: SAMPLE_BIHAR_SPECIAL_T1
          }
        ]
      }
    ]
  }
};
