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
        <div className="container">
          <div className="landing-hero">
            <div>
              <h1>TERRAIN GENERATION FOR THE FUTURE</h1>
              <p>
                procedural terrain generation. Amazing, flexible, open source.
              </p>
              <a href="#">Learn More</a>
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
