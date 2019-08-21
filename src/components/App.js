import React, { Component } from 'react'
import SearchBar from './SearchBar'

class App extends Component {
  
  state = { term: '' }

  onFormSubmit = term => {
    console.log(term)
  }

  render() {
    return(
      <div>
        <SearchBar onSubmit={this.onFormSubmit}/>
      </div>
    )
  }
}

export default App;