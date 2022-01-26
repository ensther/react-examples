import './Chart.scss';

import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.points.map(p => p.value);
    const totalMaximun = Math.max(...dataPointValues);
    return <div className='chart'>
            {
                props.points.map( p => {
                    return <ChartBar 
                        key={p.label} value={p.value} max={totalMaximun} label={p.label}/>;
                })
            }
        </div>;
};

export default Chart;