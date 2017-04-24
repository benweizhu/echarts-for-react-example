import React from 'react';
import ReactDOM from 'react-dom';
import PhonePieChart from './components/PhonePieChart';

class EchartsForReactExample extends React.Component {
  render() {
    return (
      <div>
        <PhonePieChart />
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
