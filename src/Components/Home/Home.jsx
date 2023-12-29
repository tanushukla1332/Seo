import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'
import '../Home/Home.css'

export default function Home() {
   



    return (

        <>
            <Container fluid >
                <Row>
                    <Col className='px-0'>
                        <div>
                        <img src="./src/Components/Image/image 3 (1).png" alt="" className='img-fluid'
                            style={{ backgroundRepeat: "no-repeat",width:"100%"}} />
                        </div>
                    </Col>
                </Row>

                <Row style={{ backgroundColor: "#5e5e5e" }} >
                    <Col md={10} className='d-md-flex justify-content-between align-items-center my-lg-3 fw-bold'
                        style={{ color: "#FFFF", letterSpacing: "2px" }}>
                        <p className='my-2 ml-5'>Your search to get discovered ends here</p>
                        <Button variant='dark' className='my-2 py-2 btn1'>Know More</Button>
                    </Col>
                </Row>




                <Row className='justify-content-evenly my-lg-4 '>
                    <Col md={10} className='py-5'>
                        <h1 className='text-center'>Search Engine Optimization</h1>
                        <p >
                            With more than 8.5 billion searches on Google per day, The world has switched to online mode. From carrots to cars, everything can
                            be ordered at the convenience of people’s living room chairs. So, as a business owner, you are bound to question how we can
                            participate in the digital race.
                            <p> With a team of industry experts at Razobyte, we provide our clients with a strategic roadmap to the No. 1 spot. From content
                                strategy to creating quality backlinks. Our SEO experts showcase unparalleled excellence in Search Engine Optimization, whether
                                it’s On page SEO or Off-page SEO. What makes Razobyte one of the most sought-after SEO Agencies is the dedication and hard
                                work our team shows toward every project..</p>

                        </p>

                    </Col>
                </Row>

                <Row className='justify-content-center bgsection'>
                    <Col md={5} style={{ paddingTop: "8rem" }}>
                        <h2 className='text-center hed2'>On-Page SEO</h2>
                        <p  className='para'>We optimize the website for the search engine with strategically
                            targetted and keyword oriented content that is written specifically keeping the client’s need and goals in mind. The content is fully authentic and written by the finest content writers with years of industry specific experience. We ensure that all the pages are optimized i.e. have meta description, H1 Title, Meta title etc.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    <Col md={5} >
                        <img src="./src/Components/Image/pngegg (47) 2.png" alt="" className='img-fluid' style={{paddingTop: "5rem" ,paddingBottom:"5rem"}} />
                    </Col>
                </Row>



                <Row className='justify-content-center '>
                    <Col md={5}  >
                        <img src="./src/Components/Image/Img3.png" alt="" className='img-fluid' style={{paddingTop: "5rem" }} />
                    </Col>
                    <Col md={5} style={{paddingTop: "5rem" ,paddingBottom:"5rem"}}>
                        <h2 className='text-center hed2'>Off-Page SEO</h2>
                        <p  className='para'>With the best SEO experts with more than 10+ experience in the industry, we provide our clients with high quality backlinks and off-page activities. The articles are specially written for off-page submission keeping the nature, audience and theme of the host websites in mind. We partner with a wide range of high quality host websites to help our clients reach their target audience in a cost effective manner.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>

                </Row>
                <Row className='justify-content-center  bgsection'>
                
                <Col md={5} style={{paddingTop: "5rem" ,paddingBottom:"5rem"}}>
                    <h2 className='text-center hed2'>Technical SEO</h2>
                    <p  className='para'>We provide technical solutions to boost the search engine visbility for our client’s website. Our team of industry experts carefully analyze the website for the techniacal errors and irregularities that impact the website’s performance, speed or functionality..</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                <Col md={5}>
                    <img src="./src/Components/Image/ig5.png" alt="" className='img-fluid' style={{paddingTop: "5rem" ,paddingBottom:"5rem"}} />
                </Col>

            </Row>
            <Row>
            <Col>

            </Col>
            </Row>
            <Row className='my-lg-5 justify-content-center'> 
            <Col md={10}  className='py-lg-5'>
            <div className='d-md-flex gap-lg-2 allimages'>
            <img src="./src/Components/Image/img4 (1).png" alt=""  className='img-fluid'/>
            <img src="./src/Components/Image/Group 292.png"alt=""  className='img-fluid'/>
            <img src="./src/Components/Image/img5.png"alt="" className='img-fluid' />
            </div>
          
            </Col>
            </Row>
            <Row style={{ backgroundColor: "#5e5e5e" }}  className='my-5'>
            <Col md={10} className='d-md-flex justify-content-between align-items-center my-lg-3 fw-bold'
                style={{ color: "#FFFF", letterSpacing: "2px" }}>
                <p className='my-2 ml-5'>Getting Your Dream Design is no sweat. a simple mouse click is all you need to get</p>
                <Button variant='dark' className='my-2 py-2 btn1'>Click Here</Button>
            </Col>
        </Row>

            </Container >

        </>

    )
}