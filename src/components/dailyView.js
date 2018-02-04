import React from "react";

class DailyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {temperature, unitType} = this.props;
        let unitSymbol = 'C';

        if (unitType === 'fahrenheit') {
            unitSymbol = 'F';
        }
        return (
            <div className='daily-view'>
                <span>{temperature}{unitSymbol}</span>
            </div>
        );
    }
}

export default DailyView;