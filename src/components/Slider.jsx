import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dumbeldore from '../images/dumbeldore.jpg'
import minerva from '../images/minerva.jpg'
import snape from '../images/snape.jpg'
import flitwick from '../images/flitwick.jpg'
import sprout from '../images/sprout.jpg'                  

import './css/slider.css'

export default function Slider() {
    return (
        <>
        <div className="carousel-wrapper container margin">
        <span className="our-professor">Our Professors</span>
            <Carousel infiniteLoop  showStatus={false} showThumbs={false} className="field">                
                <div className="carousel">
                

                <img src={dumbeldore} className="image" />
                
                <div className="content">
                    {/* <h1>Albus Dumbeldore</h1>
                     */}
                     <span className="heading">Albus dumbeldore</span><br/>
                     He was an English half-blood wizard, who was the Defence Against the Dark Arts Professor, later the Transfiguration Professor, and later the Headmaster of Hogwarts School of Witchcraft and Wizardry. Professor Dumbledore also served as Supreme Mugwump of the International Confederation of Wizards and Chief Warlock of the Wizengamot . He was a half-blood, Muggle-supporting wizard considered to have been the greatest wizard of modern times, perhaps of all time. The son of Percival and Kendra Dumbledore, and the elder brother of Aberforth and Ariana. 
                </div>
                </div>
                <div className="carousel">
                <img src={snape} className="image" />
                <div className="content">
                    <span className="heading">Severus Snape</span><br/>
                    He is the head of SLYTHERIN house. He was an English half-bloodwizard serving as Potions Master, Defence Against the Dark Arts professor, and Headmaster (1997-1998) of the Hogwarts School of Witchcraft and Wizardry as well as a member of the Order of the Phoenix and a Death Eater. His double life played an extremely important role in both of the Wizarding Wars against Voldemort. The only child of Muggle Tobias Snape and Gobstones witch Eileen Snape, Severus was raised in the Muggle dwelling of Spinner's End, which was in close proximity to the home of the Evans family, though in a poorer area.
                </div>
                </div>
                <div className="carousel">
                <img src={minerva} className="image" />
                <div className="content">
                    <span className="heading">Minerva McGonagall</span><br/>
                    She is the head of GRYFFINDOR house.She was a Scottish half-blood witch, the only daughter of Muggle Robert McGonagall and witch Isobel Ross. She also was the older sister of Malcolm and Robert Jnr. Minerva attended Hogwarts School of Witchcraft and Wizardry and was Sorted into Gryffindor House, but it took the Sorting Hat five and a half minutes to decide if she was Gryffindor or Ravenclaw, which made her a Hatstall. During her seventh year, she was appointed Head Girl.
                </div>
                </div>
                <div className="carousel">
                <img src={sprout} className="image" />
                <div className="content">
                    <span className="heading">Pomona Sprout</span><br/>
                    She is the head of HUFFLEPUFF house. She was a witch who worked as Head of Hufflepuff House and Head of the Herbology department at Hogwarts School of Witchcraft and Wizardry. She attended the school in her youth, where she was Sorted into Hufflepuff and excelled at Herbology. Some time after her graduation, Sprout returned to Hogwarts to teach.
                </div>
                </div>
                <div className="carousel">
                <img src={flitwick} className="image" />
                <div className="content">
                <span className="heading">Filius Flitwick</span><br/>
                He is the Head of RAVENCLAW house. Filius Flitwick was born somewhere in the British Isles into a wizarding family with the distant descent of a goblin, which accounted for his short stature. Prejudged and foredoomed from an early age because of his ancestral connection to a different breed of being that was both regarded and treated as second-class citizens by much of the wizarding community,
                </div>
                </div>
            </Carousel>
            
        </div>
        </>

    );
}