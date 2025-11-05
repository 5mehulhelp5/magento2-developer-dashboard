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
                <Link to="/command/add" className="btn btn-primary">Add Command</Link>
            </p>

            {records && records.length > 0 && (
                <ul className="list-group">
                    {records.length &&
                        records.map(
                            r => <Link
                                to={`/command/${r.id}`}
                                className="list-group-item"
                                key={r.id}>
                                {r.name} - {r.value} {isWithinLastMinutes(r.createdAt, 30) && <span className="badge bg-success">New</span>}
                            </Link>
                        )
                    }
                </ul>
            )}
        </>
    )
}
