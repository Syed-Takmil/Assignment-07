




import React from 'react';
import Navbar from '../Components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/shared/Footer';
import '../App.css'

const MainLayout = () => {
    return (
        <div className='page'>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;