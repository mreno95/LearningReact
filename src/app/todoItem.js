var React = require('react');
var createReactClass = require('create-react-class'); // added because React.createClass is no longer supported by React
require('./css/todoItem.css'); //able to do this because of the way we have set up webpack

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

module.exports = TodoItem;
