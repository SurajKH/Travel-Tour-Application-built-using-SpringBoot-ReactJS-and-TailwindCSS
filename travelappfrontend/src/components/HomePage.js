import React from 'react';
import image from '../assets/travelpic.jpg';
import AdminPage from './AdminPage';


//Home Page Component.
const HomePage = () => {
  return (
    <React.Fragment>
       <div style={{backgroundImage:
      `url(${image})`,backgroundPosition: 'center',
backgroundSize:'cover',backgroundRepeat: 'no-repeat',
width: '100vw',
        height: '100vh'
 }}>
 <AdminPage/>
       </div>
    </React.Fragment>
  )
}

export default HomePage;
