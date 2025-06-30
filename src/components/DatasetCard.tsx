import React from 'react';
import { Database, Users, Calendar } from 'lucide-react';

interface DatasetCardProps {
  name: string;
  description: string;
  size: string;
  samples: string;
  year: string;
  type: string;
}

export default function DatasetCard({ name, description, size, samples, year, type }: DatasetCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-200">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
          {type}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <Database size={14} />
          <span>{size}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Users size={14} />
          <span>{samples}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Calendar size={14} />
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}