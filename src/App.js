import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import StickyFooter from './components/footer.js'
import TreeStruct from './components/tree.js'




function App() {
  return (
    <div min-height='100%' >
    <Header />
    <Main/>
    <StickyFooter/>
    </div>
  );
}

export default App;
