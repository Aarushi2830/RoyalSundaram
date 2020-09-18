<template>
  <v-card
    class="mx-auto"
    max-width="344"
    color="blue"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Why Royal Sundaram Travel Insurance?
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, 
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      show: true,
    }),
  }
</script>