<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Mustang</div>
        <img
          src="https://www.ford.com.br/content/ford/br/pt_br/home/performance/mustang/jcr:content/par/splitter_1765692640/splitter1/image/image.imgs.480.high.jpg/1648739037059.jpg"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$$$</div>
          <div class="text-caption">O carro ideal para quem ama design e velocidade.</div>
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de combustivel:</q-item-label>
              <q-item-label caption>Gasolina</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Cinema XYZ</q-item-label>
              <q-item-label caption>Watch a movie.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Cinema XYZ</q-item-label>
              <q-item-label caption>Watch a movie.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Cinema XYZ</q-item-label>
              <q-item-label caption>Watch a movie.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {};
  },
  methods: {},
  mounted: function () {},
};
</script>

<style lang="sass" scoped>
.my-card
  width: 200%
  max-width: 600px
</style>
