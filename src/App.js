import Cards from './components/Cards'
import Category from './components/Category'
import Food from './components/Foods'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Cards />
        <Food />
        <Category />
      </div>
    </>
  )
}
