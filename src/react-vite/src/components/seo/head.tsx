import { Helmet, HelmetData } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Psa420 React` : undefined}
      defaultTitle="Psa420 React"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
