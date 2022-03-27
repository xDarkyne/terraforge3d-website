/**
 * This interface is just for type-safety and a better developer-experience.
 */
export interface IPricing {
  tierName: string;
  price: number;
  benefits: string[];
  joinUrl: string;
  highlighted?: boolean;
}

/**
 * Array containing pricing information.
 * Add/Remove displayed tiers here
 */
export const pricing: IPricing[] = [
  {
    tierName: 'Gold',
    price: 8,
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    joinUrl: 'some url',
  },
];
