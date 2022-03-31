import styles from 'styles/components/pricing/pricingGrid.module.scss';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { pricing } from 'values';
import { PricingCard } from './pricingCard';

export const PricingGrid: FunctionComponent = () => {
  return (
    <div className={styles.pricing}>
      <ul className={styles.pricingGrid}>
        {pricing.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </ul>
      <p>
        or <Link href="#downloads">download for free</Link>
      </p>
    </div>
  );
};
