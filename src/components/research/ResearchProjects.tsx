import React from 'react';
import { Microscope, Dna, Cpu } from 'lucide-react';

export function ResearchProjects() {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold mb-6">Current Research Initiatives</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 border-2 border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Microscope className="w-6 h-6" />
            <h3 className="font-serif text-lg font-bold">Project BORK-α</h3>
          </div>
          <div className="font-serif space-y-3">
            <p className="leading-relaxed">
              Investigating the fundamental properties of BORK in quantum environments. 
              Current focus on BORK wave function collapse in multi-dimensional spaces.
            </p>
            <p className="text-sm text-gray-600">
              Principal Investigator: Dr. B. Bork
              <br />
              Funding: BORK Science Foundation
              <br />
              Timeline: 2024-2026
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 border-2 border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="w-6 h-6" />
            <h3 className="font-serif text-lg font-bold">The BORK Genome Project</h3>
          </div>
          <div className="font-serif space-y-3">
            <p className="leading-relaxed">
              Mapping the complete BORK genome sequence to understand its 
              implications for blockchain consensus mechanisms.
            </p>
            <p className="text-sm text-gray-600">
              Principal Investigator: Prof. H. von Borkenstein
              <br />
              Funding: International BORK Initiative
              <br />
              Timeline: 2024-2025
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 border-2 border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-6 h-6" />
            <h3 className="font-serif text-lg font-bold">Neural BORK Networks</h3>
          </div>
          <div className="font-serif space-y-3">
            <p className="leading-relaxed">
              Developing advanced AI models for BORK prediction and analysis using 
              deep learning architectures.
            </p>
            <p className="text-sm text-gray-600">
              Principal Investigator: Dr. R. Bork III
              <br />
              Funding: BORK AI Research Grant
              <br />
              Timeline: 2024-2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}