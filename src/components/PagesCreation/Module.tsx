import React, { useState, useEffect } from "react";
import "./Result.css"

interface Props {
    list: {interval: string, max_grade: number, data: string, module_name: string}[];
    nextStage: (list: {id: number, value: string, score: number, max_score: number}[], compilation_time: number) => void;
}


function Module (props: Props) {


    const next_stage = () => {
        const newList: {id:number, value: string, score: number, max_score: number}[] = [];
        let compilation_time: number = 0;

        props.nextStage(newList, compilation_time)
    };


    return (
        <div>

            <div className={"button-area-module"}>
                <span></span>
                <button className={"next"} onClick={next_stage}>
                    Завершить
                </button>
            </div>
        </div>
    );
}

export default Module;