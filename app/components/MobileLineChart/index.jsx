import React from 'react';
import classNames from 'classnames/bind';
import LineChart from '../LineChart';
import styles from './MobileLineChart.scss';

const cx = classNames.bind(styles);

class MobileLineChart extends React.Component {

  getAxisData = () => {
    return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  };

  getSeries = ()=> {
    return [{
      name: 'Total',
      type: 'line',
      data: ['1400', '1380', '1500', '1630', '1480', '2000', '2200']
    }, {
      name: 'Mobile',
      type: 'line',
      data: ['1300', '1350', '1400', '1380', '1390', '1410', '1180']
    }];
  };

  getLegendData = ()=> {
    return [{ name: 'Total', icon: 'react' }, { name: 'Mobile', icon: 'react' }];
  };

  render() {
    return (
      <div className={cx('container')}>
        <LineChart legendData={this.getLegendData()} color={['#0074FB', '#88EFDF']} xAxisData={this.getAxisData()} series={this.getSeries()}/>
      </div>
    );
  }
}

export default MobileLineChart;
