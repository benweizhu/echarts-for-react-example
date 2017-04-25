import React from 'react';
import classNames from 'classnames/bind';
import LineChart from '../LineChart';
import styles from './PCTabletLineChart.scss';

const cx = classNames.bind(styles);

class MobileLineChart extends React.Component {

  getAxisData = () => {
    return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  };

  getSeries = ()=> {
    return [{
      name: 'Tablet',
      type: 'line',
      data: ['400', '380', '500', '630', '480', '1000', '100']
    }, {
      name: 'PC',
      type: 'line',
      data: ['300', '350', '400', '380', '390', '410', '380']
    }];
  };

  getLegendData = ()=> {
    return [{ name: 'Tablet', icon: 'react' }, { name: 'PC', icon: 'react' }];
  };

  render() {
    return (
      <div className={cx('container')}>
        <LineChart legendData={this.getLegendData()} color={['#EF50AB', '#F3A10E']} xAxisData={this.getAxisData()} series={this.getSeries()}/>
      </div>
    );
  }
}

export default MobileLineChart;
