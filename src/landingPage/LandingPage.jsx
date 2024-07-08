import './LandingPage.css'
import './LandingPageRes.css'
import { IoTrophyOutline } from 'react-icons/io5'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/readyNew.png'
import arctIcon from '../assets/arcticons_lets-go-fitness.png'
import map from '../assets/ajegunleMap.png'
// import curve from '../assets/theCurve.png'
// import ajegunle from '../assets/ajegunleHub.png'
// import newsImage1 from '../assets/newsImage1.png'
// import newsImage2 from '../assets/newsImage2.png'
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'
import sponsor1 from '../assets/sponsor1.jpg'
import sponsor2 from '../assets/sponsor2.png'
import sponsor3 from '../assets/sponsor3.jpg'
import sponsor4 from '../assets/sponsor4.png'
import sponsor5 from '../assets/sponsor5.jpg'
import sponsor6 from '../assets/sponsor6.png'
import sponsor7 from '../assets/sponsor7.jpg'
import sponsor8 from '../assets/sponsor8.jpg'
import sponsor9 from '../assets/sponsor9.jpg'
import sponsor10 from '../assets/sponsor10.jpg'
import sponsor11 from '../assets/sponsor11.jpg'
import sponsor12 from '../assets/sponsor12.png'
import { GoArrowRight } from 'react-icons/go'
import { Link, NavLink, useNavigate } from 'react-router-dom'




export const RoadMap = () => {
    return (
        <div className="landing_road_map">
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
    )
}

export const Newscard = ({ img, H4, Span, content }) => {
    const nav = useNavigate()


    const handleClick = () => {
        nav('/blog', {
            state: {
                img, H4, Span, content
            },
        });
    };



    return (
        <div className='landing_news_card'>
            <div className="landing_news_img_container">
                <img src={img} alt="" />
            </div>
            <div className="landing_news_article">
                <div className="landing_news_article_header">
                    <h4 className='landing_news_article_header_h4'>{H4} <span className='landing_news_article_header_span'>{Span}</span></h4>
                </div>
                <div className="landing_news_article_content">
                    {content}
                </div>
                <div className="landing_news_article_btn">
                    <button className='landing_news_article_btn_span' onClick={handleClick}>View all <GoArrowRight /></button>
                </div>
            </div>
        </div>
    )
}



