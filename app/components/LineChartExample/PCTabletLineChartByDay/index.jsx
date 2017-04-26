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

  getSixHourPCData = ()=> {
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

  getPCData = ()=> {
    return [
      { time: '16/01/07', pv: 38 },
      { time: '16/01/08', pv: 50 },
      { time: '16/01/09', pv: 10 },
      { time: '16/01/10', pv: 20 },
      { time: '16/01/11', pv: 60 },
      { time: '16/01/12', pv: 30 },
      { time: '16/01/13', pv: 50 },
      { time: '16/01/14', pv: 90 },
      { time: '16/01/15', pv: 70 },
      { time: '16/01/16', pv: 30 },
      { time: '16/01/17', pv: 10 },
      { time: '16/01/18', pv: 10 },
      { time: '16/01/19', pv: 10 },
      { time: '16/01/20', pv: 10 },
      { time: '16/01/21', pv: 20 },
      { time: '16/01/22', pv: 60 },
      { time: '16/01/23', pv: 30 },
      { time: '16/01/24', pv: 50 },
      { time: '16/01/25', pv: 90 },
      { time: '16/01/26', pv: 70 },
      { time: '16/01/27', pv: 30 },
    ];
  };

  getData =()=>{
    return [
      { time: '16/01/07', pv: 380 },
      { time: '16/01/08', pv: 500 },
      { time: '16/01/09', pv: 100 },
      { time: '16/01/10', pv: 200 },
      { time: '16/01/11', pv: 600 },
      { time: '16/01/12', pv: 300 },
      { time: '16/01/13', pv: 500 },
      { time: '16/01/14', pv: 900 },
      { time: '16/01/15', pv: 700 },
      { time: '16/01/16', pv: 300 },
      { time: '16/01/17', pv: 100 },
      { time: '16/01/18', pv: 100 },
      { time: '16/01/19', pv: 380 },
      { time: '16/01/20', pv: 500 },
      { time: '16/01/20', pv: 100 },
      { time: '16/01/21', pv: 200 },
      { time: '16/01/22', pv: 600 },
      { time: '16/01/23', pv: 300 },
      { time: '16/01/24', pv: 500 },
      { time: '16/01/25', pv: 900 },
      { time: '16/01/26', pv: 700 },
      { time: '16/01/27', pv: 300 },
    ];
  }


  render() {
    return (
      <div className={cx('container')}>
        <PCTabletLineChart bySixHours pcData={this.getSixHourPCData()} tabletData={this.getSexHourData()}/>
        <PCTabletLineChart pcData={this.getPCData()} tabletData={this.getData()}/>
      </div>
    );
  }
}

export default PCTabletLineChartByDay;
