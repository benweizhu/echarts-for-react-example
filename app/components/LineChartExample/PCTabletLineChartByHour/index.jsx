import React from 'react';
import classNames from 'classnames/bind';
import PCTabletLineChart from '../../PCTabletLineChart';
import styles from './PCTabletLineChartByHour.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByDay extends React.Component {

  getPCData = ()=> {
    return [
      { time: '16/01/07 8:00', pv: 38 },
      { time: '16/01/07 9:00', pv: 50 },
      { time: '16/01/07 10:00', pv: 10 },
      { time: '16/01/07 11:00', pv: 20 },
      { time: '16/01/07 12:00', pv: 60 },
      { time: '16/01/07 13:00', pv: 30 },
      { time: '16/01/07 14:00', pv: 50 },
      { time: '16/01/07 15:00', pv: 90 },
      { time: '16/01/07 16:00', pv: 70 },
      { time: '16/01/07 17:00', pv: 30 },
      { time: '16/01/07 18:00', pv: 10 },
      { time: '16/01/07 19:00', pv: 10 },
      { time: '16/01/07 20:00', pv: 10 },
    ];
  };

  getData =()=>{
    return [
      { time: '16/01/07 8:00', pv: 380 },
      { time: '16/01/07 9:00', pv: 500 },
      { time: '16/01/07 10:00', pv: 109 },
      { time: '16/01/07 11:00', pv: 209 },
      { time: '16/01/07 12:00', pv: 609 },
      { time: '16/01/07 13:00', pv: 309 },
      { time: '16/01/07 14:00', pv: 509 },
      { time: '16/01/07 15:00', pv: 909 },
      { time: '16/01/07 16:00', pv: 709 },
      { time: '16/01/07 17:00', pv: 309 },
      { time: '16/01/07 18:00', pv: 109 },
      { time: '16/01/07 19:00', pv: 109 },
      { time: '16/01/07 20:00', pv: 109 },
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

export default PCTabletLineChartByDay;
