import React from 'react';
import {Icon} from 'semantic-ui-react';

export default class NoticeLinks extends React.Component {

  list = React.createRef();
  active = 1;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => this.renderItem(this.list.current.children), 10000);
  }

  renderItem(list) {
    Array.prototype.forEach.call(list, (item, i) => {
      if (i === this.active) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
    this.active++;
    if (this.active >= list.length) {
      this.active = 0;
    }
  }

  render() {
    return (
      <div className='notice-links' ref={this.list}>
        <a className='animated fadeIn show' target='_blank' rel='noopener noreferrer'
           href='https://github.com/unbug/snts'>
          <Icon name='heartbeat'/> SAY NO TO SUICIDE PUBLIC LICENSE
        </a>
        <a className='animated fadeIn' target='_blank' rel='noopener noreferrer' href='//mihtool.com/'>
          <Icon name='code'/> [MIHTool] iOS 上调试和优化页面的工具
        </a>
        <a className='animated fadeIn' target='_blank' rel='noopener noreferrer' href='https://www.wasmrocks.com/'>
          <Icon name='hand rock'/> WebAssembly Rocks
        </a>
        <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
           href='https://www.gitbook.com/book/unbug/react-native-training/details'>
          <Icon name='video'/> [开源] React Native 开发培训资料和视频
        </a>
        <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
           href='https://www.zhihu.com/question/27097399/answer/78619944'>
          [知乎] 编程的时候命名方法或变量词穷了怎么办？
        </a>
      </div>
    )
  }
}
