import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import News from '../../components/News/News';
import NewsBg from '../../components/Background/Background';

const NewsPage = () => {
  return (
    <MainLayout
      main={<News />}
      background={<NewsBg />}
    />
  );
};

export default NewsPage;
