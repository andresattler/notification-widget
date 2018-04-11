import React from 'react'

import style from './style.styl'
class Notification extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(!this.props.notification.modal){
      setTimeout(() => {
          this.props.close()
        }, this.props.notification.time * 1000)
    }
  }
  render() {
     const notification = this.props.notification
     return (
      <div className={
        [notification ? style.modal : style.container,
         style[notification.position],
         style[notification.type]
         ].join(' ')
      }>
        <p className={style.message}>{notification.string}</p>
        {notification.modal && <button onClick={() => this.props.close()}>Close</button>}
      </div>
    )
  }
}
 export default Notification
