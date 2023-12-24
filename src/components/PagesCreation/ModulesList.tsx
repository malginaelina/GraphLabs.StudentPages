import React, { useState, useEffect } from "react";
import "./Catalog.css"

interface Props {
    // list: {id: number, name: string}[];
    task_id: {"test_id": number}[];
    time: string;
    nextStage: (list: {interval: string, max_grade: number, data: string, module_name: string}[]) => void;
    prevStage: () => void;
}


function ModulesList (props: Props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(props.task_id[0])
        };
        fetch('api/get_tasks_from_test', requestOptions)
            .then(response => response.json())
            .then(data => setTasks(data.id));

    }, []);


    const next_stage = () => {
        const newList: { interval: string, max_grade: number, data: string, module_name: string}[] = []

        props.nextStage(newList)
    };

    const prev_stage = () => {
        const newList: number[] = []
        props.prevStage()
    };

    return (
        <div>
            <p className={"time"}>Время выполнения теста: {props.time} мин</p>
            <div className={"area"}>
                {tasks &&
                tasks.map((task: any) => (
                    <div className={"selection"} key={task.id}>
                        <span className={"id"}>{task.id}. {task.name}</span>
                    </div>
                ))}

            </div>
            <div className={"button-area"}>
                <button className={"prev"} onClick={prev_stage}>
                    Главная страница
                </button>
                <button className={"next"} onClick={next_stage}>
                    Выполнить тест
                </button>
            </div>
        </div>
            );
}

export default ModulesList;