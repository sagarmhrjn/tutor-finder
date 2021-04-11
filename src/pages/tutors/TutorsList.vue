<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Tutor</router-link>
    </div>
    <ul v-if="hasTutors">
      <tutor-item
        v-for="tutor in filteredTutors"
        :key="tutor.id"
        :id="tutor.id"
        :firstName="tutor.firstName"
        :lastName="tutor.lastName"
        :rate="tutor.rate"
        :areas="tutor.areas"
      ></tutor-item>
    </ul>
    <h1 v-else>No tutors found...</h1>
  </section>
</template>

<script>
import TutorItem from "../../components/tutors/TutorItem";

export default {
  components: {
    TutorItem,
  },
  computed: {
    filteredTutors() {
      return this.$store.getters["tutors/tutors"];
    },
    hasTutors() {
      return this.$store.getters["tutors/hasTutors"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>