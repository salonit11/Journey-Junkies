import React from 'react';
import { Container } from 'reactstrap';
import "../styles/aboutus.css"
import banner from "../assets/images/banner4.jpg"
const Aboutus=()=>{
    return(
        <>
        <img src={banner} alt="np" style={{width:"100%"}}></img>
        <Container>

        <div className='content mt-5'>
            <p>At Journey Junkies, we are passionate about travel and exploration. Our mission is to inspire and enable people to embark on unforgettable journeys, discover new cultures, and create lasting memories.</p>
      <p>Founded by a group of avid travelers, our team is dedicated to curating exceptional travel experiences that cater to all types of adventurers, from the intrepid explorer to the luxury seeker.</p>
      <div class="section-title">What sets us apart?</div>
        <div class="section-description">
        <span class="support-text"> Extensive Expertise: </span> Our team has traveled to diverse destinations around the globe and can provide firsthand insights and recommendations.
        </div>
        <div class="section-description">
        <span class="support-text">  Personalized Planning: </span> We believe in tailoring each trip to our customers' preferences and interests, ensuring a unique and memorable experience.
        </div>
        <div class="section-description">
        <span class="support-text">  Sustainability: </span>  We are committed to responsible tourism, striving to minimize our environmental impact and support local communities.
        </div>
        <div class="section-description">
            <span class="support-text">24/7 Support:</span> From the moment you book your trip to your safe return home, our dedicated customer support is here to assist you.
        </div><br></br>
      <p>Whether you dream of relaxing on a pristine beach, embarking on a thrilling adventure, or immersing yourself in the rich history and culture of a new destination, Jouurney Junkies is here to make your travel dreams a reality.</p>
      <p>Join us in exploring the world, one adventure at a time</p>
        </div>
        </Container>
        </>
    )
}

export default Aboutus