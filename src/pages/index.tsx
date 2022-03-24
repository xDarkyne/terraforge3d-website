import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormspreeForm } from 'components';
import { showcases } from 'values';

const Home: NextPage = () => {
  const visibleShowcases = showcases.slice(0, 5);

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
      <section id="features">
        <div className="container"></div>
      </section>
      <section id="showcase">
        <div className="container">
          <h2>Showcase</h2>
          <p>Add images on discord</p>
          <ul className="showcase-grid">
            {visibleShowcases.map((showcase, index) => (
              <li key={index}>
                <Image
                  src={require(`../../public/images${showcase.imageUrl}`)}
                  alt="text"
                />
                <div>
                  <h3>{showcase.title}</h3>
                  <p>{showcase.description}</p>
                  <p>{showcase.author}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
