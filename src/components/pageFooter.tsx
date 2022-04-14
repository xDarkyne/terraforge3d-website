import styles from 'styles/components/pageFooter.module.scss';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { discordServerUrl, githubUrl, patreonUrl } from 'values';

export const PageFooter: FunctionComponent = () => {
  const year = new Date().getUTCFullYear();
  const urls = [
    { url: discordServerUrl, name: 'Discord' },
    { url: githubUrl, name: 'GitHub' },
    { url: patreonUrl, name: 'Patreon' },
  ];

  return (
    <footer className={styles.pageFooter}>
      <p>
        &copy;{year} TerraForge3D - Made with ❤️ by{' '}
        <Link href="https://darkyne.com">Darkyne</Link>
      </p>
      <ul className={styles.links}>
        {urls.map((url, index) => (
          <li key={index}>
            <Link href={url.url}>{url.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
