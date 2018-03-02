import React from "react"
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    // We must use the setState of React
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {
              Object.keys(this.state.fishes)
              .map(fish => <Fish key={fish} details={this.state.fishes[fish]}/>)
            }
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
