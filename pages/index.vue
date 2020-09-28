<template>
  <div>
    <v-content>
      <v-container fluid style="margin=0px; padding= 0px; width=100%">
        <v-row class="mx-md-12 mx-sm-8 mx-0">

          <v-col justify=" center" cols="12" md="4" sm="4" class="hidden-md-and-up">
        <h2>
          <p span class="leisure">
            Leisure Trip
          </p></h2>
          </v-col>
          <!-- <v-col sm="2" class="hidden-md-and-up"></v-col> -->
          <v-col cols="12" lg=" 3" md="4" sm="12">
            <Card/>
        <Leisuretripinfo/>
           </v-col>
           <v-col cols="12" lg=" 9" md="8" sm="12" class="hidden-sm-and-down">
              <h2>Leisure Trip</h2>
             <StepsForm/>
              </v-col>
           <v-col cols="12" lg=" 9" md="8" sm="12" class="hidden-md-and-up" >
             <StepsFormsm/>
           </v-col>
            <!-- <v-col cols="12" lg=" 9" md="8" sm="12" class="hidden-md-and-up">
              <StepsFormxs/>
            </v-col> -->
          </v-row>
          <!-- <v-container>
      <v-row justify="center">  
        
      <v-col md="3" sm="12">
        <Card/>
        <Leisuretripinfo/>
      </v-col>
        <v-col cols="12" md="7" sm="11" xs="11" >
          <h1>Leisure Trip</h1>
          <StepsForm/>
      </v-col>
      </v-row> -->
      </v-container>
   </v-content>
  </div>
  
</template>


<script>
 
</script>

<style> 
.leisure {
  color: #656464;
}
</style>