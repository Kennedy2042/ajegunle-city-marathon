import './NutritionTip.css'
import resources from '../../assets/resources1.svg'
import nutrition3 from '../../assets/nutrition3.png'
import nutrition4 from '../../assets/nutrition4.png'
import { HealthCard } from '../healthTip/HealthTip'


const CoffeeCard = () => {
    return(
        <div className='coffe_card_body'>
            <div className="coffee_card_icon_wrapper"></div>
        </div>
    )
}


const NutritionTip = () => {


    return (
        <div className='nutrition_tip_mainBody'>
            <div className="nutrition_tip_hero_section">
                <div className="nutrition_hero_wrapper">
                    <img src={resources} alt="resources" />
                </div>
            </div>
            <div className="nutrition_tip_main_container">
                <div className="nutrition_tip_main_wrapper">
                    <div className="nutrition_tip_H1_holder">
                        <div className="nutrition_tip_H1_container">
                            <h1 className='nutirition_tip_H1'>NUTRITIONAL TIPS :</h1>
                            <p className='nutirition_tip_P'>Take Stock Of Your Diet Habits</p>
                            <h2 className='nutrition_tip_H2'>Nutrition</h2>
                            <p className='nutrition_tip_P2'>The Ajegunle City Youth Marathon, 2024 may be months and many training miles away but as far as your diet is
                                concerned, the preparations for race day can start now. The good news is that you probably won’t have to make
                                drastic changes to your current eating
                                habits; there is no need to buy expensive supplements or special foods.
                            </p>
                        </div>
                        <div className="nutrition_tip_H1_image_wrapper">
                            <img src={nutrition3} alt="nutritious meal" className='nutrition_tip_H1_image' />
                        </div>
                    </div>
                    <HealthCard H1={"ON YOUR MARKS"} P={"As you embark on your training programme you should take stock of your current diet habits. Remember that food is the fuel that will help to ensure your body makes it through the miles of training in the months ahead. Flunk on your diet and fluid intake and you risk feeling tired and run-down. Use this checklist to make sure you are giving yourself the right start."} />
                    <div className="nutrition_eating_enough_wrapper">
                        <div className='nutrition_eating_enough_img_holder'>
                            <img src={nutrition4} alt="nutrtious meal" className='nutrition_eating_enough_img' />
                        </div>
                        <div className='nutrition_eating_enough_article'>
                            <h2>Are You Eating Enough?</h2>
                            <p>You should aim to get around 60 per cent of all your daily calories from foods which are high in carbohydrate
                                including bread, pasta, potatoes, rice, beans, lentils, fruits and vegetables. Unlike protein and fat, carbohydrate
                                is stored in your muscles so that it is readily available for energy when you are running.
                            </p>
                            <h2>Should You Be Eating Before You Run?</h2>
                            <p>Some runners claim to perform perfectly well on an empty stomach, but it is fair to say that most of the scientific
                                evidence is against them. Eating 2-4 hours before you exercise means]that some of the gastric juices in your
                                stomach will be absorbed, leaving you feeling less hungry when you set off.
                            </p>
                        </div>
                    </div>
                    <HealthCard H1={"Race Morning"} P={"There are no hard and fast rules here, only to leave enough time for your pre-race meal to digest so that you don’t feel uncomfortably full. In general, a large meal takes around four hours to digest, a smaller meal up to two hours. Do not be tempted by a hotel breakfast or try anything new at this stage. Drink plenty of fluids in the 2-3 hours before you start and a small cup water about ten minutes before the "} />
                    <div className="nutrition_coffee_drink_wrapper">
                        <CoffeeCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutritionTip