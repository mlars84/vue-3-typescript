<template>
  <div>
    <p>Value: {{ someDataProperty }}</p>
    <p>Previous Value: {{ newProperty }}</p>
    <p>{{ exampleProp }}</p>
    <p>{{ someComutedProperty }}</p>
    <input @input="updateProperty($event)">
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component
class Stuff extends Vue {
  @Prop({default: 'Example'})
  public exampleProp!: string
  newProperty: string = ''

  public someDataProperty: string = 'Boop!'

  get someComutedProperty() {
    return Math.random()
  }

  @Watch('someDataProperty')
  public onPropertyChanged(value: string, oldValue: string) {
    this.newProperty = oldValue
  }

  public updateProperty(e: any) {
    this.someDataProperty = e.target.value
  }
}

export default Stuff
</script>

<style lang="scss">
</style>


