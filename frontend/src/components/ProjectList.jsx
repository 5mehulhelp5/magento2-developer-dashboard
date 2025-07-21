import { Link } from 'react-router-dom';

export default function ProjectList({ records }) {
    return (
        <>
            <Link to="/add" className="btn btn-primary">Add Magento Site</Link>

            {records && records.length > 0 ? (
                <ul>
                    {records.length && records.map(r => <li key={r.id}>{r.name}</li>)}
                </ul>
            ) : (
                <p>No  found.</p>
            )}
        </>
    )
}
