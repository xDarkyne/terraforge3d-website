import styles from 'styles/components/section.module.scss';
import { FunctionComponent, ReactNode } from 'react';

interface ISectionProps {
  name: string;
  description: ReactNode;
  id?: string;
}

export const Section: FunctionComponent<ISectionProps> = ({
  name,
  description,
  children,
  id,
}) => {
  const title = `${name.toLowerCase().replace(' ', '-')}-title`;

  return (
    <section aria-labelledby={title} id={id ?? name} className={styles.section}>
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 id={title}>{name}</h2>
          <p>{description}</p>
        </header>
        {children}
      </div>
    </section>
  );
};
