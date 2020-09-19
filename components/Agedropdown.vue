<template>
  <v-container id="dropdown-example">
    <v-row justify="center">
     <div>
        <p class="font-weight-regular">Select the age group of the travellers</p>
        </div>
        </v-row>

    <v-row justify="center">

      <v-col cols="12" sm="4">

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Traveller 1"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>
      
       <v-col cols="12" sm="4">

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Traveller 2"
          editable
          item-value="text"
        ></v-overflow-btn>
       </v-col>
    </v-row>
    <v-row justify="center">
       <v-col cols="12" sm="4">
        <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      class="pa-1"
      required
    ></v-checkbox>
  
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
    }),
  }
</script>