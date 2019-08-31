import React, { useEffect, useRef } from 'react';
import { Icon } from 'semantic-ui-react';

export default function NoticeContainer() {
  const listEl = useRef(null);
  useSliderEffect(listEl);

  return (
    <div className='notice-container' ref={listEl}>
      <a className='animated fadeIn show' target='_blank' rel='noopener noreferrer'
        href='https://www.yuque.com/?CODELF'>
        [语雀] 阿里技术团队打造的专业云知识库
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
        href='https://github.com/unbug/snts'>
        <Icon name='heartbeat' /> SAY NO TO SUICIDE PUBLIC LICENSE
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer' href='//mihtool.com/'>
        <Icon name='code' /> [MIHTool] iOS 上调试和优化页面的工具
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer' href='https://www.wasmrocks.com/'>
        <Icon name='hand rock' /> WebAssembly Rocks
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
        href='https://github.com/unbug/react-native-train/blob/master/README.md'>
        <Icon name='video' /> [开源] React Native 开发培训资料和视频
      </a>
    </div>
  )
}

function useSliderEffect(el) {
  useEffect(() => {
    const timer = setInterval(() => renderItem(el.current.children), 10000);
    return () => clearInterval(timer);
  }, []); // run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([])

  let active = 1;
  function renderItem(list) {
    Array.prototype.forEach.call(list, (item, i) => {
      if (i === active) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
    active = (active + 1) % list.length;
  }
}
