const renderElem = ({ tagName, attrs, children }) => {
  //create the element
  const $el = document.createElement(tagName);

  //set the attributes
  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
};

const render = (vNode) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }




  return renderElem(vNode);


  throw new Error("Invalid vNode");
};

export default render;