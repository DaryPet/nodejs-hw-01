import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(contacts.length);
    return contacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
