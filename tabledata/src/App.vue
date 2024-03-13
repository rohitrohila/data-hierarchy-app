<template>
  <div id="app">
    <div class="row">
      <div class="col-5">
        <left-panel v-if="selectedData.name" :selectedData="selectedData"
          :removeSelectedData="removeSelectedData"></left-panel>
      </div>

      <div class="col-7">
        <right-panel :getSelectedData="getSelectedData"></right-panel>
      </div>
    </div>

  </div>
</template>

<script>
import LeftPanel from './components/left-panel/LeftPanel.vue';
import RightPanel from './components/right-panel/RightPanel.vue';

export default {
  name: 'App',
  components: {
    LeftPanel,
    RightPanel
  },
  data() {
    return {
      allData: [],
      selectedData: {}
    };
  },
  methods: {
    getSelectedData(select) {
      this.selectedData = select;
    },
    removeSelectedData() {
      this.selectedData = {};
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
