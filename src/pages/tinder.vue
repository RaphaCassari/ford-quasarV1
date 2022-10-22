<template>
  <div id="app">
    <div class="btns">
      <img src="../assets/nope.png" @click="decide('nope')" />
      <img src="../assets/like.png" @click="decide('like')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  created() {},
  methods: {},
};
</script>

<style>
.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>
