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
        <TodoItem item={item} key={index} /> //nested component, passing it the items from the local version of todos array. Because we are outputting this component for each item in the array we need to give each component a key so react can have an identifier on that component
      );
    });
      // inside return is where JSX is in action. everything in the return method needs to be contained in one parent tag
    return(
      <div id="todo-list">
        <p>Its the most wonderful time of the year...</p>
        <ul>{todos}</ul>
      </div>
    );
  } //render
});

//Create TodoItem component
var TodoItem = createReactClass({
  render: function(){
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
