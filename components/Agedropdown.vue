<template>
  <v-container id="dropdown-example">
    <v-row justify="center">
     <div>
       <!-- Using <p> to give headings -->
         <!-- p class defines different aspects of the text like the weight, opacity, allignment  -->
        <p class="font-weight-regular">Select the age of the travellers</p>
        </div>
        </v-row>

    <v-row justify="center">

    <!-- occupies four colums in a small device -->
      <v-col cols="12" sm="10">

    <!-- One can edilt their selection by choosing another item from the dropdown in an editable overflow dropdown buttons -->
        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Traveller 1"
          editable 
          item-value="text"
          light
        ></v-overflow-btn>
      </v-col>
      
       <v-col cols="12" sm="10">

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Traveller 2"
          editable
          item-value="text"
          light
        ></v-overflow-btn>
       </v-col>
   <!-- The required code prevents the users from skipping it before going to the next step  -->
    <!-- label defines the check boxes -->
    </v-row>
    <v-row justify="center">
       <v-col cols="12" sm="9">
        <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Are the proposed person(s) currently in India and planning to travel to any foreign location?"
      class="pa-1"
      required
    ></v-checkbox>
    
     <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do all traveller(s) fulfill the eligibility criteria?
Indian citizens who hold Indian Passport.
Non Resident Indians who hold Indian Passport.
Dual Passport holders who also hold Indian Passport.
Foreign Nationals staying in India on work permit
OCI Cardholders."
      class="pa-1"
      required
    ></v-checkbox>
  
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
//dropdown_edit defined the content within the dropdown button//
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
      dropdown_edit: [
        { text: '20' },
        { text: '21' },
        { text: '22' },
        { text: '23' },
        { text: '24' },
      ],
    }),
  }
</script>