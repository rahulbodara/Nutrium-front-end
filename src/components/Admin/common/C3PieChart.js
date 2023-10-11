import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const C3PieChart = (props) => {
    useEffect(() => {
        let chart;

        chart = c3.generate({
            bindto: `#${props.chartId}`,
            data: {
                columns: props.data,
                type: 'pie',
                onclick: function (d, i) {
                    console.log('onclick', d, i);
                },
                onmouseover: function (d, i) {
                    console.log('onmouseover', d, i);
                },
                onmouseout: function (d, i) {
                    console.log('onmouseout', d, i);
                },
            },
            color: {
                pattern: ['#1ab394', '#ea9f77', '#db4965', '#6a7d93']
            },
        });


        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, []);

    return <div id={props.chartId} ></div>;
};

export default C3PieChart;
