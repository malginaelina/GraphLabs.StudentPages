import { createServer } from "miragejs"


createServer({
        routes() {
            this.get("/api/get_tests", () => ({
                tests: [
                {end: "25.09.2024", id: 1, interval: "15", name: "Лабораторная работа 1", start: "27.09.2024"},
                {end: "01.11.2024", id: 2, interval: "20", name: "Лабораторная работа 2", start: "03.11.2024"},
                {end: "13.10.2024", id: 3, interval: "25", name: "Лабораторная работа 3", start: "15.10.2024"},
                ],
            }))
            this.post("/api/get_tasks_from_test", (schema, request) => {
                let tasks = JSON.parse(request.requestBody)
                console.log(tasks)
                return tasks
                // [
                //     {answer: "string", data: "Граф", id: 1, maxGrade: 20, name: "Модуль 1"},
                //     {answer: "string", data: "Граф", id: 2, maxGrade: 30, name: "Модуль 2"},
                //     {answer: "string", data: "Граф", id: 3, maxGrade: 50, name: "Модуль 3"},
                // ]
            })
            this.get("/api/results", () => ({
                results: [
                    {id: 1, value: "Первый модуль", score: 20, max_score: 20, status: "Пройден"},
                    {id: 2, value: "Второй модуль", score: 30, max_score: 30, status: "Пройден"},
                    {id: 3, value: "Третий модуль", score: 10, max_score: 50, status: "Не пройден"},
                ],
            }))

        },

    })

