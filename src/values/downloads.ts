/**
 * Custom type to avoid different spelling of platforms by
 * enforcing one of the following platforms.
 */
export type Platform = 'Linux' | 'Windows' | 'Mac (x86)' | 'Mac (ARM)';

/**
 * interface used for other downloads and older versions.
 */
export interface IDownload {
  url: string;
  platform: Platform;
}

/**
 * interface for the complete downloads object.
 */
export interface IDownloads {
  linuxUrl: string;
  linuxSDKUrl: string;
  windowsUrl: string;
  windowsSDKUrl: string;
  other: IDownload[];
}

/**
 * List of the current and other/older downloads. Edit this object to update download links.
 */
export const downloads: IDownloads = {
  linuxUrl:
    'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.Linux.tar.gz',
  linuxSDKUrl:
    'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.SDK.Linux.tar.gz',
  windowsUrl:
    'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.SDK.Win64.zip',
  windowsSDKUrl:
    'https://github.com/Jaysmito101/TerraForge3D/releases/download/v2.3/TerraForge3D.Win64.zip',
  other: [],
};
