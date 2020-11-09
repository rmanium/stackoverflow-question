import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '../../dist/src/index';
// import { Button } from '@rmanium/stackoverflow-question/src/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>hello</div>
        <Button />
      </main>
    </div>
  );
}
