import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Jobs from './components/Jobs'
import Value from './components/Value'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-[85vw] m-auto bg-white'> 
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App