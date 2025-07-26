import axios from 'axios';

export default function MagentoForm({ onSuccess }) {
    const submitForm = async(event) => {
        event.preventDefault();

        // Create new FormData
        const formData = new FormData(event.target);
        const magentoData = Object.fromEntries(formData.entries());

        // Any validation

        try {
            await axios.post('http://localhost:5000/magento/', magentoData);

            // Call to parent component to refresh records
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="form-wrapper">
            <div className="flex h-screen bg-gray-100">
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Site Name</label>
                        <input id="name" name="name" type="text" placeholder="Site Name" className="form-control" required /><br />
                    </div>

                    <label htmlFor="url" className="form-label">Magento URL</label>
                    <input id="url" name="url" type="text" placeholder="Magento URL" className="form-control" required /><br />

                    <label htmlFor="access_token" className="form-label">Magento Token</label>
                    <input id="access_token" name="access_token" type="text" placeholder="Magento Token" className="form-control" required /><br />

                    <p className="text-center">
                        <button type="submit" className="btn btn-primary">Add Magento</button>
                    </p>
                </form>
            </div>
        </div>
    );
}