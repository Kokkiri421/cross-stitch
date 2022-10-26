import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const CanvasComponent = dynamic(() => import('../components/canvas'), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <CanvasComponent />
    </div>
  );
};

export default Home;
