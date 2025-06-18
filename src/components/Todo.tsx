import React from 'react'

const style = {
  li: ``,
  row: ``
}

const Todo = () => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
      </div>
    </li>
  )
}

export default Todo