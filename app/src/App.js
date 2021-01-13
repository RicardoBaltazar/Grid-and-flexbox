import './App.css';
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import Filter from './Components/Filter/Filter'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Filter />
          <section>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </section>
        </main>
        <Footer />
      </>
    </div>
  )
}

export default App;
