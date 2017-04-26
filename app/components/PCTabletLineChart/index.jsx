import React from 'react';
import classNames from 'classnames/bind';
import LineChart from '../LineChart';
import styles from './PCTabletLineChart.scss';

const cx = classNames.bind(styles);

class PCTabletLineChart extends React.Component {

  constructor(props) {
    super(props);
    const pcAxisData = [];
    const pcSeriesData = [];
    this.convertDataToAxisAndSeries(pcAxisData, pcSeriesData, props.pcData);

    const tabletAxisData = [];
    const tabletSeriesData = [];
    this.convertDataToAxisAndSeries(tabletAxisData, tabletSeriesData, props.tabletData);

    this.state = {
      tablet: {
        axisData: tabletAxisData,
        seriesData: tabletSeriesData
      },
      pc: {
        axisData: pcAxisData,
        seriesData: pcSeriesData
      }
    };
  }

  convertDataToAxisAndSeries = (axisData, seriesData, data) => {
    data && data.forEach((eachPoint)=> {
      axisData.push(eachPoint.time);
      seriesData.push(eachPoint.pv);
    });
  };

  getSeries = ()=> {
    return [{
      name: 'Tablet',
      type: 'line',
      symbol: 'none',
      data: this.state.tablet.seriesData
    }, {
      name: 'PC',
      type: 'line',
      symbol: 'none',
      data: this.state.pc.seriesData
    }];
  };

  getXAxisData = () => {
    const tabletAxisData = this.state.tablet.axisData;
    const pcAxisData = this.state.pc.axisData;
    return tabletAxisData.length > pcAxisData.length ? tabletAxisData : pcAxisData;
  };

  getLegendData = ()=> {
    return [{ name: 'Tablet', icon: 'react' }, { name: 'PC', icon: 'react' }];
  };

  render() {
    return (
      <div className={cx('container')}>
        <LineChart {...this.props} legendData={this.getLegendData()} color={['#EF50AB', '#F3A10E']} xAxisData={this.getXAxisData()} series={this.getSeries()}/>
      </div>
    );
  }
}

PCTabletLineChart.propTypes = {
  pcData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  tabletData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default PCTabletLineChart;
