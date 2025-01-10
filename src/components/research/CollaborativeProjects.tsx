import React from 'react';
import { Users } from 'lucide-react';

export function CollaborativeProjects() {
  return (
    <section>
      <h2 className="font-serif text-2xl font-bold mb-6">International Collaborations</h2>
      
      <div className="bg-gray-50 p-6 border-2 border-gray-800">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6" />
          <h3 className="font-serif text-lg font-bold">Global BORK Initiative</h3>
        </div>
        <div className="font-serif space-y-4">
          <p className="leading-relaxed">
            A worldwide collaboration of BORK researchers working to advance our 
            understanding of fundamental BORK principles.
          </p>
          <ul className="text-sm space-y-2">
            <li>• BORK University, Sweden</li>
            <li>• Institute of Advanced BORK, Switzerland</li>
            <li>• Royal BORK Academy, UK</li>
            <li>• International Center for BORK Studies, Japan</li>
          </ul>
        </div>
      </div>
    </section>
  );
}