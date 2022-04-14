import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  FormspreeForm,
  ShowcaseGrid,
  PricingGrid,
  ContributorGrid,
  DownloadSection,
  Section,
} from 'components';
import {
  discordServerUrl,
  developerEmailUrl,
  patreonUrl,
  githubUrl,
} from 'values';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TerraForge3D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section aria-labelledby="home-title" id="Home">
        <Image
          src={require('../../public/images/home.png')}
          layout="fill"
          alt="volcano"
        />
        <div className="overlay"></div>
        <div className="container">
          <div className="landing-hero">
            <div>
              <h1 id="home-title">
                TERRAIN GENERATION <span>FOR THE FUTURE</span>
              </h1>
              <p>Procedural terrain generation.</p>
              <p>Amazing, flexible, open source.</p>
              <div className="hero-flex-row">
                <a className="appBtn" href="#Downloads">
                  Download now
                </a>
                <a
                  className="appBtn"
                  target="_blank"
                  rel="noreferrer"
                  href={githubUrl}
                >
                  Star us on GitHub
                </a>
                <a
                  className="appBtn"
                  target="_blank"
                  rel="noreferrer"
                  href={discordServerUrl}
                >
                  Join us on Discord!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section name="Features" description="Description"></Section>

      <Section
        name="Showcase"
        description={
          <>
            Add images on our{' '}
            <Link href={discordServerUrl}>discord server</Link> or{' '}
            <Link href={developerEmailUrl}>email us</Link>
          </>
        }
      >
        <ShowcaseGrid />
      </Section>

      <Section
        name="Pricing"
        description={
          <>
            Check out more tiers <Link href={patreonUrl}>on patreon</Link>
          </>
        }
      >
        <PricingGrid />
      </Section>

      <Section name="Downloads" description="Description">
        <DownloadSection />
      </Section>

      <Section name="Contributors" description="Contributors">
        <ContributorGrid />
      </Section>

      <Section name="Contact us" id="Contact" description="Description">
        <FormspreeForm formID="mknyjgkz" classNames={['contactForm']} />
      </Section>
    </>
  );
};

export default Home;
