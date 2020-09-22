import React from 'react';
import { Task } from 'models/Task/task.model';
import tasksJson from 'db/tasks.json';
import './todos.scss';

type LayoutTask = {
    Task: Task;
    IsOpened: boolean;
}

let selectedTasks: Array<string> = [];
let layoutTasks: Array<LayoutTask>;

const Todos = () => {
    const handleClick = (taskTitle: string): void => {
        if (!selectedTasks.includes(taskTitle))
            selectedTasks.push(taskTitle);
        Refresh();
    }

    const handleClose = (taskTitle: string): void => {
        if (selectedTasks.includes(taskTitle))
            selectedTasks.splice(selectedTasks.indexOf(taskTitle), 1);
        Refresh();
    }
    const handleCloseAll = (): void => {
        selectedTasks = [];
        Refresh();
    }

    const GetTasks = (tasks: Array<Task>, selectedTasks: Array<string>): Array<LayoutTask> => {
        return tasks.map((task: Task) => {
            let layoutTask: LayoutTask = { Task: task, IsOpened: selectedTasks.includes(task.Title) };
            return layoutTask;
        });
    }

    const Refresh = (): void => {
        layoutTasks = GetTasks(tasksJson, selectedTasks);
    }

    Refresh();

    return (
        <div className="Todos">
            <div className="Count">
                <a href='#' className="NoUnderline" onClick={() => handleCloseAll()}> Compteur : {selectedTasks.length}</a></div>
            <div>
                {layoutTasks.map(({ Task, IsOpened }: LayoutTask, index: number) => {
                    return (
                        <div key={index} className="Task">
                            <div className="TaskTitle">
                                <a className="NoUnderline" href="#" onClick={() => handleClick(Task.Title)}>{Task.Title}</a>
                            </div>

                            <div style={{ "display": IsOpened ? "block" : "none" }}>
                                <div key={Task.Title} className="TaskContent" >{Task.Content}</div>
                                <div>
                                    <a className="TaskCloseBtn NoUnderline" href='#' onClick={() => handleClose(Task.Title)}> Fermer </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Todos;