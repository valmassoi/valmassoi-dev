import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import cn from 'classnames';
import { FaMarkdown } from 'react-icons/fa';

import Layout from 'app-components/Layout/Layout';

import styles from './resume.module.scss';

const fetchResumeData = async () => {
  const res = fetch('https://raw.githubusercontent.com/valmassoi/resume/master/Valmassoi_Resume_Soft-Dev.md');
  try {
    return await res.then((response) => response.text());
  } catch (err) {
    console.error(err);
    return 'Error loading resume.';
  }
};

const Resume = ({
  resumeData,
}) => {
  const [pretty, setPretty] = useState(true);
  const handleClick = () => {
    setPretty(!pretty);
  };
  const markdownToggleTitle = pretty ? 'View Raw' : 'View Markdown';
  return (
    <Layout title="Resume">
      <div className={styles.markdownWrapper}>
        <div className={styles.markdown}>
          <div className={styles.buttonsWrapper}>
            <a href="https://github.com/valmassoi/resume/raw/master/Valmassoi_Resume_Soft-Dev.pdf" className={styles.downloadPdf}>Download PDF</a>
            <FaMarkdown title={markdownToggleTitle} size="30px" onClick={handleClick} className={cn(styles.markdownToggle, { [styles.activeToggle]: !pretty })} />
          </div>
          {pretty
            ? <ReactMarkdown source={resumeData} />
            : resumeData.split('\n').map((line, i) => <p key={line + i}>{line}</p>)}
        </div>
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
