import React, { Component } from 'react';
import PortfolioTile from './PortfolioTile/PortfolioTile';


class Portfolio extends Component {
    render() {
        const cards = this.props.list;
        return (
            <section class="features_area">
                <div class="container">
                    <div class="row feature_inner">
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