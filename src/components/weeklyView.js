import React from "react";
import DailyView from './dailyView';

class WeeklyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {temperatures} = this.props;

        return (
            <div className='daily-view'>
                {temperatures.map((day) => {
                    return <DailyView {...day}/>
                })}
            </div>
        );
    }
}

export default WeeklyView;