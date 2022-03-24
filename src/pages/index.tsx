import type { NextPage } from 'next';
import Head from 'next/head';
import { FormspreeForm } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TerraForge3D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home">
        <div className="overlay"></div>
        <div className="container">
          <div className="landing-hero">
            <div>
              <h1>
                TERRAIN GENERATION <span>FOR THE FUTURE</span>
              </h1>
              <p>
                procedural terrain generation. Amazing, flexible, open source.
              </p>
              <div className="hero-flex-row">
                <a className="appBtn" href="#">
                  Learn More
                </a>
                <a className="appBtn" href="#">
                  Star us on GitHub
                </a>
                <a className="appBtn" href="#">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container"></div>
      </section>
      <section id="contact">
        <div className="container">
          <FormspreeForm formID="mknyjgkz" />
        </div>
      </section>
    </>
  );
};

export default Home;
