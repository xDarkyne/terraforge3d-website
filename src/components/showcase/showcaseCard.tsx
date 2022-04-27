import styles from 'styles/components/showcase/showcaseCard.module.scss';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { IShowcaseItem, IContributor } from 'values';
import Link from 'next/link';

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
        <header>
          <h3>{title}</h3>
        </header>
        <div className={styles.showcaseCardText}>
          <p>{description}</p>
          { typeof author == 'string' ? <p>{author}</p> : <Link href={author.githubUrl}>{author.name}</Link> }
        </div>
      </div>
    </li>
  );
};
