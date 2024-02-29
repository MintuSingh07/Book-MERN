import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pages_css/AllBooks.css';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3001/allbooks');
            if (response.ok) {
                const data = await response.json();
                setBooks(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredBooks = books.filter((item) => {
        const bookNauthor = `${item.bookTitle} ${item.authorName}`;
        return bookNauthor.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <div id="search-btn">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search Books, Authors etc."
                />
                <button id="search">Search</button>
            </div>

            {filteredBooks.length > 0 ? (
                <div className="card-container">
                    {filteredBooks.map((item) => (
                        <div key={item._id}>
                            <Link to={`/book/${item._id}`}>
                                <div className="card">
                                    <img src={item.imageURL} alt="" />
                                    <h3 style={{ fontWeight: "revert", marginTop: "1.1rem", marginLeft: "1rem", fontSize: "1.2rem" }}>{item.bookTitle}</h3>
                                    <p style={{ fontWeight: "light", marginLeft: "1rem" }}>{item.authorName}</p>
                                    <div id="rating" style={{ backgroundColor: "green", width: "4rem", borderRadius: "5px", padding: ".4rem", color: "white", marginLeft: "10px" }}>
                                        4.3 star
                                    </div>
                                    <div style={{ marginLeft: "1rem" }}>
                                        <span>₹499</span>
                                        <span style={{ textDecoration: "line-through", color: "#878787", marginLeft: "5px" }}>₹699</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>
                    <div className="empty-state">
                        <div className="empty-state__content">
                            <div className="empty-state__icon" style={{ overflow: "hidden" }}>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" alt="..." style={{ scale: "2" }} />
                            </div>
                            <div className="empty-state__message">No Book or Author Found !!!</div>
                            <div className="empty-state__help">
                                Add a new record by simpley clicking the button on top right side.
                            </div>
                        </div>
                    </div>
                </p>
            )}
        </>
    );
};

export default AllBooks;
