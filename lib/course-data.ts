export interface CourseItem {
  title: string
  image: string
  rating: number
  studentCount: number
  duration: string
  isPopular?: boolean
  isNewBatch?: boolean
  teacherName: string
  description: string
  level: string
  lessons: string
  format: string
  outcomes: string[]
}

export const courses: CourseItem[] = [
  {
    title: "Rubik's Cube",
    image:
      "https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 1250,
    duration: "8 weeks",
    isPopular: true,
    teacherName: "Dr. Sarah Chen",
    description:
      "Learn pattern recognition, memory strategies, and competition-ready techniques in a fun, fast-paced learning environment.",
    level: "Beginner to Advanced",
    lessons: "24 live sessions",
    format: "Live online + practice drills",
    outcomes: ["Solve the cube confidently", "Master common algorithms", "Improve focus and speed"],
  },
  {
    title: "Public Speaking",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 890,
    duration: "6 weeks",
    isNewBatch: true,
    teacherName: "James Miller",
    description:
      "Build confidence in presentations, interviews, and everyday conversations with practical speaking exercises.",
    level: "Beginner",
    lessons: "18 live sessions",
    format: "Live coaching + feedback",
    outcomes: ["Speak with clarity", "Handle stage fear", "Structure engaging talks"],
  },
  {
    title: "Creative Writing",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 670,
    duration: "10 weeks",
    teacherName: "Emily Watson",
    description:
      "Explore storytelling, character building, and vivid imagery through guided writing prompts and critiques.",
    level: "Intermediate",
    lessons: "20 live sessions",
    format: "Workshop-based classes",
    outcomes: ["Write compelling stories", "Develop your voice", "Edit with confidence"],
  },
  {
    title: "Dance",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 1580,
    duration: "12 weeks",
    isPopular: true,
    teacherName: "Maria Santos",
    description:
      "Enjoy rhythm, movement, and confidence-building choreography in a supportive and energetic class.",
    level: "All levels",
    lessons: "30 live sessions",
    format: "Live classes + practice videos",
    outcomes: ["Improve coordination", "Learn choreography", "Stay active and expressive"],
  },
  {
    title: "Music",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    studentCount: 420,
    duration: "8 weeks",
    isNewBatch: true,
    teacherName: "David Kim",
    description:
      "Discover rhythm, melody, and performance skills through simple exercises and guided practice sessions.",
    level: "Beginner",
    lessons: "16 live sessions",
    format: "Interactive lessons",
    outcomes: ["Read basic rhythms", "Build listening skills", "Perform with confidence"],
  },
  {
    title: "Conversation Classes",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 970,
    duration: "6 weeks",
    isNewBatch: true,
    teacherName: "Ananya Patel",
    description:
      "Strengthen everyday speaking, listening, and confidence through engaging conversation practice.",
    level: "Beginner to Intermediate",
    lessons: "12 live sessions",
    format: "Small-group speaking sessions",
    outcomes: ["Speak more naturally", "Improve fluency", "Gain conversation confidence"],
  },
  {
    title: "Chess",
    image:
      "https://images.unsplash.com/photo-1516687400790-8672c4e4e6cc?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 1320,
    duration: "10 weeks",
    isPopular: true,
    teacherName: "Arjun Singh",
    description:
      "Master opening ideas, tactical patterns, and endgame awareness through guided practice and game reviews.",
    level: "Beginner to Advanced",
    lessons: "20 live sessions",
    format: "Live coaching + strategy games",
    outcomes: ["Think ahead tactically", "Improve decision-making", "Play with confidence"],
  },
  {
    title: "Abacus",
    image:
      "https://images.unsplash.com/photo-1587019150335-c5740bff790a?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 810,
    duration: "8 weeks",
    teacherName: "Meera Joshi",
    description:
      "Develop mental math and concentration with structured abacus practice and problem-solving drills.",
    level: "Children",
    lessons: "16 live sessions",
    format: "Interactive guided practice",
    outcomes: ["Speed up mental calculation", "Sharpen focus", "Enjoy math learning"],
  },
  {
    title: "Tenses",
    image:
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    studentCount: 520,
    duration: "4 weeks",
    teacherName: "Rohit Sharma",
    description:
      "Practice essential grammar patterns in a simple and practical way that makes everyday English easier.",
    level: "Beginner",
    lessons: "8 live sessions",
    format: "Focused grammar coaching",
    outcomes: ["Use tenses correctly", "Speak more accurately", "Build grammar confidence"],
  },
  {
    title: "English",
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 1100,
    duration: "12 weeks",
    isPopular: true,
    teacherName: "Sophia Lee",
    description:
      "Strengthen reading, writing, and comprehension with engaging lessons designed for steady progress.",
    level: "All levels",
    lessons: "24 live sessions",
    format: "Live lessons + worksheets",
    outcomes: ["Improve reading fluency", "Write clearly", "Boost confidence"],
  },
  {
    title: "Book Club",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    studentCount: 680,
    duration: "6 weeks",
    teacherName: "Priya Kapoor",
    description:
      "Discuss inspiring books, build literary insight, and enjoy meaningful conversations in a relaxed setting.",
    level: "All levels",
    lessons: "12 live sessions",
    format: "Discussion-based sessions",
    outcomes: ["Improve critical thinking", "Enjoy reading more", "Share ideas confidently"],
  },
  {
    title: "English Handwriting",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 540,
    duration: "5 weeks",
    teacherName: "Anjali Verma",
    description:
      "Refine handwriting, letter formation, and neat presentation with simple daily practice strategies.",
    level: "Beginner",
    lessons: "10 live sessions",
    format: "Practice-focused classes",
    outcomes: ["Write more neatly", "Improve consistency", "Build confidence"],
  },
  {
    title: "Hindi Handwriting",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 460,
    duration: "5 weeks",
    teacherName: "Rajesh Kumar",
    description:
      "Learn clean and attractive Hindi handwriting with guided drills and personalized feedback.",
    level: "Beginner",
    lessons: "10 live sessions",
    format: "Practice-focused classes",
    outcomes: ["Improve letter formation", "Write more clearly", "Build speed"],
  },
  {
    title: "Guitar",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 940,
    duration: "10 weeks",
    isPopular: true,
    teacherName: "Nina Bose",
    description:
      "Start strumming chords, reading simple tabs, and playing your favorite tunes with confidence.",
    level: "Beginner",
    lessons: "20 live sessions",
    format: "Live lessons + play-along videos",
    outcomes: ["Learn beginner chords", "Play simple songs", "Boost musical confidence"],
  },
  {
    title: "Keyboard",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 720,
    duration: "8 weeks",
    teacherName: "Amit Desai",
    description:
      "Gain a strong foundation in rhythm, scales, and basic keyboard melodies in a friendly class setting.",
    level: "Beginner",
    lessons: "16 live sessions",
    format: "Live keyboard lessons",
    outcomes: ["Play simple melodies", "Learn hand positioning", "Improve timing"],
  },
  {
    title: "Baking",
    image:
      "https://images.unsplash.com/photo-1511688878352-1d2d6c35adf9?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 580,
    duration: "6 weeks",
    isNewBatch: true,
    teacherName: "Simran Mehta",
    description:
      "Create delicious bakes, learn simple techniques, and enjoy hands-on kitchen fun with expert guidance.",
    level: "All levels",
    lessons: "12 live sessions",
    format: "Hands-on guided lessons",
    outcomes: ["Bake confidently", "Learn kitchen basics", "Create tasty recipes"],
  },
]
