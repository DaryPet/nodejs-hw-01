import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const updatedData = contacts.filter(() => Math.random() >= 0.5);
    fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));
    console.log('Thanos works');
  } catch (error) {
    console.log(error);
  }
};
await thanos();
