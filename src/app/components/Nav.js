"use client"
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import {CgMenu, CgCloseR} from 'react-icons/cg'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log("value " + openMenu)
  return (
    <nav className={styles.navbar}>
        <div className={openMenu ? ` ${styles.active}`:""}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/" onClick={()=>setOpenMenu(false)}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/about" onClick={()=>setOpenMenu(false)}>
                            About
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/movie" onClick={()=>setOpenMenu(false)}>
                            Movie
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/contact" onClick={()=>setOpenMenu(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>

               <div className={styles["mobile-navbar-btn"]}>
                    <CgMenu name="menu-outline" className={styles["mobile-nav-icon"]} onClick={()=>setOpenMenu(true)} />
                    <CgCloseR name="close-outline" className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`} onClick={()=>setOpenMenu(false)} />
                </div> 
        </div> 
    </nav>
  )
}

export default Nav
