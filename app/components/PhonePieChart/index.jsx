import React from 'react';
import PieChart from '../PieChart';
import classNames from 'classnames/bind';
import styles from './PhonePieChart.scss';

const cx = classNames.bind(styles);

class PhonePieChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBrandDetails: false
    };
  }
  getData = () => {
    return [
      {
        value: 335,
        name: 'Xiaomi\n34%\n19,002,222',
        itemStyle: {
          normal: {
            color: '#C7E38F'
          }
        },
        label: {
          normal: {
            textStyle: {
              color: '#67717C',
              fontStyle: 'normal'
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

  handleBrandClick = (e) => {
    console.log(e.name);
    this.setState({
      showBrandDetails: !this.state.showBrandDetails
    });
  }

  renderContent = () => {
    if (this.state.showBrandDetails) {
      return (<div className={cx('hidden', { show: this.state.showBrandDetails })}>show brand details</div>);
    }
    return (<PieChart className={cx({ hidden: this.state.showBrandDetails })} title="23,323" data={this.getData()} handleEvents={{ click: this.handleBrandClick }} />);
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

}

export default PhonePieChart;
