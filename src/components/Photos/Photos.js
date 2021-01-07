import React, { Component } from 'react';
import Photo from './Photo/Photo';

const photo_list = [
    {
        title: 'Above Chicago',
        desc: 'The Cloud',
        tags: ['misc']
    },
    {
        title: 'NYC Skyline',
        desc: 'From Central Park',
        tags: ['misc']
    },
    {
        title: 'Central Park',
        desc: 'Looking down',
        tags: ['misc']
    },
    {
        title: 'Niagara',
        desc: 'Tributary',
        tags: ['misc']
    },
    {
        title: 'Niagara Falls',
        desc: 'TODAY I LOVE YOU',
        tags: ['misc']
    },
    {
        title: 'Olympic Park',
        desc: 'Atlanta Skyline',
        tags: ['atlanta']
    },
    {
        title: 'Looking Glass',
        desc: 'Window to Wealth',
        tags: ['atlanta']
    },
    {
        title: 'Water Front',
        desc: 'Sunset',
        tags: ['atlanta']
    },
    {
        title: 'Quinta da Regaleira',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'Park of Pena',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'Park of Pena',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'National Palace of Pena',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'National Palace of Pena',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'National Palace of Pena',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'National Palace of Pena',
        desc: 'Sintra',
        tags: ['port']
    },
    {
        title: 'Riverfront',
        desc: 'Coimbra',
        tags: ['port']
    },
    {
        title: 'University of Coimbra',
        desc: 'Coimbra',
        tags: ['port']
    },
    {
        title: 'Venice of Portugal',
        desc: 'Aveiro',
        tags: ['port']
    },
    {
        title: 'Venice of Portugal',
        desc: 'Aveiro',
        tags: ['port']
    },
    {
        title: 'Igreja da Vera Cruz',
        desc: 'Church in Aveiro',
        tags: ['port']
    },
    {
        title: 'City Side',
        desc: 'Porto',
        tags: ['port']
    },
    {
        title: 'River Side',
        desc: 'Porto',
        tags: ['port']
    },
    {
        title: 'Cascade',
        desc: 'Porto',
        tags: ['port']
    },
    {
        title: 'Bridge',
        desc: 'Porto',
        tags: ['port']
    },
    {
        title: 'Dusk',
        desc: 'Porto',
        tags: ['port']
    },
    {
        title: 'Bom Jesus do Monte',
        desc: 'Braga',
        tags: ['port']
    },
    {
        title: 'Stairway to Heaven',
        desc: 'Braga',
        tags: ['port']
    },
    {
        title: 'National Pantheon',
        desc: 'Lisbon',
        tags: ['port']
    },
    {
        title: 'View from the Pantheon',
        desc: 'Lisbon',
        tags: ['port']
    },
    {
        title: 'Capela dos Ossos',
        desc: 'Chapel of Bones',
        tags: ['port']
    },
    {
        title: 'Waterfall',
        desc: 'Refracted',
        tags: ['tor']
    },
    {
        title: 'Working Late',
        desc: 'Toronto Sunset',
        tags: ['tor']
    },
    {
        title: 'Left Early',
        desc: 'Skyline',
        tags: ['tor']
    },
    {
        title: 'Hiking',
        desc: 'Walking on the edge',
        tags: ['tor']
    },
    {
        title: 'Forest',
        desc: 'Into the woods',
        tags: ['tor']
    },
    {
        title: 'Slight Breeze',
        desc: 'Day coming to a close',
        tags: ['tor']
    },
];

class Photos extends Component {
    render() {
        return (
            <section className="portfolio_area" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title text-left">
                                <h2>Some of my<br/>
                                    Favorite Recent photographs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="filters portfolio-filter">
                        <ul>
                            <li className="active" data-filter=".all">all</li>
                            <li data-filter=".port">portugal</li>
                            <li data-filter=".atlanta"> atlanta</li>
                            <li data-filter=".tor">toronto</li>
                            <li data-filter=".misc">other pictures</li>
                        </ul>
                    </div>
            
                    <div className="filters-content">
                        <div className="row portfolio-grid justify-content-center">
                            {photo_list.map((photo, index) => <Photo key={`photo ${index}`} img={`${index+1}.JPG`} title={photo.title} desc={photo.desc} tags={photo.tags}/>)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Photos;