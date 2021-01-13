import './App.css';
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import Filter from './Components/Filter/Filter'

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
      </>
    </div>
  )
}

export default App;
