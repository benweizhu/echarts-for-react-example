import React from 'react';
import PieChart from '../PieChart';

class MobilePieChart extends React.Component {

  getData = () => {
    return [
      {
        value: 335,
        name: 'China Mobile',
        itemStyle: {
          normal: {
            color: '#21C5DA'
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
        name: 'China Unicom',
        itemStyle: {
          normal: {
            color: '#5969C0'
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
        name: 'China Telecom',
        itemStyle: {
          normal: {
            color: '#74ADFC'
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
        name: 'Other',
        itemStyle: {
          normal: {
            color: '#58E2C2'
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
        value: 50,
        name: 'MVNO',
        itemStyle: {
          normal: {
            color: '#53667B'
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

export default MobilePieChart;
