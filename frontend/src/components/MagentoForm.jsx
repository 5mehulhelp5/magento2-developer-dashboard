import axios from 'axios';

export default function MagentoForm() {
    const submitForm = async(event) => {
        event.preventDefault();

        // Create new FormData
        const formData = new FormData(event.target);
        const magentoData = Object.fromEntries(formData.entries());

        // Any validation

        try {
            await axios.post('http://localhost:5000/magento/', magentoData)
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="form-wrapper">
            <div className="flex h-screen bg-gray-100">
                <form onSubmit={submitForm}>
                    <div class="form-group">
                        <label for="name" className="form-label">Site Name</label>
                        <input name="name" type="text" placeholder="Site Name" className="form-control" required /><br />
                    </div>

                    <label for="url" className="form-label">Magento URL</label>
                    <input name="url" type="text" placeholder="Magento URL" className="form-control" required /><br />

                    <label for="access_token" className="form-label">Magento Token</label>
                    <input name="access_token" type="text" placeholder="Magento Token" /><br />

                    <button type="submit" className="btn btn-primary">Add Magento</button>
                </form>
            </div>
        </div>
    );
}