<template>
  <v-dialog v-model="deleteConfirmDialog" max-width="500px" lazy>
    <v-card>
      <v-card-title primary-title>
        <h3> Delete Person </h3>
      </v-card-title>
      <v-card-text class="message">
        {{ confirmMsg }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="deletePerson"> Confirm </v-btn>
        <v-btn color="secondary" flat @click="closeDialog"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteConfirmDialog',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      deleteConfirmDialog: false
    }
  },
  computed: {
    confirmMsg () {
      return `Are you sure you want to delete 
          ${this.item.FirstName} ${this.item.LastName}
          ?`
    }
  },
  methods: {
    openDialog () {
      this.deleteConfirmDialog = true
    },
    closeDialog () {
      this.deleteConfirmDialog = false
    },
    deletePerson () {
      this.deleteConfirmDialog = false
      setTimeout(() => this.$store.commit('deletePerson', this.item.Id), 500)
    }
  }
}
</script>

<style scoped>
  .message {
    font-size: 16px;
    margin-bottom: 28px;
  }
</style>
