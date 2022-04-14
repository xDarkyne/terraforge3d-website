import { Platform } from 'values';

/**
 * Determines the operating system the client is using.
 * navigator.appVersion is deprecated but it's currently
 * the easiest way to get the os.
 *
 * @returns
 */
export function getOperatingSystem(): Platform | '' {
  if (navigator.appVersion.indexOf('Win') != -1) return 'Windows';
  if (navigator.appVersion.indexOf('Mac') != -1) return 'Mac';
  if (navigator.appVersion.indexOf('X11') != -1) return 'Linux';
  if (navigator.appVersion.indexOf('Linux') != -1) return 'Linux';

  return '';
}
