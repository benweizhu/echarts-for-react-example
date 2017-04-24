import React from 'react';
import ReactDOM from 'react-dom';
import PhonePieChart from './components/PhonePieChart';
import MobilePieChart from './components/MobilePieChart';
import WorldMap from './components/WorldMap';
import ChinaMap from './components/ChinaMap';

require("echarts/map/js/world.js");
require("echarts/map/js/china.js");

class EchartsForReactExample extends React.Component {
  render() {
    return (
      <div>
        <PhonePieChart />
        <MobilePieChart />
        <WorldMap />
        <ChinaMap />
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
