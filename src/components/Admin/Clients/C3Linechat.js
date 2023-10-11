import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

function LineChart({ data, chartId }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var chart = c3.generate({
                bindto: `#${chartId}`,

                data: {
                    x: 'My Custom Label',
                    columns: [
                        ['My Custom Label', '2023-09-04', '2023-09-11', '2023-09-18', '2023-09-25', '2023-10-02'],
                        ['Meal plan', 0, 0, 0, 0, 0, 0],
                        ['Food diary', 0, 0, 0, 0, 0, 0],
                        ['Appointment', 0, 0, 0, 0, 0, 0],
                        ['Follow up', 0, 0, 0, 0, 0, 0],
                        ['Question', 0, 0, 0, 0, 0, 0],
                        ['birthday', 0, 0, 0, 0, 0, 0],
                    ]
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%b %d' // Format to show only month and day
                        },
                    },
                    y: {
                        show: false
                    },
                },
                tooltip: {
                    format: {
                        title: function (x) {
                            const date = new Date(x);
                            const month = date.toLocaleString('default', { month: 'long' });
                            const day = date.getDate();
                            return 'Week of ' + month + ' ' + day;
                        },
                    }
                }
            });
            return () => {
                chart.destroy();
            };
        }
    }, [chartId]);

    return <div id={chartId} className='w-[450px] h-[200px]'></div>;
}

export default LineChart;
