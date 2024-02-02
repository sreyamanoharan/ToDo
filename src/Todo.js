import React from 'react'

function todo(props) {
    const del=(id)=>{
        props.setTodos(props.toDos.filter((obj)=>obj.id!==id));
        
      }
    
      return(
      <div className='d-flex align-items-center mx-5'>
        <div>
        {props.status ? <s>{props.text}</s> : props.text}
        </div>
        <div className='mx-5' >
          <i className="fa fa-close text-danger" onClick={() => del(props.id)}></i>
        </div>
      </div>
        )
    
    }
export default todo
