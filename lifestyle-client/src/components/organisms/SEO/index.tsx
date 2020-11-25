import * as React from 'react';
import Helmet from 'react-helmet';

/**
 * SEO helmet component
 * @param {ISeoProps} title header
 * @param {ISeoProps} description description of the site
 */
const SEO: React.FC<ISeoProps> = ({ title, description }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
