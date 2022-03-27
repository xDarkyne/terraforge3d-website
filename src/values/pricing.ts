export interface IPricing {
  tierName: string;
  price: number;
  benefits: string[];
  joinUrl: string;
}

export const pricing: IPricing[] = [
  {
    tierName: 'Gold',
    price: 8,
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    joinUrl: 'some url',
  },
];
