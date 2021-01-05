import react, { Component } from 'react'
import game from '../images/game.png'
import triwizard from '../images/triwizard.jpg'
import mess from '../images/mess.jpg'
import dorms from '../images/dorms.jpg'


import './css/card.css'
function Card() {
    return (
        <>
            <div data-aos="fade-up">

                <span className="our-professor container">Life At HOGWARTS</span>
            </div>
            <div data-aos="fade-up"> 
            <div className="life-compiled container">
                <div className="life ">
                    <img src={game} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Quidditch</h5>
                        <p className="card-text">Quidditch is a sport of two teams of seven players each mounted on broomsticks played on a hockey rink-sized pitch. </p>
                        <a href="#" class="btn btn-outline-warning life-btn ">Read More</a>
                    </div>
                </div>
                <div className="life ">
                    <img src={triwizard} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Triwizard Cup</h5>
                        <p className="card-text">The Triwizard Tournament was a magical contest held between the three largest wizarding schools of Europe.</p>
                        <a href="#" class="btn btn-outline-warning life-btn ">Read More</a>
                    </div>
                </div>
                <div className="life ">
                    <img src={mess} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">The Great Hall</h5>
                        <p className="card-text">The Great Hall in the Hogwarts Castle was the main gathering area in the school, which was located off the Entrance Hall.  </p>
                        <a href="#" class="btn btn-outline-warning life-btn ">Read More</a>
                    </div>
                </div>
                <div className="life ">
                    <img src={dorms} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Common Room</h5>
                        <p className="card-text">A common room is a shared lounge area in Hogwarts School of Witchcraft and Wizardry. There is one for each house. </p>
                        <a href="#" class="btn btn-outline-warning life-btn ">Read More</a>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}
export default Card;