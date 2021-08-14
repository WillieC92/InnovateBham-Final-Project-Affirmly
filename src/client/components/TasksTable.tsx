import * as React from "react";
import type { ITask } from "../../server/routes/tasks";
import { useHistory, useParams, Link } from "react-router-dom";
import affirmations from "../../server/utils/affirmations";
import { toast } from "../components/ToastManager";

const TasksTable: React.FC<TasksTableProps> = (props) => {
    const PriorityFlag = (flagProp: number) => {
        if (flagProp == 1) {
            return <img src="../images/flag.png" alt="" width="20" height="20" />;
        } else {
            return null;
        }
    };

    const CheckBoxLogic = (checkboxProp) => {
        if (checkboxProp == 1) {
            return <input className="checkbox" type="checkbox" checked onChange={() => props.handleCompleteCheck(props.task.id, props.task.title, props.task.details, props.task.difficulty, props.task.priority)} />;
        } else {
            return <input className="checkbox" type="checkbox" onChange={() => props.handleCompleteCheck(props.task.id, props.task.title, props.task.details, props.task.difficulty, props.task.priority)} />;
        }
    };

    const history = useHistory();

    return (
        <tbody>
            <tr className={`level-${props.task.difficulty} text-center`}>
                <th scope="row">{CheckBoxLogic(props.task.completed)}</th>
                <td className="text-left">{props.task.title}</td>
                <td className="text-center">
                    <Link to={`/${props.task.id}/edittask`}>Edit</Link>
                </td>
                <td className="text-center">{PriorityFlag(props.task.priority)}</td>
            </tr>
        </tbody>
    );
};

interface TasksTableProps {
    task: ITask;
}

export default TasksTable;
