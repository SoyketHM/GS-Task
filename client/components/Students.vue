<template>
  <div>
    <b-card header="Student List" body-class="p-0">
      <template #header>
        <div class="d-flex justify-content-between align-items-center">
          <div><h5>Student List</h5></div>
          <div>
            <b-button to="/add-student" variant="success">Add Student</b-button>
          </div>
        </div>
      </template>

      <b-table striped hover :items="students" :fields="fields">
        <template #cell(subjects)="row">
          <b-badge
            variant="info"
            v-for="(subject, index) in row.item.subjects"
            :key="index"
            class="mx-1"
            >{{ subject.name }}</b-badge
          >
        </template>

        <template #cell(actions)="row">
          <b-button
            :to="`/edit-student/${row.item._id}`"
            class="btn btn-info btn-sm"
            >Edit</b-button
          >
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
import { Students } from "../../imports/collections/students";
export default {
  name: "students",
  data() {
    return {
      fields: ["name", "email", "phone", "dob", "subjects", "actions"],
    };
  },
  methods: {
    deleteStudent(id) {
      Students.remove(id);
    },
  },
  mounted() {},
  meteor: {
    students() {
      return Students.find({}).fetch();
    },
  },
};
</script>