<template>
  <div class="about">
    <h1>{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  public text!: string;

  public created() {
    this.text = 'This is an about page';
  }
}
</script>

<style lang="scss">
  
</style>

