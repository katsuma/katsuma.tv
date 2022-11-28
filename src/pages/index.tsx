import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Bio from '../components/Bio/Bio'
import Headline from '../components/Headine/Headline'

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
