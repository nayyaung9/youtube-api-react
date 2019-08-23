import React, { Component } from 'react'

// material-ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class SearchBar extends Component {

  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault();

    // parent component is told what current term is
    this.props.onSubmit(this.state.term);
    
  }

  render() {
    return(
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography>
              Youtube Player
            </Typography>
            <form onSubmit={this.onFormSubmit}>
              <input  
                type="text" 
                value={this.state.term} 
                onChange={this.onInputChange}
              />
            </form>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default SearchBar;