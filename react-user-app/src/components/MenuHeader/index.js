import React, { useEffect } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions/category.actions';

const MenuHeader = () => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const renderAllCategories = ( categories ) => {
    let myCategories = [];
    for(let category of categories){
      myCategories.push(
        <li key={category.name}>
          {
            category.parentId ? <a href={category.slug}> {category.name} </a> : 
            <span> { category.name } </span>
          }
          { category.children.length > 0 ? (<ul> {renderAllCategories(category.children)} </ul>) : '' }
        </li>
      )
    }
    return myCategories;
  }

  return (
    <div className='menuHeader'>
      <ul>
      { category.categories.length > 0 ? renderAllCategories(category.categories) : null }
      </ul>
    </div>
  )
}

export default MenuHeader