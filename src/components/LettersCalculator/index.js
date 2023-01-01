import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChange = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="mainContainer">
        <div className="calculateContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="para">
            Enter the phrase
          </label>
          <input
            id="input"
            type="text"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onChange}
          />
          <p className="countbutton">No.of letters: {count}</p>
        </div>
        <div className="imgContainer">
          <img
            alt="letters calculator"
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
