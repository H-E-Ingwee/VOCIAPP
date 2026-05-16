import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'About VOCI | Voice of Change Initiative, South Africa',
  description: 'Learn about VOCI\'s mission to equip emerging leaders, entrepreneurs, and advocates with communication and leadership skills across Africa.',
  keywords: 'Voice of Change Initiative, VOCI, leadership development South Africa, public speaking training, personal branding Africa',
  openGraph: {
    title: 'About VOCI | Voice of Change Initiative, South Africa',
    description: 'Learn about VOCI\'s mission to equip emerging leaders, entrepreneurs, and advocates with communication and leadership skills across Africa.',
    url: 'https://vociglobal.site/about',
  },
  alternates: {
    canonical: 'https://vociglobal.site/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <section className="py-5 bg-light-blue">
          <div className="container">
            <h1 className="text-voci-dark-blue mb-4">About VOCI</h1>
            <p className="lead">Voice of Change Initiative - Empowering Emerging Leaders Across Africa</p>
          </div>
        </section>
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="text-voci-dark-blue mb-3">Our Mission</h2>
            <p>VOCI is dedicated to equipping emerging leaders, entrepreneurs, and advocates with exceptional communication skills, authentic personal branding, and principled leadership capabilities.</p>
          </div>
        </section>
      </main>
    </div>
  );
  }