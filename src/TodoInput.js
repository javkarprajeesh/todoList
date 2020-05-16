import React from 'react';
import './App.css';



class TodoInput extends React.Component{

    state = {
        value:'' 
    }

    handleInput = (event) =>{

        this.setState({
            value: event.target.value
        })
    }


    clickEvent = () =>
    {
        const {value}= this.state;   
        const {onChange} = this.props;
        if  (value !== ' '){
            onChange(value);
            this.setState({value:' '})
        }

    }

    render(){
        const {value} = this.state;
        return(
            <>
            <input className = "inputAdd" onChange={this.handleInput} value = {value}/>
            <button className = "addButton" onClick={this.clickEvent}> Add </button>
            
            </>
        )
    }
}

export default TodoInput;