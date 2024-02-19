
import Home from './components/pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import styles from './App.module.scss'
import Footer from './components/footer/Footer'
function App() {


  return (
    <div className={styles.App}>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App

