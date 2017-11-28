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
        <TodoItem item={item} key={index} onDelete={this.onDelete} /> //nested component, passing it the items from the local version of todos array. Because we are outputting this component for each item in the array we need to give each component a key so react can have an identifier on that component
        //passed onDelete function through an attribute so we can access it in the component below
      );
    }.bind(this));//don't delete!!
      // inside return is where JSX is in action. everything in the return method needs to be contained in one parent tag
      //on click is set to the function that will be fired when clicked
    return(
      <div id="todo-list">
        <p>Its the most wonderful time of the year...</p>
        <ul>{todos}</ul>
      </div>
    );
  }, //render

  // Custom Functions
  //onDelete function is so that we can delete the array item and then pass this as a props to the component below?
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    }); //filtering item passed to us out of the array val = the string in the array and the updated array is saved in updatedTodos
    this.setState({
      todos: updatedTodos
    });
  }
});

//Create TodoItem component
// If we want to be able to click on a list item and it will delete it, we need to create that event(function) in the component below because that is where the individual items are
var TodoItem = createReactClass({
  render: function(){
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  //Custom Functions
  //when on click function is fired we want to delete data from todos array
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
