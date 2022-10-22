<template>
  <q-page class="flex flex-center">
    <!--     <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <div class="q-pa-md" style="width: 1000px">
      <q-expansion-item
        class="shadow-1 overflow-hidden"
        style="border-radius: 30px"
        icon="explore"
        label="Vendas - Ford Mustang e Ford Fiesta"
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
      >
        <q-card>
          <div id="app">
            <div ref="tableau1"></div>
          </div>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden"
        style="border-radius: 30px"
        icon="explore"
        label="Ford Focus"
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
      >
        <q-card>
          <div id="app">
            <div ref="tableau2"></div>
          </div>
        </q-card>
      </q-expansion-item>
    </div>
    <!--     <div id="app">
      <div ref="tableau"></div>
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      url1:
        "https://public.tableau.com/views/SalesforFordBrandcars_16662835806610/SalesforFordMustangandFordFiesta",
      url2: "https://public.tableau.com/views/Ford_focus/Distribution-Dashboard",
      options: {
        hideTabs: true,
      },
    };
  },
  methods: {
    initViz: function () {
      let viz = new tableau.Viz(this.$refs.tableau1, this.url1, this.options);
      let viz2 = new tableau.Viz(this.$refs.tableau2, this.url2, this.options);
    },
  },
  mounted: function () {
    this.initViz();
  },
};
</script>
