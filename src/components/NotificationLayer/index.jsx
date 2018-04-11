import React from 'react'

import Notification from './Notification/'

class NotificationLayer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.notifications.map(
        (n, i) => <Notification
          key={n.id}
          notification={n}
          close={() => this.props.removeNotification(n.id)} />
       )}
     </div>
     )
   }
 }
 export default NotificationLayer
