import styles from 'styles/components/pageHeader.module.scss';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from 'values';
import { NavLink } from 'components';
import logo from '../../public/images/logo.png';

export const PageHeader: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <div className={`${styles.navElement} ${styles.logo}`}>
          <Link href="/">
            <a>
              <div className={styles.logoImageContainer}>
                <Image
                  className={styles.logoImage}
                  src={logo}
                  alt="TerraForge3D Logo"
                />
              </div>
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
