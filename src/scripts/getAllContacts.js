import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
};

console.log(await getAllContacts());
