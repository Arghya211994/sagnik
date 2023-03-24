import React, { useReducer } from 'react'



const Demo2 = () => {

  const initialState = 0;
  
  const reducer = (count,action) => {
    if(action.type === 'INCREMENT'){
      return count + 1
    }
    if(action.type === 'DECREMENT'){
      return count - 1
    }
  }
    
  const [count,dispatch] = useReducer(reducer,initialState)
  

  const increment = () => {

    dispatch({
      type:"INCREMENT"
    })
  }

  const decrement = () => {

    dispatch({
      type:"DECREMENT"
    })
  }
  return (
    <>
    <div className='demo'>
      <span>{count}</span>
      <button onClick={increment}>incre</button>
      <button onClick={decrement}>decre</button>
    </div>
    </>
  )
}

export default Demo2