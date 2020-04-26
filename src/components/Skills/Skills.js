/* eslint-disable no-multi-str */
import React, { Component } from 'react';
import Skill from './Skill/Skill';

const skill_list = [
    {
        img: 'logo1.png',
        body: 'I have utilized Python extensively, through my roles at \
        Ernst & Young, Ford and the University of Toronto. \
        Over the course of my career, I have written well over \
        13000 lines of production Python code. I have used \
        Python in back-end development, data science and scripting.'
    },
    {
        img: 'logo2.png',
        body: 'I have utilized Java within both classroom and \
        industry settings. At the University of Toronto, I developed \
        a comprehensive Microsoft Paint clone application in Java, \
        using the JavaFx module. Additonally, at the Ford Motor Company, \
        I worked on bug fixes and feature additons to the backend of \
        web applications written in Java.'
    },
    {
        img: 'logo3.png',
        body: 'My experience with JavaScript is a combination of \
        self-study and front-end development during my time at the \
        Ford Motor Company. I utilized several industry standard \
        libraries to create a dealership and internal facing dashboard \
        to visualize key sales metrics. I\'m currently learning Node.js, \
        MongoDB, Express.js and React as a part of the MERN stack.'
    },
    {
        img: 'logo4.png',
        body: 'I have utilized SQL as a consumer of data during my \
        time at the Ford Motor Company; this involved developing queries \
        and automated pipelines of data. At Ernst & Young I became \
        more familar with database from an administator point-of-view \
        as I led the onboarding of several thousand database instances \
        onto a Privileged Access Management (PAM) solution.'
    },
    {
        img: 'logo5.png',
        body: 'I have used Flask to create several API endpoints in \
        both hackathons and side-projects. I am familar with both \
        Flask\'s and Djago\'s functionality and capabilities. I have led\
        workshops on the U of T campus regarding Microservice development \
        during the Flask library. I prefer Flask over Django since \
        it is significantly more lightweight and gives the developer\
        more freedom.'
    },
    {
        img: 'logo6.png',
        body: 'I have utilized Node in side projects and I am still \
        in the process of mastering back-end JavaScript development. \
        I find Node to be a powerful tool to get proof-of-concepts \
        off the ground quickly. The prospect of a full-stack development \
        team using exclusively JavaScript appeals to me since all members \
        of the team can work collaboratively accross the project.'
    },
    {
        img: 'logo7.png',
        body: ''
    },
    {
        img: 'logo8.png',
        body: ''
    },
    {
        img: 'logo9.png',
        body: 'I am familar with Linux as both an end-user and administrator. My primary OS for development is Ubuntu, and during my time at Ernst & Young I led the onboarding on Linux servers (RHEL specifically) onto a PAM solution.'
    },
];

class Skills extends Component {
    render() {
        return (
            <section className="brand_area section_gap_bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                {skill_list.map((skill, index) => <Skill key={index} img={skill.img} body={skill.body}/>)}
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="client-info">
                                <div className="d-flex mb-50">
                                    <span className="lage">3</span>
                                    <span className="smll">Years Industry Experience</span>
                                </div>
                                <div className="call-now d-flex">
                                    <div>
                                        <span className="fa fa-search-plus"></span>
                                    </div>
                                    <div className="ml-15">
                                        <p>Currently learning</p>
                                        <h3>Express, MongoDB and React</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;