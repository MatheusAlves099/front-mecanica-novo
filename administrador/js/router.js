'use strict'

import { carregarCardCurso, insertCardCurso, updateCardCurso, deleteCardCurso } from "./course.js"
import { carregarCardTurma } from "./class.js"
import { carregarCardDisciplina } from "./discipline.js"
import { carregarProfessor, criarHeaderProfessor } from "./teacher.js"
import { carregarAluno } from "./student.js"
// import { carregarCardTarefa } from "./tasks.js"

const routes = {
    '/main' : 'administrador/pages/main.html',
    '/teachers' : 'administrador/pages/teachers.html',
    '/course' : 'administrador/pages/course.html',
    '/class' : 'administrador/pages/class.html',
    '/discipline' : 'administrador/pages/discipline.html',
    '/student' : 'administrador/pages/students.html',
    '/task' : 'administrador/pages/tasks.html',
    '/results' : 'administrador/pages/results_tasks.html',
    '/time' : 'administrador/pages/time_record.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (window.location.pathname == '/course') {
        carregarCardCurso()
        insertCardCurso()
        updateCardCurso()
        deleteCardCurso()
    } else if (window.location.pathname == '/class') {
        carregarCardTurma()
    } else if (window.location.pathname == '/discipline') {
        carregarCardDisciplina()
    } else if (window.location.pathname == '/teachers') {
         criarHeaderProfessor()
         carregarProfessor()
    } else if (window.location.pathname == '/student') {
        carregarAluno()
    }
}

window.route = route