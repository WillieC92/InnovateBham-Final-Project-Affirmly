import * as express from "express";
import db from "../db";

const router = express.Router();

// This get checks for an optional ID, if an ID is inserted, then it returns one task.
// If an ID is *not* presented, it currently returns allTasks
// This probably needs to be updated to use allTasksFromUser instead of allTasks as we get closer to front-end link-up.
router.get("/:id?", async (req, res) => {
    const id: string = req.params.id;

    if (id) {
        console.log(`GET request using oneTask for task id ${id}`)
        const task = await db.Tasks.oneTask(id);
        res.json(task[0]);
    } else {
        console.log(`GET request using allTasks`)
        const tasks = await db.Tasks.allTasks();
        res.json(tasks);
    }
});

router.post("/", async (req, res) => {
    // We create a variable for "task Data Transfer Object" to use below
    const taskDTO: ITask = req.body;
    console.log(taskDTO);

    try {
        // const newUser = await db.Users.insert(taskDTO.userid, taskDTO.title, taskDTO.details, taskDTO.difficulty, taskDTO.priority, taskDTO.completed);

        // We use taskDTO and target each individual desired parameter. Inserting the object as a whole throws some typescript errors that are time-consuming.
        await db.Tasks.insert(taskDTO.userid, taskDTO.title, taskDTO.details, taskDTO.difficulty, taskDTO.priority, taskDTO.completed);
        res.send("Posted successfully");
    } catch (error) {
        console.log(`There was an error in router.insert in tasks.ts, specifically: ${error}`);
    }
});

// This PUT function updates the title and details of a task.
// Currently the priority & difficulty are not editable features, but can easily be added below.
// req.body.priority & req.body.difficulty would be the two targetted parameters to edit

// We probably need a put function to update the req.body.completed at some point for when a user uses the "checkbox" on the front-end
router.put("/:id", async (req, res) => {
    const id: string = req.params.id;
    const newTitle: string = req.body.title;
    const newDetails: string = req.body.details;
    const newDifficulty: any = req.body.difficulty;
    const newPriority: any = req.body.priority;
    const newCompleted: any = req.body.completed;

    console.log(id, newTitle, newDetails, newDifficulty, newPriority, newCompleted);

    try {
        await db.Tasks.put(id, newTitle, newDetails, newDifficulty, newPriority, newCompleted);

        res.send("Edited successfully");
    } catch (error) {
        console.log(`There was an error in router.put in tasks.ts, specifically: ${error}`);
    }
});

// Straight-forward, but this DELETE function just deletes the specified task for whatever ID is presented.
router.delete("/:id", async (req, res) => {
    const id: string = req.params.id;

    try {
        await db.Tasks.destroy(id);

        res.send("Deleted successfully");
    } catch (error) {
        console.log(`There was an error in router.delete in tasks.ts, specifically: ${error}`);
    }
});

// These match exactly from the mySQL database setup. If something is changed in one place, it must be changed in both.
export interface ITask {
    id?: string;
    userid: string;
    title: string;
    details: string;
    difficulty: number;
    priority: number;
    completed: number;
}

export default router;
