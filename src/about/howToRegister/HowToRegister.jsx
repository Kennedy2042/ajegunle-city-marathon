import './HowToRegister.css'
import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import athlete from '../../assets/generalInfo2.png'
const ToRegisterCard = ({ H3, P1, P2 }) => {
    return (
        <>
            <h3>{H3}</h3>
            <p>{P1}</p>
            <p>{P2}</p>
        </>
    )
}


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
                        <h1>Forms can be picked up with upon proof and confirmation of payment at following Youth Hubs:</h1>
                        <h1>For group registration, Corporate: Kindly indicate at pick points to obtain the group registration form.</h1>
                        {/* <h3>1. NATIONAL YOUTH COUNCIL OF NIGERIA, AJEROMI-IFELODUN LOCAL CHAPTER (NYCN-AJIF)</h3>
                        <p>Address: C/O, office of the Head of Department, Agriculture, Rural and Youth Social Development, Ifelodun Local Council Development Area Secretariat, Dispensary Street, Mosafejo, Amukoko, Lagos.</p>
                        <p>Tel: + 234 705 640 2139</p>

                        <h3>3. Ajegunle Co-Working Hub</h3>
                        <p>Address: 101 Kirikiri Road, Opp Mobil Filling Station, Wilmer Bus Stop, Olodi Apapa, Lagos.</p>
                        <p>Tel: +234 817 958 6733</p> */}
                        <ToRegisterCard
                            H3={"1. NATIONAL YOUTH COUNCIL OF NIGERIA, AJEROMI-IFELODUN LOCAL CHAPTER (NYCN-AJIF)"}
                            P1={"Address: C/O, office of the Head of Department, Agriculture, Rural and Youth Social Development, Ifelodun Local Council Development Area Secretariat, Bale Adeyemo Street, By Ago-Hausa Bus Stop, Ajegunle, Apapa, Lagos."}
                            P2={"Tel: +234 807 145 2166"}
                        />
                        <ToRegisterCard
                            H3={"2. NATIONAL YOUTH COUNCIL OF NIGERIA, IFELODUN LOCAL CHAPTER (NYCN-IFELODUN)"}
                            P1={"Address: C/O, office of the Head of Department, Agriculture, Rural and Youth Social Development, Ifelodun Local Council Development Area Secretariat, Dispensary Street, Mosafejo, Amukoko, Lagos."}
                            P2={"Tel: + 234 705 640 2139"}
                        />
                        <ToRegisterCard
                            H3={"3. Ajegunle Co-Working Hub"}
                            P1={"Address: 101 Kirikiri Road, Opp Mobil Filling Station, Wilmer Bus Stop, Olodi Apapa, Lagos."}
                            P2={"Tel: +234 817 958 6733"}
                        />
                        <ToRegisterCard
                            H3={"4. KOBIS GLOBAL STUDIOS"}
                            P1={"Address: Plot 17, Ajegunle Street, Olodi-Apapa, Lagos."}
                            P2={"Tel: +234 706 845 89493."}
                        />
                        <ToRegisterCard
                            H3={"5. THE CURVE AFRICA"}
                            P1={"Address: 161/163 Muyibi Street, Olodi Apapa, Lagos. "}
                            P2={"Tel: +234 813 725 3138"}
                        />
                        <ToRegisterCard
                            H3={"6. MULA INTEGRATED CONCEPTS - YOUTH LEISURE HUB AND INFO CENTER"}
                            P1={"Address: 188, Ojo Road, Ligali Bus Stop, Ajegunle, Apapa Lagos."}
                            P2={"Tel: +234 705 692 0659"}
                        />
                        <h4>ENTRY FEE: <span>One Thousand Naira Only (N1,000.00)</span></h4>
                        <h4>SUPPORTERS ENTRY FEE: <span>Ten Thousand Naira Only (N10,000.00)</span></h4>
                        <h4>RAFFLE TICKETS: <span>Five Thousand Naira Only (N5,000.00)</span></h4>
                        <h5>All payment should be made with reference to Ajegunle Marathon into the official account:</h5>
                        <h6>SOCIETY FOR INFO AND HUMAN ADV INIT</h6>
                        <p>1014459817 · Zenith Bank</p>
                        <h4>Any athlete registered under an athletics federation or body either home or abroad is not eligible to run in the 5km #RunAjegunle race.</h4>
                        <a href="">Click Here to Register for 5Km #RunAjegunle Race</a>
                        <a href="">Click Here to See Rules and Regulations</a>
                        <h5>Next Steps…</h5>
                        <h5>Are you ready to RUN?</h5><a href="">Click here for more information.</a>
                        <h5>MARATHON HOTLINES: 08026443165, (additional contact to be updated)</h5>
                        <h5>Emails:</h5><a href=""> info@ajegunlecityyouthmarathon.com</a> <a href="">communityprojects@sohainaija.org</a>

                    </div>
                </div>
            </div>
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute/>
        </div>
    )
}

export default HowToRegister