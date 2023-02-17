import logo from './logo.svg';
import './App.css';
import Product from './prod';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div  className='border border-4 p-2 border-danger w-100'>
    
<h1>MY application </h1>

<a href="/products">Products</a>
<br></br><Link to={"/products"}>goto </Link>
<br></br>
<Link to="/countries">Countries</Link>
<Outlet></Outlet>



    </div>
  );
}

export default App;
