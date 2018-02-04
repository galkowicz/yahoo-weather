import React from "react";
import celsius from '../assets/celsius.svg';
import fahrenheit from '../assets/fahrenheit.svg';

class DailyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {temperature, unitType} = this.props;
        let unitIcon = celsius;

        if (unitType === 'fahrenheit') {
            unitIcon = fahrenheit;
        }
        return (
            <div className='daily-view'>
                <span className='daily-view__text'>{temperature}</span>
                <img className='unit-icon' src={unitIcon} alt=""/>
            </div>
        );
    }
}

export default DailyView;