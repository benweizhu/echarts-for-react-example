import React from 'react';
import ReactDOM from 'react-dom';
import PhonePieChart from './components/PhonePieChart';
import MobilePieChart from './components/MobilePieChart';
import WorldMap from './components/WorldMap';
import ChinaMap from './components/ChinaMap';
import LineChart from './components/LineChart';

require("echarts/map/js/world.js");

class EchartsForReactExample extends React.Component {
  render() {
    return (
      <div>
        <PhonePieChart />
        <MobilePieChart />
        <WorldMap />
        <ChinaMap />
        <LineChart />
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
