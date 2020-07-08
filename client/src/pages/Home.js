import React, {Component} from "react";
import Jumbotron from "../Components/Jumbotron";
import hobbyList from "../hobbyList.json";
import FrontCard from "../Components/FrontCard";
import Wrapper from "../Components/Wrapper";
import API from "../utils/API";

class Home extends Component {
  
    constructor(props){
        super(props);
        this.state={hobbyList,
        hobbies: { 
        "Music": [],    
        "Gardening": [],
        "Sewing": [],
        "Art": [],
        "Outdoor Life": [],
        "Cooking": [],
    }

        } 
      }
  componentDidMount() {
    this.loadStore();
  }

  loadStore = () => {   
    API.findAll()
      .then(res => {
          console.log("turkey")
        console.log(res);
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            // this.state.hobbies[element.type]
            this.setState({ hobbies: {...this.state.hobbies, [`${element.type}`]:[...this.state.hobbies[element.type], element]} })
            console.log(element.type)
            
        }
        // this.setState({ hobbies: res.this.state.hobbies.filter (hobby => this.props.type === hobby.type)
        // })
console.log(this.state.hobbies)
      })
      .catch(err => console.log(err)) 
  }
   

    render() {

        return ( 
            <div>
            <Jumbotron />
            <Wrapper>
   
            <div> {
                this.state.hobbyList.map((hobby, key) => ( 
                    <FrontCard name= {hobby.name}
                    description= {hobby.description}
                    key = {key}
                     />
                ))
            }
            </div>



            </Wrapper>
            </div>
    
        )}
        }

export default Home;