import { useNavigate } from "react-router-dom";
import MagentoForm from '../components/MagentoForm'

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
            <h1 className="text-center">Add New Magento Site</h1>
            <MagentoForm onSuccess={handleSuccess} />
        </>
    )
}
