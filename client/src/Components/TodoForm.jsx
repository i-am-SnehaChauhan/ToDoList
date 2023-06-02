import React,{useState} from 'react'


const TodoForm = () => {
    const [Text, setText] = useState('');

    const onFormSubmit = () => {

    }
    const onInputChange = (e) => {
       setText(e.target.value);
    } 
  return (
    <form className='form' onSubmit={onFormSubmit}>
        <input 
        placeholder='Enter new todo' 
        onChange={onInputChange}
        type="text" className='input' />
    </form>
  )
}

export default TodoForm
