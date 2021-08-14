import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
    const id: string = req.params.id;
    if (id) {
        const user = await db.Users.getUser(id);
        res.json(user[0]);
    } else {
        console.log('No "id" specified for user get.');
    }
});

router.post("/", async (req, res) => {
    const userDTO: user = req.body;
    console.log(userDTO);

    try {
        await db.Users.newUser(userDTO.name, userDTO.email, userDTO.password);
        res.send("Posted successfully");
    } catch (error) {
        console.log(`There was an error in router.newUser in users.ts, specifically: ${error}`);
    }
});

//Currently do not need PUT and delete
//If we need to edit or delete user, we need to add functionality below

// router.put("/:id", async (req, res) => {
// });

// router.delete("/:id", async (req, res) => {
// });

interface user {
    id?: string;
    name: string;
    email: string;
    password: string;
}

export default router;
