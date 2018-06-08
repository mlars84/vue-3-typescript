<template>
  <q-page padding :style="changed">
    <q-input v-model="moreText"></q-input>
    <button @click="changeText">Change it!</button>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class MoreStuff extends Vue {

  public moreText: string = 'Default more text'
  public changed!: string

  public changeText () {
    this.moreText = 'Now it\'s different'
  }

  @Watch('moreText')
  public watchIt () {
    if (this.moreText === 'Now it\'s different'  ) {
      return this.changed = 'background-color: red;'
    }
  }
}
</script>

<style lang="scss">

</style>

