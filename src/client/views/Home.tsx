import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import affirmations from "../../server/utils/affirmations";
import { toast } from "../components/ToastManager";
import TasksTable from "../components/TasksTable";
import type { ITask } from "../../server/routes/tasks";

const Home: React.FC<IHome> = () => {
    const [tasks, setTasks] = React.useState<ITask[]>([]);

    // This useEffect runs once upon page load and fetches all tasks. The tasks get filtered by an if statement checking for completed(boolean) in the map function below
    React.useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const fetchRes = await fetch("/api/tasks");
        const tasks = await fetchRes.json();
        setTasks(tasks);
    };

    const handleCompleteCheck = async (id: number, title, details, difficulty, priority) => {
        await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: id, title: title, details: details, difficulty: difficulty, priority: priority, completed: 1 }),
        });

        //This pops up a Toast with an Affirmation from the Affirmation.ts
        toast.show({
            title: "Task Complete!",
            content: affirmations[Math.floor(Math.random() * affirmations.length)],
            duration: 15000,
        });

        // setTimeout is currently not necessary, but we can uncomment the below lines incase there is a timing error with fetchTasks on completing a checkmark
        // setTimeout(() => {
        fetchTasks();
        // }, 500);
    };

    return (
        <>
            <Navbar />

            <div className="text-center m-4">
                <h3>Welcome, Affirmly!</h3>
            </div>

            <div className="title text-center mt-3">
                <h2>
                    <strong>Open Tasks</strong>
                </h2>
            </div>

            <main className="container">
                <section className="row">
                    <div className="tasks-div m-2 mb-5 px-0 ">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">
                                        Completed
                                    </th>
                                    <th scope="col" className="text-center">
                                        Task
                                    </th>
                                    <th scope="col" className="text-center">
                                        Edit
                                    </th>
                                    <th scope="col" className="text-center">
                                        Priority
                                    </th>
                                </tr>
                            </thead>
                            {tasks.map((task) => {
                                if (task.completed == 0) {
                                    return <TasksTable task={task} key={`task-${task.id}`} handleCompleteCheck={handleCompleteCheck} />;
                                }
                            })}
                        </table>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

interface IHome {}

export default Home;
