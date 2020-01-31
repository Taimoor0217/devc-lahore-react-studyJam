import React, { Component } from 'react';
import './App.css'
import Element from './Components/List-Element'
import {Form , Button} from 'react-bootstrap'
class App extends Component {
  constructor(){
    super()
    this.state = {
      newTaskValue : "",
      tasks: [
        "Play Cricket",
        "Book Careem"
      ]
    }
    this.hanldeTaskSubmit = this.hanldeTaskSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removetask = this.removetask.bind(this)
  }
  hanldeTaskSubmit(e){
    e.preventDefault()
    // tasks = this.state.tasks
    this.setState({
      tasks :[...this.state.tasks , this.state.newTaskValue],
      newTaskValue : ""
    })
  }
  handleChange(e){
    this.setState({
      newTaskValue : e.target.value
    })
  }
  removetask(value){
    console.log(value)
    this.setState({
      tasks : this.state.tasks.filter(function(task){
        return task != value
      })
    })
  }
  render() {
    return (
        <div className="container">
          <center>
              <h1 className= "p-5 mx-auto"> <strong>My TODO LIST</strong></h1>
          </center>
          <Form className="ml-3" onSubmit={this.hanldeTaskSubmit}>
            <h3 className="p-3 mx-auto">Add a New Task Below</h3>
            <input
            required = "true"
            value = {this.state.newTaskValue}
            onChange = {this.handleChange} 
            className = "w-100 p-2" type="text" placeholder="Start Typing" />
            <Button className="mt-2 mb-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        {this.state.tasks.map(function(T , index){
          return(
            <Element key= {index} content= {T} remove = {this.removetask} />
            )
          }.bind(this))}
        </div>
    );
  }
}

export default App;
