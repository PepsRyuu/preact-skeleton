import { Component } from 'preact';
import './App.scss';

export default class App extends Component {
    render () {
        return (
            <div class="App">
                Hello World
            </div>
        );
    }
}

if (module && module.hot) {
    module.hot.accept(() => {
        window.location.reload();
    });
}
