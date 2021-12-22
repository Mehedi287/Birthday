import React from 'react';
import "./FristPage.css"
import img1 from "../../images/animation img.gif"
import img2 from "../../images/birthday-img-2.gif"
import img3 from "../../images/birthday-img-4.gif"
import img4 from "../../images/birthday-img.gif"
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FristPage = () => {

    return (
        <div>
            <div className="d-block p-2 mx-auto">
                <Carousel className='w-100'>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 img-fluid custom"
                            src={img3}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className="d-block w-100 img-fluid custom"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid custom "
                            src={img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="mx-auto love ">
                <Link to="/scondPage"> <button type="button" id="button" class="buttons">next</button></Link>

                <div id="heart1" className="hearts"></div>
                <div id="heart2" className="hearts"></div>
                <div id="heart3" className="hearts"></div>
                <div id="heart4" className="hearts"></div>
                <div id="heart5" className="hearts"></div>
            </div>
        </div>

    );
};

export default FristPage;