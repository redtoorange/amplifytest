import React, {Component} from 'react';
import Axios from "axios";

const BASE_URL = "https://civ-roulette.firebaseio.com/";


interface AppState {
    data: string;
}

class App extends Component<any, AppState> {
    state: AppState = {
        data: ""
    }

    componentDidMount() {
        Axios.get(BASE_URL + 'challenges.json')
            .then(result => result.data)
            .then(data => this.setState({data: JSON.stringify(data)}))
    }

    render() {
        return (
            <div>
                <header>
                    Header
                </header>

                <main>
                    {this.state.data}
                </main>

                <footer>
                    Footer
                </footer>
            </div>
        );
    }
}

export default App;
