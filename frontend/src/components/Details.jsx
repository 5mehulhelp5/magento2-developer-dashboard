import { useParams } from 'react-router-dom';

export default function Details({ records }) {
    const { id } = useParams();
    const record = records.find(r => String(r.id) === id);

    if (!record) {
        return <p>Record not found</p>;
    }

    return (
        <>
            <h1>Magento Details</h1>
            <div className="container">
                <div className="row">
                    <div class="col-sm">Id</div>
                    <div class="col-sm">{record.id}</div>
                </div>

                <div className="row">
                    <div className="col-sm">Record Name</div>
                    <div className="col-sm">{record.name}</div>
                </div>
                <div className="row">
                    <div className="col-sm">Record Url</div>
                    <div className="col-sm">{record.url}</div>
                </div>
                <div className="row">
                    <div className="col-sm">Record Access Token</div>
                    <div className="col-sm">{record.access_token}</div>
                </div>
                <div className="row">
                    <div className="col-sm">Record Created At</div>
                    <div className="col-sm">{new Date(record.createdAt).toLocaleString()}</div>
                </div>
                <div className="row">
                    <div className="col-sm">Record Updated At</div>
                    <div className="col-sm">{new Date(record.updatedAt).toLocaleString()}</div>
                </div>
            </div>
        </>
    );
}