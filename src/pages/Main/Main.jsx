import Shield1LeftImg from "./assets/bannerLeft/Shield1.svg";
import Shield2LeftImg from "./assets/bannerLeft/Shield2.svg";
import Shield3LeftImg from "./assets/bannerLeft/Shield3.svg";
import Shield4LeftImg from "./assets/bannerLeft/Shield4.svg";
import Shield5LeftImg from "./assets/bannerLeft/Shield5.svg";
import Shield6LeftImg from "./assets/bannerLeft/Shield6.svg";


import Shield1CenterImg from "./assets/bannerCenter/Shield1.svg";
import Shield2CenterImg from "./assets/bannerCenter/Shield2.svg";
import Shield3CenterImg from "./assets/bannerCenter/Shield3.svg";
import Shield4CenterImg from "./assets/bannerCenter/Shield4.svg";
import Shield5CenterImg from "./assets/bannerCenter/Shield5.svg";
import Shield6CenterImg from "./assets/bannerCenter/Shield6.svg";
import Shield7CenterImg from "./assets/bannerCenter/Shield7.svg";

import Shield1RihtImg from "./assets/bannerRight/Shield1.svg";
import Shield2RihtImg from "./assets/bannerRight/Shield2.svg";
import Shield3RihtImg from "./assets/bannerRight/Shield3.svg";
import Shield4RihtImg from "./assets/bannerRight/Shield4.svg";
import Shield5RihtImg from "./assets/bannerRight/Shield5.svg";
import Shield6RihtImg from "./assets/bannerRight/Shield6.svg";
import Shield7RihtImg from "./assets/bannerRight/Shield7.svg";
import Shield8RihtImg from "./assets/bannerRight/Shield8.svg";

import {data} from "../../config/data";


import styles from './Main.module.css';


const Main = () => {     
    return (
        <section className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.container_left}>
                    <div className={styles.containerLeft_title}>
                        <h1>HOUSE OF <span>GAMBLING</span></h1>
                        
                    </div>
                    <div className={styles.containerLeft_description}>
                        <p>Raise your ROI with direct advertiser</p>
                    </div>
                    <button className={styles.containerLeft_button}>BECOME A PARTNER</button>
                </div>  

                <div className={styles.container_center}>
                    <div className={styles.container_banner}>
                        <div className={styles.banner_lineLeft}>
                                <img src={Shield1LeftImg} alt="sheid" />
                            <div className={styles.divImg} data-content="FromDown-toUp" style={{marginTop:"20px"}}>
                                <img className={styles.imgAnimationBottom} src={Shield2LeftImg} alt="sheid" />
                            </div>
                                <img src={Shield3LeftImg} alt="sheid" />
                                <img src={Shield4LeftImg} alt="sheid" />
                                <img src={Shield5LeftImg} alt="sheid" />                          
                            <div className={styles.divImg}>
                                <img className={styles.imgAnimationBottom} src={Shield6LeftImg} alt="sheid" />
                            </div>                                
                        </div>

                        <div className={styles.banner_lineCenter}>
                                <img src={Shield1CenterImg} alt="sheid" />                            
                                <img src={Shield2CenterImg} alt="sheid" />                          
                                <img src={Shield3CenterImg} alt="sheid" />
                            <div data-content="FromUp toDown" className={styles.divImg}>
                                <img className={styles.imgAnimationTop} src={Shield4CenterImg} alt="sheid" />
                            </div>                           
                                <img src={Shield5CenterImg} alt="sheid" /> 
                                <img src={Shield6CenterImg} alt="sheid" />                           
                                <img src={Shield7CenterImg} alt="sheid" /> 
                        </div>

                        <div className={styles.banner_lineRight}>
                            <div className={styles.divImg} style={{border:"4px solid rgba(255, 255, 255, 1)"}}> 
                                <img className={styles.imgAnimationBottom} src={Shield1RihtImg} alt="sheid" />
                            </div>
                                <img src={Shield2RihtImg} alt="sheid" />                            
                                <img src={Shield3RihtImg} alt="sheid" />
                                <img src={Shield4RihtImg} alt="sheid" />
                                <img src={Shield5RihtImg} alt="sheid" />
                                <img src={Shield6RihtImg} alt="sheid" />
                                <img src={Shield7RihtImg} alt="sheid" />
                                <img src={Shield8RihtImg} alt="sheid" />  
                        </div>
                    </div>
                </div>

                <div className={styles.container_right}>
                <div className={styles.containerRight_title}>
                        <h2>BLOG</h2>                      
                            <ul className={styles.containerRight_content}>
                                <div className={styles.divContent}>
                                    {
                                        data.map(elem => 
                                            <li className={styles.containerRight_text}>
                                                <h1>{elem.text}</h1>
                                                <p>{elem.data}</p>
                                            </li>
                                        )
                                    } 
                                </div> 
                            </ul>                                              
                    </div>
                </div>              
            </div>
        </section>
    )
}
export default Main;