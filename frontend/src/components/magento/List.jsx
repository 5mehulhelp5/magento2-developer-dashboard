import { Link } from 'react-router-dom';

export default function List({ records }) {
    function isWithinLastMinutes(timestamp, minutes = 5) {
        const now = new Date();
        const time = new Date(timestamp);
        const instance = new Date(now.getTime() - minutes * 60 * 1000);

        return time >= instance;
    }

    return (
        <>
            <p className="text-center">
                <Link to="/magento/add" className="btn btn-primary">Add Magento Site</Link>
            </p>

            {records && records.length > 0 && (
                <ul className="list-group">
                    {records.length &&
                        records.map(
                            r => <Link
                                to={`/magento/${r.id}`}
                                className="list-group-item"
                                key={r.id}>
                                {r.name} - {r.url} {isWithinLastMinutes(r.createdAt, 30) && <span className="badge bg-success">New</span>}
                            </Link>
                        )
                    }
                </ul>
            )}
        </>
    )
}
