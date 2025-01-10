import React from 'react';
import { TestTube2, Atom, Binary } from 'lucide-react';

export function ResearchLabs() {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold mb-6">Research Laboratories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 border-2 border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <TestTube2 className="w-6 h-6" />
            <h3 className="font-serif text-lg font-bold">Quantum BORK Lab</h3>
          </div>
          <p className="font-serif text-sm leading-relaxed">
            Specialized facility for quantum BORK experiments and theoretical research.
          </p>
        </div>

        <div className="bg-gray-50 p-6 border-2 border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Atom className="w-6 h-6" />
            <h3 className="font-serif text-lg font-bold">BORK Dynamics Lab</h3>
          </div>
          <p className="font-serif text-sm leading-relaxed">
            Advanced simulation and modeling of BORK particle interactions.
          </p>
        </div>

        <div className="bg-gray-50 p-6 border-2 border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Binary className="w-6 h-6" />
            <h3 className="font-serif text-lg font-bold">Digital BORK Lab</h3>
          </div>
          <p className="font-serif text-sm leading-relaxed">
            Computational research facility for blockchain BORK applications.
          </p>
        </div>
      </div>
    </section>
  );
}