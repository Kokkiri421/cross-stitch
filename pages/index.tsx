import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import CanvasComponent from '../components/canvas';

const Home: NextPage = () => (
  <div className={styles.container}>
    <CanvasComponent />
  </div>
);

export default Home;
