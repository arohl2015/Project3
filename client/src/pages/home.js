import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import hobbyList from "hobbyList.json";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";


class Home extends Component {
    state = {
        //   name: "",
        //   location: "",
        //   phone: number,
        //   url: "",
        //   description: "",
        //   type: "",
        hobbyList
    };
    render() {
        return ( 
            <Navbar />
            <Jumbotron />
            <Wrapper>

     
          
            <div> {
                this.state.hobbyList.map(hobby => ( 
                    <Card id= {hobby.id} />

                ))
            },
            </div>
            </Wrapper>
        )
    }
}
export default Home;