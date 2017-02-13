import React from 'react';
import RcRange from 'rc-slider/lib/Range';
import createSliderWithTooltip from 'rc-slider/lib/createSliderWithTooltip';
import { RangeProps }from './PropsType';
const RcRangeWithTooltip = createSliderWithTooltip(RcRange);

export default class Range extends React.Component<RangeProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
    tipTransitionName: 'zoom-down',
  };

  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcRangeWithTooltip { ...this.props } /></div>
    );
  }
}
