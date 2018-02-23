import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import News from '../../components/News/News';
import NewsBg from '../../components/Background/Background';

const NewsPage = () => {
  return (
    <MainLayout
      background={<NewsBg />}
      main={<News />}
    />
  );
};

export default NewsPage;
