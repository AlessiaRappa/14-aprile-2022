import "./style.css";
export const  BookCard  =  ({name, description, img }) => (   
    <div className ="card"> 
    
    <img alt="book-img" src={img} />
    <div className="section_card">
    <h2>{name}</h2>
    <p>{description}</p> 
    <div className="add" ><p>Add to cart</p>  </div>
    </div>
    </div>
);
      
