import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { promises as fs } from 'fs';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Contact added succesfully');
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
