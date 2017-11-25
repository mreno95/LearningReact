var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class'); // added because React.createClass is no longer supported by React

// Create component (not using es6 classes)
var TodoComponent = createReactClass({
  //pass methods, only one require is render method
  //class TodoComponent extends React.createComponent {
  getInitialState:function(){
    return {
      todos: ['make hot chocolate', 'watch Elf movie', 'decorate the Christmas tree', 'make Christmas cookies']//add a comma and you can add additional states
    }
  }, //initial state and give it data which we then called below
  render:function(){
    //creating a local version todos array in the render function so we can manipulate it in this render function without changing the original data
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      );
    });//this is going to allow us to cycle through the arraw and create a list item for each array item
      // inside return is where JSX is in action. everything in the return method needs to be contained in one parent tag
    return(
      <div id="todo-list">
        <p>Its the most wonderful time of the year...</p>
        <ul>{todos}</ul>
      </div>
    );
  } //render
});


// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
