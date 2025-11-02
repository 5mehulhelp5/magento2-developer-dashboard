import axios from 'axios';

export default function MagentoForm({ onSuccess }) {
    const submitForm = async(event) => {
        event.preventDefault();

        // Create new FormData
        const formData = new FormData(event.target);
        const magentoData = Object.fromEntries(formData.entries());

        // Any validation

        try {
            await axios.post('http://localhost:5000/command/', magentoData);

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
                        <label htmlFor="name" className="form-label">Command Name</label>
                        <input id="name" name="name" type="text" placeholder="Command Name" className="form-control" required /><br />
                    </div>

                    <label htmlFor="value" className="form-label">Command</label>
                    <input id="value" name="value" type="text" placeholder="php bin/magento..." className="form-control" required /><br />

                    <div className="form-check">
                        <label htmlFor="change_folder" className="form-check-label">Run from public_html/ ?</label>
                        <input id="change_folder" name="change_folder" type="checkbox" className="form-check-input"/><br/>
                    </div>

                    <p className="text-center">
                        <button type="submit" className="btn btn-primary">Add Command</button>
                    </p>
                </form>
            </div>
        </div>
    );
}