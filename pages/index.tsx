import Header from '../components/Header'
import Footer from '../components/Footer'
import Bio from '../components/Bio'
import Headline from '../components/Headline'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Headline />
      <Bio />
      <Footer />
    </div>
  )
}
