
import Navbar from '../components/Navbar'
import Outer from '../components/Outer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      

      <header>
         <Navbar/>
      </header>
      <main>
         <Outer/>
      </main>
      <footer>

      </footer>
    </div>
  )
}
