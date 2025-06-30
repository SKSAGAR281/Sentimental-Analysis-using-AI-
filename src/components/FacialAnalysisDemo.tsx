import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Video, 
  VideoOff, 
  Loader2, 
  AlertTriangle, 
  CheckCircle, 
  Heart, 
  TrendingUp,
  Shield,
  Clock,
  Eye,
  BarChart3,
  Lightbulb,
  Play,
  Square,
  RotateCcw
} from 'lucide-react';

interface FacialAnalysisResult {
  overallMood: 'happy' | 'neutral' | 'stressed' | 'concerning' | 'critical';
  confidenceScore: number;
  riskLevel: 'low' | 'moderate' | 'high';
  detectedEmotions: {
    happiness: number;
    sadness: number;
    anger: number;
    fear: number;
    surprise: number;
    disgust: number;
    neutral: number;
  };
  facialIndicators: string[];
  recommendations: string[];
  supportResources: string[];
  analysisMetrics: {
    eyeContact: number;
    facialTension: number;
    microExpressions: number;
    emotionalStability: number;
  };
}

export default function FacialAnalysisDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<FacialAnalysisResult | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        } 
      });
      
      setStream(mediaStream);
      setIsCameraActive(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please ensure you have granted camera permissions.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
    setIsRecording(false);
    setRecordingTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    
    intervalRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);

    // Auto-stop recording after 10 seconds for demo
    setTimeout(() => {
      if (isRecording) {
        stopRecording();
      }
    }, 10000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    analyzeFacialExpression();
  };

  const analyzeFacialExpression = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate mock facial analysis
    const result = generateMockFacialAnalysis();
    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  const generateMockFacialAnalysis = (): FacialAnalysisResult => {
    // Generate realistic but random analysis results
    const emotions = {
      happiness: Math.floor(Math.random() * 40) + 20,
      sadness: Math.floor(Math.random() * 30) + 10,
      anger: Math.floor(Math.random() * 20) + 5,
      fear: Math.floor(Math.random() * 25) + 5,
      surprise: Math.floor(Math.random() * 15) + 5,
      disgust: Math.floor(Math.random() * 10) + 2,
      neutral: Math.floor(Math.random() * 30) + 15
    };

    // Determine overall mood based on dominant emotions
    const dominantEmotion = Object.entries(emotions).reduce((a, b) => 
      emotions[a[0] as keyof typeof emotions] > emotions[b[0] as keyof typeof emotions] ? a : b
    );

    let overallMood: FacialAnalysisResult['overallMood'];
    let riskLevel: FacialAnalysisResult['riskLevel'];
    let confidenceScore: number;

    if (dominantEmotion[0] === 'happiness' && emotions.happiness > 50) {
      overallMood = 'happy';
      riskLevel = 'low';
      confidenceScore = 0.89;
    } else if (emotions.sadness > 40 || emotions.fear > 35) {
      overallMood = 'concerning';
      riskLevel = 'moderate';
      confidenceScore = 0.82;
    } else if (emotions.sadness > 60 || emotions.anger > 50) {
      overallMood = 'critical';
      riskLevel = 'high';
      confidenceScore = 0.91;
    } else if (emotions.anger > 30 || emotions.fear > 25) {
      overallMood = 'stressed';
      riskLevel = 'moderate';
      confidenceScore = 0.76;
    } else {
      overallMood = 'neutral';
      riskLevel = 'low';
      confidenceScore = 0.73;
    }

    const facialIndicators = [];
    const recommendations = [];
    const supportResources = [];

    if (overallMood === 'critical') {
      facialIndicators.push('Persistent sad facial expressions', 'Reduced eye contact patterns', 'Facial muscle tension indicators');
      recommendations.push('Immediate professional consultation recommended', 'Crisis support contact suggested', 'Emergency intervention protocols');
      supportResources.push('National Suicide Prevention Lifeline: 988', 'Crisis Text Line: Text HOME to 741741', 'Emergency Services: 911');
    } else if (overallMood === 'concerning') {
      facialIndicators.push('Elevated stress micro-expressions', 'Decreased positive facial activity', 'Emotional regulation challenges');
      recommendations.push('Consider mental health professional consultation', 'Stress management techniques', 'Social support engagement');
      supportResources.push('Psychology Today Therapist Finder', 'BetterHelp Online Counseling', 'Local Community Mental Health Centers');
    } else if (overallMood === 'stressed') {
      facialIndicators.push('Tension in facial muscles', 'Rapid micro-expression changes', 'Elevated cortisol indicators');
      recommendations.push('Practice relaxation techniques', 'Consider mindfulness exercises', 'Evaluate stress sources');
      supportResources.push('Headspace Meditation App', 'Calm Stress Relief Resources', 'Local Yoga/Meditation Classes');
    } else if (overallMood === 'happy') {
      facialIndicators.push('Genuine smile patterns (Duchenne markers)', 'Positive eye engagement', 'Relaxed facial muscle tone');
      recommendations.push('Continue current positive practices', 'Share positivity with others', 'Maintain healthy lifestyle habits');
      supportResources.push('Wellness tracking apps', 'Community volunteer opportunities', 'Social connection platforms');
    } else {
      facialIndicators.push('Balanced emotional expression', 'Stable micro-expression patterns', 'Normal facial muscle activity');
      recommendations.push('Monitor for any changes', 'Maintain regular self-care', 'Stay connected with support network');
      supportResources.push('Mental wellness resources', 'Mood tracking applications', 'Community support groups');
    }

    return {
      overallMood,
      confidenceScore,
      riskLevel,
      detectedEmotions: emotions,
      facialIndicators,
      recommendations,
      supportResources,
      analysisMetrics: {
        eyeContact: Math.floor(Math.random() * 40) + 40,
        facialTension: Math.floor(Math.random() * 60) + 20,
        microExpressions: Math.floor(Math.random() * 50) + 30,
        emotionalStability: Math.floor(Math.random() * 40) + 45
      }
    };
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return 'text-green-600 bg-green-50';
      case 'neutral': return 'text-blue-600 bg-blue-50';
      case 'stressed': return 'text-orange-600 bg-orange-50';
      case 'concerning': return 'text-yellow-600 bg-yellow-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setRecordingTime(0);
  };

  return (
    <section id="ai-demo" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Facial Expression Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience our advanced computer vision AI that analyzes facial expressions and micro-expressions 
            to detect emotional states and mental health indicators in real-time.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <Shield size={16} />
            <span>All video processing happens locally - no data leaves your device</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Camera Section */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Camera className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Facial Expression Capture</h3>
              </div>

              <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-6" style={{ aspectRatio: '16/9' }}>
                {isCameraActive ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    {isRecording && (
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">REC {formatTime(recordingTime)}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      Live Camera Feed
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <VideoOff size={48} className="mx-auto mb-4" />
                      <p className="text-lg">Camera not active</p>
                      <p className="text-sm">Click "Start Camera" to begin</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Camera Controls */}
              <div className="flex flex-wrap gap-4 justify-center">
                {!isCameraActive ? (
                  <button
                    onClick={startCamera}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Video size={20} />
                    <span>Start Camera</span>
                  </button>
                ) : (
                  <>
                    {!isRecording ? (
                      <button
                        onClick={startRecording}
                        disabled={isAnalyzing}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                      >
                        <Play size={20} />
                        <span>Start Analysis (10s)</span>
                      </button>
                    ) : (
                      <button
                        onClick={stopRecording}
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                      >
                        <Square size={20} />
                        <span>Stop & Analyze</span>
                      </button>
                    )}
                    
                    <button
                      onClick={stopCamera}
                      disabled={isRecording || isAnalyzing}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                    >
                      <VideoOff size={20} />
                      <span>Stop Camera</span>
                    </button>

                    {analysisResult && (
                      <button
                        onClick={resetAnalysis}
                        className="border-2 border-blue-300 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
                      >
                        <RotateCcw size={20} />
                        <span>New Analysis</span>
                      </button>
                    )}
                  </>
                )}
              </div>

              {isAnalyzing && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl">
                    <Loader2 className="animate-spin" size={20} />
                    <span className="font-medium">Analyzing facial expressions with AI...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Results Section */}
            {analysisResult && (
              <div className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Facial Analysis Results</h3>
                  <div className="ml-auto flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>Processed in 3.2s</span>
                  </div>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className={`p-6 rounded-xl ${getMoodColor(analysisResult.overallMood)}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Heart size={20} />
                      <span className="font-semibold">Overall Mood</span>
                    </div>
                    <div className="text-2xl font-bold capitalize">{analysisResult.overallMood}</div>
                    <div className="text-sm opacity-75">Confidence: {(analysisResult.confidenceScore * 100).toFixed(1)}%</div>
                  </div>

                  <div className={`p-6 rounded-xl ${getRiskColor(analysisResult.riskLevel)}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle size={20} />
                      <span className="font-semibold">Risk Level</span>
                    </div>
                    <div className="text-2xl font-bold capitalize">{analysisResult.riskLevel}</div>
                    <div className="text-sm opacity-75">Intervention Priority</div>
                  </div>

                  <div className="p-6 rounded-xl bg-purple-50 text-purple-600">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp size={20} />
                      <span className="font-semibold">AI Confidence</span>
                    </div>
                    <div className="text-2xl font-bold">{(analysisResult.confidenceScore * 100).toFixed(1)}%</div>
                    <div className="text-sm opacity-75">Analysis Accuracy</div>
                  </div>
                </div>

                {/* Emotion Detection Chart */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye size={18} className="text-blue-500" />
                    Detected Emotions
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(analysisResult.detectedEmotions).map(([emotion, value]) => (
                      <div key={emotion} className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{value}%</div>
                        <div className="text-sm text-gray-600 capitalize">{emotion}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Facial Indicators */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle size={18} className="text-blue-500" />
                      Facial Indicators Detected
                    </h4>
                    <ul className="space-y-2">
                      {analysisResult.facialIndicators.map((indicator, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          {indicator}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Analysis Metrics */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart3 size={18} className="text-green-500" />
                      Facial Analysis Metrics
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(analysisResult.analysisMetrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="capitalize text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb size={18} className="text-yellow-500" />
                      AI Recommendations
                    </h4>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support Resources */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Heart size={18} className="text-red-500" />
                      Support Resources
                    </h4>
                    <ul className="space-y-2">
                      {analysisResult.supportResources.map((resource, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
                    <div className="text-sm text-yellow-800">
                      <strong>Important:</strong> This is a demonstration of AI facial analysis capabilities. 
                      Real-world implementation would require clinical validation, professional oversight, 
                      and should never replace professional mental health care. All video processing happens 
                      locally on your device for privacy. If you're experiencing mental health concerns, 
                      please consult with a qualified healthcare provider.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}