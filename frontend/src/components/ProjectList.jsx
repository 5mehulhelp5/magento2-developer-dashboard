import { Link } from 'react-router-dom';

export default function ProjectList({ records }) {
    return (
        <>
            <Link to="/add" className="btn btn-primary">Add Magento Site</Link>

            {records && records.length > 0 ? (
                <ul className="list-group">
                    {records.length &&
                        records.map(r => <Link to={`/magento/${r.id}`} className="list-group-item" key={r.id}>{r.name}</Link>)
                    }
                </ul>
            ) : (
                <p>No found.</p>
            )}
        </>
    )
}
