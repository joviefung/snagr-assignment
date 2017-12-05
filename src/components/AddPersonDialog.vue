<template>
  <v-dialog v-model="addPersonDialog" max-width="800px" lazy>
    <v-card>
      <v-card-title>
        <h3>Add Person</h3>
      </v-card-title>

      <v-card-text>
        <AddPersonForm ref="addPersonForm" @formValidChanged="onFormValidChanged" />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat :disabled="!valid" @click="addPerson()">Add</v-btn>
        <v-btn color="accent" flat @click="resetForm()">Reset</v-btn>
        <v-btn color="secondary" flat @click="addPersonDialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddPersonForm from './AddPersonForm'

export default {
  name: 'AddPersonDialog',
  components: {
    AddPersonForm
  },
  data () {
    return {
      addPersonDialog: false,
      valid: false
    }
  },
  methods: {
    openDialog () {
      this.addPersonDialog = true
    },
    onFormValidChanged (valid) {
      this.valid = valid
    },
    resetForm () {
      this.$refs['addPersonForm'].resetForm()
    },
    addPerson () {
      this.$refs['addPersonForm'].addPerson()
      this.addPersonDialog = false
    }
  }
}
</script>
