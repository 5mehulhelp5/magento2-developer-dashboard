import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Run() {
    const [magento, setMagento] = useState([]);
    const [commands, setCommands] = useState([]);
    const [selected, setSelected] = useState([]);
    const [commandId, setCommandId] = useState(null);
    const [results, setResults] = useState([]);

    const API = 'http://localhost:5000/';

    useEffect(()=>{
        fetchData()
    }, []);

    async function fetchData(){
        const [magentos, commands] = await Promise.all([
            axios.get(API + 'magento'),
            axios.get(API + 'command')
        ]);

        setMagento(magentos.data);
        setCommands(commands.data);
    }

    function toggle(id){
        setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
    }

    async function run(){
        if (selected.length === 0 || !commandId) {
            return alert('Please select connectopms and a command');
        }

        try {
            const r = await axios.post(API + 'run', {magentoId: selected, commandId});
            setResults([r.data.results]);
        } catch (err) {
            console.log('Run request failed', err);
        }
    }

    return (
        <>
            <h1 className="text-center">Run Command</h1>

            <div className="mb-4">
                <h2 className="font-semibold">Select connections</h2>
                {
                    magento.map(c => <div key={c.id}><label><input type="checkbox" checked={selected.includes(c.id)} onChange={()=>toggle(c.id)} /> {c.name} ({c.host})</label></div>)
                }
            </div>
            <br /><br />

            <div className="mb-4">
                <h2 className="font-semibold">Select command</h2>
                <select onChange={e=>setCommandId(Number(e.target.value))} className="border p-1">
                    <option value="">-- Choose --</option>
                    {
                        commands.map(c => <option key={c.id} value={c.id}>{c.name} - {c.value}</option>)
                    }
                </select>
            </div>
            <br /><br />

            <button className="btn btn-primary mb-4" onClick={run}>Run</button><br /><br /><br />

            <div>
                <h2 className="font-semibold">Results</h2>
                {
                    results.map((r)=>(
                        <div className="mb-3 p-2 border rounded bg-white">
                            <div className="font-semibold">STATUS: {r.success ? 'OK' : 'FAIL'}</div>
                            <br />
                            <pre className="whitespace-pre-wrap">{r.output}</pre>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
