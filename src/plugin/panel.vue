<template>
  <div>
    <div class="number-panel">
      <p v-show="checkedNumber.length > 0" class="number-show">
        {{ checkedNumber }}
      </p>
      <p v-show="!checkedNumber" class="number-show"></p>
      <ul>
        <li @click="clickThisNumber($event)" v-for="index in 9" :key="index">
          {{ index }}
        </li>
        <li @click="clickThisNumber($event)">0</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "test-panel"
})
export default class TestPanel extends Vue {
  checkedNumber: string = "";

  private clickThisNumber(event: MouseEvent) {
    if (event.currentTarget) {
      this.checkedNumber = this.checkedNumber.concat(
        (event.currentTarget as HTMLElement).innerHTML
      );
    }
  }
}
</script>

<style>
.number-show {
  height: 20px;
}
.number-panel ul {
  padding: 0;
}
.number-panel ul li {
  display: inline-block;
  width: 28%;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  background: #ddd;
  border-radius: 8px;
  margin-right: 10px;
}
.number-panel ul li input {
  display: none;
}
</style>
