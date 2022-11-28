import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Bio from 'src/components/Bio'
import Headline from 'src/components/Headline'
import styles from 'src/styles/Home.module.scss'

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
