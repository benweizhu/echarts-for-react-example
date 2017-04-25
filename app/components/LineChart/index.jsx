import React from 'react';
import EchartsForReact from 'echarts-for-react';
import classNames from 'classnames/bind';
import styles from './LineChart.scss';

const cx = classNames.bind(styles);

class LineChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        color: this.props.color,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '0',
          right: '3%',
          bottom: '3%',
          top: '13%',
          containLabel: true
        },
        legend: {
          x: 'left',
          padding: [10, 20, 0, 20],
          data: this.props.legendData
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.xAxisData,
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
          splitLine: {
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
        series: this.props.series
      }
    }
  }

  render() {
    return (
      <div className={cx('container')}>
        <EchartsForReact
          option={this.state.options}
          notMerge
          lazyUpdate
          onEvents={this.props.handleEvents}/>
      </div>
    );
  }
}

LineChart.propTypes = {
  legendData: React.PropTypes.arrayOf(React.PropTypes.object),
  color: React.PropTypes.arrayOf(React.PropTypes.string),
  xAxisData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  series: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default LineChart;
