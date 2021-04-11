<template>
  <section>
    <base-card>
      <h2>Register as a tutor now!</h2>
      <tutor-form></tutor-form>
    </base-card>
  </section>
</template>

<script>
import TutorForm from "../../components/tutors/TutorForm";
export default {
    components:{
        TutorForm
    }
};
</script>