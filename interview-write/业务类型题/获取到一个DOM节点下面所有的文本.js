/**
 * @description 1. 实现一个函数，可以按顺序获取到一个DOM节点下面所有的文本。
 */

function getTextContent(dom) {
  const result = [];
  dom.querySelectorAll('*').forEach((node) => {
    result.push(node.textContent);
  });

  return result;
}