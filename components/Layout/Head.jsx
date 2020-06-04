import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      Valmassoi |
      {' '}
      {props.title}
    </title>
    <meta
      name="description"
      content={props.description}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="/nprogress.css" />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta
      property="og:description"
      content={props.description}
    />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage} />
    <meta property="og:image" content={props.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  description: string,
  ogImage: string,
  title: string,
  url: string,
};

Head.defaultProps = {
  description: '',
  ogImage: '',
  title: '',
  url: '',
};

export default Head;
