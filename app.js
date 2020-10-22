import React from 'react';
import Home from './src/pages/HomePageComponent'
import {Switch, Route} from 'react-router'

class App extends React.Component {
    render() {
        return(
            <Route path="/example" render={props => (
                
            )}/>
        )
    }
}

export default App;