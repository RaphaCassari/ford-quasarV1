<template>
  <q-page class="flex flex-center">
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

        <q-select filled v-model="renda" :options="renda_options" label="Renda Mensal" />

        <q-select
          filled
          v-model="adicionais"
          multiple
          clearable
          :options="adicionais_options"
          label="Adicionais"
        />

        <q-select
          filled
          v-model="intuito"
          multiple
          clearable
          :options="intuito_options"
          label="Intuito"
        />

        <q-select
          filled
          v-model="estadoCivil"
          clearable
          :options="estadoCivil_options"
          label="Estado Civil"
        />

        Possui Filhos :
        <q-toggle
          v-model="filhos"
          false-value="NAO"
          true-value="SIM"
          :label="` ${filhos}`"
        />

        <q-toggle v-model="accept" label="Eu aceito os termos e condições." />

        <div>
          <q-btn label="Match!" @click="match()" :disabled="!accept" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      age: null,
      accept: false,
      renda_options: [
        "R$ 1000 a R$ 5000",
        "R$ 5000 a R$ 10000",
        "R$ 10000 a R$ 15000",
        "Mais de R$ 15000",
      ],
      adicionais_options: ["Ar Condicionado", "Direção Hidráulica", "Vidros Elétricos"],
      intuito_options: ["Lazer", "Trabalho", "Transporte"],
      estadoCivil_options: ["Solteiro", "Casado", "Divorciado", "Viúvo"],
      adicionais: null,
      renda: null,
      intuito: null,
      estadoCivil: null,
      filhos: "NAO",
    };
  },

  methods: {
    match() {
      /*       if (this.renda == "Mais de R$ 15000") {
        this.$router.push({ name: "recommendation", params: { car: "mustang" } });
      }
      if (this.renda == "R$ 10000 a R$ 15000") {
        this.$router.push({ name: "recommendation", params: { car: "kasedan" } });
      }
      if (this.renda == "R$ 5000 a R$ 10000") {
        this.$router.push({ name: "recommendation", params: { car: "fusion" } });
      } else {
        this.$router.push({ name: "recommendation", params: { car: "outro" } });
      } */

      if (
        this.renda == "R$ 1000 a R$ 5000" &&
        this.filhos == "SIM" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "ka sedan" } });
      }

      if (
        this.renda == "R$ 1000 a R$ 5000" &&
        this.filhos == "SIM" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "escort" } });
      }

      if (
        this.renda == "R$ 1000 a R$ 5000" &&
        this.filhos == "NAO" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "ka hatchback" } });
      }

      if (
        this.renda == "R$ 1000 a R$ 5000" &&
        this.filhos == "NAO" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "corcel" } });
      }

      if (
        this.renda == "R$ 5000 a R$ 10000" &&
        this.filhos == "SIM" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "ka sedan" } });
      }

      if (
        this.renda == "R$ 5000 a R$ 10000" &&
        this.filhos == "SIM" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "ecosport" } });
      }

      if (
        this.renda == "R$ 5000 a R$ 10000" &&
        this.filhos == "NAO" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "fiesta" } });
      }

      if (
        this.renda == "R$ 5000 a R$ 10000" &&
        this.filhos == "NAO" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "ecosport" } });
      }

      //>10K -> this.Filhos -> Sim -> Trabalho -> Ford Focus  / Lazer -> Ford Bronco

      if (
        this.renda == "R$ 10000 a R$ 15000" &&
        this.filhos == "SIM" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "focus" } });
      }

      if (
        this.renda == "R$ 10000 a R$ 15000" &&
        this.filhos == "SIM" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "bronco" } });
      }

      if (
        this.renda == "R$ 10000 a R$ 15000" &&
        this.filhos == "NAO" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "fusion" } });
      }

      if (
        this.renda == "R$ 10000 a R$ 15000" &&
        this.filhos == "NAO" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "corsel" } });
      }

      if (this.renda == "R$ 10000 a R$ 15000" && this.intuito == "Esporte") {
        this.$router.push({ name: "recommendation", params: { car: "edge st" } });
      }

      //>15K -> this.Filhos -> Sim -> Trabalho -> Ford Transit  / Lazer -> Ford Territory

      if (
        this.renda == "Mais de R$ 15000" &&
        this.filhos == "SIM" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "transit" } });
      }

      if (
        this.renda == "Mais de R$ 15000" &&
        this.filhos == "SIM" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "territory" } });
      }

      if (
        this.renda == "Mais de R$ 15000" &&
        this.filhos == "NAO" &&
        this.intuito == "Trabalho"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "ranger" } });
      }

      if (
        this.renda == "Mais de R$ 15000" &&
        this.filhos == "NAO" &&
        this.intuito == "Lazer"
      ) {
        this.$router.push({ name: "recommendation", params: { car: "territory" } });
      }

      if (this.renda == "Mais de R$ 15000" && this.intuito == "Esporte") {
        this.$router.push({ name: "recommendation", params: { car: "mustang" } });
      }
    },
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
