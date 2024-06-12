import './GetInvolve.css'
import getInvolved1 from '../assets/getInvolved1.png'
import getInvolved2 from '../assets/getInvolved2.png'
import getInvolved3 from '../assets/getInvolved3.png'
import getInvolved4 from '../assets/getInvolved4.png'
import getInvolved5 from '../assets/getInvolved5.png'
import getInvolved6 from '../assets/getInvolved6.png'


const GetInvolveCard = (props) => {
    return (
        <div className='getInvolveCard' style={{flexDirection: props.direction}}>
            <div className='getInvolveCardContainer'>
                <img src={props.img} alt="" />
            </div>
            <div className='getInvolveCardWrite'>
                <div className="get_involve_card_h1">
                    {props.h1}
                </div>
                <div className="get_involve_card_p">
                    {props.p}
                </div>
                <div className="get_involve_card_btn">
                    <button>{props.btn}</button>
                </div>
            </div>
        </div>
    )
}





const GetInvolve = () => {
    return (
        <div className='get_involve_main_body'>
            <div className="get_involve_hero_container">
                GET INVOLVED
            </div>
            <div className="get_involve_card_container">
                <div className="get_involve_card_wrapper">
                    <GetInvolveCard  img={getInvolved1} h1='REGISTER FOR A RACE' p="Join the Ajegunle city marathon runners and raise awareness to promote: peace, youth inclusion and good governance." btn=''/>
                    <GetInvolveCard direction='row-reverse' img={getInvolved2} h1='VOLUNTEER' p='' btn=''/>
                    <GetInvolveCard  img={getInvolved3} h1='MEDIA ACCREDITATION' p='' btn=''/>
                    <GetInvolveCard direction='row-reverse' img={getInvolved4} h1='BECOME A SPONSOR' p='' btn=''/>
                    <GetInvolveCard  img={getInvolved5} h1='PARTNER WITH US' p='' btn=''/>
                    <GetInvolveCard direction='row-reverse' img={getInvolved6} h1='DONATE' p='' btn=''/>
                </div>
            </div>
        </div>
    )
}

export default GetInvolve