var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class'); // added because React.createClass is no longer supported by React

// Create component (not using es6 classes)
var TodoComponent = createReactClass({
  //pass methods, only one require is render method
  //class TodoComponent extends React.createComponent {
  render:function(){
    return(
      // inside return is where JSX is in action. everything in the return method needs to be contained in one parent tag
      <div>
        <h1>{this.props.mssg}</h1>
        <p><strong>Name: </strong>{this.props.icecream.name}</p>
        <p><strong>Type: </strong>{this.props.icecream.type}</p>
        <p><strong>Calories: </strong>{this.props.icecream.calories}</p>
      </div>
    );
  }
});

var myIcecream = {name:'Salted Caramel', type:'fro-yo', calories:'120'};

// Put component into HTML page
ReactDOM.render(<TodoComponent mssg="I like icecream" icecream={myIcecream} />, document.getElementById('todo-wrapper'));
