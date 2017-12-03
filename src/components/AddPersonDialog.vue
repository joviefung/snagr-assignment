<template>
  <v-dialog v-model="addPersonDialog" max-width="800px" lazy>
    <v-card>
      <v-card-title>
        <h3>Add Person</h3>
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field 
                  label="First Name" 
                  v-model="firstName"
                  prepend-icon="person"
                  required
                  :rules="[v => (!!v && v != '') || 'First name is required',
                           v => !/\n|,/.test(v) || 'No Comma or NewLine']"
                />
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field 
                  label="Last Name" 
                  v-model="lastName"
                  prepend-icon="people"
                  :rules="[v => !/\n|,/.test(v) || 'No Comma or NewLine']"
                />
              </v-flex>
              <v-flex xs12>
                <v-select
                  v-bind:items="countries"
                  v-model="country"
                  label="Country"
                  prepend-icon="place"
                  max-height=200
                  required
                  :rules="[v => (!!v && v != '') || 'Country is required']"
                  autocomplete
                />
              </v-flex>
              <v-flex xs12 sm6 md4>
              <v-select
                label="Gender"
                v-model="gender"
                prepend-icon="wc"
                required
                :rules="[v => (!!v && v != '') || 'Gender is required']"
                :items="['Male','Female']"
              />
              </v-flex>
              <v-flex xs12 sm6 md4>
                <BirthDateDialog
                  :currentDate="birthdate"
                  @dateChanged="onDateChanged" 
                />
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-select
                  v-bind:items="colors"
                  v-model="color"
                  label="Favorite Color"
                  prepend-icon="favorite"
                  max-height=200
                  autocomplete
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
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
import countries from '../assets/countries'
import colors from '../assets/colors'
import BirthDateDialog from './BirthDateDialog'

export default {
  name: 'AddPersonDialog',
  components: {
    BirthDateDialog
  },
  data () {
    return {
      addPersonDialog: false,
      valid: false,
      countries: countries,
      colors: colors,
      firstName: '',
      lastName: '',
      country: '',
      gender: '',
      birthdate: '',
      color: ''
    }
  },
  methods: {
    openDialog () {
      this.addPersonDialog = true
    },
    resetForm () {
      this.$refs['form'].reset()
    },
    onDateChanged (date) {
      this.birthdate = date
    },
    addPerson () {
      let person = {
        FirstName: this.firstName,
        LastName: this.lastName,
        Country: this.country,
        Gender: this.gender,
        Birthdate: `${this.birthdate}T00:00:00`,
        FavoriteColor: this.color
      }
      this.$store.commit('addPerson', person)
      this.$refs['form'].reset()
      this.addPersonDialog = false
    }
  }
}
</script>
