/**
 * Array holding all possible platforms.
 */
export const Platforms = <const>['Windows', 'Linux', 'Mac'];

/**
 * Custom type to avoid different spelling of platforms by
 * enforcing one of the following platforms. This type is
 * made out of the array above. To add platforms edit the array.
 *
 * CAUTION: removing or renaming entries above might invalidate
 * existing downloads.
 */
export type Platform = typeof Platforms[number];

/**
 * type for chip architectures. x86 e.g intel chips and arm e.g. apple m1.
 */
export type Architecture = 'x86' | 'arm';

/**
 * This type is defining the type of the download. Avoid
 * having too many primary downloads. Keep empty or 'SDK'
 * to appear in the 'others' section.
 */
export type DownloadType = 'Primary' | 'Primary SDK' | 'SDK';

/**
 * interface used for other downloads and older versions.
 */
export interface IDownload {
  url: string;
  version: string;
  platform: Platform;
  architecture: Architecture;
}

/**
 * interface for downloads list
 */
export interface IDownloads {
  linux: IDownload[];
  windows: IDownload[];
  mac: IDownload[];
}

/**
 * List of the current and other/older downloads. Edit this object to update download links.
 */
export const downloads: IDownloads = {
  linux: [
    {
      version: 'Linux v.0.x',
      url: 'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.Linux.tar.gz',
      platform: 'Linux',
      architecture: 'x86',
    },
    {
      version: 'Linux SDK v.0.x',
      url: 'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.SDK.Linux.tar.gz',
      platform: 'Linux',
      architecture: 'x86',
    },
  ],
  windows: [
    {
      version: 'Windows v.0.x',
      url: 'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.SDK.Win64.zip',
      platform: 'Windows',
      architecture: 'x86',
    },
    {
      version: 'Windows SDK v.0.x',
      url: 'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.Win64.zip',
      platform: 'Windows',
      architecture: 'x86',
    },
  ],
  mac: [],
};
