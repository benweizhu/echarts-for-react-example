import React from 'react';
import EchartsForReact from 'echarts-for-react';
import classNames from 'classnames/bind';
import styles from './LineChart.scss';

const cx = classNames.bind(styles);

class LineChart extends React.Component {

  getOptions = ()=> {
    return {
      color: ['#EF50AB', '#F3A10E'],
      tooltip: {
        trigger: 'item',
        position: ["50%", "50%"]
      },
      legend: {
        x: 'left',
        padding: [10, 20, 0, 20],
        data: [{ name: 'Tablet', icon: 'react' }, { name: 'PC', icon: 'react' }],
        selected: {
          'Tablet': true,
          'PC': true
        }
      },
      grid: {
        left: '0',
        right: '3%',
        bottom: '3%',
        top: '13%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
          lineStyle: {
            color: '#E4E6E9'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            color: '#646E7B'
          }
        }
      },
      yAxis: {
        splitLine: { //网格线
          show: true,
          lineStyle: {
            color: ['#EAEDF2'],
            type: 'dashed'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#E4E6E9'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            color: '#646E7B'
          }
        }
      },
      series: [{
        name: 'Tablet',
        type: 'line',
        data: ['400', '380', '500', '630', '480', '1000', '100'],
      }, {
        name: 'PC',
        type: 'line',
        data: ['300', '350', '400', '380', '390', '410', '380'],
      }]
    };
  };

  render() {
    return (
      <div className={cx('container')}>
        <EchartsForReact
          option={this.getOptions()}
          notMerge
          lazyUpdate
          onEvents={this.props.handleEvents}/>
      </div>
    );
  }
}

export default LineChart;
