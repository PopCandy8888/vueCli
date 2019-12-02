<template>
  <div style="width:100%;height:100%;z-index:100"></div>
</template>
<script>
export default {
  name: 'EchartsWidget',
  data() {
    return {};
  },
  props: {
    Echartoption: {
      type: Object
    }
  },
  watch: {
    Echartoption: {
      handler: function () {
        this.setEchartOption();
      },
      deep: true
    }
  },
  methods: {
    setEchartOption() {
      var myChart = this.$echarts.init(this.$el);
      myChart.clear();
      setTimeout(() => {
        window.addEventListener('resize', function () {
          myChart.resize();
        });
      }, 1000);
      if (this.Echartoption !== null && this.Echartoption !== undefined && this.Echartoption !== '') {
        myChart.setOption(this.Echartoption);
        setTimeout(() => {
          myChart.resize();
        }, 10000);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setEchartOption();
    });
  }
};
</script>

<style scoped>
div{
  /* border: 1px solid #000; */
  padding-top: 20px;
}
</style>
