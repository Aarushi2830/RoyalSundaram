<template>
<v-container>
<v-row col="12" sm=12
>
  <v-card
   :elevation="1"
    class="mx-auto rounded-xl"
    max-width="344"
    color="#E1E8EE"
    
  >
  
  <!-- the card thumbnail -->
    <v-img
      src="CardThumbnaill.png"
      height="200px"
    ></v-img>
   
   <!-- Title -->
    <v-card-title>
      <p span class="title">
      Why Royal Sundaram Travel Insurance?
      </p>
    </v-card-title>

   <!-- Subtile -->
    <v-card-subtitle>
      <p span class="subtitle">
      Your search for high quality overseas travel insurance stops here.
      </p>
    </v-card-subtitle>

    
    
    <v-expand-transition>
      <div v-show="show">
        <!-- the divider that divided the card through a thin line -->
        <!-- <v-divider color="#707070"></v-divider> -->
       
       <!-- the content within the card -->
        <v-card-text>
          <p span class="body"
          >
         Travel related risks while you are in a foreign country, like an accident abroad, loss of travel documents, hospitalization due to sickness/accident can turn out to be quite disturbing and at the same time expensive. 
Royal Sundaram brings to you “Travel Secure”, which is a comprehensive Travel Insurance Plan which offers holistic travel insurance solutions to every discerning traveler.
          </p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
       <!-- <Leisuretrippopup/> -->
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

<style> 
  .title {
    color: #707070;
  }

  .subtitle {
    color: #707070;
}
   .body {
   color:#707070;

  }
  
</style>