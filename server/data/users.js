import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const usersFilePath = fileURLToPath(new URL('./users.json', import.meta.url));

export const users = fs.existsSync(usersFilePath)
	? JSON.parse(fs.readFileSync(usersFilePath, 'utf8'))
	: [];

export function saveUsers() {
	const temporaryPath = `${usersFilePath}.tmp`;
	fs.writeFileSync(temporaryPath, JSON.stringify(users, null, 2));
	fs.renameSync(temporaryPath, usersFilePath);
}
