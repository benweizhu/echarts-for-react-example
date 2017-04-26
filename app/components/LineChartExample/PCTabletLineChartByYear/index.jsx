import React from 'react';
import classNames from 'classnames/bind';
import PCTabletLineChart from '../../PCTabletLineChart';
import styles from './PCTabletLineChartByYear.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByYear extends React.Component {

  getData = ()=> {
    return [
      { time: '12/15', pv: 800 },
      { time: '01/16', pv: 400 },
      { time: '02/16', pv: 400 },
      { time: '03/16', pv: 400 },
      { time: '04/16', pv: 380 },
      { time: '05/16', pv: 500 },
      { time: '06/16', pv: 100 },
      { time: '07/16', pv: 200 },
      { time: '08/16', pv: 600 },
      { time: '09/16', pv: 300 },
      { time: '10/16', pv: 500 },
      { time: '11/16', pv: 900 },
      { time: '12/16', pv: 700 },
      { time: '01/17', pv: 300 },
      { time: '02/17', pv: 100 },
      { time: '03/17', pv: 200 },
      { time: '04/17', pv: 1900 },
      { time: '05/17', pv: 900 }
    ];
  };

  getPCData = ()=> {
    return [
      { time: '03/16', pv: 40 },
      { time: '04/16', pv: 38 },
      { time: '05/16', pv: 50 },
      { time: '06/16', pv: 10 },
      { time: '07/16', pv: 20 },
      { time: '08/16', pv: 60 },
      { time: '09/16', pv: 30 },
      { time: '10/16', pv: 50 },
      { time: '11/16', pv: 90 },
      { time: '12/16', pv: 70 },
      { time: '01/17', pv: 30 },
      { time: '02/17', pv: 10 },
      { time: '03/17', pv: 20 },
      { time: '04/17', pv: 90 },
      { time: '05/17', pv: 90 }
    ];
  };

  render() {
    return (
      <div className={cx('container')}>
        <PCTabletLineChart pcData={this.getPCData()} tabletData={this.getData()}/>
      </div>
    );
  }
}

export default PCTabletLineChartByYear;
