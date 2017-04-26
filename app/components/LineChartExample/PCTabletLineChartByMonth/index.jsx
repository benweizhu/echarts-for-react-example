import React from 'react';
import classNames from 'classnames/bind';
import styles from './PCTabletLineChartByMonth.scss';
import PVLineChart from '../../PVLineChart';

const cx = classNames.bind(styles);

class PCTabletLineChartByMonth extends React.Component {

  getData = ()=> {
    return [
      { time: '07/01/16', pv: 4000 },
      { time: '14/01/16', pv: 3800 },
      { time: '21/01/16', pv: 5000 },
      { time: '28/01/16', pv: 1000 },
      { time: '05/02/16', pv: 2000 },
      { time: '13/02/16', pv: 6000 },
      { time: '20/02/16', pv: 3000 },
      { time: '27/02/16', pv: 5000 },
      { time: '05/03/16', pv: 9000 },
      { time: '12/03/16', pv: 7000 },
      { time: '19/03/16', pv: 3000 },
      { time: '26/03/16', pv: 1000 },
      { time: '31/03/16', pv: 1000 }
    ];
  };

  getPCData = ()=> {
    return [
      { time: '07/01/16', pv: 400 },
      { time: '14/01/16', pv: 380 },
      { time: '21/01/16', pv: 500 },
      { time: '28/01/16', pv: 100 },
      { time: '05/02/16', pv: 200 },
      { time: '13/02/16', pv: 600 },
      { time: '20/02/16', pv: 300 },
      { time: '27/02/16', pv: 500 },
      { time: '05/03/16', pv: 900 },
      { time: '12/03/16', pv: 700 },
      { time: '19/03/16', pv: 300 },
      { time: '26/03/16', pv: 100 },
      { time: '31/03/16', pv: 100 }
    ];
  };

  getMonthData = ()=> {
    return [
      { time: '01/16', pv: 40000 },
      { time: '02/16', pv: 38000 },
      { time: '03/16', pv: 50000 },
      { time: '04/16', pv: 10000 },
      { time: '05/16', pv: 20000 },
      { time: '06/16', pv: 60000 },
      { time: '07/16', pv: 30000 },
      { time: '08/16', pv: 50000 },
      { time: '09/16', pv: 90000 },
      { time: '10/16', pv: 70000 },
      { time: '11/16', pv: 30000 },
      { time: '12/16', pv: 10000 },
      { time: '01/17', pv: 40000 },
      { time: '02/17', pv: 38000 },
      { time: '03/17', pv: 50000 },
      { time: '04/17', pv: 10000 },
      { time: '05/17', pv: 20000 },
      { time: '06/17', pv: 60000 },
      { time: '07/17', pv: 30000 },
      { time: '08/17', pv: 50000 },
      { time: '09/17', pv: 90000 },
      { time: '10/17', pv: 70000 },
      { time: '11/17', pv: 30000 },
      { time: '12/17', pv: 10000 }
    ];
  };

  getMonthPCData = ()=> {
    return [
      { time: '01/16', pv: 4000 },
      { time: '02/16', pv: 3800 },
      { time: '03/16', pv: 5000 },
      { time: '04/16', pv: 1000 },
      { time: '05/16', pv: 2000 },
      { time: '06/16', pv: 6000 },
      { time: '07/16', pv: 3000 },
      { time: '08/16', pv: 5000 },
      { time: '09/16', pv: 9000 },
      { time: '10/16', pv: 7000 },
      { time: '11/16', pv: 3000 },
      { time: '12/16', pv: 1000 },
      { time: '01/17', pv: 4000 },
      { time: '02/17', pv: 3800 },
      { time: '03/17', pv: 5000 },
      { time: '04/17', pv: 1000 },
      { time: '05/17', pv: 2000 },
      { time: '06/17', pv: 6000 },
      { time: '07/17', pv: 3000 },
      { time: '08/17', pv: 5000 },
      { time: '09/17', pv: 9000 },
      { time: '10/17', pv: 7000 },
      { time: '11/17', pv: 3000 },
      { time: '12/17', pv: 1000 }
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

  getMonthPvDataGroup = ()=> {
    return [
      {
        name: 'Tablet',
        color: '#EF50AB',
        data: this.getMonthData()
      },
      {
        name: 'PC',
        color: '#F3A10E',
        data: this.getMonthPCData()
      }
    ]
  };

  render() {
    return (
      <div className={cx('container')}>
        <PVLineChart byWeek pvDataGroup={this.getPvDataGroup()}/>
        <PVLineChart pvDataGroup={this.getMonthPvDataGroup()}/>
      </div>
    );
  }
}

export default PCTabletLineChartByMonth;
