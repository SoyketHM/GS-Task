<template>
  <div>
    <students />
  </div>
</template>
<script>
import students from "./Students.vue";
import addStudent from "./AddStudent.vue";
import subjects from "./Subjects.vue";

export default {
  name: "home",
  component: {
    students,
    subjects,
  },
};
</script>
