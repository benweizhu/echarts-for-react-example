import React from 'react';
import EchartsForReact from 'echarts-for-react';
import classNames from 'classnames/bind';
import styles from './PieCircle.scss';

const cx = classNames.bind(styles);

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {
        title: {
          text: props.title,
          x: 'center',
          textStyle: {
            color: '#495562'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {d}% ({c})'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '55%'],
            data: props.data
          }
        ]
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    const option = this.state.option;
    option.title.text = nextProps.title;
    option.series.data = nextProps.data;
    this.setState({ option });
  }

  render() {
    return (
      <div className={cx('container')}>
        <EchartsForReact
          option={this.state.option}
          notMerge
          lazyUpdate
          onEvents={this.props.handleEvents} />
      </div>
    );
  }
}

PieChart.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  handleEvents: React.PropTypes.object
};

export default PieChart;
