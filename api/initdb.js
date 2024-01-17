import { sql } from '@vercel/postgres';
 
export default async function handler(res, req){
    try {
    const result =
    // Tagged template literal
      await sql `CREATE TABLE IF NOT EXISTS pets (id serial, name varchar(255);`;

    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
