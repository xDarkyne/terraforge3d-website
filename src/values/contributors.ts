/**
 * This interface is just for type-safety and a better developer-experience.
 */
export interface IContributor {
  name: string;
  avatar: string;
  githubUrl: string;
  title?: string;
  extraUrl?: string;
}

/**
 * Array containing data of the contributors displayed on the homepage.
 * Add/Remove contributors here.
 */
export const contributors: IContributor[] = [
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
  {
    name: 'Darkyne',
    avatar: '/darkyne.jpg',
    githubUrl: 'https://github.com/xdarkyne',
    extraUrl: 'https://darkyne.com',
  },
];

export function getContributor(name: string): IContributor {
  let contributor = contributors.find(
    (p) => p.name.toLowerCase() == name.toLowerCase()
  );
  if (!contributor)
    throw new Error('Could not find contributor with name ' + name);
  return contributor;
}
