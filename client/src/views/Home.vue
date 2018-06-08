<template>
  <q-page padding>
    <q-list v-for="(post, index) in posts" :key="index">
      <q-item>Title: {{ post.title }}</q-item>
      <q-item>Description: {{ post.description }}</q-item>
      <q-item-separator />
    </q-list>
    <!-- <p>Value: {{ someDataProperty }}</p> -->
    <!-- <p>Previous Value: {{ newProperty }}</p> -->
    <!-- <p>{{ exampleProp }}</p> -->
    <!-- <p>{{ someComutedProperty }}</p> -->
    <!-- <q-input :value="someDataProperty" @input="updateProperty($event)"></q-input> -->
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import PostsService from '../services/PostsService'

@Component
export default class Home extends Vue {
  @Prop({default: 'Example'})
  public exampleProp!: string

  public newProperty!: string
  public posts: any = []

  public someDataProperty: string = 'Boop!'

  get someComutedProperty () {
    return Math.random()
  }

  @Watch('someDataProperty')
  public onPropertyChanged (value: string, oldValue: string) {
    this.newProperty = oldValue
  }

  public mounted () {
    this.getPosts()
  }

  public async getPosts () {
    const response = await PostsService.fetchPosts()
    this.posts = response.data
  }

  public updateProperty (e: any) {
    this.someDataProperty = e
  }
}
</script>

<style lang="scss">
</style>
