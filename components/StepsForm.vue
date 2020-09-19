<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Proposer's details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Travelling detals</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Traveller details</v-stepper-step>
    </v-stepper-header>

    

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="black"
          height="450px"
        ><Travellerform/></v-card>

<v-row justify="center">
        <v-btn
          color="primary"
          @click="e1 = 2"
          
        >
          Continue
        </v-btn>
</v-row>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="black"
          height="300px"
        ><Chip/><Datepicker/><Travellersdropdown/></v-card>

      <v-row justify="center">
           <v-btn text
        @click="e1 =1"
        >
         Back</v-btn>
  
        <v-btn
          color="primary"
          @click="e1 = 3"
          
        >
          Continue
        </v-btn>
      </v-row>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="black"
          height="250px"
        ><Agedropdown/></v-card>

       <v-row justify="center">
           <v-btn text
        @click="e1 =1"
        >
         Back</v-btn>
  
        <v-btn
          color="primary"
          @click="e1 = 3"
          
        >
          Continue
        </v-btn>
      </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>


<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>