import React, { Component } from 'react'

// material-ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import ScreenShareIcon from '@material-ui/icons/ScreenShare'
import NotificationsIcon from '@material-ui/icons/Notifications';

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

            <div style={{ flexGrow: 1}}>
              <form onSubmit={this.onFormSubmit}>
                <InputBase
                  type="text" 
                  placeholder="Search..."
                  value={this.state.term} 
                  onChange={this.onInputChange}
                  style={{ border: '1px solid #ddd', width: '80%', padding: '5px 5px'}}
                />
              </form>
            </div>

            <div style={{ flexGrow: 1, textAlign: 'right'}}>
              <VideoCallIcon />
              <AccountCircleIcon />
              <ScreenShareIcon />
              <NotificationsIcon />
            </div>
            
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default SearchBar;