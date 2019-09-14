import { useEffect, useRef } from 'react';

export default function useCodeHighlighting(watchedProps, keyword) {
  const container = useRef(null);
  const mark = useRef(null);
  useEffect(() => {
    renderPrettyPrint();
  }, [...watchedProps]);

  function renderPrettyPrint() {
    setTimeout(() => {
      if (container.current) {
        container.current.classList.remove('prettyprinted');
        setTimeout(() => PR.prettyPrint(
          () => setTimeout(() => renderHighLight(), 1000)
        ), 100);
      }
    }, container.current ? 0 : 1000);
  }

  function renderHighLight() {
    if (!keyword) {
      return;
    }
    if (mark.current) {
      mark.current.unmark()
    }
    mark.current = new Mark(container.current);
    let idx = 0;
    mark.current.mark(keyword, {
      each: el => {
        el.setAttribute('tabindex', idx++);
      }
    });
  }

  return container;
}
