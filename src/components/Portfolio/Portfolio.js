import React, { Component } from 'react';
import PortfolioTile from './PortfolioTile/PortfolioTile';


class Portfolio extends Component {
    render() {
        const cards = this.props.list;
        return (
            <section className="features_area">
                <div className="container">
                    <div className="row feature_inner">
                        {cards.map((value, index) => {
                            return <PortfolioTile
                                tile={value}
                                key={`tile ${this.props.offset+index}`}
                            />
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;