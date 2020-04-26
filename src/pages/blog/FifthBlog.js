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
                <title>Tabs v. Spaces</title>
            </Helmet>
            <NavBar/>
            <Header title="Fifth Blog - Tabs v. Spaces" link_test="To Tab, or not to Tab, that is the question" link="/blog/fifth"/>
            <section class="blog_area single-post-area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 posts-list">
                            <div class="single-post row">
                                <BlogImage img="feature-img5.png"/>
                                <BlogBar tags={tags} date="1 December, 2019"/>
                                <div class="col-lg-9 col-md-9 blog_details">
                                    <h2>CSC290 - Tabs versus Spaces</h2>
                                    <p class="excert">
                                        Tabs versus Spaces has been a common (and occasionally polarizing) debate between programmers. In “Developers Who Use Spaces Make More Money Than Those Who Use Tabs”, David Robinson analyzes the 2017 StackOverflow Developer Survey. Through this analysis he finds that across disciplines, experience, and borders developers who use spaces to indent their code make 8.6% more than developers who use tabs. Moreover, for developers who used both tabs and space, their salary was comparable to developers who just used tabs. The data set included 12,426 submissions, which is of sufficient enough to account false or exaggerated submission. 
                                    </p>
                                    <p>
                                        One key insight from this article in regards to the Robinson’s efforts to find out which factor led to the disparity. Interestingly, the salary difference existed even when accounting for level of education, company size, programming language choices. Moreover, through a multi variable linear regression, the author find that utilizing space instead of tabs was equivalent to having over 2.5 years of additional experience. From my perspective, due to the high degree of confidence (through the p-value) and the inclusive data-set, this does not seem to be an example of p-hacking. 
                                    </p>
                                    <p>
                                        One factor which the author did not consider was the knowledge (or level of skill) associated with users who said they used tabs. Most modern IDEs automatically convert tabs to spaces to conform with style guidelines. As a result many novice or unaware programmers may be under the impression they are utilizing tabs, while in actuality they are using spaces. This belief would also require the assumption that novice programmers make a lower salary than programmers with a deeper understanding, something that is confirmed already in the article.
                                    </p>
                                    <p>
                                        Similarly, the question arises of which users tend to use spaces as opposed to tabs? The author mentioned company size, but typically organizations with a more mature technology environment will have more stringent style guidelines. This is something well confirmed by existing publications, for example, Google’s style guide highlights that only spaces should be used, and never tabs<sup>1</sup>. It is a fair assumption that an organization like Google offers higher than average compensation, and that other mature organizations have equally restrictive style guidelines. Also, as mentioned in the previous point, these organizations will have better typically have better development support tooling such as commercial IDEs not available at less mature organizations. As a result, this may be an additional factor which weights into the salary disparity between tabs and spaces.</p>
                                    <p>
                                        In conclusion, this article takes an interesting approach to look at common debate in programming culture, at it presents the argument that developers using spaces make a higher salary than developers who use tabs. However as the author stated, it is difficult to say exactly why this gap in compensation exists. As Robinson highlights, there are many possible explanations which may or may not be captured in the StackOverflow Developer Survey Dataset.
                                    </p>
                                    <p>
                                        That’s all for this week’s blog, I’m looking forward to seeing you again next week!
                                        <br/>
                                        <p>
                                            1.	https://developers.google.com/style/code-samples
                                        </p>
                                        <br/>
                                        <br/>
                                        Cheers,
                                        <br/>
                                        <br/>
                                        Krish Chowdhary
                                    </p>			
                                </div>
                            </div>
                            <BlogNav
                            prev="CSS Zen"
                            prev_link="/blog/fourth"
                            next="N/A"
                            next_link="#"
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
