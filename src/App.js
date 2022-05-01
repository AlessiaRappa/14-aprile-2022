
import './App.css';

import { Header } from './components/Header'; 
import { data } from "./data";
import { BookCard }  from "./components/BookCard";

const formatMinText = (text) => text.split(" ").slice(0, 30).join(" ") + " ...";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='wrap-card'>
        {data.products.map((item) => (
          <BookCard 
            key={item.id}
            name = {item.name}
            description =  {formatMinText(item.description)}
            img={item.img} 
          />
        ))}
     
      </div>
    </div>
  );
}

export default App;


