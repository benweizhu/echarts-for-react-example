import React from 'react';
import classNames from 'classnames/bind';
import LineChart from '../LineChart';
import styles from './PVLineChart.scss';

const cx = classNames.bind(styles);

class PVLineChart extends React.Component {

  constructor(props) {
    super(props);
    const chartData = props.pvDataGroup && props.pvDataGroup.map((pvData)=> {
        const axisData = [];
        const seriesData = [];
        this.convertDataToAxisAndSeries(axisData, seriesData, pvData.data);

        return {
          name: pvData.name,
          color: pvData.color,
          axisData: axisData,
          seriesData: seriesData
        }
      });

    this.state = { chartData };
  }

  convertDataToAxisAndSeries = (axisData, seriesData, data) => {
    data && data.forEach((eachPoint)=> {
      axisData.push(eachPoint.time);
      seriesData.push(eachPoint.pv);
    });
  };

  getGroupSeries = () => {
    return this.state.chartData && this.state.chartData.map((data)=> {
        return {
          name: data.name,
          type: 'line',
          symbol: 'none',
          data: data.seriesData
        }
      });
  };

  getXAxisData = () => {
    const longestItem = this.state.chartData.reduce((lastItem, nextItem)=> {
      return nextItem.axisData.length > lastItem.axisData.length ? nextItem : lastItem;
    }, this.state.chartData[0]);
    return longestItem.axisData;
  };

  getLegendData = ()=> {
    return this.state.chartData && this.state.chartData.map((data)=> {
        return {
          name: data.name,
          icon: 'react'
        };
      });
  };

  getColor = () => {
    return this.state.chartData && this.state.chartData.map((data)=> {
        return data.color;
      });
  };

  render() {
    return (
      <div className={cx('container')}>
        <LineChart {...this.props} legendData={this.getLegendData()} color={this.getColor()} xAxisData={this.getXAxisData()} series={this.getGroupSeries()}/>
      </div>
    );
  }
}

PVLineChart.propTypes = {
  pvDataGroup: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  pcData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  tabletData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default PVLineChart;
