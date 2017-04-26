import React from 'react';
import classNames from 'classnames/bind';
import PCTabletLineChart from '../../PCTabletLineChart';
import styles from './PCTabletLineChartByYear.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByYear extends React.Component {

  getData = ()=> {
    return [
      { time: '15/12', pv: 800 },
      { time: '16/01', pv: 400 },
      { time: '16/02', pv: 400 },
      { time: '16/03', pv: 400 },
      { time: '16/04', pv: 380 },
      { time: '16/05', pv: 500 },
      { time: '16/06', pv: 100 },
      { time: '16/07', pv: 200 },
      { time: '16/08', pv: 600 },
      { time: '16/09', pv: 300 },
      { time: '16/10', pv: 500 },
      { time: '16/11', pv: 900 },
      { time: '16/12', pv: 700 },
      { time: '17/01', pv: 300 },
      { time: '17/02', pv: 100 },
      { time: '17/03', pv: 200 },
      { time: '17/04', pv: 1900 },
      { time: '17/05', pv: 900 }
    ];
  };

  getPCData = ()=> {
    return [
      { time: '16/03', pv: 40 },
      { time: '16/04', pv: 38 },
      { time: '16/05', pv: 50 },
      { time: '16/06', pv: 10 },
      { time: '16/07', pv: 20 },
      { time: '16/08', pv: 60 },
      { time: '16/09', pv: 30 },
      { time: '16/10', pv: 50 },
      { time: '16/11', pv: 90 },
      { time: '16/12', pv: 70 },
      { time: '17/01', pv: 30 },
      { time: '17/02', pv: 10 },
      { time: '17/03', pv: 20 },
      { time: '17/04', pv: 90 },
      { time: '17/05', pv: 90 }
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
