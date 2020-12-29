import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import "../index.css"
const LandingPage = () => {
    return ( 
        <div>
        <Grid contained style={{backgroundColor:"rgb(201, 76, 76)"}}>
            <Grid contained>
                <h1 style={{textAlign:"center",color:"white"}}>Welcome to PENETRATORS GAMING RIGS!</h1>
                <p style={{textAlign:"center",color:"white"}}>You'll find all type of gaming rigs here. </p>
            </Grid>
        </Grid>
        <Grid contained> 
        <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/mCfa2Cf4ENSYSCQbpLkwJA.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>NVIDIA 3090 Founder Edition Available</h3>
            <p>Price: 1400$</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/ajs9hEHh2FMwmZKwfZx2gD.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>NVIDIA 3080 Founder Edition Available</h3>
            <p>Price: 700$</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://assets.vg247.com/current//2020/10/geforce-rtx-3070-1.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>NVIDIA 3070 Founder Edition Available</h3>
            <p>Price: 500$</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <section id="about-sec">
        <div className="container">
        <div className="row align-items-center">
        <div className ="col-lg-5 text-center">
        <img src="https://i.pinimg.com/originals/d2/ba/f9/d2baf96c95d6ea162c578ae75157fbad.jpg" className="img-fluid sale-img"></img>
        </div>
        <div className="col-lg-7 text-lg-right text-center text-color about-text">
        <h1>PENETRATORS WINTER SALE!</h1>
        <p className="text">PC Specs:
                    i9-10th Gen
                    32GB Ram
                    GPU Rtx 3090
                    Mobo b550 bazooka
                    2TB SSD NvMe. </p>
        </div>
        </div>
        </div>
        </section>
        <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/d2/ba/f9/d2baf96c95d6ea162c578ae75157fbad.jpg" />
            <Card.Body>
            <h2>PC Specs:
                    i9-10th Gen
                    32GB Ram
                    GPU Rtx 3090
                    Mobo b550 bazooka
                    2TB SSD NvMe</h2>
            <p>
                RS : 367000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://10bestones.com/wp-content/uploads/2019/10/best-gaming-pcs-under-1000.jpg" />
            <Card.Body>
            <h2>PC Specs:
                    r9-5600x
                    32GB Ram
                    GPU Rtx 3090
                    Mobo b550 bazooka
                    2TB SSD NvMe</h2>
            <p>
                RS : 469000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Buy Now</Button>
            </Card.Body>
                </Card>
        <Card>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/63/f4/17/63f4173044fd588dae50fd9db7a79613.jpg" />
            <Card.Body>
            <h2>PC Specs:
                    r5-3600
                    16GB Ram
                    GPU Rtx 3070
                    Mobo b550 bazooka
                    2TB SSD NvMe</h2>
            <p>
            RS : 17800 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
        </Grid>
        </Grid>
        <section className="services py-5 text-center">
    <div className="container">
        <div className="row">
            
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <i className="fas fa-shipping-fast fa-2x"></i>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Free Shipping
                </h5>
                <p className="text-capitalize">
                    We provide Free Shipping on all orders above rs:125000/pkr
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <i className="fas fa-dollar-sign fa-2x"></i>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Cash on delivery
                </h5>
                <p className="text-capitalize">
                    100% Money Back Garauntees
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <i className='fas fa-users fa-2x'></i>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Online Customer Support
                </h5>
                <p className="text-capitalize">
                    24/7 Serving Customers
                </p>
             </div>
             
        </div>
    </div>
</section>
        </div>
     );
}

 
export default LandingPage;