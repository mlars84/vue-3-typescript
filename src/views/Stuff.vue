<template>
  <div class="stuff">
    <h1>{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Stuff extends Vue {
  public text!: string;

  public created() {
    this.text = 'This is a stuff page';
  }
}
</script>

<style lang="scss">
  
</style>

