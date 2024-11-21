import './App.css';
import Header from './components/Header';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="inner">
          <ItemPage />
        </div>
      </main>
    </>
  )
}

export default App
