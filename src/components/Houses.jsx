import react from 'react'
import gryffindor from '../images/gryffindor.jpg'
import slytherin from '../images/slytherin.jpg'
import ravenclaw from '../images/ravenclaw.jpg'
import hufflepuff from '../images/hufflepuff.jpg'
import potter from '../images/potter.jpg'
import draco from '../images/draco.jpg'
import cho from '../images/cho.jpg'
import cedric from '../images/cedric.webp'

import './css/houses.css';

function Houses(){
    return(
        <div >
            <div className="card gryffindor">
                {/* <span className="house">GRYFFINDOR</span> */}
                <img src={gryffindor} className="bg imagebelow"/>
                <div class=" overlay">
                <img src={potter} alt="" className="text"/>
            </div>
            </div>
            <div className="card gryffindor">
                <img src={slytherin} className="bg imagebelow"/>
                <div class=" overlay">
                <img src={draco} alt="" className="text"/>
            </div>
            </div>
            <div className="card gryffindor">
                <img src={ravenclaw} className="bg imagebelow"/>
                <div class=" overlay">
                <img src={cho} alt="" className="text"/>
            </div>
            </div>
            <div className="card gryffindor">
                <img src={hufflepuff} className="bg imagebelow"/>
                <div class=" overlay">
                <img src={cedric} alt="" className="text"/>
            </div>
            </div>
    </div>
    )
}
export default Houses;