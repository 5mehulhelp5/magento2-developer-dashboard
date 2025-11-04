import { getCommandRecord } from '../services/command.js'
import { getMagentoRecord } from '../services/magento.js'
import { runCommandOnHost } from "../services/ssh.js";

export async function run(req, res) {
    const { sshId: magentoId, commandId } = req.body;

    if (!magentoId) {
        return res.status(400).json({ error: 'Magento not found' });
    }

    if (!commandId) {
        return res.status(400).json({ error: 'Command not found' });
    }

    const magentoResult = await getMagentoRecord(magentoId);
    if (magentoResult === null) {
        return res.status(400).json({ error: 'Magento not found by id' });
    }

    const commandResult = await getCommandRecord(commandId);
    if (commandResult === null) {
        return res.status(400).json({ error: 'Command not found by id' });
    }

    const result = await runCommandOnHost(
        magentoResult.sftp_host,
        magentoResult.sftp_user,
        magentoResult.sftp_password,
        commandResult.value
    );

    res.json({ result });
}