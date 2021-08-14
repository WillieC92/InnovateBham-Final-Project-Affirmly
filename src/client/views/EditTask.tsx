import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';




const EditTask = (props) => {
    const { id } = useParams();
    // These useStates are all for the Task creation + POST functionality

    const [title, setTitle] = React.useState("");
    const [details, setDetails] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("1");
    const [priority, setPriority] = React.useState("0");
    const [completed, setCompleted] = React.useState("0");
    const [tasks, setTasks] = React.useState("");

    const history = useHistory();

    // Need a useEffect to load the task (using task.id?) and then use setStates to appropriate values

    React.useEffect(() => {
        (async () => {
            const fetchRes = await fetch(`/api/tasks/${id}`);
            const tasks = await fetchRes.json();
            setTasks(tasks);
            console.log(tasks);
            setTitle(tasks.title);
            setDetails(tasks.details);
            setDifficulty(tasks.difficulty);
            setPriority(tasks.priority);
        })();
    }, []);

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, details, difficulty, priority, completed }),
        });
        history.push("/home");
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
        });
        history.push("/home");
    };

    return (
        <>
			<Navbar />
            
            <div>
                <h2 className="title m-3 text-center"> Edit Tasks</h2>
            </div>

            {/* Task Form */}
            <div className="d-flex flex-wrap justify-content-center">
                <form className="newtask_form form-group border border-primary rounded shadow-lg p-3 mx-3 d-flex row justify-content-center">
                    {/* Title Textbox */}
                    <input value={title} type="text" placeholder="Task Title" className="todo-input m-2 col-8" onChange={(e) => setTitle(e.target.value)} />

                    {/* Details Textbox */}
                    <textarea value={details} className="col-8 m-2" onChange={(e) => setDetails(e.target.value)} type="text" name="details" placeholder="Task Details" maxLength="550" />

                    {/* Dropdown for Difficulty Level */}
                    <label className="my-2 col-12 text-center">
                        Pick a difficulty level:
                        <select className="ml-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value="1">Difficulty Level 1</option>
                            <option value="2">Difficulty Level 2</option>
                            <option value="3">Difficulty Level 3</option>
                        </select>
                    </label>
                    {/* Priority Checkbox */}
                    <div className="form-check col-4 text-center">
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Priority?
                        <input value={priority} className="form-check-input" id="exampleCheck1" type="checkbox" name="priority" onChange={(e) => setPriority(e.target.checked)} />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className='d-flex flex-wrap justify-content-center row'>

                    <button className="btn btn-warning todo-button edit-btn col-2" onClick={handleEdit}>
                        Edit Task
                    </button>
                    <button className="btn btn-danger todo-button delete-btn col-2" onClick={handleDelete}>
                        Delete Task
                    </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default EditTask;
