import EditStudent from './components/EditStudent.vue';
import EditSubject from './components/EditSubject.vue';

import Students from './components/Students.vue';
import Subjects from './components/Subjects.vue';

import Home from './components/Home.vue';
import AddStudent from './components/AddStudent.vue';
import AddSubject from './components/AddSubject.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/students', component: Students},
    { path: '/subjects', component: Subjects},
    { path: '/add-student', component: AddStudent},
    { path: '/add-subject', component: AddSubject},
    { path: '/edit-student/:id', component: EditStudent},
    { path: '/edit-subject/:id', component: EditSubject},
]

export default routes;