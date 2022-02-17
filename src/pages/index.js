import React from 'react';
import { Helmet } from 'react-helmet';

import { HomePageContainer } from '@containers';

const IndexPage = () => (
  <>
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <HomePageContainer />
  </>
);

export default IndexPage;
