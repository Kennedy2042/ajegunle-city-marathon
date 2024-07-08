import { IoMdPlay } from 'react-icons/io'
import './About.css'
import './AboutRes.css'
import oba1 from '../assets/oba1.jpg'
import oba2 from '../assets/oba2.png'
import oba3 from '../assets/oba3.png'
import about4 from '../assets/about4.png'
import about5 from '../assets/about5.png'
import about6 from '../assets/about6.png'
import commitee1 from '../assets/commitee1.png'
import commitee2 from '../assets/commitee2.png'
import commitee3 from '../assets/commitee3.png'
import commitee4 from '../assets/commitee4.png'
import commitee5 from '../assets/commitee5.png'
import commitee6 from '../assets/commitee6.png'
import commitee7 from '../assets/commitee7.png'
import commitee8 from '../assets/commitee8.png'
import commitee9 from '../assets/commitee9.png'
import commitee10 from '../assets/commitee10.png'
import commitee11 from '../assets/commitee11.png'
import commitee12 from '../assets/commitee12.png'
import { NavLink } from 'react-router-dom'






const About = () => {


  const AboutCard = (props) => {
    return (
      <div className='about_card_body'>
        <div className="about_card_img_div">
          <img src={props.img} alt="committe member" className='about_card_img' />
        </div>
        <div className="about_card_name_committe_wrapper">
          <h2 className='about_card_name_committe_H2'>{props.H2}</h2>
          <p className='about_card_name_committe_P'>{props.P}</p>
        </div>
      </div>
    )
  }





  return (
    <div className='about_main_body'>
      <div className="about_hero_wrapper">
        <ul className='about_hero_UL'>
          <li>
            <NavLink to={'/about_general_info'} className={'about_menu_not_active'}>General info</NavLink>
          </li>
          <li>
            <NavLink to={'/about_category_of_participant'} className={'about_menu_not_active'}>Category of Participants</NavLink>
          </li>
          <li>
            <NavLink to={'/about_how_to_register'} className={'about_menu_not_active'}>How to register</NavLink>

          </li>
          <li>
            <NavLink to={'/about_routes_and_map'} className={'about_menu_not_active'}>Routes & Map</NavLink>

          </li>
          <li>
            <NavLink to={'/about_prizes'} className={'about_menu_not_active'}>Prizes</NavLink>

          </li>
          <li>
            <NavLink to={'/about_race_result'} className={'about_menu_not_active'}>Race Results</NavLink>

          </li>
        </ul>
        <div className="about_hero_img_wrapper">
          <div className="about_hero_image_div">
            <div className="about_hero_image_play_btn">
              <IoMdPlay />
            </div>
          </div>
        </div>
      </div>
      <div className="about_AJCYM_project_div">
        AJCYM Project
      </div>
      {/* <div className="about_AJCYM_project_marathon">
        “ABOUT AJEGUNLE CITY YOUTH MARATHON”
      </div> */}
      <div className="about_AJYCM_project_article_wrapper">
        <div className="about_AJYCM_project_article_image_wrapper">
          <div className="about_AJYCM_project_article_left_image_container1">
            <img src={oba1} alt="athlete" className='about_AJYCM_project_article_left_image' />
            <p className='about_AJYCM_project_article_right_image_container2_P1'>HIS ROYAL MAJESTY
              OBA MOROOF OYEKUNLE ATANDA
              AMODU TIJANI (AMORE III)
              OLU OF IWA AND APAPA KINGDOM</p>
          </div>
          <div className="about_AJYCM_project_article_right_image_container2">
            <img src={oba2} alt="athlete" className='about_AJYCM_project_article_right_image1' />
            <p className='about_AJYCM_project_article_right_image_container2_P1'>HON. FATAI ADEKUNLE AYOOLA
              EXECUTIVE CHAIRMAN
              AJEROMI-IFELODUN LGA</p>
            <img src={oba3} alt="athlete" className='about_AJYCM_project_article_right_image2' />
            <p>HON. OLUFEMI OKEOWO AKANBI
              EXECUTIVE CHAIRMAN
              IFELODUN LCDA</p>
          </div>
        </div>
        <div className="about_AJYCM_project_article">
          <div className="about_AJCYM_project_marathon">
            “ABOUT AJEGUNLE CITY YOUTH MARATHON”
          </div>
          <p className='about_AJYCM_project_article_P'>
            The<span className='about_AJYCM_project_article_SPAN'> Ajegunle City Youth Marathon, 2024</span> is organized by Society for Information and Human Advancement Initiative, SOHAI a non-profit making organisation in Partnership with the National Youth Council of Nigeria Ajeromi-Ifelodun Local Chapter (NYCN-AJIF) and together with other consortium partners represented on the Local Organising Committee (LOC) which includes: Ajegunle Co-Working Hub, Kobis Global Studios, Klick Designs, Mula Integrated Concepts, The Curve Africa, and National Youth Council Of Nigeria, Ifelodun Local Chapter (NYCN-Ifelodun). The Ajegunle City Youth Marathon, 2024 is the maiden edition and promising to become a major sporting event in the annals of the Ajegunle community. The marathon is set to attract thousands of participants from all over Ajegunle communities and beyond, and will provide a platform to showcase the community’s potential for sports and tourism and also for young athletes to showcase their talents and compete for prizes. The Ajegunle City Youth Marathon, 2024 beyond just a sporting event; it is also a community event that will brings people together and promote peace and unity. The marathon is a celebration of the resilience and determination of the youth of Ajegunle, and it is a source of inspiration for the entire community.
          </p>
          <p className='about_AJYCM_project_article_P'>
            In addition to promoting health and fitness, youth development and empowerment, the Ajegunle City Youth Marathon, 2024 also serves as a fund raiser for various community projects to support educational programs, healthcare initiatives, and other projects that will benefit the youth of Ajegunle.
          </p>
          <p className='about_AJYCM_project_article_P'>
            The Ajegunle City Youth Marathon, 2024 event consists of the main 5kilometer race (5K #RUNAjegunle) event that runs through strategic routes across streets from Ajeromi-Ifelodun LGA to Ifelodun LCDA, showcasing Ajegunle’s key socio-cultural values, ethnic diversity among participants and onlookers, economic potential and abundance of humans resources in her populousness, while promoting healthiness and peaceful coexistence for building sustainable communities. The event will also feature pre/and post activities including side events (that will host dignitaries, private corporate partners, government and key community stakeholders amidst other variety of activities which will make the entire event a memorable and laudable one to enter into the annals of Ajegunle Youth Council and LGA/LCDA.
          </p>
          <p className='about_AJYCM_project_article_P'>
            The Ajegunle City Youth Marathon is a symbol of hope for brighter future and inspiration for the youth of Ajegunle, and it is a reminder that our communities can only develop and thrive in a peaceful and eco-friendly atmosphere.
          </p>
        </div>
      </div>
      <div className="about_AJYCM_local_committee_container">
        <div className="about_AJYCM_local_committee_body">
          <h1 className='about_AJYCM_local_committee_body_H1'>Local Organising Committee</h1>
          <p className='about_AJYCM_local_committee_body_P'> Names of LOC Members and short profile</p>
          <div className="about_AJYCM_local_committee_card_body">
            <AboutCard img={commitee1} H2='Isaac Moses' P={"GENERAL SECRETARY, NYCN-AJIF/PROJECT LEAD, ACYM2024"} />
            <AboutCard img={commitee2} H2='AMB. ISAAC SUCCESS OMOYELE' P={"COORDINATOR, NYCN-AJIF/YOUTH HOST & HEAD OF PUBLIC RELATIONS, AJCYM2024"} />
            <AboutCard img={commitee3} H2='COMRD. PRINCE ADEMOLA IGI-ABA LAWAL' P={"COORDINATOR, NYCN-IFELODUN/YOUTH CO-HOST & HEAD OF COMMUNITY MOBILIZATION, ACYM2024"} />
            <AboutCard img={commitee4} H2='HON. MC.ANTHONY ANAELECHUKWU' P={"DIRECTOR GENERAL, AJEROMI-IFELODUN SPORTS COUNCIL/TECHNICAL ADVISOR & CHIEF OFFICIAL, ACYM2024"} />
            <AboutCard img={commitee5} H2='PRINCE OGAGA WOWO' P={"CEO, KOBIS GLOBAL/STRATEGIC MEDIA & COMMUNICATIONS LEAD ACYM2024"} />
            <AboutCard img={commitee6} H2='OGHENEKARO RACHEAL LAWRENCE' P={"GENDER ADVOCACY FOCAL POINT, SOHAI/HEAD OF MARKETING & ADVERTISEMENT, ACYM2024"} />
            <AboutCard img={commitee7} H2='SAMUEL KELECHI' P={"CEO, THE CURVE/ICT & STRATEGIC KNOWLEDGE MANAGEMENT LEAD, ACYM2024"} />
            <AboutCard img={commitee8} H2='OGHENEKOME RICHARD' P={"PROJECT DIRECTOR, SOHAI/QUALITY ASSURANCE LEAD, ACYM2024"} />
            <AboutCard img={commitee9} H2='MICHAEL UTEDI' P={"CEO, MULA INTEGRATED CONCEPT/LOGISTIC & SUPPLY LEAD, ACYM2024"} />
            <AboutCard img={commitee10} H2="ESE UCHE GOD'S-WILL" P={"CEO, KLICK DESIGNS/CONTENT MANAGEMENT AND BRANDING LEAD, ACYM2024"} />
            <AboutCard img={commitee11} H2='HON. AMUDALAT TEMITOPE OLOOLA' P={"SOCIAL SECREATRY, NYCN-IFELODUN/VOLUNTEER COORDINATOR, ACYM2024"} />
            <AboutCard img={commitee12} H2='GODSPOWER  O. EBIZE' P={"CEO, KODED LAFF ENTERTAINMENT/MARKETING & PUBLICITY"} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About