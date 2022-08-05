import {Component} from "../core/Component.js";

export default class Error extends Component {
  
  template () {
    return `
      <div style="text-align: center">
          <h1>404 Not Found</h1>
          <p>Oh no! It looks like the page you're trying to get to is missing!</p>
      </div>
    `;
  }
}