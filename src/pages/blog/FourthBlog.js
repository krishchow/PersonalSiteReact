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
    }
];

class Blog extends Component {
  render() {
      return (
        <div className="App">
            <Helmet>
                <title>Zen of CSS</title>
            </Helmet>
            <NavBar/>
            <Header title="Fourth Blog - Zen of CSS" link_test="Why CSS is Amazing" link="/blog/fourth"/>
            <section class="blog_area single-post-area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 posts-list">
                            <div class="single-post row">
                                <BlogImage img="feature-img4.png"/>
                                <BlogBar tags={tags} date="29 September, 2019"/>
                                <div class="col-lg-9 col-md-9 blog_details">
                                    <h2>CSC290 - The Zen of CSS Design</h2>
                                    <p class="excert">
                                        For this week’s blog, I read The Zen of CSS Design: Visual Enlightenment for the Web. Having read the first two chapters of the book, I can safely say it is an amazing read for anyone interested in learning more about the history (and future) of web design. I chose this book since I have always been really interested in design, but my designs have often feel lacklustre. Based on the books title, I thought it would be a good way for me to learn more about CSS and web design. This book is centered around the CSS Zen Garden, a website with one standard structure which then customized by thousands of people. The beauty of the Zen Garden as that anyone could contribute their own design, and all it required was one stylesheet. 
                                    </p>
                                    <p>
                                        This book starts off by giving a brief history of design and structure on the web, this includes: a discussion on accessibility, an overview of W3C and the challenges associated with cross-browser design. This quickly involved into a discussion on how CSS was initially used by developers, not designers, and how this often-led to poor designs. Dave Shea created the Zen Garden in order to show developers and designers the power of CSS. Over time the Zen Garden evolved into a place for:
                                    </p>
                                    <ol>
                                        <li>Learning: Developers learned how to properly CSS and they were able to find code samples where people had already solved many design problems</li>
                                        <li>Discovery: It gave people a place to learn new layouts and CSS effects.</li>
                                        <li>Testing: Designers could use the Zen Garden to test web browser compatibility, since everything was based on web standards, in theory, every browser should render the Zen Garden the same way</li>
                                        <li>Reference: The Zen Garden was a proof of concept for standards based design, and an example of how extensible it can be for any clients</li>
                                        <li>Inspiration: For developers who had the design equivalent of writer’s block, the Zen Garden served as an effective tool for exploring options and styles</li>
                                        <li>Recruitment: Designers could share their work on a style for the Zen Garden, and clients could find designers for projects, it was very similar to a portfolio</li>
                                        <li>Teachers could show students the wide functionality of CSS and HTML as it relates to design, and it was a great starting point for structuring your own web pages</li>
                                    </ol>
                                    <p>
                                        The true purpose of CSS was to serve as styling on top of the foundational HTML. First you should structure your information with the correct tags, then add design on top of that; you should never compromise on structure for design. In technical terms, this comes down to presentational markup and structural markup, CSS should be used to as a tool to bridge the gap. Lastly, the author takes a step back to look at the wider purpose of publishing on the web and the power of CSS for performance and reusability.
                                    </p>
                                </div>
                                <div class="col-lg-12">
                                    <div class="quotes">
                                        Aside: Before we get further into the book, I wanted to share some of my favorite designs from the Zen Garden.
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog4/img1.png" alt="Mid Century Modern"/>
                                            <div class="quotes">Mid Century Modern - Andrew Lohman</div>
                                        </div>
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog4/img2.png" alt="door to my garden"/>
                                            <div class="quotes">door to my garden – Patrick Lauke</div>
                                        </div>	                               
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog4/img3.png" alt="Apothecary"/>
                                            <div class="quotes">Apothecary – Trent Walton</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog4/img4.png" alt="si6"/>
                                            <div class="quotes">si6 –Shaun Inman</div>
                                        </div>	
                                        <div class="col-lg-12 mt-25">
                                            <p>I really enjoyed this book, since the first chapter gave me a great overview of what characteristics a good website should gave along with a history of the internet. The second chapter then dove straight into analyzing some of the best designs from the Zen Garden. Each subheading and design came with a specific lesson:</p>
                                            <ol>
                                                <li>Minimalist design</li>
                                                <li>Light, shadows and mood</li>
                                                <li>Color, emotion, warmth</li>
                                                <li>Patterns, texture, borders, contrast</li>
                                                <li>Flow, organization, illustration</li>
                                                <li>Mock-up based design</li>
                                            </ol>
                                            <p>I agreed with the authors analysis, and I found each subheading to be very helpful. I particularly like the section on Mock-up based design, where the author talked about the process of converting a mock-up into a functioning webpage. This has been something I have struggled with in the past, so observing the authors process was very helpful. Additionally, I found the Color and Influences of Culture and Gender table to be very interesting, particularly the row on the color white. Having lived in the west for most of my life, I associated white with being part of a clean design, whereas according to this book it may be the opposite in some cultures.</p>
                                            <p>All in all, I really enjoyed this book, and I would recommend it to anyone interested in learning more about design.</p>
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
                            prev="LinkedLists"
                            prev_link="/blog/third"
                            next="Tabs v. Spaces"
                            next_link="/blog/fifth"
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
