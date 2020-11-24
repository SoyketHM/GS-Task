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
            >{{ student.name }}</b-badge
          >
        </template>
        <template #cell(actions)="row">
          <b-button
            :to="`/edit-subject/${row.item._id}`"
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
import { Subjects } from "../../imports/collections/subjects";
export default {
  name: "subjects",
  props: ["subjects"],
  data() {
    return {
      fields: ["name", "students", "actions"],
    };
  },
  methods: {
    deleteSubject(id) {
      Subjects.remove(id);
    },
  },
  meteor: {
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
};
</script>