import React, { Component } from 'react';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LocalTime: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Dublin' })),
      BeijingTime: new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }))
    }
    this.updateTime = this.updateTime.bind(this)
  }

  updateTime = () => {
    this.setState({
      LocalTime: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Dublin' })),
      BeijingTime: new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }))
    })
  }

  formatTime = (value) => {
    return value < 10 ? "0" + value : value
  }

  componentWillMount() {
    setInterval(
      this.updateTime, 1000
    )
  }

  render() {
    let LocalTime = this.state.LocalTime
    let BeijingTime = this.state.BeijingTime
    return (
      <div className="time">
        <div className="local-time">Dublin</div>
        <div className="current-local-time">
          {this.formatTime(LocalTime.getHours())}:
          {this.formatTime(LocalTime.getMinutes())}:
          {this.formatTime(LocalTime.getSeconds())}
        </div>
        <div className="current-local-date">
          {this.formatTime(LocalTime.getDate())}/
          {this.formatTime(LocalTime.getMonth() + 1)}/
          {LocalTime.getFullYear()}
        </div>
        <div className="beijing-time">Beijing</div>
        <div className="current-beijing-time">
          {this.formatTime(BeijingTime.getHours())}:
          {this.formatTime(BeijingTime.getMinutes())}:
          {this.formatTime(BeijingTime.getSeconds())}
        </div>
      </div>
    )
  }
}

export default App;
