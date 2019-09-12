import React, { useMemo, useRef } from 'react';
import * as Tools from '../utils/Tools';
import VariableItem from './VariableItem';

const notFound = val => val && /59ce9297fba93aeb9d693a2f61922fb6|bfd876277827a33f49d363e8857977a0/g.test(Tools.MD5(val));
const notFoundImg = '//user-images.githubusercontent.com/799578/50722775-1a9a1d00-110f-11e9-9bcc-efe5465a4ad5.jpg';
const animationName = Math.random() > 0.5 ? 'zoomInDown' : 'zoomInUp';

export default function VariableList(props) {
  const lastPageLen = useRef();
  const list = useMemo(() => { // same as "shouldComponentUpdate", only compute when "variableList" has changed
    const variableList = props.variableList;
    const pageLen = variableList.length;
    let pages = [];
    if (notFound(props.searchValue)) {
      pages.push(<img style={{ maxWidth: '100%' }} src={notFoundImg} />);
    }
    variableList.forEach((list, i) => {
      const isLast = i === pageLen - 1 && lastPageLen.current != pageLen;
      const variables = list.map((variable, j) => {
        let style = {}, className = '', duration = (list.length - j) / list.length;
        if (isLast) {
          className = 'animated';
          style = {
            animationName: animationName,
            animationDelay: duration + 's',
            animationDuration: Math.min(duration, 0.8) + Math.random() + 's'
          };
        }
        return <VariableItem key={Tools.uuid()} variable={variable}
          onOpenSourceCode={props.onOpenSourceCode} style={style} className={className} />
      });
      if (variables && variables.length) {
        if (pages.length) {
          pages.unshift(<hr />);
        }
        Array.prototype.unshift.apply(pages, variables)
      }
    });
    lastPageLen.current = pageLen;
    return pages;
  }, [props.variableList]);

  return <div className='variable-list'>{list}</div>;
}
