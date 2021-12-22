import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./GetLove.css"
const GetLove = () => {


    return (
        <div className="">
            <div className="d-block p-2 mx-auto">
                <Carousel className='w-100'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 img-fluid custom "
                            src="https://c.tenor.com/ApwLo0725IoAAAAM/rosycheeks-mochi-peach.gif"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 img-fluid custom "
                            src="https://c.tenor.com/8QzDyja2bhMAAAAM/love-hug.gif"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 img-fluid custom"
                            src="https://c.tenor.com/44hM4CjIbmoAAAAM/hug-kiss.gif"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 img-fluid custom"
                            src="https://c.tenor.com/S-ZkEwV3kQUAAAAM/snow-white-kiss.gif"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 img-fluid custom "
                            src="https://c.tenor.com/f_q9fU0XQ7sAAAAj/130718-my-love.gif"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid custom "
                            src="https://c.tenor.com/Y4YJ6c_fU1AAAAAM/puuung-cute.gif"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

            </div>

        </div>
    );
};

export default GetLove;