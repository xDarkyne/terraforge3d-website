import styles from 'styles/components/showcase/showcaseGrid.module.scss';
import { FunctionComponent } from 'react';
import { showcases } from 'values';
import { useState } from 'react';
import { ShowcaseCard } from './showcaseCard';

export const ShowcaseGrid: FunctionComponent = () => {
  /**
   * Checks if we can get another [5] showcases,
   * if not returns the highest index.
   */
  const getNextIndex = (lastIndex: number) =>
    showcases.length < 5 ? showcases.length - 1 : lastIndex + 4;

  /**
   * Array to store the showcases visible in the browser
   */
  const [visibleShowcases, setVisibleShowcases] = useState(
    showcases.slice(0, getNextIndex(1))
  );

  /**
   * Variable to check whether the load more button
   * should be shown or hidden.
   */
  const [canLoadMore, setCanLoadMore] = useState(
    visibleShowcases.length < showcases.length
  );

  /**
   * Copy showcases from the global array into the local array
   * and update the button visibility.
   */
  const loadMore = () => {
    if (canLoadMore) {
      let nextIndex = getNextIndex(visibleShowcases.length);
      let cases = [
        ...visibleShowcases,
        ...showcases.slice(visibleShowcases.length - 1, nextIndex),
      ];
      setVisibleShowcases(cases);
      setCanLoadMore(cases.length < showcases.length);
    }
  };

  return (
    <>
      <ul className={styles.showcaseGrid}>
        {visibleShowcases.map((showcase, index) => (
          <ShowcaseCard key={index} showcase={showcase} />
        ))}
      </ul>
      {canLoadMore ? (
        <button className="appBtn small" onClick={loadMore}>
          Load More
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
