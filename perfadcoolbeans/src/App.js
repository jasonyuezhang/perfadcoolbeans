import { Outlet, Link } from 'react-router-dom';
import Footer from "./Footer"

export default function App() {
  return (
    <div>
      <h1>Bean Shop</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/download">Home</Link> |{' '}
        <Link to="/purchase">Purchase</Link> |{' '}
        <Link to="/signup">Sign Up</Link> |{' '}
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}
