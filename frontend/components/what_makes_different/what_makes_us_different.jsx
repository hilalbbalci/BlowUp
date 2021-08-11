import React from 'react';
import { RiLeafLine, RiLeafFill, RiPencilRuler2Line, RiLineChartFill } from 'react-icons/ri';

class WhatMakesUsDifferent extends React.Component {
    render() {
        return (
            <div className='what-makes-us-different'>
                <h1>What Makes Us Different</h1>
                <div className="triple-div">
                    <div className="div">
                        <RiLeafLine size="70"/>
                        <br />
                        <h3>Grow as a photographer</h3>
                        <br />
                        <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one</p>
                    </div>
                    <div className="div">
                        <RiPencilRuler2Line size="70" />
                        <br />
                        <h3>Grow as a photographer</h3>
                        <br />
                        <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one</p>

                    </div>
                    <div className="div">
                        <RiLineChartFill size="70" />
                        <br />
                        <h3>Grow as a photographer</h3>
                        <br />
                        <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one</p>

                    </div>
                </div>
            </div>
        )
    }
};
export default WhatMakesUsDifferent;
