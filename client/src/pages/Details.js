import React, { Component } from "react";
import Hobby from "../Components/Hobby";
import Wrapper from "../Components/Wrapper";

class HobbyDetails extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <Wrapper>

                    <div style={{ padding: "25px" }}> {
                        this.props.hobbies.map((hobby, key) => (
                            <Hobby name={hobby.name}
                                   location={hobby.location}
                                   phone={hobby.phone}
                                   url={hobby.url}
                                   description={hobby.description}
                                   key={key}
                            />
                        ))
                    }
                    </div>

                </Wrapper>
            </div>
        )
    }
}

export default HobbyDetails;