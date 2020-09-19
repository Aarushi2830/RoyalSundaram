<template>
<v-stepper v-model="currentstep">
  <v-stepper-header>
    <v-stepper-step :complete="currentstep > 1" step="1"> 1 </v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="currentstep > 2" step="2"> 2 </v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step step="3"> 3 </v-stepper-step>
     </v-stepper-header>
     
     <v-stepper-items>
       <v-stepper-content step="1">
        <v-card
           class="mb-12"
          color="grey lighten-1"
          height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="currentstep=2"
          >
            Continue
        </v-btn>
       </v-stepper-content>
     </v-stepper-items>

        <v-stepper-items>
       <v-stepper-content step="2">
        <v-card>
          <h1>please work</h1>
        </v-card>
          <v-btn
            color="primary"
            @click="currentstep=3"
          >
            Continue
        </v-btn>
       </v-stepper-content>
     </v-stepper-items>

</v-stepper>
</template>

<script>
export default {
  name: 'Steppers',

  data: () => {
    currentstep= 0
  }
}
</script>