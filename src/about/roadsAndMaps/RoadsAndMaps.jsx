import { RoadMap } from '../../landingPage/LandingPage'
import './RoadsAndMaps.css'
import './RoadsAndMapsRes.css'
import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import athlete from '../../assets/generalInfo2.png'
import roadsAndMaps from '../../assets/roadsAndMaps.png'




const RoadsAndMaps = () => {


    return (
        <div className='roads_and_map_mainBody'>
            <GeneralHero Title={"Routes & Map"} H1={"Route Map for \nAjegunle City youth Marathon"} />
            <div className="roads_and_map_mainBody_article_section_mainBody">
                <div className="roads_and_map_mainBody_article_section_wrapper">
                    <div className="roads_and_map_mainBody_article_section_wrapper_img_container">
                        <img src={athlete} alt="Athlete" className='roads_and_map_mainBody_article_section_wrapper_img' />
                    </div>
                    <div className="roads_and_map_mainBody_article_section_wrapper_article_container">
                        <p className='roads_and_map_mainBody_article_section_wrapper_article_container_P'>
                            Start point/Maracana Stadium - Ojokwu street - Kirikiri road - wilmer link brindge - Oregie mba road - Baale Aderemo street - Boundary road - olowo jeunjeje street- sanusi street - Layinka street - Badia ijora road - Mosafejo road - Ojo road - Signals Barraks/End point.
                        </p>
                        <div className='roads_and_map_mainBody_article_section_wrapper_article_image'>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929.222631862073!2d3.352426541093896!3d6.443926885278919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bcc76eaf46b%3A0xe296700d8fa9e6f2!2sAjegunle%2C%20Ikeja%20102272%2C%20Lagos!5e0!3m2!1sen!2sng!4v1720429094726!5m2!1sen!2sng"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                        </div>
                    </div>
                </div>
            </div>
            <RoadMap />
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute/>
        </div>
    )
}

export default RoadsAndMaps