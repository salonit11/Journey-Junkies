import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
     desc: `Explore real-time weather updates and forecasts all in one user-friendly website.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Immerse in unforgettable journeys with expert-led tours and instant booking options.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Explore tailored travel experiences with personalized itineraries and local insights.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList