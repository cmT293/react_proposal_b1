import React, {Component} from 'react';
import Projects from './Projects';
import Title from'./Title';
import SocialProfiles from './SocialProfiles';
import profile from'../assets/profile.png';
import Jokes from './Jokes'
import JokesTen from './JokesTen'
// compomnents have same name as file
//subclass of component can has  acess to compontent classes
// a compontent can consist of a bunch of elements to even build entire ui

class App extends Component{
//class property 	
state = {displayBio: true};

// constructor for class instance configuration and binding the state the other way
// constructor(){
// super();
// //setting element to variable to show or hide
// this.state = {displayBio:true};
// //binds component classes to readmore function
// this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// }

// Another way to write the bio if section 
// bio = this.state.displayBio ? (
// 	<button onClick={this.toggleDisplayBio}>show more</button>
// 	):(<button onClick={this.toggleDisplayBio}>show less</button>)

//toggles button - using class property syntax - set = to a function 
toggleDisplayBio = () =>{
this.setState({displayBio: !this.state.displayBio });
}

render(){
return(
	<div> 
		<img src={profile} alt="profile" style={{width:200, height:200}}></img>
		<h1>Hellozzzesss</h1>
		<p>Cool</p> 
		<Title/>
		{this.state.displayBio ? (
		<button onClick={this.toggleDisplayBio}>show more</button>
		):(
			<div>
			<div>more info about me</div>
			<button onClick={this.toggleDisplayBio}>show less</button>	
			</div>
		)}
		<hr></hr>
		<Projects />
		<hr></hr>
		<SocialProfiles />
		

	</div>	  
)
}
}


//other files will be able to import file 
export default App;

//checking to show or hide (quick if statement)
// let bio = this.state.displayBio ? (<p>stuff about me!</p>): null;
//sets section to show or hide
// if(!this.state.displayBio){bio = null}