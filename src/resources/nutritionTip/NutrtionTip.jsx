import './NutrtionTip.css';
import resources from '../../assets/resources1.svg'
import nutrition2 from '../../assets/nutrition2.svg'
import nutrition3 from '../../assets/nutrition3.svg'
import nutrition4 from '../../assets/nutrition4.svg'
import nutrition5 from '../../assets/nutrition5.png'
import nutrition6 from '../../assets/nutrition6.png'


const NutritionCard = ({ H1, P }) => {
    return (
        <div className='nutrition_card_body'>
            <h1 className='nutrition_card_body_H1'>{H1}</h1>
            <p className='nutrition_card_body_P'>{P}</p>
        </div>
    )
}

const NutritionImage = ({ bgColor, Img, H1 }) => {
    return (
        <div className='nutrition_image_main_container'>
            <div className="nutrition_image_holder" style={{ backgroundColor: bgColor }}>
                <img src={Img} alt="" className='nutrition_image' />
            </div>
            <h1 className='nutrition_image_H1'>{H1}</h1>
        </div>
    )
}

const NutrtionTip = () => {

    return (
        <div className='nutrition_tip_mainBody'>
            <div className="nutrition_tip_hero_section">
                <div className="nutrition_hero_wrapper">
                    <img src={resources} alt="" />
                </div>
            </div>
            <div className="nutrition_tip_body_wrapper">
                <div className="nutrition_tip_body">
                    <div className="nutrition_tip_main_body">
                        <h1 className='nutrition_tip_H1'>HEALTH TIPS :</h1>
                        <div className="nutrition_tip_card_body">
                            <NutritionCard H1={"Medical concern"} P={"A ‘fitness test’ is not sufficient to detect these problems. If you have a family history of heart disease or sudden death, or you have symptoms of heart disease i.e. chest pain or       discomfort on exertion, sudden shortness of breath or rapid palpitations, see your GP who can arrange for you to have a proper cardiac."} />
                            <NutritionCard
                                H1={"Training"}
                                P={" Training should be increased gradually so that you do not suffer prolonged exhaustion and intersperse days of heavy mileage with one or two days of lighter training, so that your body can replace its fuel (muscle glycogen). Rest days are also important.If you have flu, a feverish cold or a tummy bug, do not train until you have fully recovered. Then start gently and build up gradually. Do not attempt to catch up on lost mileage after illness or injury – this may cause further damage or illness. To reduce injury risk, train on soft surfaces when you can, especially on easy training"}
                            />
                            <NutritionCard
                                H1={"Fluids"}
                                P={"Fluids lost in sweat must be replaced otherwise your boy becomes dehydrated and less efficient. Take plenty of non-alcoholic drinks, especially before the race and in hot weather.  Drink enough to keep your urine copious and a pale straw color Drink plenty of liquids after training, especially long runs, and drink during races, especially in the first half of a marathon. Practice drinking during longer training runs. Drink plenty of fluids and reduce alcohol intake in the two days before the race"}
                            />
                            <NutritionCard
                                H1={"Diets"}
                                P={"Eat what suits you! Large doses of supplementary vitamins and minerals (such as iron) are not essential and produce no benefit if you are on a good mixed diet, but additional vitamin C in small doses is reasonable when fresh fruit and vegetables are in short supply.Training helps you to sustain a high level of muscle glycogen if you eat a lot of carbohydrate. If you can, eat within two hours of your long runs and the marathon. This helps replace the muscle glycogen quickly and speeds recovery."}
                            />
                            {/* <NutritionCard 
                            H1={""} 
                            P={""}
                            /> */}
                        </div>
                        <div className="nutrition_image_card">
                            <NutritionImage Img={nutrition2} H1={"Medical Concern"} />
                            <NutritionImage Img={nutrition3} H1={"Training"} />
                        </div>
                        <div className="nutrition_image2_card">
                            <NutritionImage Img={nutrition4} H1={"Diet"} />
                        </div>
                        <div className="nutrition_image_card">
                            <NutritionImage Img={nutrition5} H1={"Fluids"} />
                            <NutritionImage Img={nutrition6} H1={"Clothing"} />
                        </div>
                        <div className="nutrition_tip_card_body">
                            <NutritionCard
                                H1={"Carbon Loading"}
                                P={"Do not change your normal diet drastically in the last week before the marathon, but decrease your intake of protein (meat) and increase your intake of carbohydrate (pasta, bread, potatoes, cereals, rice and sweet things), especially for the last three days when you should also be markedly reducing your training. This loads the muscle with glycogen. Unless you reduce your protein intake you will not eat enough carbohydrate. (Not all runners are helped by first depleting carbohydrate with a long run and low carbon diet and then loading – this can make your muscles very heavy)."}
                            />
                            <NutritionCard
                                H1={"Clothing"}
                                P={"When training in the dark, be seen. Wear white clothing and reflective flashes or bandoliers.Many runners seek medical treatment for blisters at the start. They had either been training too hard in the final two weeks with ill-fitting shoes, or they had worn a new pair of shoes for the last long training run. Use shoes you know from experience will not give you blisters."}
                            />
                        </div>
                        <div className="nutrition_learn_more_btn_container">
                            <button className='nutrition_learn_more_btn'>LEARN MORE</button>
                            <button className='nutrition_learn_more_btn'>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutrtionTip