import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import WeatherOverlay from '../components/weatherOverlay';
import DailyView from '../components/dailyView';
import WeeklyView from '../components/weatherOverlay';

import {fetchPosts} from '../actions';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleUnitClick = this.handleUnitClick.bind(this);
        this.handleViewTypeClick = this.handleViewTypeClick.bind(this);
        const {viewType, unitType} = this.props;

        this.state = {viewType, unitType}
    }

    componentDidMount() {
        const {fetchPosts} = this.props;
        fetchPosts('c');
        fetchPosts('f');
    }

    handleUnitClick(unit) {
        localStorage.setItem('yahooWeatherUnit', unit);
        this.setState({unitType: unit});
    }

    handleViewTypeClick(viewType) {
        localStorage.setItem('yahooWeatherViewType', viewType);
        this.setState({viewType});
    }

    render() {
        return (
            <WeatherOverlay {...this.state}
                            onUnitClick={this.handleUnitClick}
                            onViewTypeClick={this.handleViewTypeClick}>
            </WeatherOverlay>
        );
    }
}

const mapStateToProps = state => ({
    storageUnit: state.config
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts: fetchPosts
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer);

// export default WeatherContainer;