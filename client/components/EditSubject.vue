<template>
  <div class="col-6 m-auto">
    <b-form @submit="updateSubject">
      <b-form-group id="input-group-1" label="Subject Name" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter subject name"
          v-model="editData.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Students" label-for="input-4">
        <v-select
          id="input-4"
          :options="students"
          v-model="editData.students"
          label="name"
          multiple
        ></v-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Subjects } from "../../imports/collections/subjects";
import { Students } from "../../imports/collections/students";
export default {
  name: "edit-subject",
  data() {
    return {
      editData: {
        name: "",
        students: [],
      },
    };
  },
  methods: {
    updateSubject() {
      let data = {
        name: this.editData.name,
        students: this.editData.students,
        updatedAt: new Date(),
      };
      Subjects.update(this.$route.params.id, {
        $set: data,
      });

      // Clear form
      this.editData = {
        name: "",
        students: [],
      };
      this.$router.push("/subjects");
    },
  },
  meteor: {
    subject() {
      const subject = Subjects.findOne({ _id: this.$route.params.id });
      if (subject) {
        this.editData.name = subject.name;
        this.editData.students = subject.students;
      }
      return subject;
    },
    students() {
      return Students.find({}).fetch();
    },
  },
};
</script>
