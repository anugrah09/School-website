import reeact from 'react'
import hogwarts from '../images/hogwarts.jpg'
import './css/coverphoto.css';

function CoverPhoto(){
    return(
        <img src ={hogwarts} className="coverphoto"></img>
    )
}
export default CoverPhoto;