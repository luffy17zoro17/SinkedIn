
import Navbar from '../components/Navbar'
import Outer from '../components/Outer'
import Messaging from '../components/Outer/RestContent/Messaging'
import styles from '../styles/Home.module.css';








export default function Home() {
  return (
    
      
     <>
      <header>
         <Navbar/>
      </header>
     <div className={styles.container}>
      <main className="h-[150rem]">
         <Outer/>
      
      </main>
      <footer>

      </footer>
    </div>
     </>
  )
}
