import 'tailwindcss/tailwind.css';

import React from 'react';
import { AppProps } from 'next/app';
import Layout from '@comp/layout/layout';
import Head from 'next/head';
import { usePageView } from '@hooks/usePageView';

const TailwindApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  usePageView();
  return (
    <Layout>
      <Head>
        <title>AR x React Tester</title>
        <meta name='viewport' content='user-scalable=no' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,minimum-scale=1.0'
        ></meta>
        <meta name='description' content='' />
        <meta name='keywords' content='HTML,CSS,Tailwind.css'></meta>
        <meta property='og:title' content='AR x React Tester' />
        <meta property='og:description' content='' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='' />
        <meta property='og:site_name' content='AR x React Tester' />
        <meta property='og:locale' content='ja_JP' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default TailwindApp;
