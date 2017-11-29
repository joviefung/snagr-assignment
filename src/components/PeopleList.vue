<template>
  <div>
    <v-progress-circular
      color="accent"
      indeterminate
      v-bind:size="80"
      v-bind:width="3"
      v-if="!peopleList"
      class="loading"
    />
    <v-slide-y-transition>
      <v-expansion-panel v-show="peopleList">
        <v-expansion-panel-content v-for="item in peopleList" :key="item.Id" >
          <PeopleListItem slot="header" :item="item" />
          <PeopleListItemDetails :item="item" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-slide-y-transition>
  </div>
</template>

<script>
import PeopleListItem from './PeopleListItem'
import PeopleListItemDetails from './PeopleListItemDetails'

export default {
  name: 'PeopleList',
  components: {
    PeopleListItem,
    PeopleListItemDetails
  },
  computed: {
    peopleList () {
      return this.$store.getters.processedPeopleList
    }
  }
}
</script>

<style>
  .loading {
    margin-top: 60px;
  }
  .expansion-panel__header .icon {
    color: inherit !important;
  }
</style>
