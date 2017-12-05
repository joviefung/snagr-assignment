<template>
  <v-form v-model="valid" ref="form">
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
</template>

<script>
import countries from '../assets/countries'
import colors from '../assets/colors'
import BirthDateDialog from './BirthDateDialog'

export default {
  name: 'Fab',
  components: {
    BirthDateDialog
  },
  data () {
    return {
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
  watch: {
    valid () {
      console.log(this.valid)
      this.$emit('formValidChanged', this.valid)
    }
  },
  methods: {
    resetForm () {
      this.$refs['form'].reset()
      this.birthdate = ''
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
      this.resetForm()
    }
  }
}
</script>
