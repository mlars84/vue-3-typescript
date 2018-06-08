<template>
  <div :style="changed">
    <input type="text" v-model="moreText">
    <button @click="changeText">Change it!</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
class MoreStuff extends Vue {

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

export default MoreStuff
</script>
