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
    avatar: 'some avatar url',
    githubUrl: 'github url',
    extraUrl: 'any custom url like personal website, etc',
  },
];
