import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {fetchPosts} from '../actions';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchPosts, unit } = this.props;
        fetchPosts(unit);
    }

    render() {

        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts: fetchPosts
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer);

// export default WeatherContainer;