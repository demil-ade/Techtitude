import logo from './image/logo.png';
import student from './image/student.png';
import cv from './image/cv.png';
import internship from './image/internship.png';
import mentorship from './image/mentorship.png';
import project from './image/project.png';
import Analytics from './image/Analytics.png';
import Scrum from './image/Scrum.png';
import Security from './image/Security.png';
import Design from './image/Design.png';
import footer from './image/footer.png';
import Vector from './image/Vector.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/swiper.min.css";
import { Pagination, Navigation } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useNavigate} from 'react-router-dom';

function HomePage(){
    const date = new Date();

    const route = useNavigate();

    return(
        <div className='Home'>
            <div className='top-panel'>
                <img src = {logo} className='logo' alt="techtitude logo"/>
                <div className='nav-section'>
                    <div className='nav'>
                        <p className='link'>TESTIMONIALS</p>
                        <p className='link'>COURSES</p>
                        <p className='link'>INSTRUCTORS</p>
                    </div>
                    <div className='sign-up' onClick={() => route('/Registration-page')}>SIGN UP NOW</div>
                </div>
            </div>

            <div className='b'>
                <div className='message'>
                    <p className='upskill'>Upskill yourself<i>with</i> TECHTITUDE</p>
                    <p className='empower'>We empower <b>WOMEN</b> with the topical skills and knowledge to become tech leaders</p>
                    <div className='sign-up-two'onClick={() => route('/Registration-page')}>SIGN UP NOW</div>
                </div>
                <img src = {student} className='student' alt='student'/>
            </div>

            <div className='cards'>
                <div className='first'>
                    <div className='logos'><img src= {internship} alt ="internship-logo"/></div>
                    <h6 className='heading'>Internship</h6>
                    <p className='gist'>Our academy provides internship opportunities to our students allowing them to gain practical experience in a real world setting. This helps students apply theoretical knowledge in practical situations and develop skills that employers seek.</p>
                </div>
                <div className='first'>
                    <div className='logos'><img src= {mentorship} alt ="mentorship-logo"/></div>
                    <h6 className='heading'>Mentorship</h6>
                    <p className='gist'>Our experienced mentors guide students through their tech journey, providing advice, support and feedback. This helps our students build confidence, acquire new skills, and gain insight into the tech industry.</p>
                </div>
                <div className='first'>
                    <div className='logos'><img src= {cv} alt ="cv-logo"/></div>
                    <h6  className='heading'>CV Revamp</h6>
                    <p className='gist'>We help students revamp their resumes to showcase their skills, achievements, and projects. This improves their chances of getting noticed by potential employers and getting hired for tech roles.</p>
                </div>
                <div className='first'>
                    <div className='logos'><img src= {project} alt ="project-logo"/></div>
                    <h6 className='heading'>Real Life Project</h6>
                    <p className='gist'>We assign real-life projects to our students allowing them to apply their knowledge and skills to solve real-world problems. This helps our students develop critical thinking, problem-solving, and teamwork skills, and prepares them for future roles in tech.</p>
                </div>
            </div>

            <div className='testimonial'>
                <p className='testimonial-head'>TESTIMONIALS</p>
                <p className='testimonial-about'>What some of our Trainees have to say about us!</p>
                <Swiper
                className= 'testimonial__all-slides'
                loop={true}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={ {clickable: true}}
                >
                    <SwiperSlide>
                        <div className='first-slide'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <div className='first-slide__message'>
                                <p className='intro'>Hello Techtitude,</p>
                                <p >While waiting for my fiancé visa to be approved in America, my husband suggested that I take the Business Analysis course. I am thrilled to share that I now work for one of the top 4 companies in America. I am truly grateful for your outstanding training and support. You guys are the best! I am excited to spread the word about Techtitude and recommend your services to everyone I know.</p>
                                <p className='outro'>Thank you once again!</p>
                            </div>
                            <div className='first-slide__profile'>
                                <div className='picture'></div>
                                <div className='profile-info'>
                                    <p className='name'>Olamide</p>
                                    <p className='position'><i>Business Analysis</i></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='first-slide'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <div className='first-slide__message'>
                                <p className='intro'>Dear Techtitude,</p>
                                <p >Thank you for the excellent Cyber Security course! I now work at a top bank in Nigeria and thoroughly enjoyed the program. Surprisingly, I discovered a passion for coding. Your help with my CV was invaluable, and I'm currently in the second stage of an interview with a Canadian company. Mr. T is an amazing lecturer.</p>
                                <p className='outro'>I highly recommend Techtitude!</p>
                            </div>
                            <div className='first-slide__profile'>
                                <div className='picture'></div>
                                <div className='profile-info'>
                                    <p className='name'>Ajoke</p>
                                    <p className='position'><i>Cyber Security</i></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='first-slide'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <div className='first-slide__message'>
                                <p className='intro'>Hello Techtitude,</p>
                                <p >I had a fantastic time in your classes, and the mentoring session helped solidify my decision to pursue a career as a Business Analyst. This training surpassed my expectations and stood out among others. Thank you for providing exceptional education and guidance. I'm on my way to becoming a great BA, all thanks to Techtitude</p>
                                <p className='outro'>I'm on my way to becoming a great BA, all thanks to Techtitude.</p>
                            </div>
                            <div className='first-slide__profile'>
                                <div className='picture'></div>
                                <div className='profile-info'>
                                    <p className='name'>Anonymous</p>
                                    <p className='position'><i>Business Analysis</i></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='courses'>
                <p className='courses-head'>COURSES</p>
                <p className='courses-about'>Upskill yourself in any of these</p>

                <div className='available-courses'>
                    <div className='data-analytics'>
                        <div className='course-logo'><img src = {Analytics} alt="datanalytics"/></div>
                        <div className='course-info'>
                            <p className='course-name'>Data Analytics</p>
                            <p className='course-description'>Data Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                            <div className='action-info'>
                                <div className='action-buttons'>
                                    <div className='enroll-now'onClick={() => route('/Registration-page')}>Enroll Now!</div>
                                    <div className='download'>Download Brochure</div>
                                </div>
                                <div className='price'>#150,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='data-analytics'>
                        <div className='course-logo'><img src = {Analytics} alt="datanalytics"/></div>
                        <div className='course-info'>
                            <p className='course-name'>Business Analysis</p>
                            <p className='course-description'>Business Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions</p>
                            <div className='action-info'>
                                <div className='action-buttons'>
                                    <div className='enroll-now'onClick={() => route('/Registration-page')}>Enroll Now!</div>
                                    <div className='download'>Download Brochure</div>
                                </div>
                                <div className='price'>#150,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='data-analytics'>
                        <div className='course-logo'><img src = {Security} alt="datanalytics"/></div>
                        <div className='course-info'>
                            <p className='course-name'>Cyber Security</p>
                            <p className='course-description'>Data Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions</p>
                            <div className='action-info'>
                                <div className='action-buttons'>
                                    <div className='enroll-now'onClick={() => route('/Registration-page')}>Enroll Now!</div>
                                    <div className='download'>Download Brochure</div>
                                </div>
                                <div className='price'>#100,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='data-analytics'>
                        <div className='course-logo'><img src = {Design} alt="datanalytics"/></div>
                        <div className='course-info'>
                            <p className='course-name'>UI/UX Design</p>
                            <p className='course-description'>Learn the skills to create visually appealing and user-friendly interfaces. Our UI/UX Design track will teach you the principles of design, user research, wireframing, prototyping, and more. You'll gain practical experience by completing a variety of tasks, including designing web and mobile applications, creating user personas, and conducting usability testing.</p>
                            <div className='action-info'>
                                <div className='action-buttons'>
                                    <div className='enroll-now'onClick={() => route('/Registration-page')}>Enroll Now!</div>
                                    <div className='download'>Download Brochure</div>
                                </div>
                                <div className='price'>#150,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='data-analytics'>
                        <div className='course-logo'><img src = {Scrum} alt="datanalytics"/></div>
                        <div className='course-info'>
                            <p className='course-name'>Scrum</p>
                            <p className='course-description'>Data Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                            <div className='action-info'>
                                <div className='action-buttons'>
                                    <div className='enroll-now'onClick={() => route('/Registration-page')}>Enroll Now!</div>
                                    <div className='download'>Download Brochure</div>
                                </div>
                                <div className='price'>#150,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='instructors'>
                <p className='instructors-head'>INSTRUCTORS</p>
                <p className='instructors-faculty'>The Techtitude Faculties</p>
                <div className='instructors-about'>
                    <p className='paragraph-one'>We are proud to have a team of highly skilled and dedicated instructors who are committed to delivering top-notch education and training services to our students.</p>
                    <p className='paragraph-two'>Our instructors are not only knowledgeable in their respective fields but are also resourceful and competent in using innovative teaching methods and technologies to ensure that our students recieve the best learning experience possible.</p>
                    <p className='paragraph-three'>We are result-oriented and strive to ensure that our students achive their learning goals and objectives in the tech ecosystem. We understand that every student is unique and that learning is a process that requires patience, dedication, and hardwork. Our instructors/facilitators are trained to provide individualized attention and support to each student to help them succeed.</p>
                    <p className='paragraph-four'>At Techtitude Academy, we believe that education is a lifelong journey, and we are committed to supporting our students every step of the way. Join us today and experience the difference that our skilled, resourceful, competent, and result-oriented instructors can make in your educational journey.</p>
                </div>
            </div>

            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-icon'><img src= {footer} alt = 'footer-icon'/></div>
                    <div className='footer-middle'>
                        <div className='footer-links'>
                            <p>COURSES</p>
                            <p>INSTRUCTORS</p>
                            <p>TESTIMONIALS</p>
                        </div>
                        <div className='footer-contact'>
                            <p>7 Adedotun Dina, Mende, Maryland, Lagos - Nigeria.</p>
                            <p>admin@techtitude.org</p>
                            <p>09063940977</p>
                        </div>
                    </div>
                    <div className='footer-email'>
                        <p className='text'>Like to recieve our Newsletter?</p>
                        <div className ='email'>
                            <input className='email-input' placeholder='Enter your Email Here'/>
                            <div className='enter-email'>Read More</div>
                        </div>
                        <img alt ='media' src = {Vector} className='media'/>
                    </div>
                </div>
                <hr className='hr'></hr>
                <p className='copyright'>TECHTITUDE © {date.getFullYear()} - All Right reserved!</p>
            </div>
        </div>
    )
}

export default HomePage;
