import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  FormspreeForm,
  ShowcaseGrid,
  PricingGrid,
  ContributorGrid,
} from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TerraForge3D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section aria-labelledby="home-title" id="home">
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
                <a className="appBtn" href="#">
                  Download now
                </a>
                <a className="appBtn" href="#">
                  Star us on GitHub
                </a>
                <a className="appBtn" href="#">
                  Join us on Discord!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="features-title"
        id="features"
        className="section"
      >
        <div className="container">
          <h2 id="features-title">Features</h2>
        </div>
      </section>

      <section
        aria-labelledby="showcase-title"
        id="showcase"
        className="section"
      >
        <div className="container">
          <h2 id="showcase-title">Showcase</h2>
          <p>Add images on discord</p>
          <ShowcaseGrid />
        </div>
      </section>

      <section aria-labelledby="pricing-title" id="pricing" className="section">
        <div className="container">
          <h2 id="pricing-title">Pricing</h2>
          <PricingGrid />
        </div>
      </section>

      <section
        aria-labelledby="contributors-title"
        id="contributors"
        className="section"
      >
        <div className="container">
          <h2 id="contributors-title">Contributors</h2>
          <ContributorGrid />
        </div>
      </section>

      <section aria-labelledby="contact-title" id="contact" className="section">
        <div className="container">
          <h2 id="contact-title">Contact us</h2>
          <FormspreeForm formID="mknyjgkz" classNames={['contactForm']} />
        </div>
      </section>
    </>
  );
};

export default Home;
