import { Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';


const Layout = () => {
    return (
        <div>
            <Header />  
            <Outlet/>   
            <Footer />
        </div>
    )
}

export default Layout;