const LandingPage = () => {
    const nav = useNavigate()



    const ReadyCard = (props) => {
        return (
            <div className='landing_ready_card'>
                <div className="landing_ready_card_img_holder">
                    <img src={props.pix} alt="link logo" className='landing_ready_card_img' />
                </div>
                <div className="landing_ready_card_holder" style={{ backgroundColor: props.bg }}>
                    <Link to={props.tag} className='landing_ready_card_A'>{props.link}</Link>
                </div>
            </div>
        )
    }

    const CategoryCard = (props) => {
        return (
            <div className='landing_category_card'>
                <div className="landing_category_card_currency_div">
                    &#8358;
                </div>
                <div className="landing_category_card_title_div">
                    <h2 className='landing_category_card_h2'>{props.h2}</h2>
                    <h2 className='landing_category_card_h2'>{props.h3}</h2>
                </div>
                <ul>
                    {props.l1 && <li>{props.l1}</li>}
                    {props.l2 && <li>{props.l2}</li>}
                    {props.l3 && <li>{props.l3}</li>}
                    {props.l4 && <li>{props.l4}</li>}
                    {props.l5 && <li>{props.l5}</li>}
                    {props.l6 && <li>{props.l6}</li>}
                </ul>
            </div>
        )
    }



    const PriceWon = (props) => {
        return (
            <div className='landing_price_card' style={{ backgroundColor: props.bg }}>
                <div className="landing_price_card_wrapper">
                    <div className="landing_price_icon_holder">
                        {props.icon}
                    </div>
                    <div className="landing_price_title_holder">
                        {props.title}
                    </div>
                    <div className="landing_price_article_holder">
                        {props.article}
                    </div>
                </div>
            </div>
        )
    }

    const FitImage = () => {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img style={{
                    // width: '24px',
                    // height: '24px',
                }} src={arctIcon} alt="" />
            </div>
        )
    }







    return (
        <>
            <div className="landing_body">
                <div className="landing_hero">
                    <div className="landing_hero_wrapper">
                        <h1 className='landing_hero_wrapper_h1'>“AJEGUNLE CITY YOUTH MARATHON, 2024”</h1>
                        <h2 className='landing_hero_wrapper_h2'>...Building Peaceful and cohesive communities.</h2>
                        <p className='landing_hero_wrapper_p'>ACYM2024 THEME: “Creating a Peaceful and Eco-friendly Environment for an Expanded Meaningful Youth Engagement through Sports.”</p>
                        <div className="landing_hero_btn_holder">
                            <button className='landing_hero_btn'><NavLink to={"/register"} className={"landing_hero_btn_navLink"}>Register now</NavLink></button>
                        </div>
                    </div>
                </div>
                <div className="landing_ready">
                    <div className="landing_ready_wrapper">
                        <h1 className='landing_ready_wrapper_h1'>Are you ready ?</h1>
                        <div className="landing_ready_wrapper_card_contain">
                            <ReadyCard pix={image2} link='Click here to Register for to participate at the Ajegunle City Youth Marathon, 2024' bg='rgba(23, 183, 136, 1)' tag={"/register"} />
                            <ReadyCard pix={image3} link='Click here to purchases a raffle tickets and stand a chance to win awesome prizes at the raffle draw event.' bg='rgba(122, 144, 249, 1)' tag={"https://paystack.com/buy/PROD_vxkwxr3edops7u9"} />
                            <ReadyCard pix={image4} link='Click here to place an order for your T-Shirt & Face Cap to support the Ajegunle City Youth Marathon Project.' bg='rgba(23, 150, 183, 1)' tag={"https://paystack.com/pay/o7t1hpl2mt"} />
                        </div>
                    </div>
                </div>
                <div className="landing_category">
                    <div className="landing_category_wrapper">
                        <h1 className='landing_category_wrapper_h1'>CATEGORY OF PARTICIPANTS</h1>
                        <p className='landing_category_wrapper_p'>Teams can compete in the following <span>categories</span>;</p>
                        <div className="landing_category_card_container">
                            <CategoryCard h2='Master Division  ' h3='Persons with Disability' l1='Wheelchair (all males and females Children under 18-29) 5km' l2='Hand crank (all males age under 18 -29) 2.5km' />
                            <CategoryCard h2='Open Division (Individuals)  ' h3='Adolescents and Young Persons aged 16 - 35years (5km)' l1='High School Students (all current high school students)' l2='College Students (all current college students)' l3="Youth Self-Employed/Entrepreneurs" l4="Youth out of school/NEET (Not in Education, Employment and Training)" l5="Police or Military (all active duty or retired firemen, policemen or military personnel" l6="Government Agency (all current or retired from same government agency)" />
                            <CategoryCard h2='Corporate Division (Group/Team)  ' h3='all employees from the same company/organisation (5km)' l1='Male (all males)' l2='Female (all females)' />
                            <CategoryCard h2='VVIP/VIP Division  ' h3='All Sponsors, Government and Private Partners representatives and Key community stakeholders.' l1='Male (all males)' l2='Female (all females)' />

                        </div>
                    </div>
                </div>
                <div className="landing_price_category">
                    <div className="landing_price_price_container">
                        <div className="landing_price_category_wrapper">
                            <PriceWon icon='&#8358;' title='Join The Race' article='The  Marathon goes beyond a race. It is one way to get inspired.' bg='rgba(23, 183, 136, 1)' />
                            <PriceWon icon='&#8358;' title='N300k To Be Won' article='About 300,000 naira is available to be won by contestants.' bg='rgba(23, 183, 136, 1)' />
                            <PriceWon icon={<IoTrophyOutline />} title='Amazing Prizes' article='Complementary prices are  up for grabs.' bg='rgba(23, 150, 183, 1)' />
                            <PriceWon icon={<FitImage />} title='Stay Fit' article='As race day gets closer, you should also begin to fine-tune some aspects of your diet.' bg='rgba(52, 103, 245, 1)' />
                        </div>
                    </div>

                </div>
                <div className="landing_page_map_container">
                    <RoadMap />

                </div>
                <div className="landing_meet_sponsor">
                    <h1 className='landing_meet_sponsor_h1'>Meet our sponsors and partners</h1>
                    <div className="landing_meet_sponsor_logo_div">
                        <img src={sponsor1} alt="SOHAI" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor2} alt="NYCN-AJIF" className='landing_meet_sponsor_logo2' />
                        <img src={sponsor3} alt="AJIF Sports Council" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor4} alt=" KOBIS GLOBAL" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor5} alt="THE CURVE" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor6} alt=" KLICK Designs" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor7} alt=" Ajegunle Co-Working Hub" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor8} alt=" NYCN-IFELODUN" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor9} alt="MULA Integrated Concepts" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor10} alt="Heart To Give Initiative" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor11} alt="ANAYD" className='landing_meet_sponsor_logo_div_img' />
                        <img src={sponsor12} alt="smartpadi" className='landing_meet_sponsor_logo_div_img' />
                    </div>
                </div>
                <div className="landing_news">
                    <h1 className='landing_news_h1'>News and updates</h1>
                    <div className="landing_news_wrapper">
                        <Newscard
                            H4={"AJCYM 2024 -"}
                            Span={"End Point"}
                            img={news1}
                            content={"The Venue for the End Point Event Gig of the Ajegunle City Youth Marathon, 2024; 30th November, 2024 @The Sports Ground, Nigeria Army Signals Barracks, Mile 2."}
                        />
                        <Newscard
                            H4={"AJCYM 2024 -"}
                            Span={"Flag-Off"}
                            img={news2}
                            content={"The Ajegunle City Youth Marathon is Raging higher as we officially flagged-off the project at the floor of The Ifelodun Local Youth Council Management Committee Meeting. Watch out for the biggest gig ever in the city of Ajegunle,.......Coming Soon!"}
                        />
                        <Newscard
                            img={news3}
                            H4={"AJCYM 2024 -"}
                            Span={"Volunteer!"}
                            content={"Are you passionate about empowering youth and promoting fitness, healthy living while advocating for positive change in the community? Join us as a volunteer for the Ajegunle City Youth Marathon, 2024 event and be a part of something extraordinary!"}
                        />
                    </div>
                    <btn className="landing_news_view_more_btn" onClick={() => nav("/blog")}>View more post</btn>
                </div>
                <div className="landing_become_a_sponsor">
                    <div className="landing_become_a_sponsor_wrapper">
                        <div className="landing_beome_a_sponsor_container">
                            <div className='landing_become_a_sponsor_wrapper_1'>
                                <h1 className='landing_become_a_sponsor_wrapper_1_H1'>Become a sponsor</h1>
                                <p className='landing_become_a_sponsor_wrapper_1_P'>SPONSORSHIP CATEGORIES/COST SHARE</p>
                            </div>
                            <div className='landing_become_a_sponsor_wrapper_2'>
                                <ul>
                                    <li>Bronze</li>
                                    <li>Silver</li>
                                    <li>Gold</li>
                                    <li>Platinum</li>
                                    <li>Diamond</li>
                                </ul>
                                <NavLink to={"/contact_us"} className={'menu_not_active_wrapper2'}>
                                    <button className='landing_become_a_sponsor_wrapper_2_button'>
                                        Contact us
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage