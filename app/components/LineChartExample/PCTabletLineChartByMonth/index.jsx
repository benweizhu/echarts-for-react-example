import React from 'react';
import classNames from 'classnames/bind';
import PCTabletLineChart from '../../PCTabletLineChart';
import styles from './PCTabletLineChartByYear.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByYear extends React.Component {

  getData = ()=> {
    return [
      { time: '16/01/07', pv: 400 },
      { time: '16/01/14', pv: 380 },
      { time: '16/01/21', pv: 500 },
      { time: '16/01/28', pv: 100 },
      { time: '16/02/05', pv: 200 },
      { time: '16/02/13', pv: 600 },
      { time: '16/02/20', pv: 300 },
      { time: '16/02/27', pv: 500 },
      { time: '16/03/05', pv: 900 },
      { time: '16/03/12', pv: 700 },
      { time: '17/03/19', pv: 300 },
      { time: '17/03/26', pv: 100 },
    ];
  };

  getPCData = ()=> {
    return [
      { time: '16/01/07', pv: 40 },
      { time: '16/01/14', pv: 38 },
      { time: '16/01/21', pv: 50 },
      { time: '16/01/28', pv: 10 },
      { time: '16/02/05', pv: 20 },
      { time: '16/02/13', pv: 60 },
      { time: '16/02/20', pv: 30 },
      { time: '16/02/27', pv: 50 },
      { time: '16/03/05', pv: 90 },
      { time: '16/03/12', pv: 70 },
      { time: '17/03/19', pv: 30 },
      { time: '17/03/26', pv: 10 },
    ];
  };

  render() {
    return (
      <div className={cx('container')}>
        <PCTabletLineChart byWeek pcData={this.getPCData()} tabletData={this.getData()}/>
      </div>
    );
  }
}

export default PCTabletLineChartByYear;
