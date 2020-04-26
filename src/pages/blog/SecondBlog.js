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
        desc: 'Projects'
    },
    {
        active: false,
        desc: 'Work'
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
                <title>My Best Project</title>
            </Helmet>
            <NavBar/>
            <Header title="Second Blog - Projects" link_test="My Best Project" link="/blog/second"/>
            <section class="blog_area single-post-area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 posts-list">
                            <div class="single-post row">
                                <BlogImage img="feature-img2.png"/>
                                <BlogBar tags={tags} date="22 September, 2019"/>
                                <div class="col-lg-9 col-md-9 blog_details">
                                    <h2>CSC290 - My Best (and Favorite) Project</h2>
                                    <p class="excert">
                                        My process for any project, technical or otherwise, is an agile one since I believe in a process that is both iterative and based on constant feedback. This belief stems from the fact that agile development ensures that the business partner knows exactly what product is being developed for them at any given time. I feel this agile process is best exemplified by my work on revamping the Ford Commercial Vehicle Centre program and as a result it is one of my best (and favorite) projects. The primary objective for this project was to create a new dealership-facing site which leveraged our large amounts of existing data to create an informative web-based data visualization in addition to hosting forms and static content. As the technical lead for the project, I worked closely with all the stakeholders; this was a combination of the external marketing firm we have partnered with and the Ford Fleet team. The main challenges I faced while developing this application were regarding the technology backend and the scope of the project.
                                    </p>
                                </div>
                                <div class="col-lg-12">
                                    <div class="quotes">
                                        To take a short break from the wall of text, I'm sharing some photos from my time at Ford!
                                        Ford was a really amazing company to work for, and I'm really glad I got to do my first internship there.
                                        I learned a lot over the course of the year, and I'm fortunate that I could see my main projects through until the end of my term.
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog2/img1.jpg" alt=""/>
                                            <div class="quotes">Free Chocolate: Ford had a really strong relationship with the Me to We organization, and part of that meant a lot of free Swag for me, including: books, totes and donuts</div>
                                        </div>
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog2/img2.jpg" alt=""/>
                                            <div class="quotes">Free Coffee: One of the nice perks of Ford was after a job well done, your manager could give you a coupon for a free drink. I used mine on a Starbucks Frappuccino</div>
                                        </div>	                               
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog2/img3.jpg" alt=""/>
                                            <div class="quotes">Free Bottle: I received quite a bit of free stuff over the course of the year, one of the items was a really nice mug from the external vendor I worked with, OneMagnify</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog2/img4.jpg" alt=""/>
                                            <div class="quotes">Ford Fleet Notepad: After we launched the CVC Program, I got a really nice set of sticky notes from the Fleet Team, I still use it to keep track of things I might otherwise forget</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog2/img5.jpg" alt=""/>
                                            <div class="quotes">Me To We Townhall: We use to have bimonthly townhalls at Ford, at one of the last ones we had guests come from Me to We, including the famous singer Karl Wolf</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog2/img6.jpg" alt=""/>
                                            <div class="quotes">Last Day: On my last day at Ford, one of my coworkers who gave me this little Ford pin! I carry it on my backpack to remind me of the time I spent at Ford</div>
                                        </div>	
                                        <div class="col-lg-12 mt-25">
                                            <p>
                                                Since this project had a multi-million-dollar budget, the Ford Fleet director and the manager for this program had large, lofty and uncertain goals for the resulting web app they wanted. As a result, my first step was sitting down with the Ford team, ideating a primary design for the site, and then deciding how the project will be maintained in the long-term. From there, I began tinkering with the code base and developing the backend of the dashboard. I chose to host this entirely on our internal dealer-facing site in order to cut down on costs for this portion of the project so that we can allocate a greater amount for other program costs. Since this was the first dashboard of its kind, there was a lot of learning and exploring with the native web APIs and existing code base. But by persevering and learning more and more with each iteration, I was able to create a backend for the database which connected to a front-end JavaScript dashboard which securely queried, analyzed and then visualized the data for any given dealership. Additionally, there is business plan component where the dealers could have continual and personal feedback from their Ford Fleet sales consultant.     
                                            </p>
                                            <p>
                                                The program launched in late January of 2019 and was an immediate success. We saw an increase in enrollment of 44% over the course of February, and this resulted in hundreds of thousands of dollars for Ford in the short time through program fees. Over the course of the programs’ lifetime, it is possible that it will generate millions of dollars for both the Ford dealerships and the Ford Motor Company. I recently met with an co-worker from Ford who worked with me during the project, and I was informed that it was such a success that the EMEA (Europe, Middle East, and Asia) division of Ford is beginning development in order to launch a similar program there. Personally, I learned a lot through this project, from soft skills like product management, setting expectations and gathering requirements to hard skills like JavaScript and SQL.
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
                            prev="Intro to Krish Chowdhary"
                            prev_link="/blog/first"
                            next="Connective Link"
                            next_link="/blog/third"
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
