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
                    <input name="name" type="text" placeholder="Magento Name" required />
                    <input name="url" type="text" placeholder="Magento URL" required />
                    <input name="access_token" type="text" placeholder="Magento Token" />
                    <button type="submit">Add Magento</button>
                </form>
            </div>
        </div>
    );
}