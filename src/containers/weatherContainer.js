import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import WeatherOverlay from '../components/weatherOverlay';
import DailyView from '../components/dailyView';
import WeeklyView from '../components/weeklyView';

import {fetchPosts} from '../actions';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleUnitClick = this.handleUnitClick.bind(this);
        this.handleViewTypeClick = this.handleViewTypeClick.bind(this);
        const {storageUnit, storageViewType} = this.props;

        this.state = {viewType: storageViewType, unitType: storageUnit}
    }

    componentDidMount() {
        const {fetchPosts} = this.props;
        fetchPosts('celsius');
        fetchPosts('fahrenheit');
    }

    handleUnitClick(unit) {
        localStorage.setItem('yahooWeatherUnit', unit);
        this.setState({unitType: unit});
    }

    handleViewTypeClick(viewType) {
        localStorage.setItem('yahooWeatherViewType', viewType);
        this.setState({viewType});
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
        const {weather = {}} = this.props;
        const {unitType, viewType} = this.state;

        const chosenViewType = WeatherContainer.getViewType(viewType);
        const chosenUnitType = WeatherContainer.getUnitType(unitType);
        const isDaily = chosenViewType === 'daily';
        const dailyTemperature = weather[unitType][0] && weather[unitType][0].high;
        const weeklyForecast = weather[unitType][0] && weather[unitType];

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
    storageUnit: state.config.storageUnit,
    storageViewType: state.config.storageViewType,
    weather: state.weather
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts: fetchPosts
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer);