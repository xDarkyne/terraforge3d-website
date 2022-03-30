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
      }`}
    >
      <div className={styles.pricingBody}>
        <h3>{tier.tierName}</h3>
        <h4>Benefits:</h4>
        <ul className={styles.benefits}>
          {tier.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <p className={styles.price}>Join for {tier.price}$!</p>
      </div>
      <footer className={styles.pricingFooter}>
        <Link href={tier.joinUrl}>
          <a href="" className="appBtn full">
            Buy
          </a>
        </Link>
      </footer>
    </li>
  );
};
