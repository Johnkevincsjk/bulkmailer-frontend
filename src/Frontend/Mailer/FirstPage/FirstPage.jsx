import '../FirstPage/FirstPage.css'
import { motion } from "framer-motion"
import { FaPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FaHome, FaMailBulk, FaPhone, FaPrint } from 'react-icons/fa'
import Nav from '../NavBar/Nav';




export default function FirstPage() {

    return (
        <section>
            <Nav />
            <div className='container-fluid FirstPage_body'>
                <div className="row">
                    <div className="FirstPage_intro">
                        <motion.h1 initial={{ opacity: 0, x: -200 }} transition={{ delay: 0.5, duration: 1 }} animate={{ opacity: 1, x: 0 }} >Introducing Our <span style={{ color: "#43a046" }}>Mass Email Service</span></motion.h1>
                        <motion.p initial={{ opacity: 0 }} transition={{ delay: 0.8, duration: 1 }} animate={{ opacity: 1 }}>Are you looking for a reliable and efficient way to reach a large audience through email? Look no further! Our mass email sender platform is designed to simplify your email marketing campaigns, whether you’re a business owner, marketer, or blogger.</motion.p>
                        <motion.h1 initial={{ opacity: 0, y: 200 }} transition={{ delay: 0.5, duration: 1 }} animate={{ opacity: 1, y: 0 }}>Get Started Today!</motion.h1>
                        <motion.p initial={{ opacity: 0 }} transition={{ delay: 1, duration: 1 }} animate={{ opacity: 1 }}>Whether you’re sending newsletters, promotions, or announcements, our mass email service has you covered. Sign up now and take your email marketing to new heights!</motion.p>


                        <Link to={'/SecondPage'}><motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className='FirstPage_btn'>Get started <span><FaPlane /></span></motion.button></Link>


                    </div>
                </div>



                <motion.div
                    initial={{ scale: 0.5 }} transition={{ duration: 0.5 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    className="container-fluid howto_card">

                    <h4>How does it work?</h4>
                    <div className=" row  howto_cardslist">
                        <div className=" one_card cards col-4">
                            <Card className='h-100' >

                                <Card.Img className='howto_img' variant="top" src='./images/howto1.svg' />
                                <Card.Body>

                                    <Card.Title>Connect your email service</Card.Title>
                                    <Card.Text>
                                        Connecting your email service is a breeze with our platform. Choose from a diverse range of email services. We support popular services like Gmail. Get started in just a few clicks and unlock the power of seamless email communication.
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                        </div>
                        <div className="one_card cards col-4">
                            <Card className='h-100' >

                                <Card.Img className='howto_img' variant="top" src='./images/howto2.svg' />
                                <Card.Body>

                                    <Card.Title>View sent emails</Card.Title>
                                    <Card.Text>
                                        Easily access and review your sent emails through our intuitive interface. With just a few clicks, you can view the status, content, and recipients of your sent emails, providing you with valuable insights into your email outreach efforts.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>

                        <div className="one_card cards col-4">
                            <Card className='h-100' >

                                <Card.Img className='howto_img' variant="top" src='./images/howto3.svg' />
                                <Card.Body>

                                    <Card.Title>Send email from your code</Card.Title>
                                    <Card.Text>
                                        Now, you can effortlessly send emails right from your code. Allowing you to integrate email functionality seamlessly into your applications. Say goodbye to complicated setups and hello to hassle-free communication with your users.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>  


                    </div>


                </motion.div>

                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1 }} className="faq">
                    <p>FAQ</p>
                    <Accordion>
                        <Accordion.Item className='accordion_css' eventKey="0">
                            <Accordion.Header>Can I use Bulk Email Tool for free?</Accordion.Header>
                            <Accordion.Body>
                                Yes, absolutely! Our Bulk Email Tool service is always free. Whether you're a small business owner, a nonprofit organization, or an individual, you can utilize our platform without any cost. We believe in providing accessible and efficient communication solutions to everyone, regardless of budget constraints. With our free service, you can send bulk emails effortlessly, reaching your audience with ease. Enjoy the benefits of streamlined communication without worrying about fees or subscriptions. Start using our Bulk Email Tool today and experience the convenience of reaching your contacts hassle-free!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='accordion_css' eventKey="1">
                            <Accordion.Header>Can I send HTML emails?</Accordion.Header>
                            <Accordion.Body>
                                Our Bulk Email Tool supports sending HTML emails, allowing you to create visually appealing and dynamic content for your recipients. HTML emails offer more flexibility in design and layout compared to plain text emails, allowing you to include images, links, styled text, and even interactive elements such as buttons or forms.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='accordion_css' eventKey="2">
                            <Accordion.Header>What about plain text emails?</Accordion.Header>
                            <Accordion.Body>
                                With our Bulk Email Tool, you can easily compose and send plain text emails to your subscribers or recipients, ensuring that your message is delivered effectively and that you cater to the preferences of all your subscribers, whether they prefer HTML or plain text content.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </motion.div>



                <div className="container-fluid fistpage_footer" id='contacts'>
                    <div className="row contacts_body">
                        <div className="col-md-3 contact_content">
                            <h5><u>BULK EMAIL TOOL :</u></h5>
                            <p>Our Bulk Email Tool simplifies the process of managing and sending mass emails to your contacts. With powerful features you can easily create and track your email. Stay connected with your audience and grow your business with our efficient email marketing solution.</p>
                        </div>

                        <div className="col-md-3 contact_content">
                            <h5><u>SERVICES :</u></h5>
                            <p>Send Bulk Mail</p>
                        </div>
                        <div className="col-md-3 contact_content">
                            <h5><u>CONTACT :</u></h5>
                            <p><FaHome />New York, NY 10012, US</p>
                            <p><FaMailBulk /> info@example.com</p>
                            <p> <FaPhone /> + 01 234 567 88</p>
                            <p> <FaPrint /> + 01 234 567 89</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>




    )
}
