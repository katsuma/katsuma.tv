import Image from 'next/image';
import avatar from '../public/me.jpg';
import styles from './Headline.module.scss';

export default function Headline() {
  return (
    <div className={styles.headline}>
      <Image className={styles.avatar} alt="Ryo Katsuma" src={avatar} placeholder="blur" width={80} height={80} />
      <h1>Ryo Katsuma</h1>
      <p className={styles.description}></p>

    </div>
  );
}
