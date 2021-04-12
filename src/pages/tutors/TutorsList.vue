<template>
  <tutor-filter @change-filter="setFilters"></tutor-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadTutors">Refresh</base-button>
        <base-button v-if="!isTutor && !isLoading" link to="/register"
          >Register as Tutor</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasTutors">
        <tutor-item
          v-for="tutor in filteredTutors"
          :key="tutor.id"
          :id="tutor.id"
          :firstName="tutor.firstName"
          :lastName="tutor.lastName"
          :rate="tutor.hourlyRate"
          :areas="tutor.areas"
        ></tutor-item>
      </ul>
      <h1 v-else>No tutors found...</h1>
    </base-card>
  </section>
</template>

<script>
import TutorItem from "../../components/tutors/TutorItem";
import TutorFilter from "../../components/tutors/TutorFilter";

export default {
  components: {
    TutorItem,
    TutorFilter,
  },
  data() {
    return {
      isLoading: true,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isTutor() {
      return this.$store.getters["tutors/isTutor"];
    },
    filteredTutors() {
      const tutors = this.$store.getters["tutors/tutors"];
      return tutors.filter((tutor) => {
        if (this.activeFilters.frontend && tutor.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && tutor.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && tutor.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasTutors() {
      return !this.isLoading && this.$store.getters["tutors/hasTutors"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadTutors() {
      this.isLoading = true
      await this.$store.dispatch("tutors/loadTutors");
      this.isLoading = false;
    },
  },
  created() {
    this.loadTutors();
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