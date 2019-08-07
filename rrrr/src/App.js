import React, { Component } from 'react';
// import Todos from './components/Todos';
// import TodoItem from './components/TodoItem';

export default class App extends Component {
  state = {
    tasks: [
      // {
      //   id: 1,
      //   title: "Download Zoom",
      //   isCompleted: false
      // },
      // {
      //   id: 2,
      //   title: "Eat Fried Chicken",
      //   isCompleted: false
      // },
      // {
      //   id: 3,
      //   title: "Play Games",
      //   isCompleted: false
      // },
      // {
      //   id: 4,
      //   title: "Go for Shopping",
      //   isCompleted: false
      // },
      // {
      //   id: 5,
      //   title: "Watch Movie",
      //   isCompleted: false
      // }
    ],

    // title: "",
    // count:5

  };
  // changeData = () => {
  //   this.setState({ data: 'Alice Zaheer' });
  // }



//   toggelecomplete=(title)=>{
//     console.log(title)

 
//   this.setState({tasks:this.state.tasks.map(ele=>{
// if (ele.id===title)
//     ele.isCompleted=!ele.isCompleted
//     return ele}
  
//   ) })
// }


// but=(id)=>{
//   console.log(id)
//   this.setState({tasks:this.state.tasks.filter(elem=>{
//      return elem.id!==id
  

//   })})
// }
  
// new=(e)=>{
// let incre= this.state.count
//   incre=incre+1
//  this.setState({title:e.target.value})
//  this.setState({count:incre})
// console.log(this.state.title)
//   // const newelem={
//   //   id: 6,
//   //   title: "Finish the tasks",
//   //   isCompleted: false}

//   // this.setState({[...this.tasks],newelem})
// }
// cli=()=>{
//   const neww={

//     id: this.state.count,
//     title: this.state.title,
//     isCompleted: false
//   }
//   this.setState({tasks:[...this.state.tasks,neww]})
// }
  
// componentDidMount(){
//   fetch("http://localhost:4000/tasks")
//   .then(res=>res.json())
//   .then(tasks=>this.setState({tasks},()=>console.log("come",tasks)))
// }
  render() {
    // const { tasks } = this.state;
    // const{id}=tasks;
    return (
      <React.Fragment>
        {/* style={{background:"black",color:"white",textAlign:"center", padding:"5px"}} */}
        <h3 >To Do List</h3>
        
        {/* <input type="text" placeholder="New task" onChange={this.new} value={this.state.title}/>
         <input  type="button" value="Add" onClick={this.cli.bind(this,id)}className="btn btn-info btn-sm"/>
        <Todos tasks={tasks} a={4} func={this.toggelecomplete} fun={this.but}/> */}
      </React.Fragment >
    );
  }
}
