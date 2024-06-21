import { useState } from 'react';

const Bookshelf = (props) => {
    const [books, setBooks] = useState([
        { title: 'Necronomicon', author: 'H. P. Lovecraft' },
        { title: 'The HellBound Heart', author: 'Clive Barker' },
    ]);
    const [newBooks, setNewBooks] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (event) => {
        setNewBooks({...newBooks, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBooks]);
        setNewBooks({title: '', author: ''});
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h2>Add a Book</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input
                        name="title" 
                        id="title"
                        value={newBooks.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="author">Author:</label>
                    <input 
                        name="author" 
                        id="author"
                        value={newBooks.author}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                <div key={index}>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </div>
                ))}
            </div>
        </div>
        
    )
}

export default Bookshelf;