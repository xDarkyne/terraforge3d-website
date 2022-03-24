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
    imageUrl: '/image.png',
    description: 'some description',
    author: 'xDarkyne',
    type: 'Cinematic',
  },
];
