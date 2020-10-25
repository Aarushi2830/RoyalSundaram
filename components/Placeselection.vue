<template>
  <!-- <v-card id="create"> -->
    <v-container fluid>
      <v-row justify="center">
       <p> Or select by area </p>
        <!-- <v-col cols="12" sm="6" md="4"> -->
          <!-- <v-subheader >Select the Sum Insured</v-subheader> -->
           <v-radio-group row v-model="transition" hide-details>
            <v-col cols="12" sm="6" md="3">
            <v-radio value="slide-y-transition" label="Incl. Schengen Excl. America"></v-radio>
            </v-col >
             <v-col cols="12" sm="6" md="3">
            <v-radio value="slide-y-reverse-transition" label="Incl. America Excl. Schengen"></v-radio>
            </v-col>
            <v-col cols="12" sm="6" md="3">
            <v-radio value="slide-x-transition" label="Incl. America Incl. Schengen"></v-radio>
            </v-col>
            <v-col cols="12" sm="6" md="3">
            <v-radio value="slide-x-reverse-transition" label="Excl. America Excl. Schengen"></v-radio>
            </v-col>
           </v-radio-group>
        <!-- </v-col> -->
      </v-row>
    </v-container>
    
  <!-- </v-card> -->
</template>

<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),

    
    

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
  }
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>