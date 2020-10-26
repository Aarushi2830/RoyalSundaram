<template>
  <v-row>
      

   <v-col
      cols="12"
      class="py-2"
    >
      <!-- <p>Text &amp; Icon Options</p> -->

      <v-btn-toggle
        v-model="icon"
        borderless
        group
        color="black" light fixed app
      >
        <!-- <v-btn value="left">
          <span class="hidden-sm-and-down">Incl. Schengen Excl. America</span> -->

          <!-- <v-icon right>
            mdi-format-align-left
          </v-icon> -->
        <!-- </v-btn>

        <v-btn value="center">
          <span class="hidden-sm-and-down">Incl. Schengen Excl. America</span> -->

          <!-- <v-icon right>
            mdi-format-align-center
          </v-icon> -->
        <!-- </v-btn> -->

        <v-btn value="right">
          <span class="hidden-sm-and-down">Incl. Schengen Incl. America</span>

          <!-- <v-icon right>
            mdi-format-align-right
          </v-icon> -->
        </v-btn>

        <v-btn value="justify">
          <span class="hidden-sm-and-down">Excl. Schengen Incl. America</span>

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