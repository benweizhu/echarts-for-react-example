import React from 'react';
import PieChart from '../PieChart';

class PhonePieChart extends React.Component {

  getData = () => {
    return [
      {
        value: 335,
        name: 'Xiaomi',
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
        value: 310,
        name: 'Samsung',
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
        value: 234,
        name: 'Vivo',
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
        value: 135,
        name: 'Huawei',
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
        value: 1048,
        name: 'Apple',
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
        value: 251,
        name: 'Other',
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
    ];
  }

  render() {
    return (
      <div>
        <PieChart title="23,323" data={this.getData()} handleEvents={{ click: (e) => { console.log(e); } }} />
      </div>
    );
  }

}

export default PhonePieChart;
