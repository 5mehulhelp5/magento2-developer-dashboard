import MagentoForm from '../components/MagentoForm'

export default function Add({ onRecordAdded}) {
    return (
        <>
            <h1>Add</h1>
            <MagentoForm onRecordAdded={onRecordAdded} />
        </>
    )
}
