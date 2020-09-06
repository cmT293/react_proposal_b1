import React, {Component} from 'react';
import PROJECTS from '../data/project';

// stateless functional Component (cant have state)
const Project = props =>{
        console.log(props.project);    
        //destruction syntax
        const {title, image, description, link} = props.project;  

        return(
            
        <div style={{display:'inline-block', width:300, margin:10}}>
           <h3>{title}</h3>    
           <img src={image} alt='profile' style={{width:200, height:120}}/>
           <p>{description}</p>
           <a href={link}>{link}</a>
        </div>

        )           
}

// class Project extends Component{
//     render(){
//         console.log('this.props', this.props);
        
//         //destruction syntax
//         const {title, image, description, link} = this.props.project;  

//         return(
            
//         <div style={{display:'inline-block', width:300, margin:10}}>
//            <h3>{title}</h3>    
//            <img src={image} alt='profile' style={{width:200, height:120}}/>
//            <p>{description}</p>
//            <a href={link}>{link}</a>
//         </div>

//         )       
// }
// }

const Projects = () => (
    
        <div>
        <h2>Hightlighted Projects</h2> 
         <div>
            {
             PROJECTS.map(PROJECTS => (
            <Project key={PROJECTS.id} project={PROJECTS}/>
             ))  
            
             }
           
         </div>
            
        </div>
        
        

    )


// class Projects extends Component{
//     render(){
        
//         return(
//             <div>
//             <h2>Hightlighted Projects</h2> 
//              <div>
//                 {
//                  PROJECTS.map(PROJECTS => {
//                     return(
                        
//                         <Project key={PROJECTS.id} project={PROJECTS}/>
//                     );
//                  })   
//                 }
                
//                 {/* old code - another way of coding */}
//                 {/* <div>{PROJECTS[0].title}</div>
//                 <div>{PROJECTS[1].title}</div>
//                 <div>{PROJECTS[2].title}</div>  */}
//              </div>
                
//             </div>
            
            

//         )

//     }
// }
export default Projects;