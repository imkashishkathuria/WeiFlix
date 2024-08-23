import styles from '../styles/footer.module.css';
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={styles.logo_name}>WeiFlix Technical</span>
                        </div>
                        <div className={styles[`media-icons`]}>
                            <Link href="#"><i > <FaFacebookF/> </i></Link>
                            <Link href="#"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com/the.untamed_squad/" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={styles['link-boxes']}>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Company</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Services</li>
                            <li><a href="#">App design</a></li>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Logo design</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Photoshop</a></li>
                        </ul>
                        <ul className={`${styles.box} ${styles['input-box']}`}>
                            <li className={styles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles['bottom-details']}>
                    <div className={styles.bottom_text}>
                        <span className={styles.copyright_text}> Copyright © 2023
                            <Link href="/>"> WeiFlix Technical.</Link> All rights reserved </span>
                        <span className={styles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;