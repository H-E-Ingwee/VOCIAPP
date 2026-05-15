import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import JoinForm from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join VOCI | Apply for Our Leadership Cohort Program',
  description: 'Ready to become a Voice of Change? Apply to join VOCI\'s cohort program and develop the communication and leadership skills to create real impact.',
  keywords: 'join VOCI, apply leadership cohort, public speaking program Africa, emerging leader application',
  openGraph: {
    title: 'Join VOCI | Apply for Our Leadership Cohort Program',
    description: 'Ready to become a Voice of Change? Apply to join VOCI\'s cohort program and develop the communication and leadership skills to create real impact.',
    url: 'https://vociglobal.site/join',
  },
  twitter: {
    title: 'Join VOCI | Apply for Our Leadership Cohort Program',
    description: 'Ready to become a Voice of Change? Apply to join VOCI\'s cohort program and develop the communication and leadership skills to create real impact.',
  },
  alternates: {
    canonical: 'https://vociglobal.site/join',
  },
};

export default function JoinPage() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <section className="py-5 bg-light-blue">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="text-voci-dark-blue">Join VOCI</h1>
              <p className="lead text-muted">Become a Voice of Change</p>
            </div>
            <JoinForm />
          </div>
        </section>
      </main>
    </div>
  );
}