import styles from 'styles/components/contributors/contributorCard.module.scss';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import type { IContributor } from 'values';

interface IContributorCardProps {
  contributor: IContributor;
}

export const ContributorCard: FunctionComponent<IContributorCardProps> = ({
  contributor,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.image}>
          <Image
            src={require(`../../../public/images/contributors${contributor.avatar}`)}
            alt={contributor.name}
            placeholder="blur"
          />
        </div>
        <h3>{contributor.name}</h3>
      </div>
      <div className={styles.cardFooter}>
        <a href={contributor.githubUrl}>GitHub</a>
        {contributor.extraUrl && <a href={contributor.extraUrl}>Extra</a>}
      </div>
    </li>
  );
};
