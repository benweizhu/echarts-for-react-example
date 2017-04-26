import React from 'react';
import classNames from 'classnames/bind';
import PVLineChart from '../../PVLineChart';
import styles from './PCTabletLineChartByDay.scss';

const cx = classNames.bind(styles);

class PCTabletLineChartByDay extends React.Component {

  getSexHourData = ()=> {
    return [
      { time: '07/01/16 6:00', pv: 380 },
      { time: '07/01/16 12:00', pv: 500 },
      { time: '07/01/16 18:00', pv: 100 },
      { time: '08/01/16 0:00', pv: 200 },
      { time: '08/01/16 6:00', pv: 600 },
      { time: '08/01/16 12:00', pv: 300 },
      { time: '08/01/16 18:00', pv: 500 },
      { time: '09/01/16 0:00', pv: 200 },
      { time: '09/01/16 6:00', pv: 600 },
      { time: '09/01/16 12:00', pv: 300 },
      { time: '09/01/16 18:00', pv: 500 },
      { time: '10/01/16 0:00', pv: 200 },
      { time: '10/01/16 6:00', pv: 600 },
      { time: '10/01/16 12:00', pv: 300 },
      { time: '10/01/16 18:00', pv: 500 },
      { time: '11/01/16 0:00', pv: 200 },
      { time: '11/01/16 6:00', pv: 600 },
      { time: '11/01/16 12:00', pv: 300 },
      { time: '11/01/16 18:00', pv: 500 },
      { time: '12/01/16 00:00', pv: 500 },
    ];
  };

  getSixHourPCData = ()=> {
    return [
      { time: '07/01/16 6:00', pv: 38 },
      { time: '07/01/16 12:00', pv: 50 },
      { time: '07/01/16 18:00', pv: 10 },
      { time: '08/01/16 0:00', pv: 20 },
      { time: '08/01/16 6:00', pv: 60 },
      { time: '08/01/16 12:00', pv: 30 },
      { time: '08/01/16 18:00', pv: 50 },
      { time: '09/01/16 0:00', pv: 90 },
      { time: '09/01/16 6:00', pv: 70 },
      { time: '09/01/16 12:00', pv: 30 },
      { time: '09/01/16 18:00', pv: 10 },
      { time: '10/01/16 0:00', pv: 20 },
      { time: '10/01/16 6:00', pv: 60 },
      { time: '10/01/16 12:00', pv: 30 },
      { time: '10/01/16 18:00', pv: 50 },
      { time: '11/01/16 0:00', pv: 20 },
      { time: '11/01/16 6:00', pv: 60 },
      { time: '11/01/16 12:00', pv: 30 },
      { time: '11/01/16 18:00', pv: 50 },
      { time: '12/01/16 00:00', pv: 50 },
    ];
  };

  getPCData = ()=> {
    return [
      { time: '07/01/16', pv: 38 },
      { time: '08/01/16', pv: 50 },
      { time: '09/01/16', pv: 10 },
      { time: '10/01/16', pv: 20 },
      { time: '11/01/16', pv: 60 },
      { time: '12/01/16', pv: 30 },
      { time: '13/01/16', pv: 50 },
      { time: '14/01/16', pv: 90 },
      { time: '15/01/16', pv: 70 },
      { time: '16/01/16', pv: 30 },
      { time: '17/01/16', pv: 10 },
      { time: '18/01/16', pv: 10 },
      { time: '19/01/16', pv: 10 },
      { time: '20/01/16', pv: 10 },
      { time: '21/01/16', pv: 20 },
      { time: '22/01/16', pv: 60 },
      { time: '23/01/16', pv: 30 },
      { time: '24/01/16', pv: 50 },
      { time: '25/01/16', pv: 90 },
      { time: '26/01/16', pv: 70 },
      { time: '27/01/16', pv: 30 },
    ];
  };

  getData = ()=> {
    return [
      { time: '07/01/16', pv: 380 },
      { time: '08/01/16', pv: 500 },
      { time: '09/01/16', pv: 100 },
      { time: '10/01/16', pv: 200 },
      { time: '11/01/16', pv: 600 },
      { time: '12/01/16', pv: 300 },
      { time: '13/01/16', pv: 500 },
      { time: '14/01/16', pv: 900 },
      { time: '15/01/16', pv: 700 },
      { time: '16/01/16', pv: 300 },
      { time: '17/01/16', pv: 100 },
      { time: '18/01/16', pv: 100 },
      { time: '19/01/16', pv: 100 },
      { time: '20/01/16', pv: 100 },
      { time: '21/01/16', pv: 200 },
      { time: '22/01/16', pv: 600 },
      { time: '23/01/16', pv: 300 },
      { time: '24/01/16', pv: 500 },
      { time: '25/01/16', pv: 900 },
      { time: '26/01/16', pv: 700 },
      { time: '27/01/16', pv: 300 },
    ];
  };

  getPvDataGroup = ()=> {
    return [
      {
        name: 'Tablet',
        color: '#EF50AB',
        data: this.getData()
      },
      {
        name: 'PC',
        color: '#F3A10E',
        data: this.getPCData()
      }
    ]
  };

  getSixHoursPvDataGroup = ()=> {
    return [
      {
        name: 'Tablet',
        color: '#EF50AB',
        data: this.getSexHourData()
      },
      {
        name: 'PC',
        color: '#F3A10E',
        data: this.getSixHourPCData()
      }
    ]
  };

  render() {
    return (
      <div className={cx('container')}>
        <PVLineChart bySixHours pvDataGroup={this.getPvDataGroup()}/>
        <PVLineChart pvDataGroup={this.getSixHoursPvDataGroup()}/>
      </div>
    );
  }

}

export default PCTabletLineChartByDay;
