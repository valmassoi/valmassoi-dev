import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';

import styles from './resume.module.scss';

const Resume = () => {
  return (
    <div>
      <Head title="Resume" />
      <Nav />
      <h1>Resume</h1>
    </div>
  );
};

export default Resume;