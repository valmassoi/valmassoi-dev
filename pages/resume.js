import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout/Layout';
// import { H1 } from '../components/htmlElements';
import styles from './resume.module.scss';

const fetchResumeData = async () => {
  const res = fetch(`https://raw.githubusercontent.com/valmassoi/resume/master/Valmassoi_Resume_Soft-Dev.md`);
  try {
    return await res.then(response => response.text());
  } catch (err) {
    console.error(err);
    return 'Error loading resume.'
  }
}

const Resume = ({
  resumeData,
}) => {
  return (
    <Layout title="Resume">
      <div className={styles.markdownWrapper}>
        <ReactMarkdown source={resumeData} className={styles.markdown} />
      </div>
    </Layout>
  );
};


Resume.getInitialProps = async () => {
  // fetch server-side
  const resumeData = await fetchResumeData();
  return { resumeData };
};

Resume.propTypes = {
  resumeData: PropTypes.string.isRequired,
};

export default Resume;