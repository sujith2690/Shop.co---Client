import './App.css'
import Banner from './components/Banner'
import Brands from './components/Brands'
import Browse from './components/Browse'
import Navbar from './components/Navbar'
import New from './components/New'
import Popular from './components/Popular'

function App() {

  return (
    <div className='h-screen'>
      <Navbar />
      <Banner />
      <New />
      <Browse />
      <Brands />
      <Popular/>
    </div>
  )
}

export default App

