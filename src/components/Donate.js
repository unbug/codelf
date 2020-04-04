import React from 'react';
import * as Tools from '../utils/Tools';

export default function Donate(props) {
  const cnText = Tools.randomList(['颈椎病晚期', '穷困潦倒', '快交不起房租', '天天加班', '有可能会猝死'], 1)[0];
  let text = <h4 className='lang'>Buy <a href='https://twitter.com/unbug' rel='noopener noreferrer' target='_blank'>@unbug</a> a drink</h4>;
  if (props.isZH) {
    text = <h4 className='lang cn'>给<a href='https://weibo.com/unbug/' rel='noopener noreferrer' target='_blank'>{cnText}的作者</a>打赏个红包吧</h4>;
  }
  return (
    <div className='donate'>
      <div className='hd'>{text}</div>
      <div className='bd'>
        <img src='images/wechatpay.jpg' className='wechatpay' title='微信付款' />
        <img src='images/zhifubao.png' className='zhifubao' title='支付宝转账' />
        <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
          <input type='hidden' name='cmd' value='_s-xclick' />
          <input type='hidden' name='hosted_button_id' value='43H7K8PWR4VV4' />
          <input type='image' className='paypal' src='images/paypal.png' border='0' name='submit'
            title='Paypal' />
        </form>
      </div>
    </div>
  )
}
