<template>

  <v-container id="dropdown-example">
      <v-col cols="12" xs="12">

      </v-col>
      <div>
        <p class="font-weight-regular">Start date and end date of the trip.</p>
        </div>

        <v-row>

      <v-col cols="12" sm="2">
        <p>DD</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <p>MM</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <p>YYYY</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>

      <v-spacer></v-spacer>
        <v-col cols="12" sm="2">
        <p>DD</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <p>MM</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <p>YYYY</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>

    </v-row>
  </v-container>
</template>


<script>
import DatepickerVue from './Datepicker.vue'
  export default {
    data: () => ({
     
      dropdown_edit: [
     <Datepicker/>
      ],
    }),
  }
</script>