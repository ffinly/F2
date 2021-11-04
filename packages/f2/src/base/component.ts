class Component {
  props: any;
  state: any;
  context: any;
  refs: {
    [key: string]: any;
  };
  updater: any;

  // render 返回的节点
  children: JSX.Element;
  // 对应 G 的group, 每个组件渲染的父接节点
  container: any;
  animate: boolean;
  constructor(props, context?, updater?) {
    this.props = props;
    this.state = {};
    this.context = context;
    this.updater = updater;
  }
  willMount() {}
  didMount() {}
  willReceiveProps(props) {}
  willUpdate() {}
  didUpdate() {}
  render() {
    return null;
  }
  didUnmount() {}
  setState(partialState, callback?: () => void) {
    this.updater.enqueueSetState(this, partialState, callback);
  }
  forceUpdate() {
    this.updater.enqueueForceUpdate(this, {});
  }
  setAnimate(animate: boolean) {
    this.animate = animate;
  }
}

// 标识是否是组件
// @ts-ignore
Component.prototype.isF2Component = true;

export default Component;