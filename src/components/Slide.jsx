import React from 'react'
import './css/slide.css'
import about from '../images/about us.jpg'
import legacy from '../images/legacy.jpg'
class Slide extends React.Component
{
    render(){
        return (
            <>
            <div data-aos="fade-up">
            <button className="readmore btn1 btn2 ">About Us</button>
            <div className="about container">
                {/* <div className="photo">
                </div> */}
                <img src={about} className="photo" />

                <div className="about-us">
                Hogwarts School of Witchcraft and Wizardry was the British wizarding school, located in the Scottish Highlands.It accepted magical students from Great Britain and Ireland for enrolment. It was a state-owned school, funded by the Ministry of Magic.The precise location of the school could never be uncovered because it was rendered Unplottable. To Muggles, the school appeared to be an old, abandoned castle. <br/>
            <button className="readmore btn1">Read More</button>
            </div>
            </div>
            </div>
            <div data-aos="fade-up">

            <button className="readmore btn1 btn2 ">Our Legacy</button>
            <div className="about container">
            {/* <div className="photo">
            </div> */}

            <div className="about-us">
            Established around the 10th century, Hogwarts was considered to be one of the finest magical institutions in the Wizarding World, though other notable schools included Beauxbatons Academy of Magic in France, the Durmstrang Institute implied to be in northern Europe, and Ilvermorny School of Witchcraft and Wizardry in the United States.<br />
            <button className="readmore btn1">Read More</button>

        </div>

            <img src={legacy} className="photo" />
        </div>
        </div>
        </>
        )
    }

}
export default Slide;