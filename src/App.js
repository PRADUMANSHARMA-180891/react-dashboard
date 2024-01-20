
// import Navbar from './component/Navbar';
// import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/shared/Layout';
import Dashboard from './component/pages/Dashboard';
import Product from './component/pages/Product';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Product />} />
        </Route>
        {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
   </Router>
  );
}

export default App;
