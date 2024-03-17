const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  child: "Click me to see whats trending",
  props: {
    href: "https://trends.google.com/trends/",
    target: "_blank",
  },
};

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.child;

  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  for (prop in reactElement.props) {
    if (prop === "child") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

customRender(reactElement, mainContainer);
