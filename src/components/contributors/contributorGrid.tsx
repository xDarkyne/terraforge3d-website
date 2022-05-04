import styles from 'styles/components/contributors/contributorSection.module.scss';
import { FunctionComponent } from 'react';
import { contributors } from 'values';
import { ContributorCard } from './contributorCard';

export const ContributorGrid: FunctionComponent = () => {
  return (
    <ul className={styles.grid}>
      {contributors.map((contributor, index) => (
        <ContributorCard key={index} contributor={contributor} />
      ))}
    </ul>
  );
};
