import PropTypes from 'prop-types';


import styles from './BurgerMenu.module.css';


const BurgerMenu = () => {
    return (        
        <div className={styles.menu}>
            <input type="checkbox" id="burger_checkbox" className={styles.burger_checkbox}/>
            <label for="burger_checkbox" className={styles.burger}></label>
            <ul className={styles.menu_list}>
                <li className={styles.menu_item}><a href="">About us</a></li>
                <li className={styles.menu_item}><a href="">Brands</a></li>
                <li className={styles.menu_item}><a href="">Commissions</a></li>
                <li className={styles.menu_item}><a href="">News</a></li>
                <li className={styles.menu_item}><a href="">Contact us</a></li>
                <li className={styles.menu_item}><a href="">Careers</a></li>

                <div className={styles.button_adapive}>
                <li className={styles.menu_item}><button>LOG IN</button></li> 
                <li className={styles.menu_item}><button>SIGN UP</button></li> 
                </div>
            </ul>
                
                
        </div>  
    )
}
export default BurgerMenu;
