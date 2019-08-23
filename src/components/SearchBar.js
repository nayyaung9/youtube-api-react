import React, { Component } from 'react'

// material-ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Youtube Player
            </Typography>
            <div style={{ position: 'relative', border: '1px solid #f1f1f1', borderRadius: '0.5em'}}>
              <div style={{ height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <SearchIcon />
              </div>
              <form onSubmit={this.onFormSubmit} style={{padding: 5 }}>
                <InputBase 
                  type="text" 
                  placeholder="Search..."
                  value={this.state.term} 
                  onChange={this.onInputChange}
                  style={{ marginLeft: 25 }}
                />
            </form>
            </div>
            
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default SearchBar;