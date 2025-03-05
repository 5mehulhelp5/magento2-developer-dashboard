import { useState, useEffect } from 'react';

function BaseballPagination() {
    // Data
    const [data, setData] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    // Status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const url = 'https://mlb24.theshow.com/apis/items.json?type=stadium&page=' + currentPage;
                console.log('Fetching data from: ' + url);

                const response = await fetch(url, {
                    mode: "cors",
                    method: "GET"
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const json = await response.json();
                setData(json || []);
                setItemsPerPage(json.per_page || 25);
                setTotalPages(json.total_pages || 1);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default BaseballPagination;