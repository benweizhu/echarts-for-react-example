import React from 'react';
import EchartsForReact from 'echarts-for-react';
import classNames from 'classnames/bind';
import styles from './PieCircle.scss';

const cx = classNames.bind(styles);

class PieCircle extends React.Component {
  getOption = () => {
    return {
      title: {
        text: 'This is a mock up',
        x: 'center',
        textStyle: {
          color: '#495562'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {d}% ({c})"
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '55%'],

          data: [
            {
              value: 335, name: 'XiaoMi 34% 22,323',
              itemStyle: {
                normal: {
                  color: '#C7E38F'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#67717C',
                    fontStyle: 'bolder'
                  }
                }
              }
            },
            {
              value: 310, name: 'Samsung',
              itemStyle: {
                normal: {
                  color: '#1C4C26'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#67717C',
                    fontStyle: 'bolder'
                  }
                }
              }
            },
            {
              value: 234, name: 'Vivo',
              itemStyle: {
                normal: {
                  color: '#3A8449'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#67717C',
                    fontStyle: 'bolder'
                  }
                }
              }
            },
            {
              value: 135, name: 'Huawei',
              itemStyle: {
                normal: {
                  color: '#E3FEC7'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#67717C',
                    fontStyle: 'bolder'
                  }
                }
              }
            },
            {
              value: 1048, name: 'Apple',
              itemStyle: {
                normal: {
                  color: '#90E284'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#67717C',
                    fontStyle: 'bolder'
                  }
                }
              }
            },
            {
              value: 251, name: 'Other',
              itemStyle: {
                normal: {
                  color: '#7DC873'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#67717C',
                    fontStyle: 'bolder'
                  }
                }
              }
            }
          ]
        }
      ]
    };
  }
  pieselectchanged = () => {
    console.log('pieselectchanged');
  }
  render() {
    return (
      <div className={cx('container')}>
        <EchartsForReact
          option={this.getOption()}
          notMerge
          lazyUpdate
          onEvents={{ pieselectchanged: this.pieselectchanged, click: (e) => { console.log(e); } }}
          onChartReady={this.onChartReadyCallback} />
      </div>
    );
  }
}

export default PieCircle;
