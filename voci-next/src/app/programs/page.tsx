import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'VOCI Programs | Communication, Branding & Leadership Training',
  description: 'Explore VOCI\'s three-pillar curriculum: Effective Communication, Personal Branding, and Principled Leadership. Transformative training for students in South Africa.',
  keywords: 'communication training South Africa, branding workshops, leadership development students, VOCI programs, emerging leaders',
  openGraph: {
    title: 'VOCI Programs | Communication, Branding & Leadership Training',
    description: 'Explore VOCI\'s three-pillar curriculum: Effective Communication, Personal Branding, and Principled Leadership.',
    url: 'https://vociglobal.site/programs',
  },
  alternates: {
    canonical: 'https://vociglobal.site/programs',
  },
};

export default function ProgramsPage() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <section className="py-5 bg-light-blue">
          <div className="container">
            <h1 className="text-voci-dark-blue mb-4">Our Programs</h1>
            <p className="lead">Three Pillars of Excellence</p>
          </div>
        </section>
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-light-blue">
                  <div className="card-body">
                    <h3 className="card-title text-voci-red">Effective Communication</h3>
                    <p>Master the art of clear, impactful communication.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-light-blue">
                  <div className="card-body">
                    <h3 className="card-title text-voci-red">Personal Branding</h3>
                    <p>Build your authentic personal brand.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-light-blue">
                  <div className="card-body">
                    <h3 className="card-title text-voci-red">Principled Leadership</h3>
                    <p>Develop ethical leadership capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
  }