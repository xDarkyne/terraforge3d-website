import { FunctionComponent } from 'react';
import Link from 'next/link';
import { INavLink } from 'values';

interface INavLinkProps {
  navLink: INavLink;
}

export const NavLink: FunctionComponent<INavLinkProps> = ({ navLink }) => {
  const { value, destination } = navLink;

  return (
    <li>
      <Link href={destination}>{value}</Link>
    </li>
  );
};
