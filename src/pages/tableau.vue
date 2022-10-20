<template>
  <q-page class="flex flex-center">
    <!--     <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <div id="app">
      <div ref="tableau"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      url:
        "https://public.tableau.com/views/SalesforFordBrandcars_16662835806610/SalesforFordMustangandFordFiesta",
      options: {
        hideTabs: true,
      },
    };
  },
  methods: {
    initViz: function () {
      let viz = new tableau.Viz(this.$refs.tableau, this.url, this.options);
    },
  },
  mounted: function () {
    this.initViz();
  },
};
</script>
