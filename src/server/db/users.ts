import { Query } from './index';
import '../routes/users';


// const users = () => {
//     // Need some way to Create a user from Registration page
//     // GET/PUT/DELETE will be backend only at this time as there is no front-end functionality for a user to target those functions.
//     // Need some way of Login (authentication process??)
// };


const getUser = async (id: string) =>
    await Query(`

        SELECT * FROM affirmly.users
        WHERE users.id = ?;

    `, [id]
);

const newUser = async (name: string, email: string, password: string) =>
    await Query(`
        INSERT INTO users(name, email, password)
        VALUES (?, ?, ?);
    `, [name, email, password]
);

export default {
    getUser,
    newUser
}
