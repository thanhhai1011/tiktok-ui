import { memo } from 'react'

function Content({onIncrease}) {
  console.log('render');

  return(
    <div>
      <h1>Hello!</h1>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  )
}

export default memo(Content)