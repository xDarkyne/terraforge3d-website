import { FunctionComponent } from 'react';
import Link from 'next/link';
import { INavLink } from 'values';

interface INavLinkProps {
  navLink: INavLink;
}

export const NavLink: FunctionComponent<INavLinkProps> = ({ navLink }) => {
  const { value, destination } = navLink;
  const external = !destination.startsWith('#');

  return (
    <li>
      <Link href={destination} passHref>
        <a target={external ? '_blank' : '_self'} rel="noreferrer">
          {value}
        </a>
      </Link>
    </li>
  );
};
