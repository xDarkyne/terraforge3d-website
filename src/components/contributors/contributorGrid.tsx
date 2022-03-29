import { FunctionComponent } from 'react';
import { contributors } from 'values';
import { ContributorCard } from './contributorCard';

export const ContributorGrid: FunctionComponent = () => {
  return (
    <ul>
      {contributors.map((contributor, index) => (
        <ContributorCard key={index} contributor={contributor} />
      ))}
    </ul>
  );
};
