<template>
  <v-row justify="center">
      

   <v-col
      cols="12" sm="9"
      class="py-2"
    >
     

      <v-btn-toggle
        v-model="icon"
        borderless
        group
      >
        <v-btn value="left">
          <span class="hidden">Incl. Schengen Excl. America</span>

          <!-- <v-icon right>
            mdi-format-align-left
          </v-icon> -->
        </v-btn>

        <v-btn value="center">
          <span class="hidden">Incl. Schengen Excl. America</span>

          <!-- <v-icon right>
            mdi-format-align-center
          </v-icon> -->
        </v-btn>
      </v-btn-toggle>
   </v-col>

           <v-col
      cols="12" sm="9"
      class="py-2"
    >
     <v-btn-toggle
        v-model="icon"
        borderless
        group
      >
            <v-btn value="right">
          <span class="hidden">Incl. Schengen Excl. America</span>

          <!-- <v-icon right>
            mdi-format-align-right
          </v-icon> -->
        </v-btn>

        <v-btn value="justify">
          <span class="hidden">Incl. Schengen Excl. America</span>

          <!-- <v-icon right>
            mdi-format-align-justify
          </v-icon> -->
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        text: 'center',
        icon: 'justify',
        toggle_none: null,
        toggle_one: 0,
        toggle_exclusive: 2,
        toggle_multiple: [0, 1, 2],
      }
    },
  }
</script>