<template>
  <div class="col-6 m-auto">
    <h3>Edit Student</h3>
    <b-form @submit="updateStudent">
      <b-form-group id="input-group-1" label="Student Name" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          class="inpt"
          placeholder="Enter student name"
          v-model="editData.name"
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
          class="inpt"
          required
          placeholder="Enter student email"
          v-model="editData.email"
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
          class="inpt"
          type="number"
          placeholder="Enter student phone"
          v-model="editData.phone"
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
          v-model="editData.dob"
          class="mb-2 inpt"
        ></b-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Subjects" label-for="input-4">
        <v-select
          id="input-4"
          :options="subjects"
          :reduce="subject => subject._id"
          v-model="editData.subjects"
          label="name"
          class="inpt"
          multiple
        ></v-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Students } from "../../imports/collections/students";
import { Subjects } from "../../imports/collections/subjects";
export default {
  name: "edit-student",
  data() {
    return {
      editData: {
        dob: "",
        name: "",
        email: "",
        phone: "",
        subjects: [],
      },
    };
  },
  methods: {
    updateStudent() {
      let data = {
        name: this.editData.name,
        email: this.editData.email,
        phone: this.editData.phone,
        subjects: this.editData.subjects,
        updatedAt: new Date(),
      };
      Students.update(this.$route.params.id, {
        $set: data,
      });

      // Clear form
      this.editData = {
        dob: "",
        name: "",
        email: "",
        phone: "",
        subjects: [],
      };
      this.$router.push("/students");
    },
  },
  meteor: {
    student() {
      const student = Students.findOne({ _id: this.$route.params.id });
      if (student) {
        this.editData.name = student.name;
        this.editData.email = student.email;
        this.editData.phone = student.phone;
        this.editData.dob = student.dob;
        this.editData.subjects = student.subjects;
      }
      return student;
    },
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
};
</script>
<style scoped>
.inpt {
  box-shadow: 1px 2px 5px #8b8080;
}
h3{
  padding: 10px 0;
}
</style>