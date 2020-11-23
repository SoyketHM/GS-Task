<template>
  <div class="col-6 m-auto">
    <b-form @submit="addSubject">
      <b-form-group id="input-group-1" label="Subject Name" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter subject name"
          v-model="newSubject.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Students" label-for="input-4">
        <v-select
          id="input-4"
          :options="students"
          v-model="newSubject.students"
          label="name"
          multiple
        ></v-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Subjects } from "../../imports/collections/subjects";
import { Students } from "../../imports/collections/students";
export default {
  data() {
    return {
      newSubject: {
        name: "",
        students: [],
      },
    };
  },
  methods: {
    addSubject() {
      let data = {
        name: this.newSubject.name,
        students: this.newSubject.students,
        createdAt: new Date(),
      };
      Subjects.insert(data);

      // Clear form
      this.newSubject = {
        name: "",
        students: [],
      };

      this.$router.push("/subjects");
    },
  },
  meteor: {
    students() {
      return Students.find({}).fetch();
    },
  },
};
</script>
