import React, { Component } from 'react';
import Header from './Header';

const Joke = ({joke: {setup,punchline}}) =>(
    <p style={{ margin:20}}>{setup}   <em>{punchline}</em></p>
)

//Or
// instead of props drill right to value
// const Joke = ({joke}) =>{
//     const{setup,punchline} = joke;
//     return <p style={{ margin:20}}>{setup}<em>{punchline}</em></p>;
// }



class JokesTen extends Component {
    state = {joke:{}, jokes:[] };

    componentDidMount() {
        // store any fetches or asyncronishe code in here 
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json()).then(json => this.setState({joke: json}))

        // or
        // fetch('https://official-joke-api.appspot.com/random_joke').then(response => { return response.json() };
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json})).catch(error => alert(error.message));
    }

    render() {
        const {setup,punchline} = this.state.joke;
        return (
            <div>
            <h2> Ten Highlighted Jokes</h2>
            < Joke joke={this.state.joke} />
             {
                this.state.jokes.map(joke => (
                    < Joke key={joke.id} joke={joke} />
                    // Or
                    // return <p key={id}>{setup} <em>{punchline}</em></p>
                ))
            }
            <button onClick ={this.fetchJokes}>10 new Jokes</button>
           
            </div>
        )
    }
}
    
export default JokesTen;