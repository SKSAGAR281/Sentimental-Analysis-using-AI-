import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-current" size={16} />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}