<template>
  <q-page padding>
    <p>{{ text }}</p>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  public text: string = 'This is an about page yo'
}
</script>
