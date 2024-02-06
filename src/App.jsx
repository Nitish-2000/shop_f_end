// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import Home from './components/pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import styles from './App.module.scss'
function App() {


  return (
    <div className={styles.App}>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

// https://github.com/zinotrust/shopito-styles/blob/master/Header.module.scss
