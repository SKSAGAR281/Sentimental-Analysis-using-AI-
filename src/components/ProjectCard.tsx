import React, { useState } from 'react';
import { 
  ChevronRight, 
  Database, 
  Users, 
  Lightbulb, 
  Smartphone,
  Globe,
  Star,
  TrendingUp
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  realWorldContext: string;
  datasets: string[];
  judgeExplanation: string;
  deployment: {
    mobile: boolean;
    web: boolean;
    description: string;
  };
  impact: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ComponentType<any>;
  gradient: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = project.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header with gradient */}
      <div className={`${project.gradient} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 translate-x-8 -translate-y-8">
          <IconComponent size={128} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <IconComponent size={32} />
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)} bg-white bg-opacity-20 text-white`}>
              {project.difficulty}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm opacity-90">{project.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingUp size={16} className="text-blue-500" />
            <span>High Impact</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Database size={16} className="text-green-500" />
            <span>{project.datasets.length} Datasets</span>
          </div>
        </div>

        {/* Deployment Options */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-gray-700">Deploy to:</span>
          {project.deployment.mobile && (
            <div className="flex items-center gap-1 text-sm text-blue-600">
              <Smartphone size={16} />
              <span>Mobile</span>
            </div>
          )}
          {project.deployment.web && (
            <div className="flex items-center gap-1 text-sm text-purple-600">
              <Globe size={16} />
              <span>Web</span>
            </div>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
          <ChevronRight 
            size={16} 
            className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} 
          />
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-6">
            {/* Real-World Context */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={18} className="text-orange-500" />
                <h4 className="font-semibold text-gray-800">Real-World Application</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {project.realWorldContext}
              </p>
            </div>

            {/* Judge Explanation */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-blue-500" />
                <h4 className="font-semibold text-gray-800">For Non-Technical Judges</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {project.judgeExplanation}
              </p>
            </div>

            {/* Available Datasets */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Database size={18} className="text-green-500" />
                <h4 className="font-semibold text-gray-800">Available Datasets</h4>
              </div>
              <ul className="text-gray-600 text-sm space-y-1 pl-6">
                {project.datasets.map((dataset, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    {dataset}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Statement */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star size={18} className="text-purple-500" />
                <h4 className="font-semibold text-gray-800">Expected Impact</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {project.impact}
              </p>
            </div>

            {/* Deployment Details */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe size={18} className="text-indigo-500" />
                <h4 className="font-semibold text-gray-800">Deployment Strategy</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {project.deployment.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}