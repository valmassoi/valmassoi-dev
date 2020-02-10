import React from 'react';
import Typist from 'react-typist';

import Layout from 'app-components/Layout/Layout';
import Terminal from 'app-components/Terminal/Terminal';
import { H1 } from 'app-components/htmlElements';

import styles from './index.module.scss';
// import '../node_modules/react-typist/dist/Typist.css';


const Home = () => {
  // console.log(styles);

  return (
    <Layout title="Home">
      <div className={styles.page}>
        <Terminal>
          <Typist
            avgTypingDelay={50}
            startDelay={2000}
          >
            <a>Hello World</a>
            <Typist.Backspace count={5} delay={1000} />
            <Typist.Delay ms={750} />
            <a>I'm Rob</a>
            {/* <p>A software developer</p> */}
          </Typist>
        </Terminal>
      </div>
    </Layout>
  );
};

export default Home;
