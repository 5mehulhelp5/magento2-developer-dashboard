import MagentoForm from '../components/MagentoForm'

export default function Add({ onRecordAdded}) {
    return (
        <>
            <h1 className="text-center">Add New Magento Site</h1>
            <MagentoForm onRecordAdded={onRecordAdded} />
        </>
    )
}
