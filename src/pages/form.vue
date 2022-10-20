<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Nome *"
        hint="Nome e Sobrenome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Idade *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Por favor, digite sua idade.',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      Possui dependentes :<q-radio v-model="shape" val="ellipse" label="Ellipse" />

      <q-toggle v-model="accept" label="Eu aceito os termos e condições." />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      age: null,

      accept: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },
};
</script>
