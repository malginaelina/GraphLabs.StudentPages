import React, { useState, useEffect } from "react";
import "./Catalog.css"

interface Props {
    list: {end: string, id: number, interval: string, name: string, start: string}[];
    nextStage: (list: {"test_id": number}[], time: string) => void;
    prevStage: () => void;
}


function Catalog (props: Props) {


    const next_stage = (id: number) => {
        let newList = [{"test_id": id}]
        let time: string = "";
        for (let i= 0; i<props.list.length; i++) {
            if (props.list[i].id == id) {
                time = props.list[i].interval
            }
        }
        props.nextStage(newList, time)
    };


    return (
        <div>
            <div className={"area"}>
                {props.list.length > 0 &&
                    props.list.map((item: any) => (
                        <div className={"task-selection"}>
                            <button className={"test-button"} onClick={() => next_stage(item.id)}>
                                <div className={"id-value"}>
                                        <span className={"id"} >{item.id}. </span>
                                        <span className={"value"}  >{item.name}</span>
                                </div>
                                <span className={"time_period"}>Срок выполнения: {item.start}-{item.end}</span>
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Catalog;