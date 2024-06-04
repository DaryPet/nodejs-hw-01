import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log('All conatacts are deleted');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
