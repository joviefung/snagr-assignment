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

    <v-speed-dial 
      :direction="'bottom'"
      :transition="'slide-y-transition'"
    >
      <v-btn slot="activator" dark icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-tooltip left>
        <v-btn icon dark large @click="expandAll(true)" slot="activator" color="secondary">
          <v-icon>arrow_drop_down</v-icon>
        </v-btn>
        <span>Expand All</span>
      </v-tooltip>

      <v-tooltip left>
        <v-btn icon dark large @click="expandAll(false)" slot="activator" color="secondary">
          <v-icon>arrow_drop_up</v-icon>
        </v-btn>
        <span>Collapse All</span>
      </v-tooltip>

      <v-tooltip left>
        <v-btn icon dark large @click="changeTheme" slot="activator" color="secondary">
          <v-icon>invert_colors</v-icon>
        </v-btn>
        <span>Switch Light/Dark Theme</span>
      </v-tooltip>
    </v-speed-dial>

   
    
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
    },
    expandAll (isExpand) {
      this.$store.commit('setExpandAll', isExpand)
    }
  }
}
</script>

<style scoped>
  .selected {
    background: rgba(0,0,0,0.1);
  }
</style>
