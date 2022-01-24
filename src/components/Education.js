import React, { Component } from 'react';

class Education extends Component {
    render() {
        let dataList = this.props.data.map((education, i) => <li key={'education'+i}><strong>{education.location}</strong><br/>{education.achievement}</li>);
        return (
            <ul>
                {dataList}
            </ul>
        );
    }
}

export default Education; // Don’t forget to use export default!
