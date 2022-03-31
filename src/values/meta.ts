/**
 * This interface is just for type-safety and a better developer-experience.
 */
export interface IMetaData {
  description: string;
  keywords: string[];
  author: string;
}

/**
 * This object is holding the necessary meta data for this website for
 * SEO purposes. Apply changes here.
 *
 * Please don't change the author field unless the page was majorly rewritten
 * by someone else. Thank you.
 */
export const metaData: IMetaData = {
  description:
    'TerraForge3D is a open source procedural terrain generation toolkit as well as a procedural modelling toolkit. TerraForge3D is suitable for modern 3D Environment design. It can be used for both low poly games as well as for cinematic shots in films.',
  keywords: [
    'TerraForge',
    '3D',
    'Terrain Generator',
    'FOSS',
    'Open Source',
    'procedural terrain generation',
    'gamedev',
    'procedural shaders',
  ],
  author: 'xDarkyne',
};
