import { Query } from "./index";
import "../routes/trophies";

const trophyOne = async (id: string) =>
    await Query(
        `
        SELECT userid, taskid, trophies.name, completed, users.name
        FROM trophies
        JOIN users ON trophies.userid = users.id
        WHERE trophies.id = ?;
    `[id]
    );

export default { trophyOne };
