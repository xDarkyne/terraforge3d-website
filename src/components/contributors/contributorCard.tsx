import { FunctionComponent } from 'react';
import type { IContributor } from 'values';

interface IContributorCardProps {
  contributor: IContributor;
}

export const ContributorCard: FunctionComponent<IContributorCardProps> = ({
  contributor,
}) => {
  return (
    <li className="contributorCard">
      <h3>{contributor.name}</h3>
      <a href={contributor.githubUrl}>GitHub</a>
      {contributor.extraUrl && <a href={contributor.extraUrl}>Extra</a>}
    </li>
  );
};
