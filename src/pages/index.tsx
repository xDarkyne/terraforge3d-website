import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormspreeForm } from 'components';
import { showcases } from 'values';
import { useState } from 'react';

const Home: NextPage = () => {
  const [visibleShowcases, setVisibleShowcases] = useState(
    showcases.length < 5
      ? showcases.slice(0, showcases.length - 1)
      : showcases.slice(0, 5)
  );
  const [canLoadMore, setCanLoadMore] = useState(
    visibleShowcases.length < showcases.length
  );
  const loadMore = () => {
    if (canLoadMore) {
      let nextIndex =
        showcases.length < 5
          ? showcases.length - 1
          : visibleShowcases.length + 4;
      let cases = [
        ...visibleShowcases,
        ...showcases.slice(visibleShowcases.length - 1, nextIndex),
      ];
      setVisibleShowcases(cases);
      setCanLoadMore(cases.length < showcases.length);
    }
  };

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
                  placeholder="blur"
                />
                <div>
                  <h3>{showcase.title}</h3>
                  <p>{showcase.description}</p>
                  <p>{showcase.author}</p>
                </div>
              </li>
            ))}
          </ul>
          {canLoadMore ? <button onClick={loadMore}>Load More</button> : <></>}
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2>Contact us</h2>
          <FormspreeForm formID="mknyjgkz" classNames={['contactForm']} />
        </div>
      </section>
    </>
  );
};

export default Home;
