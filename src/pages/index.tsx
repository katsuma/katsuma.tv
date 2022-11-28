import Footer from 'src/components/Footer'
import Bio from 'src/components/Bio'
import Headline from 'src/components/Headline'
import styles from 'src/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Headline />
      <Bio />
      <Footer />
    </div>
  )
}
