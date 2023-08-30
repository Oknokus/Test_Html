import PropTypes from 'prop-types';

import IconPlanet from  "./assets/IconPlanet.svg";


import styles from './Header.module.css';


const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.container_logo}></div>
                <div className={styles.container_link}>
                    <ul className={styles.link_container}>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Commissions</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className={styles.container_button}>
                    <button><img src={IconPlanet} alt="IconPlanet" /> EN</button>
                    <button>LOG IN</button>
                    <button>SIGN UP</button>
                </div>
            </div>
        </section>
    )
}
export default Header;