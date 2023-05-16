import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [active, setActive] = useState("1");
 
    const handleClick = (event) => {
      setActive(event.target.id);
      
    }

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <img src="./VLAD-NIKO.png" alt="" className={styles.myicon}/>
                <p className={styles.text}>4Weather</p>
            </div>
            <div className={styles.linkContainer}>

                
                <Link to='/mainpage' className={active==='1' ? styles.active : styles.link} > 
                    <img src="./menu.svg" alt="menu-svg" className={styles.icon} key={1} id={"1"} onClick={handleClick}/>
                </Link>
            
    

                <Link to='/secondpage' className={active==='2' ? styles.active : styles.link} >
                    <img src="./map.svg" alt="menu-svg" className={styles.icon} key={2} id={"2"} onClick={handleClick}/>
                </Link>
                

                <Link to='/mainpage' className={active==='3' ? styles.active : styles.link}>
                    <img src="./location.svg" alt="menu-svg" className={styles.icon}  key={3} id={"3"} onClick={handleClick}/>
                </Link>

                <Link to='/mainpage' className={active==='4' ? styles.active : styles.link}>
                    <img src="./color.svg" alt="menu-svg" className={styles.icon}  key={4} id={"4"} onClick={handleClick}/>
                </Link>
                
                <Link to='/mainpage' className={active==='5' ? styles.active : styles.link}>
                    <img src="./setting.svg" alt="menu-svg" className={styles.icon}  key={5} id={"5"} onClick={handleClick}/>
                </Link> 

            </div>
                <Link to='/mainpage' className={styles.link}>
                    <img src="./setting.svg" alt="menu-svg" className={styles.icon}/>
                </Link>
            
        </div>
    );
};



export default Navbar;