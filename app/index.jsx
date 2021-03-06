import React from 'react';
import ReactDOM from 'react-dom';
import PhonePieChart from './components/PhonePieChart';
import MobilePieChart from './components/MobilePieChart';
import WorldMap from './components/WorldMap';
import ChinaMap from './components/ChinaMap';
import PCTabletLineChartByYear from './components/LineChartExample/PCTabletLineChartByYear';
import PCTabletLineChartByMonth from './components/LineChartExample/PCTabletLineChartByMonth';
import PCTabletLineChartByDay from './components/LineChartExample/PCTabletLineChartByDay';
import PCTabletLineChartByHour from './components/LineChartExample/PCTabletLineChartByHour';
import MobileLineChartByYear from './components/LineChartExample/MobileLineChartByYear';

require("echarts/map/js/world.js");

class EchartsForReactExample extends React.Component {
  render() {
    return (
      <div>
        <PhonePieChart />
        <MobilePieChart />
        <WorldMap />
        <ChinaMap />
        <PCTabletLineChartByYear />
        <PCTabletLineChartByMonth />
        <PCTabletLineChartByDay />
        <PCTabletLineChartByHour />
        <MobileLineChartByYear />
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
