import './App.scss';
import Header from './components/Header'
import CustomerDetails from './containers/CustomerDetails'
import Footer from './components/Footer'
function App() {
  return (
    <div className="page-container" data-testid="page-container">
      <div className="content-wrap">
        <Header/>
        <CustomerDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
