// questions.js — Fresh & Clean Database (Ready for your new questions)

// Yahan aap apne naye tests define karenge (Jaise Test 1, Test 2 etc.)
var FRESH_TEST_TEMPLATE = [];

// MASTER EXAMS & SUBJECTS STRUCTURE
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
      { id: "polity", name: "Indian Polity & Governance", icon: "⚖️", tests: [] },
      { id: "history", name: "History of India & INM", icon: "📜", tests: [] },
      { id: "geography", name: "Indian & World Geography", icon: "🌍", tests: [] },
      { id: "env_eco", name: "Environment & Ecology (पर्यावरण एवं पारिस्थितिकी)", icon: "🌱", tests: [] },
      { id: "science", name: "General Science & Tech", icon: "🔬", tests: [] },
      { id: "economy", name: "Indian Economy & Development", icon: "📈", tests: [] },
      { id: "int_org", name: "International Organizations (अंतर्राष्ट्रीय संगठन)", icon: "🌐", tests: [] }
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
      { id: "bihar_special", name: "Bihar Special (इतिहास, भूगोल व राजव्यवस्था)", icon: "🎯", tests: [] },
      { id: "polity", name: "Indian Polity & Constitution", icon: "🏛️", tests: [] },
      { id: "history", name: "Indian History (प्राचीन, मध्यकालीन, आधुनिक)", icon: "📜", tests: [] },
      { id: "geography", name: "Geography (भारत एवं विश्व का भूगोल)", icon: "🗺️", tests: [] },
      { id: "env_eco_bpsc", name: "Environment & Ecology (पर्यावरण एवं पारिस्थितिकी)", icon: "🌱", tests: [] },
      { id: "science", name: "General Science (भौतिक, रसायन व जीव विज्ञान)", icon: "🧪", tests: [] },
      { id: "economy", name: "Indian & Bihar Economy", icon: "📊", tests: [] },
      { id: "int_org_bpsc", name: "International Organizations & Treaties", icon: "🌐", tests: [] }
    ]
  },

  // 3. UGC NET / JRF
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
      { id: "ugc_paper2", name: "Paper 2: Political Science (राजनीति विज्ञान)", icon: "🏛️", tests: [] }
    ]
  },

  // 4. CURRENT AFFAIRS 2026 (JANUARY TO DECEMBER)
  ca: {
    id: "ca",
    name: "Current Affairs 2026",
    title: "Year 2026 Monthly Current Affairs Bank",
    desc: "Complete Month-wise Coverage from January 2026 to December 2026",
    penaltyText: "Negative Penalty: 1/3rd (-0.33)",
    correctMarks: 1.0,
    negativePenalty: 0.33,
    subjects: [
      { id: "jan_2026", name: "January 2026 - Current Affairs", icon: "❄️", tests: [] },
      { id: "feb_2026", name: "February 2026 - Current Affairs", icon: "🏛️", tests: [] },
      { id: "mar_2026", name: "March 2026 - Current Affairs", icon: "🌱", tests: [] },
      { id: "apr_2026", name: "April 2026 - Current Affairs", icon: "☀️", tests: [] },
      { id: "may_2026", name: "May 2026 - Current Affairs", icon: "🔥", tests: [] },
      { id: "jun_2026", name: "June 2026 - Current Affairs", icon: "🌧️", tests: [] },
      { id: "jul_2026", name: "July 2026 - Current Affairs", icon: "⚡", tests: [] },
      { id: "aug_2026", name: "August 2026 - Current Affairs", icon: "🇮🇳", tests: [] },
      { id: "sep_2026", name: "September 2026 - Current Affairs", icon: "📚", tests: [] },
      { id: "oct_2026", name: "October 2026 - Current Affairs", icon: "🪔", tests: [] },
      { id: "nov_2026", name: "November 2026 - Current Affairs", icon: "🌾", tests: [] },
      { id: "dec_2026", name: "December 2026 - Current Affairs", icon: "🎯", tests: [] }
    ]
  },

  // 5. PYQ ARCHIVES
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
