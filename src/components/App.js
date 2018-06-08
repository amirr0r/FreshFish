import React from "react"
import PropTypes from 'prop-types'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(params.storeId)

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentDidUpdate() {
    const { params } = this.props.match
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order))
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    // We must use the setState of React
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes })
  }

  updateFish = (fish, updatedFish) => {
    const fishes = {...this.state.fishes}

    fishes[fish] = updatedFish
    this.setState({ fishes })
  }

  deleteFish = (fish) => {
    const fishes = {...this.state.fishes}

    fishes[fish] = null
    this.setState({ fishes })
  }

  addToOrder = (fish) => {
    const order = {...this.state.order}

    order[fish] = order[fish] + 1 || 1
    this.setState({ order })
  }

  removeFromOrder = (fish) => {
    const order = {...this.state.order}

    delete order[fish]
    this.setState({ order })
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
              .map(fish => 
                <Fish 
                  key={fish}
                  index={fish}
                  details={this.state.fishes[fish]} 
                  addToOrder={this.addToOrder}
                />
              )
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory 
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    )
  }
}

export default App
