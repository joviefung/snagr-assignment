<template>
  <v-snackbar
    :top="true"
    :right="true"
    :timeout="3000"
    v-model="snackbar"
  >
    {{ notificationMsg }}
    <v-btn flat color="accent" @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'NotificationSnackbar',
  data () {
    return {
      snackbar: false
    }
  },
  computed: {
    notificationMsg () {
      return this.$store.state.notificationMsg
    }
  },
  watch: {
    notificationMsg () {
      if (this.notificationMsg !== '') {
        this.snackbar = true
      }
    },
    snackbar () {
      if (this.snackbar === false) {
        this.clearStorenotificationMsg()
      }
    }
  },
  methods: {
    clearStorenotificationMsg () {
      this.$store.commit('setNotificationMsg', '')
    }
  }
}
</script>
