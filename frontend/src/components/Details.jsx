import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Details({ records, onRecordDeleted }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const record = records.find(r => String(r.id) === id);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            try {
                await axios.delete(`http://localhost:5000/magento/${id}`);

                // Notify parent component about the deletion
                if (onRecordDeleted) {
                    onRecordDeleted();
                }

                // Redirect to home page after deletion
                navigate('/');
            } catch (error) {
                console.error('Error deleting record:', error);
                alert('An error occurred while deleting the record');
            }
        }
    };

    if (!record) {
        return <p>Record not found</p>;
    }

    return (
        <>
            <h1 className="text-center">Magento Details</h1>

            <div className="container text-center">
                <div className="row">
                    <div className="col-sm">Id</div>
                    <div className="col-sm">{record.id}</div>
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
            <br />

            <p className="text-center">
                <button onClick={handleDelete} className="btn btn-danger">Delete Magento Site</button>
            </p>
        </>
    );
}