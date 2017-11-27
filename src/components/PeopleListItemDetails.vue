<template>
  <v-card class="details">
    <v-card-text>
      <v-layout column>
        <v-flex>
          Country: {{ item.Country }}
        </v-flex>
        <v-flex>
          <div class="block">Gender: </div>
          <div class="block" :class="{ 'male': item.Gender === 'Male', 'female': item.Gender === 'Female'}">
            {{ item.Gender }}
          </div>
        </v-flex>
        <v-flex>
          Birth Date: {{ birthdateString }}
        </v-flex>
        <v-flex>
          <div class="block">Favorite Color:</div>
          <div 
            class="color-box block"
            v-if="!!item.FavoriteColor"
            :style="{ backgroundColor: item.FavoriteColor }" 
          />
          <div class="block" v-if="!!item.FavoriteColor">{{ item.FavoriteColor }}</div>
          <div class="block" v-if="!item.FavoriteColor">No Information</div>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PeopleListItemDetails',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    birthdateString () {
      let [year, month, date] = this.item.Birthdate.split('T')[0].split('-')
      let [hour, minute, second] = this.item.Birthdate.split('T')[1].split(':')

      return new Date(year, month, date, hour, minute, second).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
  .details {
    background-color: #e6e6ee;
    padding: 0px 60px;
  }
  .block {
    display: inline-block
  }
  .male {
    color: blue;
    margin-left: 6px;
  }
  .female {
    color: red;
    margin-left: 6px;
  }
  .color-box {
    width: 12px;
    height: 12px;
    border: 1px solid;
    margin-left: 6px;
    margin-right: 4px;
  }
</style>
