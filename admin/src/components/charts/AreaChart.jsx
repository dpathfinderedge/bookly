import { Category, ChartComponent, ColumnSeries, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const areaChartData = [
  [
    { x: 'March', y: 40.2 },
    { x:'April', y: 85.8 },
    { x: 'May', y: 55.5 },
    { x: 'June', y: 70.6 },
    { x: 'July', y: 50.6 },
    { x: 'August', y: 90.2 },
    // { x: new Date(2002, 0, 1), y: 0.5 },
    // { x: new Date(2003, 0, 1), y: 1.8 },
    // { x: new Date(2004, 0, 1), y: 2.2 },
    // { x: new Date(2005, 0, 1), y: 3.2 },
    // { x: new Date(2006, 0, 1), y: 3.3 },
    // { x: new Date(2007, 0, 1), y: 2.5 },
    // { x: new Date(2008, 0, 1), y: 2.9 },
    // { x: new Date(2009, 0, 1), y: 3.8 },
    // { x: new Date(2010, 0, 1), y: 1.4 },
    // { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  // [
  //   { x: new Date(2002, 0, 1), y: 2 },
  //   { x: new Date(2003, 0, 1), y: 1.7 },
  //   { x: new Date(2004, 0, 1), y: 1.8 },
  //   { x: new Date(2005, 0, 1), y: 2.1 },
  //   { x: new Date(2006, 0, 1), y: 2.3 },
  //   { x: new Date(2007, 0, 1), y: 1.7 },
  //   { x: new Date(2008, 0, 1), y: 1.5 },
  //   { x: new Date(2009, 0, 1), y: 2.8 },
  //   { x: new Date(2010, 0, 1), y: 1.5 },
  //   { x: new Date(2011, 0, 1), y: 2.3 },
  // ],
  // [
  //   { x: new Date(2002, 0, 1), y: 0.8 },
  //   { x: new Date(2003, 0, 1), y: 1.3 },
  //   { x: new Date(2004, 0, 1), y: 1.1 },
  //   { x: new Date(2005, 0, 1), y: 1.6 },
  //   { x: new Date(2006, 0, 1), y: 2 },
  //   { x: new Date(2007, 0, 1), y: 1.7 },
  //   { x: new Date(2008, 0, 1), y: 2.3 },
  //   { x: new Date(2009, 0, 1), y: 2.7 },
  //   { x: new Date(2010, 0, 1), y: 1.1 },
  //   { x: new Date(2011, 0, 1), y: 2.3 },
  // ],
];


const customSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea', //SplineArea, Column, Line
    width: '2',
  },
  // {
  //   dataSource: areaChartData[1],
  //   xName: 'x',
  //   yName: 'y',
  //   name: 'France',
  //   opacity: '0.8',
  //   type: 'SplineArea',
  //   width: '2',
  // },
  // {
  //   dataSource: areaChartData[2],
  //   xName: 'x',
  //   yName: 'y',
  //   name: 'Germany',
  //   opacity: '0.8',
  //   type: 'SplineArea',
  //   width: '2',
  // },
];

const primaryXAxis = {
  valueType: 'Category', //DateTime
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Months', // Years
  // edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

const primaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 1 },
  maximum: 100,
  interval: 20,
  majorTickLines: { width: 0 },  
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};


const AreaChart = () => {
  const {currentMode} = useStateContext();

  return (
    <ChartComponent
      id="charts"
      height="420px"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      // chartArea={{ border: {width: 0} }}

      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries, Category, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {customSeries.map((item, index) => 
          <SeriesDirective key={index} {...item}  />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default AreaChart;