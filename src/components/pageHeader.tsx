import styles from 'styles/components/pageHeader.module.scss';
import { FunctionComponent } from 'react';
import Link from 'next/link';

export const PageHeader: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <div className={`${styles.navElement} ${styles.logo}`}>
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <ul className={`${styles.navElement} ${styles.navLinks}`}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#showcase">Showcase</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#team">Team</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="#docs">Docs</Link>
          </li>
          <li>
            <Link href="#github">GitHub</Link>
          </li>
          <li>
            <Link href="#discord">Discord</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
