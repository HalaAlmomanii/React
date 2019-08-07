import React, { Component } from 'react';

export default class TodoItem extends Component {
  // toggleComplete = (e) => {
  //   console.log(e.target.checked)
  // }
  render() {
    const { id,title, isCompleted } = this.props.task;
    // const{key}=this.props
    return (
      <React.Fragment>

        {/* <h6>TodoItem</h6> */}
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>

          <input type="checkbox" onChange={this.props.func.bind(this,id)} />
          
            {title} 
      <input  style={{float:"right"}} className="btn btn-danger btn-sm" type="button"  value="Remove Task" onClick={this.props.fun.bind(this,id)}/>
          
          </p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}