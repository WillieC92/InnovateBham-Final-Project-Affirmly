import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TasksTable from "../components/TasksTable";
import type { ITask } from "../../server/routes/tasks";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



const AccomplishedTask = () => {
    const [tasks, setTasks] = React.useState<ITask[]>([]);

    React.useEffect(() => {
        (async () => {
            const fetchRes = await fetch("/api/tasks");
            const tasks = await fetchRes.json();
            setTasks(tasks);
        })();
    }, []);

    return (
        <>
			<Navbar />

            <div>
                <h2 className="title m-3 text-center">Accomplished Tasks</h2>
            </div>

            <main className="container">
                <section className="row">
                    <div className="tasks-div m-2 mb-5 px-0">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">Completed</th>
                                    <th scope="col" className="text-center">Task</th>
                                    <th scope="col" className="text-center">Edit</th>
                                    <th scope="col" className="text-center">Priority</th>
                                </tr>
                            </thead>
                            {tasks.map((task) => {
                                if (task.completed == 1) {
                                    return <TasksTable task={task} key={`task-${task.id}`} />;
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

export default AccomplishedTask;
