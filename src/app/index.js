var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class'); // added because React.createClass is no longer supported by React

// Create component (not using es6 classes)
var TodoComponent = createReactClass({
  //pass methods, only one require is render method
  //class TodoComponent extends React.createComponent {
  getInitialState:function(){
    return {
      todos: ['make hot chocolate', 'watch Elf movie', 'decorate the Christmas tree'],//add a comma and you can add additional states
      daysTilXmas: 31
    }
  }, //initial state and give it data which we then called below
  render:function(){
    //changing state by using .setState
    var daysLeft = setTimeout(function(){
      this.setState({
        daysTilXmas: 30
      })
    }.bind(this),5000); //have to do .bind to be able to use this.setState earlier, but not sure I understand why
    return(
      // inside return is where JSX is in action. everything in the return method needs to be contained in one parent tag
      <div id="todo-list">
        <p>Its the most wonderful time of the year...</p>
        <p>{this.state.daysTilXmas} Days Til Christmas</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  } //render
});


// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
