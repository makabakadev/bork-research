import { ResearchProjects } from '../components/research/ResearchProjects';
import { ResearchLabs } from '../components/research/ResearchLabs';
import { CollaborativeProjects } from '../components/research/CollaborativeProjects';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <div className="max-w-4xl mx-auto p-4 sm:p-8">
          <ResearchProjects />
          <ResearchLabs />
          <CollaborativeProjects />
        </div>
      </section>
    </div>
  );
}