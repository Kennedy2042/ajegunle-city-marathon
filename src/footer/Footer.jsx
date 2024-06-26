import './Footer.css'
import ajCityMarathon from '../assets/ajegunleCityMarathon.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer_mainBody'>
            <div className="footer_wrapper">
                <img src={ajCityMarathon} alt="" />
                <ul>
                    <li>About Marathon</li>
                    <li>General info</li>
                    <li>Category of Participants</li>
                    <li>How to register</li>
                    <li>Routes & Map</li>
                    <li>Prizes</li>
                    <li>Race</li>
                    <li>AJCYM Project</li>
                    <li>Local Organising Committee</li>
                </ul>
                <ul>
                    <li>Get Involved</li>
                    <li>Register for Race</li>
                    <li>Volunteer</li>
                    <li>Media Accreditation</li>
                    <li>Become a sponsor</li>
                    <li>Partner with us</li>
                    <li>Donate</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Health Tips</li>
                    <li><NavLink to={'/nutrition_tips'}>Nutrition Tips</NavLink></li>
                    <li>Training Tips</li>
                    <li>Beginners Training</li>
                    <li>Regular Runners Training</li>
                </ul>
                <ul>
                    <li>News &Updates</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer