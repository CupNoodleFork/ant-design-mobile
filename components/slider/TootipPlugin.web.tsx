import RcSliderHandle from 'rc-slider/lib/Handle';
import RcTooltip from 'rc-tooltip';

export default (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <RcTooltip
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
      prefixCls="am-slider-tooltip"
    >
      <RcSliderHandle {...restProps} />
    </RcTooltip>
  );
};
