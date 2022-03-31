/**
 * This interface is just for type-safety and a better developer-experience.
 */
export interface IPricing {
  tierName: string;
  price: 'free' | number;
  benefits: string[];
  joinUrl: string;
  highlighted?: boolean;
}

/**
 * Array containing pricing information.
 * Add/Remove displayed tiers here.
 *
 * The current css rules don't account for
 * more than three displayed tiers. So please
 * always try to display three tiers while the
 * highlighted on is in the middle of the list.
 *
 * When adding tiers don't forget to add a class
 * for it with background gradients under
 * src/styles/components/pricing/pricingCard.module.scss
 *
 * for gradients check out
 * https://www.eggradients.com
 *
 * If you want to fix the limitations feel free
 * to submit a pull request.
 */
export const pricing: IPricing[] = [
  {
    tierName: 'Bronze',
    price: 2,
    benefits: ['Patron-only updates', 'High Priority Support', 'Early access'],
    joinUrl: 'https://www.patreon.com/jaysmito101',
  },
  {
    tierName: 'Gold',
    price: 8,
    benefits: [
      'Livestreams',
      'Patron-only updates',
      'Early access',
      'Work-in-progress updates of TerraForge3D',
      'High Priority Support',
      'New Assets Weekly',
      'Shout Out on Every YouTube Video & Website',
      'Extra Special Nodes',
    ],
    joinUrl: 'https://www.patreon.com/jaysmito101',
    highlighted: true,
  },
  {
    tierName: 'Silver',
    price: 4,
    benefits: [
      'Early access',
      'Patron-only updates',
      'High Priority Support',
      'Weekly Builds Of TerraForge3D',
      'New Assets Bi-Weekly',
      'Shout Out on Website',
    ],
    joinUrl: 'https://www.patreon.com/jaysmito101',
  },
];
