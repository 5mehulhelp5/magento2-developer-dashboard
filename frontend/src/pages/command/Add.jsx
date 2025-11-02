import { useNavigate } from "react-router-dom";
import Form from '../../components/command/Form'

export default function Add({ onRecordAdded}) {
    const navigate = useNavigate();

    const handleSuccess = () => {
        if (onRecordAdded) {
            onRecordAdded();
        }

        // Navigate to the home page after adding a new record
        navigate('/');
    }
    return (
        <>
            <h1 className="text-center">Add New Command</h1>
            <Form onSuccess={handleSuccess} />
        </>
    )
}
