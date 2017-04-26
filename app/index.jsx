import React from 'react';
import ReactDOM from 'react-dom';
import PhonePieChart from './components/PhonePieChart';
import MobilePieChart from './components/MobilePieChart';
import WorldMap from './components/WorldMap';
import ChinaMap from './components/ChinaMap';
import PCTabletLineChartByYear from './components/LineChartExample/PCTabletLineChartByYear';

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
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
