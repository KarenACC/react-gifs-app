import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState(''); 
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    const onSubmit= (event)=>{
        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length <1) return;
        console.log({newValue});
        onNewCategory(newValue)
        // setCategoriesC(categories => [inputValue, ... categories]);
        setInputValue('');
    }
  return (
    <form action="" onSubmit={(event)=> onSubmit(event)}>
        <input 
          type="text" 
          placeholder="Buscar gifs..."
          value={inputValue}
          // onChange={onInputChange} ESTA FORMA TAMBIÉN ES CORRECTA
          onChange={(event)=> onInputChange(event)}
        />
    </form>
  )
}