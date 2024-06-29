import React, { useState } from 'react'
import './Header.css';
import './HeaderRes.css';
// import './HeaderMedia.css';
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import logo from '../assets/ajegunleCityMarathon.png'

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className='header_main_container'>
            <div className="header_main_wrapper">
                <div className="header_logo_container">
                    <img src={logo} alt="" />
                </div>
                <ul className='header_menu_wrapper'>
                    <li>
                        <NavLink to={'/'} className={'menu_not_active'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} className={'menu_not_active'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/get_involve'} className={'menu_not_active'}>Get involve</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blog'} className={'menu_not_active'}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/resources'} className={'menu_not_active'}>Resources</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/gallery'} className={'menu_not_active'}>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/donate'} className={'menu_not_active'}>Donate</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact_us'} className={'menu_not_active'}>Contact us</NavLink>
                    </li>
                </ul>
                <div className="header_main_wrapper_mobile">
                    <div className='header_burger_menu_container'>
                        {
                            menu ? <IoMdClose
                                onClick={() => {
                                    setMenu(false);
                                }}
                            /> :
                                <RxHamburgerMenu onClick={() => {
                                    setMenu(true)
                                }} />
                        }
                    </div>
                    {/* {
                    menu ? <div className='header_mobile_menu'>
                        <ul>
                            <li>
                                <a href="#/">Home</a>
                            </li>
                            <li>
                                <a href="#/contact_us">Contact Us</a>
                            </li>
                            <li>
                                <a href="#/about_us">About Us</a>
                            </li>
                            <li>
                                <a href="#/blog">Blog</a>
                            </li>
                        </ul>
                    </div> : null
                } */}
                </div>
            </div>

        </div>
    )
}

export default Header