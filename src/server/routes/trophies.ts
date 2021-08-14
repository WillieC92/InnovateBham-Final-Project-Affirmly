import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
    const id: string = req.params.id;

    const trophy = await db.Trophies.trophyOne(id);
    res.json(trophy[0]);
});

// interface ITrophy {
//     id?: string,
//     userid: string,
//     taskid: string,
//     naem: string,
//     completed: string
// }

export default router;
