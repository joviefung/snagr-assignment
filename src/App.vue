<template>
  <v-app id="app" :class="{'theme--light': isLight, 'theme--dark': !isLight}">
    <v-container grid-list-md text-xs-center list-container>
      <AppToolbar @click="isLight = false" />
      <v-progress-linear v-if="isLoading" color="accent" height=5 indeterminate />
      <PeopleList />
    </v-container>

    <Fab />
    <NotificationSnackbar />
  </v-app>
</template>

<script>
import PeopleList from './components/PeopleList'
import Fab from './components/Fab'
import AppToolbar from './components/AppToolbar'
import NotificationSnackbar from './components/NotificationSnackbar'
import ApiService from './services/apiService'

export default {
  name: 'app',
  components: {
    PeopleList,
    Fab,
    AppToolbar,
    NotificationSnackbar
  },
  mounted () {
    this.fetchItem()
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    isLight () {
      return this.$store.state.isLight
    }
  },
  methods: {
    fetchItem () {
      return ApiService.getPeopleList()
        .then(res => {
          this.$store.commit('setPeopleList', res.data)
        })
        .catch(err => {
          this.$store.commit('setNotificationMsg', err.response.data.Message)
        })
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
    text-align: center;
  }
  .container.grid-list-md.list-container {
    padding: 0px;
  }
  button.btn {
    font-weight: 600;
  }
  .progress-linear {
    margin: 0px;
  }
  .speed-dial__list {
    z-index: 10 !important;
  }
</style>
