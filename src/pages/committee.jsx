import React from 'react';


import OrganizingCommittee from '../app/components/committee';
import RootLayout from './../app/layout';

function Committee({childern}) {
  return (
    <RootLayout>
      <OrganizingCommittee />
    </RootLayout>
  );
}

export default Committee;
