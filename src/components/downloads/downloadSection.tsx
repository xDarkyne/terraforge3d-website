import { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import { getOperatingSystem } from 'lib';
import { Platform, Platforms } from 'values';

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
            onClick={() => setActiveTab(platform)}
          >
            {platform}
          </button>
        ))}
      </div>

      {Platforms.map((platform, index) => (
        <div
          key={index}
          className={`platform ${platform} ${
            activeTab === platform ? 'visible' : ''
          }`}
        >
          <h3>{platform}</h3>
        </div>
      ))}
    </div>
  );
};
