import styles from 'styles/components/pageHeader.module.scss';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { navLinks } from 'values';
import { NavLink } from 'components';

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
          {navLinks.map((navLink, index) => (
            <NavLink key={index} navLink={navLink} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
