/**
 * To add a possible showcase type attach it to the end of this list.
 * Remember, removing a type will invalidate every entry with this type
 * and has to be fixed before a new build can be produced.
 */
export type ShowcaseType = 'Concept Art' | 'Game Art' | 'Cinematic';

/**
 * This interface is just for type-safety and a better developer-experience.
 */
export interface IShowcaseItem {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  type: ShowcaseType;
}

/**
 * Add all showcase images here following the format of the interface above.
 * E.g:
 * {
 *  imageUrl: 'REPLACE LATER',
 *  description: 'A beautiful image'
 *  author: 'your name',
 *  type: 'Cinematic' <-- has to be a valid ShowcaseType above
 * }
 * The showcases here will be used to render them on the website and thus avoid
 * copy & paste and make adding or removing showcases easy.
 */
export const showcases: IShowcaseItem[] = [
  {
    imageUrl: '/showcase/Snowy_Hills.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Muddy_Forest.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Desert_Vegetation.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Dry_Mountains.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Grassy_Hillock.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Moonland.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Snowy_Hills.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Muddy_Forest.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Desert_Vegetation.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Dry_Mountains.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Grassy_Hillock.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Moonland.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Snowy_Hills.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Muddy_Forest.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Desert_Vegetation.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Dry_Mountains.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Grassy_Hillock.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
  {
    imageUrl: '/showcase/Moonland.png',
    title: 'some title',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
];
