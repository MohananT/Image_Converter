import React, { Component } from 'react';
import './accordion.css'

class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        // bind functions to this
        this.toggleAccordion = this.toggleAccordion.bind(this);
    }

    toggleAccordion() {
        const currentState = this.state.active;
        this.setState({
            active: !currentState
        });
    }

    render() {
        return (
            <div>
                <div className="accordion font-style" onClick={this.toggleAccordion}>Tinker Image</div>
                <div className={this.state.active ? "accordion-content-show" : "accordion-content"}>
                    Image Processing content
                </div>
            </div>
        )
    }
}

export default Accordion;