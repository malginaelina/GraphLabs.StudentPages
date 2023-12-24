import React, {FunctionComponent, useState, useEffect} from 'react';
import './App.css';
import BaseList from "./components/containers/BaseList";
import {List, ListGroupItem} from "reactstrap";
import {render} from "@testing-library/react";
import ReactDOM from "react-dom/client";
import BaseListRow from "./components/containers/BaseListRow";
import BaseRow from "./components/containers/BaseListRow";
import "./components/PagesCreation/PagesCreation";
import PagesCreation from "./components/PagesCreation/PagesCreation";
import Header from "./components/header/Header";
import './server';

function App() {


    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch("api/get_tests/")
            .then((response) => response.json())
            .then((json) => setTests(json.tests))

    }, [])

    return (
    <div>
    <Header/>
    <PagesCreation all_tests_list={tests}/>
    </div>

    );
}

export default App;
