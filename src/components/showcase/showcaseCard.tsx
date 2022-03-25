import styles from 'styles/components/showcase/showcaseCard.module.scss';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { IShowcaseItem } from 'values';

interface IShowcaseProps {
  showcase: IShowcaseItem;
}

export const ShowcaseCard: FunctionComponent<IShowcaseProps> = ({
  showcase,
}) => {
  const { imageUrl, title, description, author } = showcase;

  return (
    <li className={styles.showcaseCard}>
      <Image
        src={require(`../../../public/images${imageUrl}`)}
        alt="text"
        placeholder="blur"
      />
      <div className={styles.showcaseCardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{author}</p>
      </div>
    </li>
  );
};
