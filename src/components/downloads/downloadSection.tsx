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
    <div className="downloads">
      <div className="tab-buttons">
        {Platforms.map((platform, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === platform ? 'active' : ''}`}
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
          (download) => !download.type.includes('Primary')
        );

        return (
          <div
            key={index}
            className={`platform ${platform} ${
              activeTab === platform ? 'visible' : ''
            }`}
          >
            {dl.length > 0 ? (
              <>
                <ul className="downloadsGrid">
                  {dl.map((download, index) => {
                    if (download.type.includes('Primary')) {
                      return <DownloadCard download={download} key={index} />;
                    }
                  })}
                </ul>
                {otherDownloads && (
                  <p>
                    For older version checkout the{' '}
                    <Link
                      href={'https://github.com/Jaysmito101/TerraForge3D/tags'}
                    >
                      GitHub page
                    </Link>
                  </p>
                )}
              </>
            ) : (
              <p>There are no downloads for this platform :(</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
