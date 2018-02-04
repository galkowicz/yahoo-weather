import React from "react";

class WeeklyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {forecast, unitType} = this.props;
        let unitSymbol = 'C';

        if (unitType === 'fahrenheit') {
            unitSymbol = 'F';
        }

        return (
            <div className='daily-view'>
                <ul>
                    {forecast && forecast.map((item) => {
                        return <li key={item.date}>
                            <div className='weather-item'>
                                <span className='weather-item__day'>{item.day}</span>
                                <span className='weather-item__temperature'>{item.high}</span>
                                <span className='weather-item__unit'>{unitSymbol}</span>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default WeeklyView;