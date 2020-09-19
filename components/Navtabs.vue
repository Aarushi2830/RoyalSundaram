<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="blue lighten-1"
      dark
    >
      <v-tab>
        Insurance
        </v-tab>
         <v-tab>
        About us
         </v-tab>
           <v-tab>
        Insta renew
        </v-tab>
         <v-tab>
        Contact us
         </v-tab>
           <v-tab>
         blogs
         </v-tab>
   
    </v-tabs>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      length: 6,
      tab: null,
    }),

    watch: {
      length (val) {
        this.tab = val - 1
      },
    },
  }
</script>