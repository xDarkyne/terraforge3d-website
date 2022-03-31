import styles from 'styles/components/pricing/pricingCard.module.scss';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import type { IPricing } from 'values';

interface IPricingCardProps {
  tier: IPricing;
}

export const PricingCard: FunctionComponent<IPricingCardProps> = ({ tier }) => {
  return (
    <li
      className={`${styles.pricingCard} ${
        tier.highlighted ? styles.highlighted : ''
      } ${styles[tier.tierName.toLowerCase()]}`}
    >
      <h3>{tier.tierName}</h3>
      <div className={styles.pricingBody}>
        <h4>Benefits:</h4>
        <ul className={styles.benefits}>
          {tier.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <footer className={styles.pricingFooter}>
        <Link href={tier.joinUrl}>
          <a target="_blank" className="appBtn full">
            {`Join for ${tier.price === 'free' ? 'free' : `${tier.price}$`}`}
          </a>
        </Link>
      </footer>
    </li>
  );
};
