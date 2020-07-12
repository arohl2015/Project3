import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import hobbyList from "../hobbyList.json";
import FrontCard from "../Components/FrontCard";
import Wrapper from "../Components/Wrapper";
import API from "../utils/API";
import HobbyDetails from "./Details";
import ParticleEffectButton from 'react-particle-effect-button'

class Home extends Component {

        constructor(props) {
        super(props);
        this.state = {
            hobbies: [],
            hobbyList: hobbyList,
            type: "",
            focus: false,
            focusHobby: [],
            hidden: false
        }

        this.handlebuttonClick = this.handlebuttonClick.bind(this)
        this.resetButton = this.resetButton.bind(this)
    }

    resetButton(type) {
        this.setState({ type: "", focus: false })
    }


    handlebuttonClick(type) {
        // this.loadStore();
        console.log("dog")

        API.findAll()
            .then(res => {
                console.log("turkey")
                console.log(res.data);
                //   console.log(this.state.hobbies)
                //     for (let index = 0; index < res.length; index++) {
                //      const element = res[index];
                //          this.state.hobbies[element.type]
                //         this.setState({ hobbies: {...this.state.hobbies, [`${element.type}`]:[...this.state.hobbies[element.type], element]} })
                //      console.log(element.type)

                var hobbyByTopic = res.data.filter(element => element.type === type);
                console.log("***", hobbyByTopic);
                this.setState({ focusHobby: hobbyByTopic })
                this.setState({ focus: true,  })
            })
    }
    
    render() {

        return (
            <div>
                <Jumbotron />

                   {!this.state.focus &&
                    <Wrapper>

                        <div> {
                            this.state.hobbyList.map((hobby, key) => (
                                <FrontCard name={hobby.name}
                                    description={hobby.description}
                                    key={key}
                                    handlebuttonClick={this.handlebuttonClick}
                                />
                            ))
                        }
                        </div>
                    </Wrapper>}

                {this.state.focus &&
                    <Wrapper>
                       {/* <button onClick={this.resetButton} >Back To New Hobbies!</button> */}
                        <ParticleEffectButton  
        color='#121019'
        hidden={this.state.hidden}
      >
       <button color="danger" onClick={this.resetButton}>Back To New Hobbies!</button>{' '} 
      </ParticleEffectButton>
                        <HobbyDetails hobbies={this.state.focusHobby}></HobbyDetails>
                    </Wrapper>}
            </div>

        )
    }
}

export default Home;