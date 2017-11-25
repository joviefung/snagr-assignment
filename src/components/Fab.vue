<template>
  <div>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="accent"
      @click="openAddPersonDialog"
    >
      <v-icon>add</v-icon>
    </v-btn>

    <AddPersonDialog ref="addPersonDialog" />
  </div>
</template>

<script>
import AddPersonDialog from './AddPersonDialog'

export default {
  name: 'Fab',
  components: {
    AddPersonDialog
  },
  methods: {
    openAddPersonDialog () {
      this.$refs['addPersonDialog'].openDialog()
    }
  }
}
</script>

<style scoped>
</style>
