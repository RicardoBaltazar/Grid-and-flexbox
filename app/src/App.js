import './App.css';
import Header from './Components/Header/Header'
//import Cards from './Components/Cards/Cards'
//import Page1 from './Pages/Page1'
//import Page2 from './Pages/Page2'
import Routes from './Routes/Route'
import Filter from './Components/Filter/Filter'
import Footer from './Components/Footer/Footer'
import Pagination from './Components/Pagination/Pagination'

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Filter />
          <section>
            <Routes />
          </section>
          <section className='section-pagination'>
          <Pagination href='/Page1' number='1'/>
          <Pagination href="/Page2" number='2'/>
          <Pagination href="/Page3" number='3'/>
          <Pagination href="/Page4" number='4'/>
          </section>
        </main>
        <Footer />
      </>
    </div>
  )
}

export default App;
