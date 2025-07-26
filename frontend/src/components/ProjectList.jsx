import { Link } from 'react-router-dom';

export default function ProjectList({ records }) {
    return (
        <>
            <p className="text-center">
                <Link to="/add" className="btn btn-primary">Add Magento Site</Link>
            </p>

            {records && records.length > 0 ? (
                <ul className="list-group">
                    {records.length &&
                        records.map(
                            r => <Link
                                to={`/magento/${r.id}`}
                                className="list-group-item"
                                key={r.id}>
                                {r.name} - {r.url}
                            </Link>
                        )
                    }
                </ul>
            ) : (
                <p>No found.</p>
            )}
        </>
    )
}
