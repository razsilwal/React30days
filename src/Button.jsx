import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {name} = props
    return (
    <button>{name}</button>
  )
}
// Button.defaultProps = {
//   name : "Default"
// }
Button.PropTypes = {
  name : PropTypes.string.isRequired
}

export default Button

// import React from 'react'

// const Button = (props) => {
//     const {title, body} = props
//   return (
//     <div style={{backgroundColor : 'green'}}>
//       <h1>{title}</h1>
//       <h2>{body}</h2>
//     </div>
//   )
// }

// export default Button
