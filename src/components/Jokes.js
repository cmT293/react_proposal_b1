import React, { Component } from 'react';
import Header from './Header';

class Jokes extends Component {
    state = {joke:{}};

    componentDidMount() {
        // store any fetches or asyncronishe code in here 
        fetch('https://official-joke-api.appspot.com/random_joke').then(response => response.json()).then(json => this.setState({joke: json})).catch(error => alert(error.message));
        // or
        // fetch('https://official-joke-api.appspot.com/random_joke').then(response => { return response.json() };
    }
    render() {
        const {setup,punchline} = this.state.joke;
        return (
            <div>
            <h2>Highlighted Joke</h2>
             <p id="jokes">{setup}<em>{punchline}</em></p> 
            </div>
        )
    }
}
    
export default Jokes;  