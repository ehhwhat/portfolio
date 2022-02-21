import React, { Component } from 'react';

class FilterButton extends Component {
    render() {
        return (
            <button className={`btn filter-button 
                    ${this.props.buttonType ? this.props.buttonType : 'btn-danger'} 
                    ${this.props.block ? 'button-block' : ''} 
                    ${this.props.extraClass ? this.props.extraClass: ''}`} onClick={this.props.onClick}>
                {this.props.buttonText ? this.props.buttonText : ''}
                {this.props.children}
            </button>
        );
    }
}

export default FilterButton; // Don’t forget to use export default!
