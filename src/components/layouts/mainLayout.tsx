import type { NextPage } from 'next';
import { PageHeader, PageFooter } from 'components';

export const MainLayout: NextPage = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </>
  );
};
