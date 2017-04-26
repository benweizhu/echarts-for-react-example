import React from 'react';
import EchartsForReact from 'echarts-for-react';
import classNames from 'classnames/bind';
import styles from './LineChart.scss';
import moment from 'moment';

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
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: '#646E7B'
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                if (props.byWeek) {
                  const sevenDaysBefore = moment(params.value, 'YY/MM/DD').subtract(7, 'days').format('YY/MM/DD');
                  return `${sevenDaysBefore} - ${params.value}`;
                } else if (props.bySixHours) {
                  const sevenDaysBefore = moment(params.value, 'YY/MM/DD').subtract(7, 'days').format('YY/MM/DD');
                  return `${sevenDaysBefore} - ${params.value}`;
                } else {
                  return params.value;
                }
              }
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
          axisTick: {
            show: false
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
  series: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  byWeek: React.PropTypes.bool,
  bySixHours: React.PropTypes.bool
};

LineChart.defautProps = {
  byWeek: false,
  bySixHours: false
};

export default LineChart;
