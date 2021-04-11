<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Tutor</router-link>
    </div>
    <ul v-if="hasTutors">
      <li v-for="tutor in filteredTutors" :key="tutor.id">
        {{ tutor.firstName }}
      </li>
    </ul>
    <h1 v-else>No tutors found...</h1>
  </section>
</template>

<script>
export default {
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