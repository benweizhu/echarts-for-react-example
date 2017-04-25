import React from 'react';
import classNames from 'classnames/bind';
import EchartsForReact from 'echarts-for-react';
import styles from './WorldMap.scss';

require("./china.js");

const cx = classNames.bind(styles);

class ChinaMap extends React.Component {
  getOption = () => {
    function randomData() {
      return Math.round(Math.random() * 1000);
    }
    return {
      tooltip: {
        trigger: 'item'
      },
      visualMap: [{
        type: 'continuous',
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      }],
      toolbox: {
        show: false
      },
      series: [
        {
          name: 'iphone4',
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
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
          style = {{width: '500px', height: '500px'}}
          lazyUpdate />
      </div>
    );
  }
}

export default ChinaMap;
