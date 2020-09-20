<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
     
   <!--increases or decreses the height of the header -->
    <v-app-bar height="25" color= "light-blue lighten-1" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
    <!-- Component Example -->
   
      <v-spacer></v-spacer>
      <v-card
      color="blue lighten-3"
      height="30">
      <p>New Policy: 022-50061070 | Customer Service: 1860 425 0000 | Motor Claim Intimation / Crop Insurance: 1800 568 9999</p>
     </v-card>
   
   <!-- extends the height of the nav bar -->
    <template v-slot:extension>
       <RoyalSundaramlogo/>
      <v-spacer></v-spacer>

     <!-- Global nav bar buttons -->
      <Insurancedropdown/>
      <!-- <Insurance/> -->
      <Aboutusbutton/>
      <Instarenewbutton/>
      <Contactusbutton/>
      <Blogsbutton/>
      <Signinbutton/>
       <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
   </template>

    

      
      
    </v-app-bar>
    

    <!-- Body -->
    <v-body color="blue" app>
    <v-content light>
      <Breadcrumb/>
      <nuxt /> 
    </v-content>
    </v-body>
    
    <!-- Footer -->
    <!-- <v-footer color="transparent" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      <v-row col="12" md="4">
       <Leisuretrippopup/>
           </v-row>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

   #inspire {
   background-color: rgb(205, 231, 248);

    color: black;
  }
  
</style>