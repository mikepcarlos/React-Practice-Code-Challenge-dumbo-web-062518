import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()

    this.state = {
      sushis: [],
      fourSushi: [],
      table: [],
      budget: 50
    }
  }

  componentDidMount(){
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(sushis => this.setState({sushis: sushis, fourSushi: sushis.slice(0,4)}))
  }

  handleClick = () => {
    const allSushi = this.state.sushis
    const length = this.state.sushis.length
    const randomSushi = [
      allSushi[this.getRandomInt(length)],
      allSushi[this.getRandomInt(length)],
      allSushi[this.getRandomInt(length)],
      allSushi[this.getRandomInt(length)]
    ]

    this.setState({
      fourSushi: randomSushi
    })
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  handleSushiClick = (sushi) => {
    if (this.state.budget > 0 && sushi.price < this.state.budget) {
      const tableSushi = [...this.state.table, sushi]
      const newBudget = this.state.budget - sushi.price
      this.setState({
        table: tableSushi,
        budget: newBudget
      })
    }
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.fourSushi} handleClick={this.handleClick} sushiClick={this.handleSushiClick} table={this.state.table}/>
        <Table sushi={this.state.table} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
