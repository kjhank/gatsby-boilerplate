import React from 'react';
import { Helmet } from 'react-helmet';

import { NotFoundContainer } from '@containers';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Untitled page - not found</title>
    </Helmet>
    <NotFoundContainer />
  </>
);

export default NotFoundPage;
