import styles from 'styles/components/downloads/DownloadSection.module.scss';
import { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import { getOperatingSystem } from 'lib';
import { Platform, Platforms, downloads, IDownload } from 'values';
import { DownloadCard } from '.';
import Link from 'next/link';

export const DownloadSection: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<Platform | ''>('');

  useEffect(() => {
    setActiveTab(getOperatingSystem());
  }, []);

  return (
    <div className={styles.downloads}>
      <div className={styles.tabButtons}>
        {Platforms.map((platform, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === platform ? styles.active : ''}`}
            onClick={() => {
              setActiveTab(platform);
            }}
          >
            {platform}
          </button>
        ))}
      </div>

      {Platforms.map((platform, index) => {
        const platformName = platform.toLowerCase();
        const dl: IDownload[] =
          Object.getOwnPropertyDescriptor(downloads, platformName)?.value ?? [];
        const otherDownloads = dl.filter(
          (download) => !download.type.includes('Latest')
        );

        return (
          <div
            key={index}
            className={`${styles.platform} ${
              activeTab === platform ? styles.visible : ''
            }`}
          >
            {dl.length > 0 ? (
              <>
                <ul className={styles.downloadsGrid}>
                  {dl.map((download, index) => {
                    if (download.type.includes('Latest')) {
                      return <DownloadCard download={download} key={index} />;
                    }
                  })}
                </ul>
                {otherDownloads && (
                  <p className={styles.otherDownloads}>
                    For older version checkout the{' '}
                    <Link
                      href={'https://github.com/Jaysmito101/TerraForge3D/tags'}
                    >
                      GitHub page
                    </Link>
                    .
                  </p>
                )}
              </>
            ) : (
              <p className={styles.noDownloads}>There are no downloads for this platform (yet) 😭</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
