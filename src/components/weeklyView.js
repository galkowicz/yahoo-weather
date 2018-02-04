import React from "react";

import { Icon, Container, Menu, Segment } from 'semantic-ui-react';

class DailyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {weatherUnits} = this.props;

        return (
            <div className='daily-view'>
                <span>{weatherUnits}</span>
            </div>
        );
    }
}

export default DailyView;