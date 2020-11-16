<template>
  <div>
    <!-- <v-col class="hidden-md-and-up">
    <v-img
      src="CardThumbnaill.png"
      height="200px"
    ></v-img>
    </v-col> -->
   
      <v-container fluid style="margin=0px; padding= 0px; width=100%">
        <v-row class="mx-md-12 mx-sm-0 mx-0">

          <v-col justify=" center" cols="12" md="4" sm="4" class="hidden-md-and-up">
        <h2>
          
          <p span class="leisure">
            <p class="font-weight-medium">
            Leisure Trip
          </p></h2>
          </v-col>
          <!-- <v-col sm="2" class="hidden-md-and-up"></v-col> -->
          
          <v-col cols="12" lg=" 3" md="4" sm="12" class="hidden-sm-and-down" >
            <Card/>
        <Leisuretripinfo/>
           </v-col>
           <!-- Hidden in sm and xs devices and visible in md and lg devices -->
           <v-col cols="12" lg=" 9" md="8" sm="12" class="hidden-sm-and-down">
              <h2>
              <p span class="leisure2">
              Leisure Trip
              </p></h2>
             <StepsFormeditable/>
             <!-- Hidden in md and lg and visible in sm and xs -->
              </v-col>
           <v-col cols="12" lg=" 9" md="8" sm="12" class="hidden-md-and-up" >
             <StepsFormsm/>
           </v-col>

            <v-col cols="12" lg=" 9" md="8" sm="12" class="hidden-md-and-up" >
              <Infopanel/>
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

  </div>
  
</template>


<script>
 
</script>

<style> 
/* hex number used to change the colour of the text */
.leisure {
  color: #656464;
}
.leisure2 {
  color: #656464;
}
</style>