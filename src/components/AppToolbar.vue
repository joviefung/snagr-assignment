<template>
  <v-toolbar color="primary" dark>
    <h1>People List</h1>
    <v-spacer></v-spacer>
    <v-menu bottom left lazy>
      <v-btn icon slot="activator" dark>
        <v-icon>sort</v-icon>
      </v-btn>
      <v-list>
        <v-subheader>Sort By...</v-subheader>
        <v-list-tile v-for="item in sortList" :key="item.value" @click="sort(item.value)">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
const sortList = [
    { value: 'Id', title: 'ID', icon: 'credit_card' },
    { value: 'FirstName', title: 'First Name', icon: 'person' },
    { value: 'LastName', title: 'Last Name', icon: 'people' },
    { value: 'Country', title: 'Country', icon: 'place' },
    { value: 'Gender', title: 'Gender', icon: 'wc' },
    { value: 'Birthdate', title: 'Birth Date', icon: 'cake' },
    { value: 'FavoriteColor', title: 'Favorite Color', icon: 'favorite' }]

export default {
  name: 'AppToolbar',
  data () {
    return {
      sortList: sortList
    }
  },
  methods: {
    sort (value) {
      this.$store.commit('updateSort', value)
    }
  }
}
</script>

<style scoped>
</style>
