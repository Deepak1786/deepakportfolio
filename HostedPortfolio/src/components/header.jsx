
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
const Header = ()=> {
  return (
    <div className="fixed top-10 right-10 z-10">
     <Link to="/hireme">
  <button className="bg-black text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-800 transition transform active:scale-90">
    Hire Me
  </button></Link>
  <i className="ri-more-2-fill text-2xl"></i>
</div>
  );
}
export default Header;