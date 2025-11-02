import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Details({ commands, onRecordDeleted }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const command = commands.find(r => String(r.id) === id);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this command?')) {
            try {
                await axios.delete(`http://localhost:5000/command/${id}`);

                // Notify parent component about the deletion
                if (onRecordDeleted) {
                    onRecordDeleted();
                }

                // Redirect to home page after deletion
                navigate('/');
            } catch (error) {
                console.error('Error deleting command:', error);
                alert('An error occurred while deleting the command');
            }
        }
    };

    if (!command) {
        return <p>Record not found</p>;
    }

    return (
        <>
            <h1 className="text-center">Command Details</h1>

            <div className="container text-center">
                <div className="row">
                    <div className="col-sm">Id</div>
                    <div className="col-sm">{command.id}</div>
                </div>

                <div className="row">
                    <div className="col-sm">Created At</div>
                    <div className="col-sm">{new Date(command.createdAt).toLocaleString()}</div>
                </div>
                <div className="row">
                    <div className="col-sm">Updated At</div>
                    <div className="col-sm">{new Date(command.updatedAt).toLocaleString()}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm">Name</div>
                    <div className="col-sm">{command.name}</div>
                </div>
                <div className="row">
                    <div className="col-sm">Value</div>
                    <div className="col-sm">{command.value}</div>
                </div>
            </div>
            <br />

            <p className="text-center">
                <button onClick={handleDelete} className="btn btn-danger">Delete Command</button>
            </p>
        </>
    );
}