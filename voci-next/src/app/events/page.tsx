import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'VOCI Events & Workshops 2026 | Leadership Training South Africa',
  description: 'Discover upcoming VOCI workshops, speaker series, and community impact projects. Join Cohort 2 and start your leadership journey.',
  keywords: 'VOCI events, leadership workshops South Africa, speaker series Africa, emerging leaders training',
  openGraph: {
    title: 'VOCI Events & Workshops 2026 | Leadership Training South Africa',
    description: 'Discover upcoming VOCI workshops, speaker series, and community impact projects.',
    url: 'https://vociglobal.site/events',
  },
  alternates: {
    canonical: 'https://vociglobal.site/events',
  },
};

export default function EventsPage() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <section className="py-5 bg-light-blue">
          <div className="container">
            <h1 className="text-voci-dark-blue mb-4">Events & Workshops</h1>
            <p className="lead">Join Our 2026 Workshop Series</p>
          </div>
        </section>
        <section className="py-5 bg-white">
          <div className="container">
            <p>Upcoming events coming soon. Check back for the latest workshops and speaker series.</p>
          </div>
        </section>
      </main>
    </div>
  );
  }