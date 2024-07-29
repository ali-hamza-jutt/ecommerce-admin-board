// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Navbar.css';
// import useScreenSize from '../hooks/useScreenSize.js';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const {isMobile}=useScreenSize();
//     return (
//         <nav className="navbar">
//             {isMobile?( <div className="menu-icon">
//                 <MenuRoundedIcon/>
//             </div>):(null)
//             }
           
//             <div className="icons-container">
//                 {/* <div className="icon"><i className="fa fa-moon"></i></div>
//                 <div className="icon notification"><i className="fa fa-bell"></i><span className="badge">1</span></div>
//                 <div className="icon message"><i className="fa fa-comment"></i><span className="badge">1</span></div>
//                 <div className="icon"><i className="fa fa-expand"></i></div>
//                 <div className="icon"><i className="fa fa-th"></i></div> */}
//                 <div className="profile">
//                     <img src="https://via.placeholder.com/40" alt="Profile" />
//                     <span>Kristin Watson</span>
//                 </div>
//                 <div className="icon"><i className="fa fa-cog"></i></div>
//                 <button className="login-button" onClick={() => navigate('/admin-login')}>Admin Login</button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import useScreenSize from '../hooks/useScreenSize.js';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();
  return (
    <nav className="navbar">
      
      <div className="icons-container">
         <div className="icon"><i className="fa fa-moon"></i></div>
                 <div className="icon notification"><i className="fa fa-bell"></i><span className="badge">1</span></div>
                 <div className="icon message"><i className="fa fa-comment"></i><span className="badge">1</span></div>
                 <div className="icon"><i className="fa fa-expand"></i></div>
                 <div className="icon"><i className="fa fa-th"></i></div>
                 <div className="profile">
          <img src="https://via.placeholder.com/40" alt="Profile" />
          <span>Kristin Watson</span>
        </div>
                 </div>

        <div className="menu-container">
        {isMobile ? (
        <div className="menu-icon" onClick={toggleSidebar}>
          <MenuRoundedIcon />
        </div>
      ) : null}
        
        <div className="icon">
        <button className="login-button" onClick={() => navigate('/admin-login')}>Admin Login</button>
        </div>
          <i className="fa fa-cog"></i>
            </div>         

        
      
    </nav>
  );
};

export default Navbar;
