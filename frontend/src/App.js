import React from 'react'
import Heather from './components/Heather'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'



const App = () => {
  return (
    <>
    <Heather/>
    <main className="py-3">
    <Container>
      <HomeScreen/>
    </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App