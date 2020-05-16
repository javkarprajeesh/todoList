import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList'


class App extends React.Component{

  state= {
    list :[]
  }

  onElementAdd = (newEle) =>{
    const {list} = this.state;
    this.setState({
      list :[...list,newEle]
    })
  }


  deleteEvent = (index) => {
    const newList = this.state.list
    console.log(index);
    newList.splice(index,1)
    this.setState({
      list : newList
    })
    }

 
  



  render(){
    const{list} = this.state;
    return(
      <div>
        <h1 className = "title">TODO List</h1>

        <TodoInput onChange={this.onElementAdd}/>   

        <TodoList list={list} onDelete={this.deleteEvent}/>     
      
      </div>
    )
  }
}
 
export default App;
