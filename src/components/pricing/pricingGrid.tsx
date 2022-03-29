import { FunctionComponent } from 'react';
import { pricing } from 'values';
import { PricingCard } from './pricingCard';

export const PricingGrid: FunctionComponent = () => {
  return (
    <ul className="pricingGrid">
      {pricing.map((tier, index) => (
        <PricingCard key={index} tier={tier} />
      ))}
    </ul>
  );
};
