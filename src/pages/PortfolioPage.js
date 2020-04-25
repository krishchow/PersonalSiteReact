import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';

const project_list = [
    {
        img: 's1',
        title: '',
        body: ''
    },
    {
        img: 's1',
        title: '',
        body: ''
    },
    {
        img: 's2',
        title: '',
        body: ''
    },
    {
        img: 's7',
        title: '',
        body: ''
    },
    {
        img: 's3',
        title: '',
        body: ''
    },
    {
        img: 's2',
        title: '',
        body: ''
    },
    {
        img: 's9',
        title: '',
        body: ''
    },
    {
        img: 's2',
        title: '',
        body: ''
    },
    {
        img: 's2',
        title: '',
        body: ''
    },
    {
        img: 's3',
        title: '',
        body: ''
    },
    {
        img: 's3',
        title: '',
        body: ''
    },
    {
        img: 's2',
        title: '',
        body: ''
    },
    {
        img: 's4',
        title: '',
        body: ''
    },
    {
        img: 's5',
        title: '',
        body: ''
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
        title: '',
        body: ''
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
