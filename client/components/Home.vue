<template>
  <div class="container">
    <Navbar />

    <b-row class="mt-5">
      <b-col>
        <students/>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import students from "./Students.vue";
import addStudent from "./AddStudent.vue";
import subjects from "./Subjects.vue";

export default {
  name: "home",
  component: {
    Navbar,
    students,
    subjects,
  },
};
</script>
