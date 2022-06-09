import React from 'react';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Home from './components/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route
          path='/projectDetails/:id'
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;
