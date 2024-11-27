import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const  [categories, setCategories]= useState([]);
    const onAddNewCategory = (newCategory)=>{
        // setCategories(categories.push('tres'));} NO USAR PUSH

        const lowerCaseValue = newCategory.toLowerCase();
        console.log({lowerCaseValue});
        if(categories.includes(lowerCaseValue)) return;
        setCategories([ lowerCaseValue, ...categories]);
    }
  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input de búsqueda */}
      <AddCategory 
        // setCategoriesC={setCategories}
        onNewCategory = {value => onAddNewCategory(value)}
     />

      {/* Sección del listado */}
        {categories.map( category => {
            return (
            <GifGrid
                key={category}
                category={category}
            />)
        })}
    </>
  )
}