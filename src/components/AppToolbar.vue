<template>
  <v-toolbar color="primary" dark>
    <h1>People List</h1>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <v-btn icon dark @click="showSearchBar = !showSearchBar" slot="activator">
        <v-icon>search</v-icon>
      </v-btn>
      <span>Search By Name</span>
    </v-tooltip>
    <v-slide-x-reverse-transition>
      <v-text-field
        v-model="searchString"
        v-show="showSearchBar"
        autofocus
        color="toolbarText"
        class="search-bar"
      />
    </v-slide-x-reverse-transition>
    <v-tooltip bottom>
      <v-btn icon dark @click="changeTheme" slot="activator">
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <span>Switch Light/Dark Theme</span>
    </v-tooltip>
    <v-menu bottom left>
      <v-tooltip bottom slot="activator">
        <v-btn icon slot="activator" dark>
          <v-icon>sort</v-icon>
        </v-btn>
        <span>Sort List</span>
      </v-tooltip>
      <v-list>
        <v-subheader>Sort By</v-subheader>
        <v-list-tile 
          v-for="item in sortList"
          v-bind:class="{ selected: selected === item.value }" 
          :key="item.value" 
          @click="sort(item.value)">
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
      sortList: sortList,
      showSearchBar: false,
      searchString: ''
    }
  },
  computed: {
    selected () {
      return this.$store.state.sort
    }
  },
  watch: {
    searchString: 'updateSearch'
  },
  methods: {
    sort (value) {
      this.$store.commit('updateSort', value)
    },
    changeTheme () {
      this.$store.commit('toggleLightDarkTheme')
    },
    updateSearch (newVal) {
      this.$store.commit('updateSearchString', newVal)
    }
  }
}
</script>

<style scoped>
  .selected {
    background-color: #eee
  }
</style>
