import React, {Component} from 'react';

const TITLE=[
    'a software engineerr',
    'a music lover',
    'an enthusiatic learner',
    'an adventure seeker'
];

class Title extends Component{

state={titleIndex:0, fadeIn:true};

//do class method when you gain the "this" of the component 
componentDidMount(){
    this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
    this.animateTitle();
}

componentWillUnmount(){
clearInterval(this.titleInterval);
clearTimeout(this.timeout);
}

animateTitle(){
    this.titleInterval = setInterval(() =>{
       const titleIndex = (this.state.titleIndex + 1) % TITLE.length;
       this.setState({titleIndex, fadeIn: true});
    this.timeout =  setTimeout(() => this.setState({fadeIn: false}), 2000);
    }, 4000)
}

render(){
// grabs vars from state and sets them as constants
const {fadeIn, titleIndex} = this.state;
const title = TITLE[titleIndex];

return(
    // using a turirnary expression 
    <p className={fadeIn ? 'title-fade-in': 'title-fade-out'}>I am {title}</p>
     )
  }
}

export default Title;

