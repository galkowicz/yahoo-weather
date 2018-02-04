import React from 'react';
import {Button} from 'semantic-ui-react';

class WeatherOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {viewType, unitType, onUnitClick, onViewTypeClick} = this.props;
        const isCelsius = unitType === 'celsius';
        const isDaily = viewType === 'daily';

        return (
            <div className='weather-overlay'>
                <div className="header">
                    <div className='header-title'><h1>Amazing Weather Widget</h1>
                        <h2>Tel Aviv</h2>
                    </div>
                    <Button.Group size='large'>
                        <Button onClick={() => {
                            onUnitClick('celsius')
                        }} className={isCelsius ? 'selected' : ''}>Celsius</Button>
                        <Button.Or/>
                        <Button onClick={() => {
                            onUnitClick('fahrenheit')
                        }}
                                className={isCelsius ? '' : 'selected'}>Fahrenheit</Button>
                    </Button.Group>
                    <Button.Group size='large'>
                        <Button onClick={() => {
                            onViewTypeClick('daily')
                        }}
                                className={isDaily ? 'selected' : ''}>Daily</Button>
                        <Button.Or/>
                        <Button onClick={() => {
                            onViewTypeClick('weekly')
                        }}
                                className={isDaily ? '' : 'selected'}>Weekly</Button>
                    </Button.Group>
                </div>
                {this.props.children}
            </div>);
    }
}

export default WeatherOverlay;