import React, { useEffect, useState } from "react";
import axios from "axios";

export default function QuotesList() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/quotes")
            .then((response) => {
                setQuotes(response.data);
            })
            .catch((error) => {
                console.log("Error fetching quotes:", error);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>📖 Quotes API App</h2>

            {quotes.map((q) => (
                <div
                    key={q.id}
                    style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "15px",
                        borderRadius: "10px"
                    }}
                >
                    <p>"{q.text}"</p>
                    <h4>- {q.author}</h4>
                </div>
            ))}
        </div>
    );
}
