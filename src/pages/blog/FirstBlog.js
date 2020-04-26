import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogImage from '../../components/BlogImage/BlogImage';
import { Helmet } from 'react-helmet'
import BlogBar from '../../components/BlogBar/BlogBar';
import BlogProfile from '../../components/BlogProfile/BlogProfile';
import BlogNav from '../../components/BlogNav/BlogNav';

const tags = [
    {
        active: true,
        desc: 'Technology'
    },
    {
        active: false,
        desc: 'Lifestyle'
    },
    {
        active: false,
        desc: 'Travel'
    }
];

class Blog extends Component {
  render() {
      return (
        <div className="App">
            <Helmet>
                <title>Intro to Krish</title>
            </Helmet>
            <NavBar/>
            <Header title="First Blog!" link_test="Intro to Krish" link="/blog/first"/>
            <section class="blog_area single-post-area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 posts-list">
                            <div class="single-post row">
                                <BlogImage img="feature-img1.png"/>
                                <BlogBar tags={tags} date="13 September, 2019"/>
                                <div class="col-lg-9 col-md-9 blog_details">
                                    <h2>CSC290 - Intro to Krish Chowdhary</h2>
                                    <p class="excert">
                                        Hi, my name is Krish Chowdhary. I’m a third year Computer Science student at the University of Toronto. 
                                        I have a breadth of experience in industries such as automotive, insurance and real estate. 
                                        In my previous roles I have worked as full stack developer at the Ford Motor Company 
                                        (the glass building just off the QEW) and as a Cyber Security Consultant at Ernst & Young. 
                                        I am a fast learner, I'm curious about learning new technologies and most importantly I am passionate working on tough problems. 
                                        I’m excited to learn more about (insert team) at (insert company).
                                    </p>
                                    <p>
                                        That’s been my go-to elevator pitch for the past year. 
                                        The script I recite when I meet a recruiter, hiring manager or interviewer. 
                                        It’s worked well enough for me in the past, and it’s certainly helped with getting my foot into a couple of doors. 
                                        With a few minor tweaks, it works for many (or all) events: coffee chats, conferences, information and networking sessions. 
                                        The end goal of this is an internship, part-time job or volunteer position, something fun and interesting where I can learn and contribute my skills. 
                                        When it comes to career goals, this is really the crux of it. 
                                        I want a job where I can excel, be challenged and rewarded for my work, without being boxed into one specific task or niche. 
                                    </p>
                                </div>
                                <div class="col-lg-12">
                                    <div class="quotes">
                                        To take a short break from the wall of text, I'm sharing some photos from my recent trip to Alaska below!
                                        I really love travelling and taking pictures everywhere go since it helps me remember all the interesting people
                                        I meet and things I see. In Alaska, I travelled to a handful of cities, the pictures below are from Skagway, Glacier Bay and Ketchikan
                                        which are all located pretty close to the Yukon border.
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog1/img1.jpg" alt=""/>
                                            <div class="quotes">Yukon/Alakska Border: The Canadian Immigration office is about 20 kilometers down the road from the border, this means you're in Canada before immigration</div>
                                        </div>
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog1/img2.jpg" alt=""/>
                                            <div class="quotes">Northern Lights: We got lucky seeing the northern lights this early in the season! The picture doesn't do them justice</div>
                                        </div>	                               
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog1/img3.jpg" alt=""/>
                                            <div class="quotes">Glacier Bay: This glacier is covered by dirt and rocks, but it once was so large that it formed the entire valley during an ice age</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog1/img4.jpg" alt=""/>
                                            <div class="quotes">Salmon Ladder: This river is called the Salmon Ladder because thousands of Salmon pass through while going upstream to spawn</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog1/img5.jpg" alt=""/>
                                            <div class="quotes">Rainbird Trail: This trail takes about 2 hours to fully traverse and it involves some pretty beautiful areas like this one. It was a lot of work but definitely worth it!</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog1/img6.jpg" alt=""/>
                                            <div class="quotes">Dinner: It's not all about the places we went to, we also got to meet some amazing people, including a famous Comedian and a background singer from the Voice</div>
                                        </div>	
                                        <div class="col-lg-12 mt-25">
                                            <p>
                                                On a broader scale, my main goal is to continue to make time for my interests, namely: movies, TV shows, hiking and travelling. 
                                                I find I can get overwhelmed with work and then I forget to take time to relax. 
                                                This time to unwind is becoming something more and more import to me as my workload increases. 
                                                In school, I generally try to aim for grades in between 80 to 90 percent for most of my classes, 
                                                I find this range gives me flexibility to make time for my other priorities. 
                                                However, there have been quite a few exceptions to this recently. 
                                                The main reason for this is my courses are mainly core Computer Science now, and I am really enjoying learning this material. 
                                                In CSC290, I’m setting the bar high by aiming for a grade in the mid 90s. 
                                                This goal is based on my experience where I have seen how poor communication has affected deadlines
                                                and how much of a detriment it can be for someones career. 
                                            </p>
                                            <p>
                                                I would be happy to share my knowledge and experience with job hunting, interviewing and networking 
                                                with my fellow peers. 
                                                I am by no means an expert, but I’ve gone through the rounds with several organizations. 
                                                Additionally, I would be happy to share my tips for finding an ROP or TA-ship at U of T.
                                                I would love any help with practicing technical interviews, 
                                                but I am also always looking for peers who are interested in attending 
                                                conferences, information sessions and networking sessions. 
                                                I feel there’s a lot of value to be gained from these sessions if you can attend 
                                                with a group of like-minded peers.
                                            </p>	
                                            <p>
                                                That’s all for this week’s blog, I’m looking forward to seeing you again next week!
                                                <br/>
                                                <br/>
                                                Cheers,
                                                <br/>
                                                <br/>
                                                Krish Chowdhary
                                            </p>								
                                        </div>									
                                    </div>
                                </div>
                            </div>
                            <BlogNav
                            prev="N/A"
                            prev_link="#"
                            next="Best Project"
                            next_link="/blog/second"
                            />
                        </div>
                        <BlogProfile/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        );
    }
}

export default Blog;
