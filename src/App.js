import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Dhouibi Nourhene',
        bio: "Hi, I'm a passionate web developer.",
        imgSrc: "https://i.pinimg.com/originals/b3/e6/e8/b3e6e815d1c932b56c19c8da9f3868b0.jpg",
        profession: "Web Developer",
      },
      shows: false,
      timeInterval: 0
    };

    // Bind the toggleProfile method to the correct context
    this.toggleProfile = this.toggleProfile.bind(this);
  }

  componentDidMount() {
    // Start a timer when the component mounts
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the interval when the component unmounts
    clearInterval(this.intervalId);
  }

  toggleProfile() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={this.toggleProfile}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div className="App">
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt="profile" />
            <p><strong>Profession:</strong> {this.state.Person.profession}</p>
          </div>
        )}

        <p>Time since last mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
