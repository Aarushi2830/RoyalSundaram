<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="slideNav">
      <v-list>
        <v-list-item-title v-for="item in menuItems" :key="item.title">
        </v-list-item-title>
      </v-list> -->
    <!--Header -->
     
   <!--increases or decreses the height of the header -->
    <v-app-bar height="25" color= "white" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
    <!-- Component Example -->
   
      <v-row class="hidden-sm-and-down">
      <v-spacer></v-spacer>
      <v-card
       :elevation="0"
      color="#E1E8EE"
      height="30">
      <!-- p span class for changing the colour of the text -->
      <p span class="policy">New Policy: 022-50061070 | Customer Service: 1860 425 0000 | Motor Claim Intimation / Crop Insurance: 1800 568 9999</p>
     </v-card>
      </v-row>
   
   <!-- extends the height of the nav bar -->
    <template v-slot:extension>
      <!-- the nav bar remains hidden in sm and xs devices and is only visible in md and lg devices -->
          <v-row class="hidden-md-and-up">
       <!-- <v-col sm="0" class="mb-sm-6 mb-4 mx-sm-1 mx-0"> -->
          <Menubar2/>
       <!-- </v-col> -->
          </v-row>
<!--           
      <v-row class="hidden-sm-and-down">
        <v-col sm="0" class=" mb-6 pr-8 mr-8"> -->
           <v-col class="mr-10 ml-n10">
       <RoyalSundaramlogo/>
           </v-col>
        <!-- </v-col> -->
      <v-spacer></v-spacer>
      <v-row class="hidden-md-and-up">
       <v-btn icon>
          <v-col class="mb-8 pt-6 ml-16 pl-16">
        <v-icon color="black">mdi-magnify</v-icon>
          </v-col>
      </v-btn>
      </v-row>

     <!-- Global nav bar buttons -->
      
   <v-col cols="12" sm="1"
    class="mt-0 pt-6">
     
      <Insurancedropdown/>
      </v-col>
  
     
      <!-- <Insurance/> -->
        <v-col cols="12" sm="1"  class="mt-0 pt-6">
       
      <Aboutusbutton/>
        </v-col>
      
     
       <v-col cols="12" sm="1"  class="mt-0 pt-6"> 
      <Instarenewbutton/>
       </v-col>

       <v-col cols="12" sm="1"  class="mt-0 pt-6">
      <Contactusbutton/>
       </v-col>

       <v-col cols="12" sm="1"  class="mt-0 pt-6">
      <Blogsbutton/>
       </v-col>
      
      <Signinbutton/>
       
    
       <v-btn icon>
          <v-col class="mt-0 pt-3">
        <v-icon color="black">mdi-magnify</v-icon>
          </v-col>
      </v-btn>
      <!-- </v-row> -->
         

      <v-row class="hidden-md-and-up">
        <v-col sm="10">
       <RoyalSundaramlogo/>
        </v-col>
        <!-- Instead of a nav bar the contents are organised in a dropdown under the menu bar button which is only visible in sm ans xs devices and hidden in md -->
        <!-- <v-col sm="1" class="mb-sm-6 mb-4 mx-sm-2 mx-0">
          <Menubar2/>
        </v-col> -->
      </v-row>

   </template>

    

      
      
    </v-app-bar>
    

    <!-- Body -->
   
    <v-body color="blue" app>
    <v-content light>
      <Breadcrumbmd/>
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

  .policy {
    color: #707070;
}
   #inspire {
   background-color:white
;

    color: black;
  }
  
</style>