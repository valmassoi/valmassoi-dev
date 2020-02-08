import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

import styles from './index.module.scss';

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title="Home" />
      <Nav />
        <p className={styles.date}>
          The date is:&nbsp;{' '}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
            <span className="loading"></span>
          )}
        </p>
    </div>
  );
};

export default Home;
