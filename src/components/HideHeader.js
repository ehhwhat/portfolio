import React, { Component } from 'react';

class HideHeader extends Component {
    render() {
        return (
            <style dangerouslySetInnerHTML={{__html: `
                #root > header { display: none; }
            `}} />
        );
    }
}

export default HideHeader; // Don’t forget to use export default!
