import React from 'react';
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import subtitle from '../shared/subtitle';
const Gallery=()=>{
    return(
        <>

    <Container>
            <Row>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
        </>
    )
}

export default Gallery