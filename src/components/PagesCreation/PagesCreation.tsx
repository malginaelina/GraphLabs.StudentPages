import React, {Component, useEffect, useState} from 'react';
import "./PagesCreation.css"
import Catalog from "./Catalog";
import ModulesList from "./ModulesList";
import Result from "./Result";
import Module from "./Module"


interface Props {
    all_tests_list: {end: string, id: number, interval: string, name: string, start: string}[];
    final_list?: {id: number, value: string, period: string}[];
}

class PagesCreation extends Component<Props> {

     static defaulProps = {
         all_tests_list: [],
         state: 0
    };


    stage = 0;
    modules: {id: number, name: string}[] = [];
    modules_info: {interval: string, max_grade: number, data: string, module_name: string}[] = [];
    student_score: {id:number, value: string, score: number, max_score: number}[] = [];
    compilation_time: number = 0;
    time: string = "";
    task_id: {"test_id": number}[] = [];


    public firstStagePrev = () => {
        this.stage = 0
    }

    public firstStageNext = (list: {"test_id": number}[], time: string) => {
        this.task_id = list
        this.time = time
        this.stage = 1
        console.log(this.stage)
        console.log(this.task_id)
        this.forceUpdate()
    }

    // second stage handlers
    public secondStagePrev = () => {
        this.stage = 0
        this.forceUpdate()
    }

    public secondStageNext = (list: {interval: string, max_grade: number, data: string, module_name: string}[]) => {
        this.modules_info = list
        this.stage = 2
        console.log(this.stage)
        this.forceUpdate()
    }

    public thirdStageNext = (list: {id:number, value: string, score: number, max_score: number}[], compilation_time: number) => {
        this.student_score = list
        this.compilation_time = compilation_time
        this.stage = 3
        this.forceUpdate()
    }

    public fourthStageNext = () => {

        this.stage = 0
        this.forceUpdate()
    }


    public render() {
        if (this.stage === 0) {
            return (
                <>
                    <h2 className={"h2"}>Лабораторные работы</h2>
                    <h4 className={"h4"}>Выберите модуль</h4>
                    <Catalog list={this.props.all_tests_list}
                             nextStage={this.firstStageNext}
                             prevStage={this.firstStagePrev}/>
                </>
            );
        }
        if (this.stage === 1) {
            return (
                <>
                    <h2 className={"h2"}>Лабораторная работа</h2>
                    <h4 className={"h4"}>Список модулей в работе</h4>
                    <ModulesList time={this.time}
                                 task_id={this.task_id}
                                 nextStage={this.secondStageNext}
                                 prevStage={this.secondStagePrev}/>
                </>
            );
        }
        if (this.stage === 2) {
            return (
                <>
                    <h2 className={"h2"}>Здесь будут модули</h2>

                    <Module list = {this.modules_info}
                      nextStage={this.thirdStageNext}/>
                </>
            );
        }
        if (this.stage === 3) {
            return (
                <>
                    <h2 className={"h2"}>Лабораторная работа</h2>
                    <h4 className={"h4"}>Результаты прохождения</h4>
                    <Result compilation_time={this.compilation_time}
                            nextStage={this.fourthStageNext}/>
                </>
            );
        }
    }
}



export default PagesCreation;