import iconPlanet from  "./assets/IconPlanet.svg";
import iconPlanetAdaptive from  "../../../adaptive/Btn. - Language.svg";
import menu from  "./../../../adaptive/Menu.svg";
import BurgerMenu from "../../burgerMenu/BurgerMenu";


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
                    <button><img src={iconPlanet} alt="iconPlanet"/> EN</button>
                    <button>LOG IN</button>
                    <button>SIGN UP</button>                     
                </div>
                <div className={styles.container_button_adaptive}>
                    <button><img className={styles.imgAdaptive} src={iconPlanetAdaptive} alt="iconPlanetAdaptive"/></button>
                    {/* <img src={menu} alt="menu" />   */}
                    <BurgerMenu />   
                </div>
            </div>
        </section>
    )
}
export default Header;