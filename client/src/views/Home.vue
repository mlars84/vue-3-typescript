<template>
  <q-page padding>
    <q-list v-for="(post, index) in posts" :key="index">
      <q-item>Title: {{ post.title }}</q-item>
      <q-item>Description: {{ post.description }}</q-item>
      <q-item-separator />
    </q-list>
    <!-- <p>Value: {{ someDataProperty }}</p> -->
    <!-- <p>Previous Value: {{ newProperty }}</p> -->
    <!-- <p>{{ someComutedProperty }}</p> -->
    <!-- <q-input :value="someDataProperty" @input="updateProperty($event)"></q-input> -->
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import PostsService from '../services/PostsService'
import axios from 'axios'

@Component
export default class Home extends Vue {
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

  public created () {
    let apiKey = 'c6b35afe21df33e7ec358d02df7f2eb6'
    let lat = '44.9532392'
    let long = '-93.1403'

    axios
      .get(`https://api.darksky.net/forecast/${apiKey}/${lat},${long}`)
      .then((response) => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  public mounted () {
    this.getPosts()
    this.getForecast()
  }

  public async getPosts () {
    const response = await PostsService.fetchPosts()
    this.posts = response.data.posts
  }

  public async addPosts () {
    const response = await PostsService.addPosts()
  }

  public async getForecast () {
    const response = await PostsService.getForecast()
    console.log(response)
  }

  public updateProperty (e: any) {
    this.someDataProperty = e
  }
}
</script>

<style lang="scss">
</style>
