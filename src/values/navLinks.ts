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
    destination: '#home',
  },
  {
    value: 'Features',
    destination: '#features',
  },
  {
    value: 'Showcases',
    destination: '#showcases',
  },
  {
    value: 'Pricing',
    destination: '#pricing',
  },
  {
    value: 'Team',
    destination: '#team',
  },
  {
    value: 'Contact',
    destination: '#contact',
  },
  {
    value: 'Docs',
    destination: '#docs',
  },
  {
    value: 'Github',
    destination: '#github',
  },
  {
    value: 'Discord',
    destination: '#discord',
  },
];
