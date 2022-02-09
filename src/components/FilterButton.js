import React, { Component } from 'react';

class FilterButton extends Component {
    render() {
        return (
            <button className={'btn btn-danger mb-4 filter-button'} onClick={this.props.onClick}>{this.props.buttonText}</button>
        );
    }
}

export default FilterButton; // Don’t forget to use export default!
