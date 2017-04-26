import React from 'react';
import classNames from 'classnames/bind';
import PCTabletLineChart from '../../PCTabletLineChart';
import styles from './PCTabletLineChartByDay.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByDay extends React.Component {

  getSexHourData = ()=> {
    return [
      { time: '16/01/07 6:00', pv: 380 },
      { time: '16/01/07 12:00', pv: 500 },
      { time: '16/01/07 18:00', pv: 100 },
      { time: '16/01/08 0:00', pv: 200 },
      { time: '16/01/08 6:00', pv: 600 },
      { time: '16/01/08 12:00', pv: 300 },
      { time: '16/01/08 18:00', pv: 500 },
      { time: '16/01/09 0:00', pv: 200 },
      { time: '16/01/09 6:00', pv: 600 },
      { time: '16/01/09 12:00', pv: 300 },
      { time: '16/01/09 18:00', pv: 500 },
      { time: '16/01/10 0:00', pv: 200 },
      { time: '16/01/10 6:00', pv: 600 },
      { time: '16/01/10 12:00', pv: 300 },
      { time: '16/01/10 18:00', pv: 500 },
      { time: '16/01/11 0:00', pv: 200 },
      { time: '16/01/11 6:00', pv: 600 },
      { time: '16/01/11 12:00', pv: 300 },
      { time: '16/01/11 18:00', pv: 500 },
    ];
  };

  getPCData = ()=> {
    return [
      { time: '16/01/07 6:00', pv: 38 },
      { time: '16/01/07 12:00', pv: 50 },
      { time: '16/01/07 18:00', pv: 10 },
      { time: '16/01/08 0:00', pv: 20 },
      { time: '16/01/08 6:00', pv: 60 },
      { time: '16/01/08 12:00', pv: 30 },
      { time: '16/01/08 18:00', pv: 50 },
      { time: '16/01/09 0:00', pv: 90 },
      { time: '16/01/09 6:00', pv: 70 },
      { time: '16/01/09 12:00', pv: 30 },
      { time: '16/01/09 18:00', pv: 10 }
    ];
  };

  render() {
    return (
      <div className={cx('container')}>
        <PCTabletLineChart bySixHours pcData={this.getPCData()} tabletData={this.getSexHourData()}/>
      </div>
    );
  }
}

export default PCTabletLineChartByDay;
