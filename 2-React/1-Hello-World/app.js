

// step-1 : define component-class

// class HelloWorld extends React.Component {
//     render() {
//         let spanEle = React.createElement('span', { className: 'badge' }, "Hello World");
//         let divEle = React.createElement('div',{ className: 'alert alert-info' },spanEle);
//         return divEle;
//     }
// }

// or ( using JSX )

class HelloWorld extends React.Component {
    render() {
      return (
          <div className="alert alert-info">
              <span className="badge">Hello World</span>
          </div>
      );
    }
}


// step-2 : instantiate component-class & render to virtual-DOM

// let helloWorld = React.createElement(HelloWorld);
// or
let helloWorld=<HelloWorld />
ReactDOM.render(helloWorld, document.getElementById('root'));