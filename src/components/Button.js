import React, { Component } from 'react';

class Button extends Component {
    render() {
        let showDetails = false;

        function handleClick(e) {
            showDetails = showDetails ? false : true;
            console.log(showDetails);
        }

        return (
            <button onClick={handleClick}>Click me</button>
        );
    }
}

export default Button; // Don’t forget to use export default!
