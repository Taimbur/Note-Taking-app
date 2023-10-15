import React from 'react'
import Header from './components/header'
import Notes from './pages/Notes'
import List from './pages/list'
import Layout from './layout/Layout'
// import Footer from './components/Footer'
const App = () => {

  return (
    <div className='container'>
      <Header />
      
      <Layout />

      {/* <Notes />
      <List /> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App