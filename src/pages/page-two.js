import React from 'react';
import { Helmet } from 'react-helmet';

import { PageTwoContainer } from '@containers';

const PageTwo = () => (
  <>
    <Helmet>
      <title>Second page</title>
    </Helmet>
    <PageTwoContainer />
  </>
);

export default PageTwo;
