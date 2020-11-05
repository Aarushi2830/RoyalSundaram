<template>
  <v-stepper v-model="e1" light
  >
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Proposer's details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Travelling detals</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Traveller details</v-stepper-step>
      
    </v-stepper-header>

    
     <!-- The elevation of the cards within the card is removed -->
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
        :elevation="0"
          class="mb-12"
          color="white"
          height="540px"
          editable
        >
          <v-row justify="center">
           <v-col cols="12" sm="10" md="10" xs="10">
        <Proposerform/>
         </v-col>
            </v-row>
            </v-card>

<v-row justify="center">
  <!-- The colour of the butoon and the size is altered here  -->
        <v-btn 

         
          @click="e1 = 2" light
            color="#00397D" 
          dark width="260"
          
        >
          Continue
        </v-btn>
</v-row>

      </v-stepper-content>
      <v-stepper-content step="2">
        <!-- <v-row justify="center">
           <v-col cols="12" sm="12" md="12" xs="12"> -->
        <v-card
        :elevation="0"
          class="mb-12 "
          color="white"
          height="800px"
          editable>
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4"></v-col>
                  
           <v-col cols="12" sm="11" md="10">
        <Placeselection/>
           </v-col>
            </v-row>
         <v-row justify="center">
           <v-col cols="12" sm="10" md="4">
        <Datepicker1/>
        </v-col>
          <v-col cols="12" sm="10" md="4">
        <Datepicker2/>
           </v-col>
         </v-row>
          <v-row justify="center">
           <v-col cols="12" sm="12" md="12">
        <Numberoftravellers/>
         </v-col>
         </v-row>
         </v-card>
           <!-- </v-col>
            </v-row> -->

      <v-row justify="center">
           <v-btn text
        @click="e1 =1"
        >
         Back</v-btn>
  
        <v-btn
         
          @click="e1 = 3"
            color="#00397D" 
          dark width="200"
          
        >
          Continue
        </v-btn>
      </v-row>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
        :elevation="0"
          class="mb-12"
          color="white"
          height="620px"
          editable
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
  
  <!-- The continue button of the last step is linked to another page with a loder to show the continuity -->
        <v-btn 
         href= "Loader"
          color="#00397D" 
          dark width="200"
          
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

 