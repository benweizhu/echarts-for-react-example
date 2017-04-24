import React from 'react';
import ReactDOM from 'react-dom';
import PhonePieChart from './components/PhonePieChart';
import MobilePieChart from './components/MobilePieChart';

class EchartsForReactExample extends React.Component {
  render() {
    return (
      <div>
        <PhonePieChart />
        <MobilePieChart />
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
