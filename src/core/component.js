import { updateElement } from "./updateElement.js";

export class Component {
  $target = document.querySelector('#app'); 

  constructor () {
    this.setup();
    this.render();
  }
  setup () {};
  template () { return ''; }

  render () {
    const { $target } = this;

    // 기존 Node를 복제한 후에 새로운 템플릿을 채워넣는다.
    const newNode = $target.cloneNode(true);
    newNode.innerHTML = this.template();

    // DIFF알고리즘을 적용한다.
    const oldChildNodes = [ ...$target.childNodes ];
    const newChildNodes = [ ...newNode.childNodes ];
    const max = Math.max(oldChildNodes.length, newChildNodes.length);
    for (let i = 0; i < max; i++) {
      updateElement($target, newChildNodes[i], oldChildNodes[i]);
    }
  }
}