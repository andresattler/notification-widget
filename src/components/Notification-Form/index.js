import React from 'react'

class NotificationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      string : '',
      position: 'tl',
      time: 1,
      type: 'info',
      modal: false
    }
  }
  render() {
    return (
      <div>
        <p> Message:  
          <input onChange={(e) => this.setState({string: e.target.value})}/>
        </p>
        <p> Position:
          <select 
          onChange={(e) =>
           this.setState({position: e.target.value})}
          >
            <option value='tl'>Top Left</option>
            <option value='tr'>Top Right</option>
            <option value='bl'>Botom Left</option>
            <option value='br'>Botom Right</option>
          </select>
        </p>
        <p>Time to display message:
          <input onChange={(e) => this.setState({time: e.target.value})}/>
        </p>
        <p> Type:
          <select 
          onChange={(e) =>
           this.setState({type: e.target.value})}
          >
            <option value='info'>Info</option>
            <option value='alert'>Alert</option>
            <option value='warning'>Warning</option>
          </select>
        </p>
        <p> Is Modal:
          <input type='checkbox' onClick={() => this.setState({modal: !this.state.modal})} />
        </p>
        <button onClick={
            () => {
              this.setState({id: this.state.id + 1})
              this.props.pushNotification(this.state)
            }
          }
        >Notify me!</button>

      </div>
      )
  }
}

export default NotificationForm
