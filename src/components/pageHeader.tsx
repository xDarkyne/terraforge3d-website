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
        <ul className={styles.navElement}>
          <li>
            <Link href="#home">home</Link>
          </li>
          <li>
            <Link href="#features">features</Link>
          </li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
          <li>
            <Link href="#pricing">pricing</Link>
          </li>
          <li>
            <Link href="#showcase">showcase</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
