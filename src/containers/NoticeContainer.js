import React, { useState, useEffect, useRef } from 'react';
import { Icon, Popup } from 'semantic-ui-react';

export default function NoticeContainer() {
  const listEl = useRef(null);
  const [setDisable] = useSliderEffect(listEl);

  return (
    <div className='notice-container' ref={listEl} onMouseEnter={() => setDisable(true)} onMouseLeave={() => setDisable(false)}>
      <a className='animated fadeIn show' target='_blank' rel='noopener noreferrer'
        href='https://job.toutiao.com/s/gKn4Ea'>
        <Popup position='top center' hoverable={true} positionFixed={true}
          content={
            <div style={{ textAlign: 'center', width: '320px' }}>
              <b>字节跳动内推, 请扫二维码或点链接</b>
              <div style={{display: 'flex'}}>
                <div style={{ flex: 1 }}>
                  <img src='https://user-images.githubusercontent.com/799578/73824613-67ca5000-4835-11ea-9f75-cd894405a8dd.jpeg' height='92' />
                  <div>
                    <a target='_blank' rel='noopener noreferrer' href='https://job.toutiao.com/s/gKn4Ea'>全部职位内推</a>
                  </div>
                </div>                
                <div style={{flex: 1 }}>
                  <img src='https://user-images.githubusercontent.com/799578/74077638-6890fb00-4a5c-11ea-92b8-6ca218c060ef.png' height='90' />
                  <div>
                    <a target='_blank' rel='noopener noreferrer' href='https://job.toutiao.com/mobile/campus/invite/JXBD4CX/'>2020校招内推</a>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <img src='https://user-images.githubusercontent.com/799578/74133120-d555f200-4c22-11ea-9569-009287648476.png' height='90' />
                  <div>
                    <a target='_blank' rel='noopener noreferrer' href='https://job.toutiao.com/s/pbjj1W'>技术实习内推</a>
                  </div>
                </div>
              </div>
              <div>前端，后端，产品，运营，UX/UI，运维，QA，算法，数据挖掘，实习生等</div>
            </div>
          }
          trigger={
            <span>[内推] 字节跳动中国，美国，新加坡社招/校招/实习</span>
          } />
      </a>
      {/* <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
        href='https://www.yuque.com/?CODELF'>
        [语雀] 阿里技术团队打造的专业云知识库
      </a> */}
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
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    let interval = 0;
    const delay = setTimeout(() => {
      interval = setInterval(() => !disable && renderItem(el.current.children), 5000);
    }, 15000);

    return () => {
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, [disable]);

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
  return [setDisable];
}
