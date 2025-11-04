import { NodeSSH } from 'node-ssh';

export async function runCommandOnHost(host, user, password, command) {
    try {
        /**
         * @type {NodeSSH}
         */
        const conn = new NodeSSH();
        await conn.connect({
            host: host,
            username: user,
            password: password,
            tryKeyboard: false,
            readyTimeout: 20000
        });

        const result = await conn.execCommand(command, { cwd: '/home/' + user + '/public_html/' });
        await conn.dispose();

        return {
            success: result.code === 0,
            output: [result.stdout || '', result.stderr || ''].filter(Boolean).join('\n')
        };
    } catch (err) {
        return {
            success: false,
            output: String(err && err.message ? err.message : err)
        };
    }
}