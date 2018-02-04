import React from "react";
import {List, Image} from 'semantic-ui-react';
import celsius from '../assets/celsius.svg';
import fahrenheit from '../assets/fahrenheit.svg';

class WeeklyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {forecast, unitType} = this.props;
        let unitIcon = celsius;

        if (unitType === 'fahrenheit') {
            unitIcon = fahrenheit;
        }

        return (
            <div className='daily-view'>
                <List horizontal>
                    {forecast && forecast.map((item) => {
                        return <List.Item className='weather-item' key={item.date}>
                            <List.Content>
                                <List.Header>{item.day}</List.Header>
                                <span className='weather-item__temperature'>{item.high}</span>
                                <Image avatar className='unit-icon' src={unitIcon} alt=""/>
                            </List.Content>
                        </List.Item>
                    })}
                </List>
            </div>
        );
    }
}

export default WeeklyView;