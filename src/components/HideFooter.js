import React, { Component } from 'react';

class HideFooter extends Component {
    render() {
        return (
            <style dangerouslySetInnerHTML={{__html: `
                #root > footer { display: none; }
            `}} />
        );
    }
}

export default HideFooter; // Don’t forget to use export default!
