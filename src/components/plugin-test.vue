/* eslint-disable no-console */
<template>
  <div>
    <div>test</div>
    <p>
      <button @click="getChildrenFuntion">
        点击出发子组件的toast
      </button>
    </p>
    <div>
      <p>点击面板上的内容</p>
    </div>
    <test-panel ref="panel"></test-panel>
    <test-toast ref="toast"></test-toast>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testArr: [1, 2, 6]
    };
  },

  created() {
    // eslint-disable-next-line no-console
    console.log("现在的api: " + this.$msg);
    // eslint-disable-next-line no-console
    console.log(this.$myMethod(this.testArr));
    this.$nextTick(() => {
      // eslint-disable-next-line no-console
      console.log(this.$refs.panel.$el);
    });
  },

  methods: {
    getChildrenFuntion() {
      this.$nextTick(() => {
        this.$refs.toast.toastPlugin("在父组件里触发调用的toast", 2500);
      });
    }
  }
};
</script>
