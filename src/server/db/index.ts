import * as mysql from "mysql";
import config from "../config";
import Tasks from "./tasks";
import Trophies from "./trophies";
import Users from "./users";

// All of this info below matches the setup from mySQL Workbench code. If something needs to be changed, it must be changed in both places.
// This is pulled from config/index.ts which references .env (which is in .gitignore to protect our sensitive info)
const Connection = mysql.createConnection(config.mysql); // Should we consider a createPool function??


// Query is exported because it is used in other files and it utilizes the Connection function above
export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export default {
    Tasks,
    Trophies,
    Users,
};
