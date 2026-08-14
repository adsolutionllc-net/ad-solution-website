import { useEffect, useRef } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { TalentAreas } from '@/components/TalentAreas';
// import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FeaturedJobs } from '@/components/FeaturedJobs';
import { EmployersCandidates } from '@/components/EmployersCandidates';
import { ClientNetwork } from '@/components/ClientNetwork';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTopOnNavigate } from '@/components/ScrollToTopOnNavigate';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAppNavigate } from '@/hooks/useAppNavigate';

import { OpeningsPage } from '@/pages/OpeningsPage';
import { SendResumePage } from '@/pages/SendResumePage';
import { RequestTalentPage } from '@/pages/RequestTalentPage';
import { JobDetailPage } from '@/pages/JobDetailPage';

import { allJobs } from '@/data/content';

import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { NotFoundPage } from '@/pages/NotFoundPage';


function HomePage() {
  const revealRef = useScrollReveal<HTMLDivElement>([]);
  const navigate = useAppNavigate();
  const location = useLocation();
  const pendingScroll = useRef<string | null>(null);

  // Support being navigated to "/" with a scrollTarget in location.state
  // (e.g. clicking "About" from another page navigates home then scrolls).
  useEffect(() => {
    const state = location.state as { scrollTarget?: string } | null;

    if (state?.scrollTarget) {
      pendingScroll.current = state.scrollTarget;
    }

    if (pendingScroll.current) {
      const hash = pendingScroll.current;
      pendingScroll.current = null;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector(hash);

          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }, [location]);

  return (
    <div ref={revealRef} className="min-h-screen bg-white">

      <Helmet>
        <title>AD Solution | US IT Recruitment & Staffing</title>

        <meta
          name="description"
          content="AD Solution connects skilled IT professionals with leading companies across the United States."
        />

        <link
          rel="canonical"
          href="https://adsolutionllc.net/"
        />
      </Helmet>

      <Header onNavigate={navigate} activePage="home" />

      <main>
        <Hero onNavigate={navigate} />
        <Stats />
        <About />
        <Services />
        <TalentAreas />
        <FeaturedJobs onNavigate={navigate} />
        <EmployersCandidates onNavigate={navigate} />
        <ClientNetwork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


function OpeningsRoute() {
  const navigate = useAppNavigate();

  return (
    <>
      <Helmet>
        <title>IT Job Openings | AD Solution</title>

        <meta
          name="description"
          content="Explore current IT job openings and career opportunities with AD Solution."
        />

        <link
          rel="canonical"
          href="https://adsolutionllc.net/openings"
        />
      </Helmet>

      <OpeningsPage onNavigate={navigate} />
    </>
  );
}


function JobDetailRoute() {
  const { jobId } = useParams();
  const navigate = useAppNavigate();
  const routerNavigate = useNavigate();

  const job = allJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">

        <h1 className="font-display text-2xl font-bold text-navy-900">
          Job not found
        </h1>

        <p className="text-navy-500">
          This opening may have been filled or the link is outdated.
        </p>

        <button
          type="button"
          onClick={() => routerNavigate('/openings')}
          className="btn-primary"
        >
          Browse all openings
        </button>

      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{job.title} | AD Solution</title>

        <meta
          name="description"
          content={`Apply for ${job.title} at AD Solution. Explore this IT career opportunity and apply today.`}
        />

        <link
          rel="canonical"
          href={`https://adsolutionllc.net/openings/${job.id}`}
        />
      </Helmet>

      <JobDetailPage
        job={job}
        onNavigate={navigate}
      />
    </>
  );
}


function ResumeRoute() {
  const navigate = useAppNavigate();

  return (
    <>
      <Helmet>
        <title>Submit Your Resume | AD Solution</title>

        <meta
          name="description"
          content="Submit your resume to AD Solution and connect with IT career opportunities across the United States."
        />

        <link
          rel="canonical"
          href="https://adsolutionllc.net/resume"
        />
      </Helmet>

      <SendResumePage onNavigate={navigate} />
    </>
  );
}


function RequestTalentRoute() {
  const navigate = useAppNavigate();

  return (
    <>
      <Helmet>
        <title>Request IT Talent | AD Solution</title>

        <meta
          name="description"
          content="Find qualified IT professionals for your organization with AD Solution's recruitment and staffing services."
        />

        <link
          rel="canonical"
          href="https://adsolutionllc.net/request-talent"
        />
      </Helmet>

      <RequestTalentPage onNavigate={navigate} />
    </>
  );
}


export default function App() {
  return (
    <>
      <ScrollToTopOnNavigate />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/openings"
          element={<OpeningsRoute />}
        />

        <Route
          path="/openings/:jobId"
          element={<JobDetailRoute />}
        />

        <Route
          path="/resume"
          element={<ResumeRoute />}
        />

        <Route
          path="/request-talent"
          element={<RequestTalentRoute />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>

      <WhatsAppButton />
    </>
  );
}