import React from 'react'

export default function MultiDropDown(props) {

  const renderMenu = (items, initial) => {
    return <ul className="submenu">
      {items.map((i, index) => {
        return (
          <>
            {index === 0 && !initial ? <li className="heading"><a href={void(0)}>{i.type}</a></li> : ''}
            <li>
              <a href={void(0)}>{i.name}</a>
              {i.entries && renderMenu(i.entries)}
            </li>
          </>)
      })}
    </ul>
  }

  return (
    <div className="dropdown">
      <ul>
        <li className="topmenu">
          <a href={void(0)}>Sites</a>
          {renderMenu(props.data ? props.data.entries : '', true)}
        </li>
      </ul>
    </div>
  )
}
