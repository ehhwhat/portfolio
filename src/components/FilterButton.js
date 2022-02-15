import React, { Component } from 'react';

class FilterButton extends Component {
    render() {
        return (
            <button className={`btn btn-danger filter-button ${this.props.block ? 'button-block' : ''} ${this.props.extraClass}`} onClick={this.props.onClick}>
                {this.props.buttonText ? this.props.buttonText : ''}
                {this.props.children}
            </button>
        );
    }
}

export default FilterButton; // Don’t forget to use export default!
