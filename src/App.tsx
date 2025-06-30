import React, { useState } from 'react';
import { 
  Brain, 
  Shield, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Lock, 
  Smartphone, 
  Globe, 
  Heart, 
  AlertTriangle,
  CheckCircle,
  Menu,
  X,
  Star,
  Database,
  Zap,
  Eye,
  UserCheck,
  Play,
  Camera
} from 'lucide-react';
import FeatureCard from './components/FeatureCard';
import StatCard from './components/StatCard';
import FacialAnalysisDemo from './components/FacialAnalysisDemo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Camera,
      title: "Facial Expression Analysis",
      description: "Advanced computer vision algorithms analyze facial expressions, micro-expressions, and emotional indicators to detect mental health patterns in real-time.",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "All facial analysis happens locally on your device. No video data is transmitted or stored, ensuring complete privacy and HIPAA compliance.",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: Eye,
      title: "Micro-Expression Detection",
      description: "Identifies subtle facial changes and micro-expressions that occur in milliseconds, revealing emotional states invisible to the human eye.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      icon: UserCheck,
      title: "Real-Time Assessment",
      description: "Provides instant emotional state analysis and mental health indicators through continuous facial expression monitoring during video calls or sessions.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Emotion Recognition",
      description: "Accurately identifies and quantifies seven core emotions (happiness, sadness, anger, fear, surprise, disgust, neutral) with clinical-grade precision.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Compassionate AI",
      description: "Designed with mental health professionals to ensure sensitive, empathetic responses that prioritize user wellbeing and provide appropriate support resources.",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600"
    }
  ];

  const scrollToDemo = () => {
    document.getElementById('ai-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Brain className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">MindBridge Analytics</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#ai-demo" className="text-gray-600 hover:text-blue-600 transition-colors">Try Demo</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#ai-demo" className="text-gray-600 hover:text-blue-600 transition-colors">Try Demo</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="fill-current" size={16} />
                <span>Award-Winning Computer Vision AI</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Mental Health Detection Through 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Facial Analysis</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                MindBridge Analytics uses advanced computer vision and facial expression analysis to detect early warning signs of mental health issues through real-time emotion recognition and micro-expression detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToDemo}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center gap-2"
                >
                  <Play size={20} />
                  <span>Try Live Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-500 ml-4">MindBridge Analysis</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-sm text-gray-700">Positive emotions detected: 78%</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="text-yellow-500" size={20} />
                    <span className="text-sm text-gray-700">Stress micro-expressions: 15%</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Camera className="text-blue-500" size={20} />
                    <span className="text-sm text-gray-700">Real-time facial analysis active</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard 
              number="94%" 
              label="Accuracy Rate" 
              description="In facial emotion recognition"
            />
            <StatCard 
              number="0.2s" 
              label="Analysis Speed" 
              description="Real-time emotion detection"
            />
            <StatCard 
              number="7" 
              label="Core Emotions" 
              description="Detected with precision"
            />
            <StatCard 
              number="100%" 
              label="Privacy Protected" 
              description="Local processing only"
            />
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <FacialAnalysisDemo />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Computer Vision for Mental Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge facial analysis platform combines multiple AI technologies to provide comprehensive, 
              privacy-first mental health analysis through real-time emotion recognition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Facial Analysis Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes facial expressions and micro-expressions to identify emotional states and mental health indicators, 
              all while maintaining complete privacy through local processing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Secure Video Capture</h3>
              <p className="text-gray-600 leading-relaxed">
                Video input from webcam or mobile camera is processed entirely on your device. No video data is transmitted 
                or stored, ensuring complete privacy and HIPAA compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Facial Expression Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced computer vision algorithms analyze facial landmarks, micro-expressions, and emotional indicators 
                to detect mental health patterns with 94% clinical accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Compassionate Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                When emotional distress is detected, the system provides gentle recommendations for resources, professional support, 
                or wellness activities, always prioritizing user autonomy and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Mental Health Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading healthcare institutions in using facial expression AI to detect mental health issues earlier, 
            prevent crises, and save lives through proactive intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToDemo}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center gap-2 justify-center"
            >
              <Play size={20} />
              <span>Try Live Demo</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <Brain className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">MindBridge Analytics</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming mental health care through AI-powered facial expression analysis and compassionate intervention.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MindBridge Analytics. All rights reserved. Empowering mental health through facial expression AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;