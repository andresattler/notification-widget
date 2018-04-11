import React from 'react'

import 'reset-css'

import style from './style.styl'
import NotificationForm from './components/Notification-Form/'
import NotificationLayer from './components/NotificationLayer/'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      notifications: []
    }
  }
  render() {
    return (
      <div className={style.mainContainer}>
        <NotificationForm
           pushNotification={ notification =>
            this.setState({ notifications: [...this.state.notifications, notification] })
           }
        />
        <NotificationLayer
           notifications={this.state.notifications}
           removeNotification={idToRemove =>
            this.setState({ notifications: this.state.notifications.filter(val => val.id != idToRemove )})}
        />
      </div>
    )
  }
}

export default App
