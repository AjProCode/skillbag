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
    title: "Skillbag Rubik's Cube Course",
    image:
      "https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnViaWNzJTIwY3ViZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    studentCount: 1250,
    duration: "8 weeks",
    isPopular: true,
    teacherName: "Skillbag Certified Coach",
    description:
      "Learn spatial pattern recognition, analytical finger tricks, and speed-solving algorithms in an engaging, interactive live online class environment.",
    level: "3*3",
    lessons: "6 live sessions",
    format: "Live online classes + interactive practice drills",
    outcomes: [
      "Solve the 3x3 cube confidently from scratch",
      "Master standard core layer algorithms",
      "Improve mental focus and calculation speed",
    ],
  },
  {
    title: "Skillbag Public Speaking Classes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgYL6hkaqZfnV17aVX49ynfSY-tjOjUNRS74RjXYehQ&s=10",
    rating: 4.8,
    studentCount: 890,
    duration: "4 weeks",
    isNewBatch: true,
    teacherName: "Skillbag Speech Trainer",
    description:
      "Build real speaking confidence for presentations, conversations, and public scenarios through live interaction and constructive feedback loop exercises.",
    level: "Beginner",
    lessons: "12 live sessions",
    format: "Live online coaching + active video feedback",
    outcomes: [
      "Speak with real clarity and projection",
      "Overcome acute stage fear",
      "Structure thoughts systematically for short talks",
    ],
  },
  {
    title: "Skillbag Creative Writing Workshop",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 670,
    duration: "10 weeks",
    teacherName: "Skillbag Writing Instructor",
    description:
      "Explore story mechanics, character formatting, and vocabulary enhancement through creative writing templates and active student prompt critiques.",
    level: "Intermediate",
    lessons: "20 live sessions",
    format: "Live online workshop classes",
    outcomes: [
      "Write clear, engaging short stories",
      "Develop a unique descriptive voice",
      "Edit and proofread drafts with confidence",
    ],
  },
  {
    title: "Skillbag Conversational Skills Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50JUE6Ku_XgKSmp6YS8Uihv3fqro9mozbSL09e6798A&s=10",
    rating: 4.8,
    studentCount: 970,
    duration: "6 weeks",
    isNewBatch: true,
    teacherName: "Skillbag Fluency Coach",
    description:
      "Strengthen practical everyday communication and dialogue confidence using structured small-group speaking exercises and regular peer simulations.",
    level: "Beginner to Intermediate",
    lessons: "12 live sessions",
    format: "Small-group interactive speaking sessions",
    outcomes: [
      "Speak English more naturally in daily scenarios",
      "Reduce sentence-forming pauses",
      "Gain real-time interactive confidence",
    ],
  },
  {
    title: "Skillbag Chess Course",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 1320,
    duration: "10 weeks",
    isPopular: true,
    teacherName: "Skillbag Chess Mentor",
    description:
      "Master fundamental opening principles, tactical motifs (pins, forks), and endgame tracking patterns through guided board review sessions.",
    level: "Beginner to Advanced",
    lessons: "20 live sessions",
    format: "Live interactive coaching + game analysis",
    outcomes: [
      "Analyze positions and calculate moves ahead",
      "Improve strategic decision-making parameters",
      "Play matches with tactical confidence",
    ],
  },
  {
    title: "Skillbag Abacus Online Classes",
    image:
      "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 810,
    duration: "8 weeks",
    teacherName: "Skillbag Math Expert",
    description:
      "Boost your child's memory, visualization, arithmetic speed, and overall analytical focus through real-time soroban bead calculation techniques.",
    level: "Children",
    lessons: "16 live sessions",
    format: "Interactive guided calculation sessions",
    outcomes: [
      "Execute multi-digit calculations with high speed",
      "Sharpen visual focus and listening accuracy",
      "Build a positive interest in mental arithmetic",
    ],
  },
  {
    title: "Skillbag Tips for Speaking English Fluently",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    studentCount: 520,
    duration: "4 weeks",
    teacherName: "Skillbag Language Coach",
    description:
      "Practice vital functional grammar frameworks, pronunciation tips, and delivery mechanics designed to clean up your daily spoken English sentences.",
    level: "Beginner",
    lessons: "8 live sessions",
    format: "Focused language structure coaching",
    outcomes: [
      "Apply grammar and tense rules naturally when speaking",
      "Construct accurate daily responses clearly",
      "Minimize hesitation and grammatical errors",
    ],
  },
  {
    title: "Skillbag English Enhancement Course",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 1100,
    duration: "12 weeks",
    isPopular: true,
    teacherName: "Skillbag Literacy Trainer",
    description:
      "An integrated literacy framework matching structured comprehension reading drills, active vocabulary growth, and basic writing mechanics for progress.",
    level: "All levels",
    lessons: "24 live sessions",
    format: "Live sessions + comprehensive worksheets",
    outcomes: [
      "Enhance paragraph comprehension and reading speed",
      "Express thoughts clearly in written assignments",
      "Expand functional vocabulary usage base",
    ],
  },
  {
    title: "Skillbag Newspaper Reading & Book Club",
    image:
      "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    studentCount: 680,
    duration: "6 weeks",
    teacherName: "Skillbag Discussion Leader",
    description:
      "Analyze currents events, review stories, and break down textual vocabulary trends in a highly relaxed, conversation-driven group forum.",
    level: "All levels",
    lessons: "12 live sessions",
    format: "Socratic discussion-based sessions",
    outcomes: [
      "Enhance critical thinking and textual synthesis",
      "Build deep reading consistency routines",
      "Present individual critiques comfortably",
    ],
  },
  {
    title: "Skillbag English Handwriting Online Classes",
    image:
      "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 540,
    duration: "5 weeks",
    teacherName: "Skillbag Script Expert",
    description:
      "Improve script neatness, letter loop connections, line sizing, and ergonomic tool balance through step-by-step visual demonstration drills.",
    level: "Beginner",
    lessons: "10 live sessions",
    format: "Practice-focused interactive classes",
    outcomes: [
      "Form cleaner, much more uniform letters",
      "Maintain straight line orientation consistently",
      "Write smoothly without early finger cramp fatigue",
    ],
  },
  {
    title: "Skillbag Hindi Handwriting Class",
    image:
      "https://i.ytimg.com/vi/VZaniIv0UTI/maxresdefault.jpg",
    rating: 4.7,
    studentCount: 460,
    duration: "5 weeks",
    teacherName: "Skillbag Devanagari Tutor",
    description:
      "Learn accurate Devanagari geometric strokes, correct loop formations, and clean upper-alignment line (Shirorekha) structuring techniques.",
    level: "Beginner",
    lessons: "10 live sessions",
    format: "Stroke-by-stroke practical design workshops",
    outcomes: [
      "Refine basic character curves and letter balance",
      "Draw uniform and consistent top Shirorekha lines",
      "Enhance legibility and pacing speeds together",
    ],
  },
  {
    title: "Skillbag Guitar Course",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 940,
    duration: "10 weeks",
    isPopular: true,
    teacherName: "Skillbag Music Instructor",
    description:
      "Learn chord fingerings, scale runs, structural strumming counts, and standard guitar tabs comfortably under expert guidance.",
    level: "Beginner",
    lessons: "20 live sessions",
    format: "Live online lessons + play-along streams",
    outcomes: [
      "Transition smoothly between core beginner chords",
      "Execute accurate rhythmic strumming counts",
      "Read and play basic melodies via chord tabs",
    ],
  },
  {
    title: "Skillbag Keyboard Sessions",
    image:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 720,
    duration: "8 weeks",
    teacherName: "Skillbag Keyboard Coach",
    description:
      "Gain a solid structural base in key signatures, hand posture scales, and single-hand melodies inside an encouraging digital room.",
    level: "Beginner",
    lessons: "16 live sessions",
    format: "Live overhead-view keyboard lessons",
    outcomes: [
      "Play clean multi-note introductory melodies",
      "Adopt proper ergonomic hand and finger seating",
      "Track simple song patterns with correct timing",
    ],
  },
  {
    title: "Skillbag Robotics Classes for Kids",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 580,
    duration: "6 weeks",
    isNewBatch: true,
    teacherName: "Skillbag STEM Specialist",
    description:
      "Ignite a passion for technology and innovation. Learn foundational block logic, mechanical structures, and systematic automation layouts.",
    level: "Children",
    lessons: "12 live sessions",
    format: "Live online STEM building labs",
    outcomes: [
      "Understand fundamental mechanical connection concepts",
      "Build simple automated functional layouts",
      "Develop core logical thinking and design loops",
    ],
  },
]
