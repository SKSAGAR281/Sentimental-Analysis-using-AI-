import { 
  Leaf, 
  MessageCircle, 
  Recycle, 
  GraduationCap, 
  Hand 
} from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "CropGuard AI",
    subtitle: "Smart Crop Disease Detection System",
    description: "An AI-powered mobile application that helps farmers identify plant diseases instantly by taking photos of their crops, providing immediate treatment recommendations and preventing crop loss.",
    realWorldContext: "Farmers lose 20-40% of their crops annually due to diseases. Many small-scale farmers lack access to agricultural experts for timely diagnosis. This system democratizes expert knowledge, allowing farmers to get instant diagnoses using just their smartphones, potentially saving billions in crop losses worldwide.",
    datasets: [
      "PlantVillage Dataset (87K images, 25 plant species, 59 diseases)",
      "iPlant Collaborative Dataset (500K+ plant images)",
      "Kaggle Plant Disease Dataset (54K images, 14 species)",
      "CGIAR Plant Disease Database (agricultural focus)"
    ],
    judgeExplanation: "Imagine a farmer in rural areas who notices yellow spots on their tomato plants. Instead of waiting weeks to contact an agricultural expert, they simply take a photo with their phone. The AI instantly tells them it's 'Early Blight' and suggests organic treatments. This is like having a plant doctor in every farmer's pocket, helping feed the world by preventing crop diseases before they spread.",
    deployment: {
      mobile: true,
      web: true,
      description: "Deploy as a Progressive Web App (PWA) that works offline, with a mobile-first design. Use TensorFlow.js for in-browser inference, eliminating the need for constant internet connectivity. Farmers can download the app once and use it anywhere in their fields."
    },
    impact: "Could prevent $220 billion in annual global crop losses, improve food security for 800 million undernourished people, and increase farmer incomes by 25-40% through early disease detection and prevention.",
    difficulty: "Intermediate" as const,
    icon: Leaf,
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    tags: ["Computer Vision", "Agriculture", "Mobile AI", "Food Security"]
  },
  {
    id: 2,
    title: "MindBridge Analytics",
    subtitle: "AI Mental Health Conversation Analyzer",
    description: "A privacy-first AI system that analyzes text conversations (messages, journals, social media) to detect early warning signs of mental health issues and connects users with appropriate resources and support.",
    realWorldContext: "1 in 4 people worldwide suffer from mental health issues, but 70% don't receive adequate care due to stigma and lack of early detection. This system acts as an early warning system, analyzing communication patterns to identify when someone might need support, potentially preventing crises before they occur.",
    datasets: [
      "Reddit Mental Health Dataset (500K posts with depression/anxiety labels)",
      "Twitter Mental Health Dataset (Depression, Anxiety, Bipolar indicators)",
      "CLPsych Shared Task Dataset (Mental health classification)",
      "DAIC-WOZ Depression Database (clinical interviews with audio/text)"
    ],
    judgeExplanation: "Think of this as a caring friend who notices subtle changes in how you write or speak that might indicate you're struggling emotionally. The AI analyzes patterns in text - like using more negative words, shorter sentences, or expressing hopelessness - to gently suggest resources or check-ins. It's like having a mental health screener that works 24/7, helping catch problems early when they're easier to address.",
    deployment: {
      mobile: true,
      web: true,
      description: "Deploy as a secure web platform with end-to-end encryption. Integrate with messaging platforms via APIs, or provide a standalone journaling app. All processing happens on-device or in encrypted cloud environments to ensure privacy compliance with HIPAA and GDPR."
    },
    impact: "Could help identify mental health issues 6-12 months earlier than traditional methods, potentially preventing 50% of suicide attempts through early intervention, and reducing mental healthcare costs by $200 billion annually through preventive care.",
    difficulty: "Advanced" as const,
    icon: MessageCircle,
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    tags: ["NLP", "Mental Health", "Privacy-First", "Social Impact"]
  },
  {
    id: 3,
    title: "RecycleVision Pro",
    subtitle: "Smart Waste Classification System",
    description: "An AI-powered computer vision system for smart bins that automatically identifies and sorts recyclable materials, reducing contamination and increasing recycling efficiency in communities and businesses.",
    realWorldContext: "Only 9% of plastic waste is actually recycled, largely due to contamination when people put the wrong items in recycling bins. This system uses cameras and AI to automatically sort waste, eliminating human error and dramatically improving recycling rates while educating users about proper disposal.",
    datasets: [
      "TrashNet Dataset (2,527 images across 6 categories)",
      "Waste Classification Dataset (25K images, 30+ categories)",
      "TACO (Trash Annotations in Context) - 15K images",
      "Drinking Waste Classification Dataset (4K images, beverages focus)"
    ],
    judgeExplanation: "Picture a smart trash can that can 'see' what you're throwing away. When you toss something in, cameras identify if it's plastic, paper, glass, or contaminated waste. If you accidentally put a greasy pizza box in recycling, it automatically moves it to regular trash and shows you why on a screen. It's like having a recycling expert watching every piece of trash, ensuring only clean materials get recycled.",
    deployment: {
      mobile: false,
      web: true,
      description: "Deploy on IoT devices like Raspberry Pi with cameras for smart bins, plus a web dashboard for waste management companies to monitor contamination rates and efficiency. Real-time analytics help optimize collection routes and identify community education needs."
    },
    impact: "Could increase recycling rates from 35% to 85%, reduce recycling contamination by 90%, and save municipalities $3.5 billion annually in waste processing costs while significantly reducing environmental impact.",
    difficulty: "Intermediate" as const,
    icon: Recycle,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    tags: ["Computer Vision", "Environmental", "IoT", "Sustainability"]
  },
  {
    id: 4,
    title: "StudentSuccess Predictor",
    subtitle: "Predictive Student Success Platform",
    description: "An AI system that analyzes multiple student data points (attendance, assignment patterns, engagement metrics) to predict academic risk and recommend personalized interventions before students fall behind.",
    realWorldContext: "30% of students drop out of college, and many more struggle academically. Traditional identification happens too late - after grades are already poor. This system identifies at-risk students weeks or months earlier by analyzing behavioral patterns, allowing for timely interventions that could save educational careers.",
    datasets: [
      "Open University Learning Analytics Dataset (32K students, 22 courses)",
      "Educational Data Mining Competition Dataset (student performance)",
      "Kalboard 360 Student Performance Dataset (behavior & grades)",
      "Students Performance in Exams Dataset (demographic factors)"
    ],
    judgeExplanation: "Imagine if teachers could predict which students might struggle before they even take their first test. This AI watches patterns - like if a student suddenly stops participating in online discussions, submits assignments late, or their login patterns change. It's like having an educational GPS that warns 'student struggling ahead' and suggests alternate routes to success, like tutoring or study groups.",
    deployment: {
      mobile: true,
      web: true,
      description: "Deploy as a Learning Management System (LMS) integration with mobile apps for students and teachers. Provides dashboards for educators, push notifications for interventions, and gamified improvement plans for students. Works with existing systems like Canvas, Blackboard, or Moodle."
    },
    impact: "Could reduce dropout rates by 40%, improve graduation rates by 25%, and save the education system $15 billion annually while ensuring more students achieve their educational goals and career potential.",
    difficulty: "Intermediate" as const,
    icon: GraduationCap,
    gradient: "bg-gradient-to-br from-purple-500 to-violet-600",
    tags: ["Machine Learning", "Education", "Predictive Analytics", "Student Success"]
  },
  {
    id: 5,
    title: "SignSpeak AI",
    subtitle: "Real-time Sign Language Translator",
    description: "A computer vision AI system that translates sign language into text and speech in real-time, breaking down communication barriers for the deaf and hard-of-hearing community in everyday interactions.",
    realWorldContext: "Over 70 million deaf people worldwide use sign language, but less than 1% of hearing people understand it. This creates daily communication barriers in hospitals, schools, courts, and workplaces. Real-time translation technology could eliminate these barriers, making society more inclusive and accessible.",
    datasets: [
      "WLASL (American Sign Language Dataset) - 21K videos, 2K signs",
      "MS-ASL (Microsoft American Sign Language Dataset) - 25K videos",
      "INCLUDE Sign Language Dataset - 263K signs across multiple languages",
      "CSL (Chinese Sign Language) Dataset - 25K videos"
    ],
    judgeExplanation: "Think of this as Google Translate, but for sign language. When a deaf person signs, the camera watches their hand movements, facial expressions, and body language, then instantly converts it to spoken words or text on screen. It's like having a sign language interpreter available 24/7, helping deaf individuals communicate with anyone, anywhere - from ordering coffee to medical appointments.",
    deployment: {
      mobile: true,
      web: true,
      description: "Deploy as a mobile app using device cameras for real-time translation, with offline capabilities for basic signs. Web version for video calls and kiosks. Integrate with video conferencing platforms like Zoom for remote accessibility, and provide API access for healthcare and education institutions."
    },
    impact: "Could improve employment opportunities for 70 million deaf individuals, reduce communication barriers in healthcare (preventing medical errors), and advance digital inclusion while saving organizations billions in interpreter costs.",
    difficulty: "Advanced" as const,
    icon: Hand,
    gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    tags: ["Computer Vision", "Accessibility", "Real-time AI", "Social Impact"]
  }
];