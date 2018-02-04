import React from "react";

class DailyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {temperature, unit} = this.props;

        return (
            <div className='daily-view'>
                <span>{unit}{temperature}</span>
            </div>
        );
    }
}

export default DailyView;