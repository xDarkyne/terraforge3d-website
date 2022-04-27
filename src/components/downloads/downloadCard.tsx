import styles from 'styles/components/downloads/downloadCard.module.scss';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IDownload } from 'values';

interface IDownloadCardProps {
  download: IDownload;
}

export const DownloadCard: FunctionComponent<IDownloadCardProps> = ({
  download,
}) => {
  return (
    <li className={styles.downloadCard}>
      <div className={styles.downloadBody}>
        <h3>{download.version}</h3>
        <a className={styles.downloadButton} href={download.url} download>Download</a>
      </div>
      <footer className={styles.downloadFooter}>
        <ul className={styles.downloadTags}>
          <li>{download.architecture}</li>
          {download.type !== '' && <li>{download.type}</li>}
        </ul>
      </footer>
    </li>
  );
};
