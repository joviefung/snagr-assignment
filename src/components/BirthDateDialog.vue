<template>
  <v-dialog lazy full-width width="290px" v-model="datepickerDialog">
    <v-text-field 
      label="Birth Date" 
      :value="currentDate"
      prepend-icon="cake"
      slot="activator"
      readonly
      required
      :rules="[v => /[\d]{4}-[\d]{2}-[\d]{2}$/.test(v) || 'Invalid Date']"
    />
    <v-date-picker 
      v-model="birthdate"
      actions
      :allowed-dates="validDateCheck"
    >
      <template slot-scope="{ save, cancel }">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="gray" @click="cancel">Cancel</v-btn>
          <v-btn flat color="primary" @click="save">OK</v-btn>
        </v-card-actions>
      </template>
    </v-date-picker>
  </v-dialog>
</template>

<script>
const defaultBirthdate = `${(new Date()).getFullYear() - 30}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`

export default {
  name: 'BirthDateDialog',
  props: {
    currentDate: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      datepickerDialog: false,
      birthdate: defaultBirthdate
    }
  },
  watch: {
    birthdate () {
      if (this.birthdate === null) {
        this.birthdate = defaultBirthdate
      }
      this.$emit('dateChanged', this.birthdate)
    }
  },
  methods: {
    validDateCheck (date) {
      const [year, month, day] = date.split('-')
      const todayYear = (new Date()).getFullYear()
      const todayMonth = (new Date()).getMonth()
      const todayDay = (new Date()).getDay()
      if (parseInt(year) < todayYear) {
        return true
      } else if ((parseInt(year) === todayYear) && (parseInt(month) < todayMonth)) {
        return true
      } else if ((parseInt(year) === todayYear) && (parseInt(month) === todayMonth) && (parseInt(day) === todayDay)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
