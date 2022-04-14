import { discordServerUrl, githubUrl } from './links';

/**
 * This interface is just for type-safety and a better developer-experience.
 */
export interface INavLink {
  value: string;
  destination: string;
}

/**
 * Array holding all links shown in the header
 * Add/Remove Links here.
 */
export const navLinks: INavLink[] = [
  {
    value: 'Home',
    destination: '#Home',
  },
  {
    value: 'Features',
    destination: '#Features',
  },
  {
    value: 'Showcase',
    destination: '#Showcase',
  },
  {
    value: 'Pricing',
    destination: '#Pricing',
  },
  {
    value: 'Downloads',
    destination: '#Downloads',
  },
  {
    value: 'Contributors',
    destination: '#Contributors',
  },
  {
    value: 'Contact',
    destination: '#Contact',
  },
  {
    value: 'Docs',
    destination: '#Docs',
  },
  {
    value: 'Github',
    destination: githubUrl,
  },
  {
    value: 'Discord',
    destination: discordServerUrl,
  },
];
