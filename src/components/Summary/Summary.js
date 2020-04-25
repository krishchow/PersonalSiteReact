import React, { Component } from 'react';

class Summary extends Component {
    render() {
        return (
            <section class="about_area section_gap">
                <div class="container">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-lg-5">
                            <div class="about_img">
                                <img class="" src="img/about-us.png" alt=""/>
                            </div>
                        </div>

                        <div class="offset-lg-1 col-lg-5">
                            <div class="main_title text-left">
                                <h2>Let<br/>
                                    Me Introduce<br/>
                                    Myself
                                </h2>
                                <p>
                                    I'm a third year student at the University of Toronto, studying Computer Science
                                    and Mathematics. I'm interested in Software Engineering, Cyber Security, Blockchain,
                                    Data Science, Full-Stack Development, Project Management and Consulting.
                                </p>
                                <p>
                                    Outside of work, I'm a huge film buff, someone my favorite movies include: Fight Club (duh),
                                    Blade Runner, The Fifth Element, Looper, 2001: A Space Odyssey and 12 Angry Men. I also love going
                                    hiking and taking pictures while I'm at it. I keep up with the news via Yahoo Finance, Bloomberg and 
                                    Investing.com. For my tech-specific news I stick to The Verge, Gizmodo and TechCruch. 
                                </p>
                                <a class="primary_btn" href="img/Krish Chowdhary Resume.pdf"><span>Download CV</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Summary;