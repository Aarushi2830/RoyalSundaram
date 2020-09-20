<template>
<v-container>
<v-row col="12" sm=12>
  <v-card
    class="mx-auto"
    max-width="344"
    color="light-blue lighten-1"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Why Royal Sundaram Travel Insurance?
    </v-card-title>

    <v-card-subtitle>
      Your search for high quality overseas travel insurance stops here
    </v-card-subtitle>

    

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         Travel related risks while you are in a foreign country, like an accident abroad, loss of travel documents, hospitalization due to sickness/accident can turn out to be quite disturbing and at the same time expensive. 
Royal Sundaram brings to you “Travel Secure”, which is a comprehensive Travel Insurance Plan which offers holistic travel insurance solutions to every discerning traveler.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
       <Leisuretrippopup/>
</v-row>
</v-container>
</template>


<script>
  export default {
    data: () => ({
      show: true,
    }),
  }
</script>