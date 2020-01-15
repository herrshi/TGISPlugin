<template>
  <div>
    <clock />
  </div>
</template>

<script lang="ts">
import Clock from "../plugin/vue-clock.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Clock
  }
})
export default class PluginTest extends Vue {}
</script>
