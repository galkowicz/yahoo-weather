import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import WeatherOverlay from '../components/weatherOverlay';
import DailyView from '../components/dailyView';
import WeeklyView from '../components/weeklyView';

import {fetchPosts, setConfigUnit, setConfigViewTypeUnit} from '../actions';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleUnitClick = this.handleUnitClick.bind(this);
        this.handleViewTypeClick = this.handleViewTypeClick.bind(this);
    }

    componentDidMount() {
        const {fetchPosts} = this.props;
        fetchPosts('celsius');
        fetchPosts('fahrenheit');
    }

    handleUnitClick(unit) {
        localStorage.setItem('yahooWeatherUnit', unit);
        this.props.setConfigUnit(unit);
    }

    handleViewTypeClick(viewType) {
        localStorage.setItem('yahooWeatherViewType', viewType);
        this.props.setConfigViewTypeUnit(viewType);
    }

    static getViewType(viewType) {
        let result = 'daily';

        if (viewType === 'weekly') {
            result = 'weekly'
        }

        return result;
    }

    static getUnitType(unitType) {
        let result = 'celsius';

        if (unitType === 'fahrenheit') {
            result = 'fahrenheit'
        }

        return result;
    }

    render() {
        const {weather = {}, unitType, viewType} = this.props;

        const chosenViewType = WeatherContainer.getViewType(viewType);
        const chosenUnitType = WeatherContainer.getUnitType(unitType);
        const isDaily = chosenViewType === 'daily';
        const dailyTemperature = weather[chosenUnitType][0] && weather[chosenUnitType][0].high;
        const weeklyForecast = weather[chosenUnitType][0] && weather[chosenUnitType];

        return (
            <WeatherOverlay unitType={chosenUnitType}
                            viewType={chosenViewType}
                            onUnitClick={this.handleUnitClick}
                            onViewTypeClick={this.handleViewTypeClick}>
                {isDaily ? <DailyView unitType={unitType} temperature={dailyTemperature}/> :
                    weeklyForecast && <WeeklyView unitType={unitType} forecast={weeklyForecast.slice(0, 7)}/>}
            </WeatherOverlay>
        );
    }
}

const mapStateToProps = state => ({
    unitType: state.config.unitType,
    viewType: state.config.viewType,
    weather: state.weather
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts: fetchPosts,
    setConfigUnit: setConfigUnit,
    setConfigViewTypeUnit: setConfigViewTypeUnit
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer);