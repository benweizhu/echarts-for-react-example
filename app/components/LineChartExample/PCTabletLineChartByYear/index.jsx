import React from 'react';
import classNames from 'classnames/bind';
import PCTabletLineChart from '../../PCTabletLineChart';
import styles from './PCTabletLineChartByYear.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByYear extends React.Component {

  getData = ()=> {
    return [
      { time: '01/16', pv: 40000 },
      { time: '02/16', pv: 40000 },
      { time: '03/16', pv: 40000 },
      { time: '04/16', pv: 38000 },
      { time: '05/16', pv: 50000 },
      { time: '06/16', pv: 10000 },
      { time: '07/16', pv: 20000 },
      { time: '08/16', pv: 60000 },
      { time: '09/16', pv: 30000 },
      { time: '10/16', pv: 50000 },
      { time: '11/16', pv: 90000 },
      { time: '12/16', pv: 70000 },
      { time: '01/17', pv: 30000 },
      { time: '02/17', pv: 10000 },
      { time: '03/17', pv: 20000 },
      { time: '04/17', pv: 19000 },
      { time: '05/17', pv: 90000 },
      { time: '06/17', pv: 90000 },
      { time: '07/17', pv: 90000 },
      { time: '08/17', pv: 20000 },
      { time: '09/17', pv: 30000 },
      { time: '10/17', pv: 50000 },
      { time: '11/17', pv: 90000 },
      { time: '12/17', pv: 80000 },
    ];
  };

  getPCData = ()=> {
    return [
      { time: '01/16', pv: 7000 },
      { time: '02/16', pv: 6000 },
      { time: '03/16', pv: 4000 },
      { time: '04/16', pv: 3800 },
      { time: '05/16', pv: 5000 },
      { time: '06/16', pv: 1000 },
      { time: '07/16', pv: 2000 },
      { time: '08/16', pv: 6000 },
      { time: '09/16', pv: 3000 },
      { time: '10/16', pv: 5000 },
      { time: '11/16', pv: 9000 },
      { time: '12/16', pv: 7000 },
      { time: '01/17', pv: 3000 },
      { time: '02/17', pv: 1000 },
      { time: '03/17', pv: 2000 },
      { time: '04/17', pv: 9000 },
      { time: '05/17', pv: 9000 },
      { time: '06/17', pv: 9000 },
      { time: '07/17', pv: 9000 },
      { time: '08/17', pv: 2000 },
      { time: '09/17', pv: 3000 },
      { time: '10/17', pv: 5000 },
      { time: '11/17', pv: 9000 },
      { time: '12/17', pv: 8000 },
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
