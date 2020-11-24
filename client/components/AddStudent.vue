<template>
  <div class="col-6 m-auto">
    <h3>Add Student</h3>
    <b-form @submit="addStudent">
      <b-form-group id="input-group-1" label="Student Name" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          class="inpt"
          placeholder="Enter student name"
          v-model="newStudent.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Student Email"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="email"
          required
          class="inpt"
          placeholder="Enter student email"
          v-model="newStudent.email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Student phone"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          required
          type="number"
          class="inpt"
          placeholder="Enter student phone"
          v-model="newStudent.phone"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Date Of Birth"
        label-for="input-5"
      >
        <b-input
          id="dob"
          type="date"
          v-model="newStudent.dob"
          class="mb-2 inpt"
        ></b-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Subjects" label-for="input-4">
        <v-select
          class="inpt"
          id="input-4"
          :options="subjects"
          :reduce="subject => subject._id"
          v-model="newStudent.subjects"
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
import { Students } from "../../imports/collections/students";
import { Subjects } from "../../imports/collections/subjects";
export default {
  data() {
    return {
      newStudent: {
        dob: "",
        name: "",
        email: "",
        phone: "",
        subjects: [],
      },
    };
  },
  meteor: {
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
  methods: {
    addStudent() {
      let data = {
        name: this.newStudent.name,
        email: this.newStudent.email,
        phone: this.newStudent.phone,
        dob: this.newStudent.dob,
        subjects: this.newStudent.subjects,
        createdAt: new Date(),
      };
      Students.insert(data);
      // Clear form
      this.newStudent = {
        dob: "",
        name: "",
        email: "",
        phone: "",
        subjects: [],
      };

      this.$router.push("/students");
    },
  },
};
</script>
<style scoped>
.inpt {
  box-shadow: 1px 2px 5px #8b808024;
}
h3{
  padding: 10px 0;
}
</style>
