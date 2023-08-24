import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const C3BarChart = ({ data }) => {
    useEffect(() => {
        const chart = c3.generate({
            bindto: '#chart', // ID of the element where the chart will be rendered
            data: {
                columns: [
                    data, // Check if 'data' is a valid array with values
                ],
                colors: {
                    data1: '#1AB394',

                },
                types: {
                    data1: 'bar',
                },
                // names: {
                //     data1: 'Percentage calculated from the meal plan targets',

                // },
                legend: {
                    show: false,
                }
            },
            grid: {
                x: {
                    show: false,
                  
                },
                y: {
                    show: false,
                    lines: [{value: 100, class: 'grid4', text: 'Target'}]
                },
            },
            axis: {
                x: {
                    
                    type: 'category', // Specify x-axis type as category
                    categories: ['Calcium', 'Choline', 'Copper', 'Fluoride','Folate' ,'Iron' ,'Magnesium' ,'Manganese' , 'Niacin' ,'Pantothenic acid' ,'Phosphorus', 'Potassium'], // Set custom labels for x-axis values
                    
                    
                },
                y: {
                    
                    tick: {
                        values: [0, 20, 40, 60, 80, 100] // Set custom tick values on the y-axis
                    }
                },
                rotated: true,
                
            }
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="chart"></div>;
};

export default C3BarChart;
