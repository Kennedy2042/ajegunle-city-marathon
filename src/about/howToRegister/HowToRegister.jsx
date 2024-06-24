import './HowToRegister.css'
import { GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import athlete from '../../assets/generalInfo2.png'


const HowToRegister = () => {
    return (
        <div className='how_to_register_mainBody'>
            <GeneralHero Title={'How to register'} H1={'How to register for \nAjegunle city youth Marathon'} />
            <div className="how_to_register_article_section_mainBody">
                <div className="how_to_register_article_section_wrapper">
                    <div className="how_to_register_article_section_wrapper_img_container">
                        <img src={athlete} alt="Athlete" className='how_to_register_article_section_wrapper_img' />
                    </div>
                    <div className="how_to_register_article_section_wrapper_article_container">
                    </div>
                </div>
            </div>
            <GeneralRegister />
            <GeneralLearnMore />
        </div>
    )
}

export default HowToRegister