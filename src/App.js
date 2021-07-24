import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  state = {
    person: {
      fullName: 'test',
      bio: 'abc',
      pro: 'web dev',
      img: 'https://m.media-amazon.com/images/I/41fndGmp28L._AC_SX425_.jpg',
    },
    show: true,
    count: 0,
  };
  handleShow = () => this.setState({show: !this.state.show});

  handleCount = () => this.setState({count: this.state.count + 1});

  componentDidMount() {
    console.log('start counting');
    setInterval(() => {
      this.handleCount();
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleShow}>
          {this.state.show ? 'hide' : 'show'}{' '}
        </button>
        {this.state.show ? (
          <div>
            <h1> Counter : {this.state.count} </h1>
            <h1> {this.state.person.fullName} </h1>
            <h1> {this.state.person.bio} </h1>
            <h1> {this.state.person.pro} </h1>
            <img src={this.state.person.img} alt="" />
          </div>
        ) : null}
      </div>
    );
  }
}
