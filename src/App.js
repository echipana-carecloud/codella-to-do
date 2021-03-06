import React, { Component } from 'react';
import './App.css';

// Create a Form so we can get started to creating our list
// Teach about Creating a Form and the associated props for an input tag


class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: this.props.list,
      likes: 0
    }
  this.handleDelete = this.handleDelete.bind(this)
  this.addLike = this.addLike.bind(this)
    }
  
  handleDelete(event) {
  event.preventDefault()
  let array= this.state.todoList
  let id = event.target.id
  array.splice(id,1)
  this.setState({todoList: array });
}

addLike(event) {
  event.preventDefault()
  let array= this.state.todoList
  let id= event.target.id
  let item= array[id]
  item.like++
  let like= this.state.todoList
  this.setState({toList: like})
  
}
  
  render() { 
    
    const createTasks = (item,index) =>  {
      let date = (new Date()).toDateString()
      item.index= index
      let like = item.like
      return <li className="item" id={index} key={index} ><span id="date">{date}</span>:{' '}{item.name}{' '}<span id="like">{like}</span>
      <button className="deleteButton" type="button" id={item.index} onClick={this.handleDelete}>Delete</button>
      <button className="likeButton" type="button" id={item.index} onClick={this.addLike}>Like</button>
      </li>
}

  let listItems = this.state.todoList.map(createTasks);
  //Bug if no items are empty there is no indicator - add Condition
// if (listItems.length === 0) {
//   listItems = "Add A Item. You have am empty list."
// } else {
//   listItems = todoEntries.map(createTasks);
// }

  return(
    <div className="Wall">
    <ol className="theList">
     {listItems}
   </ol>
   </div>
  )
  }
}

// export default ShowList;

class ListForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        list: []
      }
    this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleSubmit(event) {
      event.preventDefault() 
      let item = event.target.name.value 
      this.setState({name: item})
      let index = Date.now()
      this.state.list.push({name: item, key: index, like: 0})
    //bug:  form list does not reset when submitted event.target.reset()   - event.target.name.value.reset()
    }
    
  render() { 
    
    return (
    <div className="Form">
      <h1> Wall </h1>
        <form id="addItem" onSubmit={this.handleSubmit}>
          <label> Add New Post
          <input
            id="name"
            name='name'
            type='textarea'
            defaultValue={this.state.name} />
            </label>
            <div>
          <input
            id="submit"
            type='submit'
            defaultValue="Submit" />
            </div>
        </form>
        <ShowList item={this.state.name} list={this.state.list} />
      </div>
    );
  }
}

export default ListForm;

// class Main extends Component {
//   constructor (props) {
//   super(props);
//   this.state = {
//     todoItems: todoItems
//   }
// }
// 
// }
// 
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>My List App</h2>
//         </div>
//         <ListForm/>
              // <ShowList />
//       </div>
//     );
//   }
// }

// export default Main;




