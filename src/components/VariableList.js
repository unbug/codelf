import {useMemo} from 'react';
import {Button, Label, Popup} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';

const notFound = val => val && /59ce9297fba93aeb9d693a2f61922fb6|bfd876277827a33f49d363e8857977a0/g.test(Tools.MD5(val));
const notFoundImg = '//user-images.githubusercontent.com/799578/50722775-1a9a1d00-110f-11e9-9bcc-efe5465a4ad5.jpg';

function Variable(props) {
  const clipboardId = `clipboardId-${Tools.uuid()}`;
  const variable = props.variable;
  let clipboard = null;

  function handlePopOnMount() {
    clipboard = new ClipboardJS(`#${clipboardId}`);
  }

  function handlePopUnmount() {
    clipboard && clipboard.destroy();
  }

  return (
    <Popup style={{padding: '0'}}
           position='top center'
           trigger={
             <Label circular color={variable.color} className={props.className} style={props.style}>
               {variable.keyword}
             </Label>}
           onMount={handlePopOnMount}
           onUnmount={handlePopUnmount}
           hoverable={true}>
      <Button.Group vertical basic style={{border: 0}}>
        <Button compact as='a' href={`#${variable.keyword}`}>Search</Button>
        <Button compact as='a' href={variable.repoLink} target='_blank'>Repo</Button>
        <Button compact data-clipboard-text={variable.keyword} id={clipboardId}>Copy</Button>
        <Button compact onClick={() => props.onOpenSourceCode(variable)}>
          [{variable.repoLang}] Codes <Label size='mini' circular color={variable.color}>{variable.repoList.length}</Label>
        </Button>
      </Button.Group>
    </Popup>
  );
}

const animationName = Math.random() > 0.5 ? 'zoomInDown' : 'zoomInUp';
let lastPageLen = 0;
export default function VariableList(props) {
  const variableList = props.variableList;
  const list = useMemo(() => {
    const pageLen = variableList.length;
    let pages = [];
    if (notFound(props.searchValue)) {
      pages.push(<img style={{maxWidth: '100%'}} src={notFoundImg}/>);
    }
    variableList.forEach((list, i) => {
      const isLast = i === pageLen - 1 && lastPageLen != pageLen;
      const variables = list.map((variable, j) => {
        let style = {}, className = '', duration = (list.length - j) / list.length;
        if (isLast) {
          className = 'animated';
          style = {
            animationName: animationName,
            animationDelay: duration + 's',
            animationDuration: Math.min(duration, 0.8) +  Math.random() + 's'
          };
        }
        return <Variable key={Tools.uuid()} variable={variable}
                         onOpenSourceCode={props.onOpenSourceCode} style={style} className={className}/>
      });
      if (variables && variables.length) {
        if (pages.length) {
          pages.unshift(<hr/>);
        }
        Array.prototype.unshift.apply(pages, variables)
      }
    });
    lastPageLen = pageLen;
    return pages;
  }, [variableList]);

  return <div className='variable-list'>{list}</div>;
}
