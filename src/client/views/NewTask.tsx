import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const NewTask: React.FC<NewTaskProps> = (props) => {
    // These useStates are all for the Task creation + POST functionality

    const [title, setTitle] = React.useState("");
    const [details, setDetails] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("1");
    const [priority, setPriority] = React.useState("0");
    const [completed, setCompleted] = React.useState("0");

    const history = useHistory();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userid: 1, title, details, difficulty, priority, completed }),
        });
        history.push("/home");
    };

    return (
        <>
            <Navbar />

            <div>
                <h2 className="title m-3 text-center"> New Tasks</h2>
            </div>

            {/* Task Form */}
            <div className="d-flex flex-wrap justify-content-center">
                <form className="newtask_form form-group border border-primary rounded shadow-lg p-3 mx-3 d-flex row justify-content-center">
                    {/* Title Textbox */}
                    {/* <div className='d-flex flex-wrap'> */}

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

                    {/* previous id and htmlfor on checkbox ignore */}
                    {/* id="flexSwitchCheckDefault" */}
                    {/* htmlFor="flexSwitchCheckDefault" */}
                    {/* Submit Button */}

                    <div className="d-flex flex-wrap justify-content-center row">
                            <button className="btn btn-primary todo-button text-center mt-2 col-3" onClick={handleSubmit}>
                                {/* Scrapped classNames:  col-3 */}
                                Add Task
                            </button>

                    </div>
                    {/* </div> */}
                </form>
            </div>

            <Footer />
        </>
    );
};

interface NewTaskProps {}

export default NewTask;
