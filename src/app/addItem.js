var React = require('react');
var createReactClass = require('create-react-class'); // added because React.createClass is no longer supported by React
require('./css/addItem.css');

var AddItem = createReactClass({
  render: function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="submit" />
      </form>
    );
  },

  //Custom Functions
  handleSubmit: function(e){
    //input refs going into play here because we need to reach into the text input and pull out the data that the user inputted
    //submit button is going to make page reload and we do not want that to happen
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});

module.exports = AddItem;

//adding onSubmit event handler to the form will fire a local function when submit button is clikced. This function is going to grab the input ref off input type="text". This is going to be passed to the parent function and then we will add it to the original todos array
