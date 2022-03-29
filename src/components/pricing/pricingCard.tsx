import { FunctionComponent } from 'react';
import type { IPricing } from 'values';

interface IPricingCardProps {
  tier: IPricing;
}

export const PricingCard: FunctionComponent<IPricingCardProps> = ({ tier }) => {
  return (
    <li className="pricingCard">
      <h3>{tier.tierName}</h3>
      <ul>
        {tier.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <p>{tier.price}</p>
    </li>
  );
};
