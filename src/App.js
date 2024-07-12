import './App.css';
import Item from './component/item/item';
import TimeTracker from './timeTracker';

function App() {
    return (
        <div className="App">
            <TimeTracker />
            <Item />
        </div>
    );
}

export default App;
