import React from 'react'

import style from './style.styl'

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
      <div className={style.container}>
        <p> Message:  
          <input onChange={(e) => this.setState({string: e.target.value})}/>
        </p>
        <p> {this.state.position}
          <input 
            id='position'
            type='checkbox'
            className={style.positionSwitch}
            onClick={() => 
              this.setState({position: this.state.position === 'tl' ? 'tr' :'tl'})}
          >
          </input>
          <label htmlFor='position'/>
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
