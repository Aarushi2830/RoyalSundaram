<template>
  <v-stepper v-model="e1" light
  >
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"  :elevation="1">Proposer's details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Travelling detals</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Traveller details</v-stepper-step>
      
    </v-stepper-header>

    

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
        :elevation="0"
          class="mb-12"
          color="white"
          height="460px"
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

         color="#00397D"
          dark width="100"
          @click="e1 = 2"
          
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
          height="460px"
          editable>
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4"></v-col>
                  
           <v-col cols="12" sm="10" md="11">
        <Countrieschip/>
        <v-row justify="center">
        <v-col cols="12" sm="3" class="ms-6" >
        <p>Or select by area</p></v-col>
        </v-row>
        <Placeselectionbutton/>
           </v-col>
            </v-row>
         <v-row justify="center">
           <v-col cols="12" sm="4" md="5">
        <Datepicker1/>
        </v-col>
          <v-col cols="12" sm="4" md="5">
        <Datepicker2/>
           </v-col>
         </v-row>
          <v-row justify="center">
           <v-col cols="12" sm="12" md="12">
        <!-- <Numberoftravellers/> -->
      
  
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
         color="#00397D"
          dark width="100"
          @click="e1 = 3"
          
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
          height="1000px"
          editable
        >
         <v-row justify="center">
           <v-col cols="12" sm="12" md="12" >
        <!-- <Agedropdown/> -->

         <div>
    <!-- <v-card class="mb-4"> -->
      <v-row justify="center">
       <v-col cols="12" sm="11">
          <p>Select the number of travellers</p>
      <v-card-text>
        <v-select
          v-model="text"
          :items="[2, 3, 4, 5, 6]"
          label="Number of travellers"
          color="black" light fixed app
        ></v-select>
      </v-card-text>
       </v-col>
      </v-row>
    <!-- </v-card> -->
     <v-row justify="center">
        <v-col  cols="12" sm="10">
           <p>The age of the travellers</p>
          
    <v-text-field
     label="The age of the traveller"
      single-line
     item-value="text"
     color="black" light fixed app
     v-model="f1"
     outlined
     v-for="n in text"
     :key="`${n}-content`"> 
            Step {{ n }}
          </v-text-field>
        </v-col>
     </v-row>

          <v-divider
            v-if="n !== steps"
            :key="n"
          ></v-divider>
           
          <v-row justify="center">
            
       <v-col cols="12" sm="9">
        <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Are the proposed person(s) currently in India and planning to travel to any foreign location?"
      color="black" light fixed app
      class="pa-1"
      required
    ></v-checkbox>
    
     <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      color="black" light fixed app
      label="Do all traveller(s) fulfill the eligibility criteria?
Indian citizens who hold Indian Passport.
Non Resident Indians who hold Indian Passport.
Dual Passport holders who also hold Indian Passport.
Foreign Nationals staying in India on work permit
OCI Cardholders."
      class="pa-1"
      required
    ></v-checkbox>
  
      </v-col>
    </v-row>
         
  </div>
  
  
      </v-col>
    </v-row>
        </v-card>

       <v-row justify="center">
           <v-btn text
        @click="e1 =1"
        
        >
         Back</v-btn>
  
        <v-btn
         color="#00397D"
          dark width="100"
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
     
      
        f1: 1,
        text: 2,

        dropdown_edit: [
        { text: '20' },
        { text: '21' },
        { text: '22' },
        { text: '23' },
        { text: '24' },
      ],
    //   }
    // },

    // watch: {
    //   steps (val) {
    //     if (this.e1 > val) {
    //       this.e1 = val
    //     }
    //   },
    // },

    // methods: {
    //   nextStep (n) {
    //     if (n === this.steps) {
    //       this.e1 = 1
    //     } else {
    //       this.e1 = n + 1
         }
       },
     }
</script>

<style>
/* background colour was changed from white to lighter blue */
#inspire {
  background-color: white;
}
.v-stepper__step.primary {
  background-color: black !important;
  border-color: black !important;
}
.v-stepper__label {
  color: black !important;
}
 
  
</style>  
</style>