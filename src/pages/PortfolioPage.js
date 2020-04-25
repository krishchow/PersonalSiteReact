import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet'

const project_list = [
    {
        img: 's1',
        title: 'Identity and Access Management',
        body: 'Implemented enterprise wide Privliged Access Management solutions at several large organizations.'
    },
    {
        img: 's1',
        title: 'Vulnerability Manangement',
        body: 'Combined Vulnerablity Management and Patch Management through CMDB and Vulnerablity Scanning integrations.'
    },
    {
        img: 's2',
        title: 'Commercial Vehicle Centre',
        body: 'Led the Technology stream of the Revamp of a dealership facing Marketing and Sales program.'
    },
    {
        img: 's7',
        title: 'myTown Elevate Hackathon',
        body: 'Built a password manager and automated login desktop application for the City of Toronto Libraries using SQL, Selenium and Flask.'
    },
    {
        img: 's3',
        title: 'CS Teaching Assistant',
        body: 'Taught first years students basics of programming in Python 3 along with, Object-Oriented design, data structure, data types and recursion.'
    },
    {
        img: 's2',
        title: 'Tech Order Form',
        body: 'Developed a web-based form using C# which dealership used to order technology as a part of an annual Canada wide device refresh.'
    },
    {
        img: 's9',
        title: 'Gift the Code Hackathon',
        body: 'Created an anonymized survey web application for collect feedback and questions from indigenous youth for the Indspire non-profit organization.'
    },
    {
        img: 's2',
        title: 'Robotic Process Automation Projects',
        body: 'Developed tool agnostic Robotic Process Automation scripts and applications used to increase team efficency and mine vast ammounts of data.'
    },
    {
        img: 's2',
        title: 'Vendor Access Form',
        body: 'Created a desktop application to generate pre-filled domain access requests for external vendors, contrators and suppliers. Saving time and increasing data quality.'
    },
    {
        img: 's3',
        title: 'Commerce Research Assistant',
        body: 'Developed the course outline for a fourth year data analytics course for accounting students at the Rotman School of Management.'
    },
    {
        img: 's3',
        title: 'Technology Research Assistant',
        body: 'Migrated the discussion board and research resources from Google suite to an Office 365 platform; this site is used by 300 students each semester.'
    },
    {
        img: 's2',
        title: 'Dealership Security Audit',
        body: 'Automated and completed annual audit of 1300 Canadian dealership in order to ensure policy of least privliged access to key dealership applications.'
    },
    {
        img: 's4',
        title: 'Workshop Project Lead',
        body: 'Developed and led workshops for fellow computer science students on non-curricular topics such RESTful APIs.'
    },
    {
        img: 's5',
        title: 'Director of Sponsorships',
        body: 'Organized events for Computer Science, Math and Statistics students to develop a sense of community and increase collaboration.'
    },
    {
        img: 's6',
        title: 'Previous Volunteering Roles',
        body: 'Click for more details',
        modal: true,
        modal_title: 'Volunteering Roles',
        modal_body: ['TD Tree Days (09/2016): Particpated in TD sponsored tree-planting day, planted 13 trees over the course of three hours',
        'YMCA Youth Volunteer (09/2014 - 06/2017): Assisted in preparing and leading daily activities for students and youth at the YMCA in Mississauga.',
        'Youth Leadership Council (09/2014 - 06/2017): Organized and managed community outreach events for holidays and specical occasions at the Misissauga YMCA.',
        'MedSurge and CCC Volunteer (06/2015 - 05/2016): Assisted patients, staff and visitors to ensure a safe environment and positive experience.',
        'STEMing UP - Workload Leader (08/2019): Lead a workshop to introduce women in high school to software engineering and the technology industry.',
        ]
    },
    {
        img: 's8',
        title: 'Tech and the City Hackathon',
        body: 'Created an interactive map visualization which enabled local B2B communication using Python and Processing.'
    },
];

function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size));
}

class PortfolioPage extends Component {
    render() {
        const row_length = 4;
        return (
            <div className="App">
                <Helmet>
                    <title>Portfolio</title>
                </Helmet>
                <NavBar/>
                <Header title="Project Portfolio" link_test="Portfolio" link="/portfolio"/>
                {chunk(project_list, row_length).map((value, index) => {
                    return <Portfolio list={value} offset={index*row_length} key={`block ${index}`}/>;
                })}
                <Footer/>
            </div>
            );
        }
}

export default PortfolioPage;
