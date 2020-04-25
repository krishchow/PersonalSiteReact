/* eslint-disable no-multi-str */
import React, { Component } from 'react';
import Live from './Live/Live';

const previous_roles = [
    {
        img: 's1.png',
        title: 'Ernst & Young',
        body: 'At Ernst & Young I was aligned to Vulernability Management and Identity and Access \
        Management (IAM) advisory'
    },
    {
        img: 's2.png',
        title: 'Ford Motor Company',
        body: 'I worked on dealership facing full-stack development projects, with reach across \
        Marketing, Sales and Serivce'
    },
    {
        img: 's3.png',
        title: 'Teaching Assistant',
        body: 'I led weekly tutorials for 25-30 first-year students on Object-Oriented programming \
        fundamentals in Python 3'
    },
    {
        img: 's3.png',
        title: 'Research Assistant',
        body: 'I have worked on research projects with both the Rotman School of Commerce \
        and Faculty of History'
    }
];


class Lives extends Component {
    render() {
        return (
            <section className="features_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>Previous Lives</h2>
                                <p>
                                    Highlights of my previous roles at serveral organizations
                                    <br/> and the different skills I honed during my time there
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner">
                        {previous_roles.map((role, index) => <Live key={index} img={role.img} title={role.title} body={role.body}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Lives;