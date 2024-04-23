//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./forms/login";
import Products from './pages/products';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from "./layers/footer";
import Header from "./layers/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Products/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='signin' element={<Login/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
