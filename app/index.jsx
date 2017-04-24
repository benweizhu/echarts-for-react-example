import React from 'react';
import ReactDOM from 'react-dom';
import PieCircle from './components/PieCircle';

class EchartsForReactExample extends React.Component {
  render() {
    return (
      <div>
        <PieCircle />
      </div>
    );
  }
}

ReactDOM.render(<EchartsForReactExample />, document.querySelector('#app'));
