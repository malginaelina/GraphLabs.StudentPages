import "./Result.css"
import React, {useEffect, useState} from "react";


interface Props {
    // list: {id:number, value: string, score: number, max_score: number}[];
    compilation_time: number;
    nextStage: () => void;
}


function Result (props: Props) {

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("api/results/")
            .then((response) => response.json())
            .then((json) => setResults(json.results))

    }, [])

    const next_stage = () => {
        props.nextStage()
    };

    return (
        <div>
            <div className={"area"}>
                {results.length > 0 &&
                    results.map((result: any) => (
                        <div className={"selection"} key={result.id}>
                            <span className={"id"}>{result.id}. {result.value}</span>
                            {result.status == "Пройден" ? (
                                <span className={"score_positive"}>Балл: {result.score}/{result.max_score}</span>
                            ) : (
                                <span className={"score_negative"}>Балл: {result.score}/{result.max_score}</span>
                            )}

                        </div>
            ))}
            </div>
            <div className={"button-area-result"}>
                <button className={"main-page"} onClick={next_stage}>
                    Главная страница
                </button>
            </div>
        </div>

    );
}

export default Result;