import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

export default function StatCard({ number, label, description }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}