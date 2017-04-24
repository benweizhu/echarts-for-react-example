import React from 'react';
import EchartsForReact from 'echarts-for-react';
import classNames from 'classnames/bind';
import styles from './PieCircle.scss';

const cx = classNames.bind(styles);

class PieCircle extends React.Component {

  getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className={cx('container')}>
        <EchartsForReact
          option={this.getOption()}
          notMerge
          lazyUpdate
          onChartReady={this.onChartReadyCallback} />
      </div>
    );
  }
}

export default PieCircle;
