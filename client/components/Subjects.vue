<template>
  <div>
    <b-card header="Subject List" body-class="p-0">
      <template #header>
        <div class="d-flex justify-content-between align-items-center">
          <div><h5>Subject List</h5></div>
          <div>
            <b-button to="/add-subject" variant="success">Add Subject</b-button>
          </div>
        </div>
      </template>
      <b-table striped hover :items="subjects" :fields="fields">
        <template #cell(students)="row">
          <b-badge
            variant="info"
            v-for="(student, index) in row.item.students"
            :key="index"
            class="mx-1"
            >{{ studentById(student) }}</b-badge
          >
        </template>
        <template #cell(actions)="row">
          <b-button
            :to="`/edit-subject/${row.item._id}`"
            class="btn btn-info btn-sm"
          >
            <b-icon-pencil-square></b-icon-pencil-square>
          </b-button>
          <b-button
            size="sm"
            @click="deleteSubject(row.item._id)"
            class="mr-1"
            variant="danger"
          >
            <b-icon-trash></b-icon-trash>
          </b-button>
        </template>
      </b-table>
    </b-card>
  </div>
</template>
<script>
import { Subjects } from "../../imports/collections/subjects";
import { Students } from "../../imports/collections/students";
export default {
  name: "subjects",
  props: ["subjects"],
  data() {
    return {
      fields: ["name", "students", "actions"],
    };
  },
  computed: {    
    
  },
  methods: {
    deleteSubject(id) {
      Subjects.remove(id);
    },
    studentById(id) {
      let stdName = Students.findOne({_id: id}, {fields: {'name': 1, _id: 0}});
      if (stdName) {        
        return stdName.name;
      }
        return null;
    },
  },
  meteor: {
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
};
</script>