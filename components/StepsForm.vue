<template>
  <v-stepper v-model="e1"
  >
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
          height="500px"
          editable
        >
          <v-row justify="center">
           <v-col cols="12" sm="10" md="10" xs="10">
        <Proposerform/>
         </v-col>
            </v-row>
            </v-card>

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
        <v-row justify="center">
           <v-col cols="12" sm="12" md="12" xs="12">
        <v-card
          class="mb-12"
          color="black"
          height="570px">
            <v-row justify="center">
           <v-col cols="12" sm="10" md="10">
        <Countrieschip/><Placeselection/>
           </v-col>
            </v-row>
         <v-row justify="center">
           <v-col cols="12" sm="4" md="4">
        <Datepicker1/>
        </v-col>
          <v-col cols="12" sm="4" md="4">
        <Datepicker2/>
           </v-col>
         </v-row>
          <v-row justify="center">
           <v-col cols="12" sm="12" md="12">
        <Numberoftravellers/>
         </v-col>
         </v-row>
         </v-card>
           </v-col>
            </v-row>

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
          height="400px"
        >
         <v-row justify="center">
           <v-col cols="12" sm="12" md="12" >
        <Agedropdown/>
         </v-col>
         </v-row>
        </v-card>

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