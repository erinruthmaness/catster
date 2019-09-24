import React, { Component } from 'react';
import API from '../utils/API';

class Discover extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    };

    componentDidMount() {
        this.loadNextCat();
    }

    loadNextCat = () => {
        API.getRandomCat()
            .then(res =>
                this.setState({
                    image: res.data[0].url
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="discover">
                <p>Here's a cat for you to rate when I get the code finished:</p>
                <img src={this.state.image} alt="a random cat" width="400"/>
            </div>

        )
    }
}

export default Discover;