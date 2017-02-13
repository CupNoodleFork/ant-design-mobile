---
order: 3
title: 自定义滑动反馈
---

`Slider` 可以接受 `props.plugin = []`来生成滑动 Dom 反馈;



````jsx
import { Slider, WhiteSpace, WingBlank } from 'antd-mobile';

const Handle = Slider.Handle;

const CustomHandle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <div key={index}>
      <Handle {...restProps} />
      {dragging && <div className="custom-tooltip">拖动到了{value}</div>}
    </div>
  );
};

const App = React.createClass({
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">自定义Tooltip</p>
          <Slider plugin={[CustomHandle]} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">隐藏Tooltip</p>
          <Slider />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

```css
.custom-tooltip {
  text-align: center;
  padding-top: 0.25rem;
}
```