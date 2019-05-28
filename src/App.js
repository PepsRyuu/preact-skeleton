import { Component } from 'preact';
import MyComponent from './MyComponent';
import './App.scss';

export default class App extends Component {
    render () {
        return (
            <div class="App">
                <MyComponent />
            </div>
        );
    }
}

if (module && module.hot) {
    module.hot.accept(() => {
        window.location.reload();
    });
}
