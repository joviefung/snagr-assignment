<template>
  <div class="header">
    <div class="name block">
      {{ item.FirstName }} {{ item.LastName }}
    </div>
        
    <div class="action">
      <v-btn flat icon color="warn" @click.native.stop="confirmDeletePerson">
        <v-icon>delete</v-icon>
      </v-btn>
    </div>

    <DeleteConfirmDialog
      :item="item" 
      ref="deleteConfirmDialog"
    />
  </div>
</template>

<script>
import PeopleListItemDetails from './PeopleListItemDetails'
import DeleteConfirmDialog from './DeleteConfirmDialog'

export default {
  name: 'PeopleListItem',
  components: {
    PeopleListItemDetails,
    DeleteConfirmDialog
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    confirmDeletePerson () {
      this.$refs['deleteConfirmDialog'].openDialog()
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 0px 24px;
  }
  .name {
    line-height: 48px;
    font-size: 16px;
    text-align: center;
  }
  .action {
    float: right;
  }
  .block {
    display: inline-block
  }
</style>
