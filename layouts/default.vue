<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color= "blue" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
       <!-- Component Example -->
      <VuetifyLogo/>

      <v-spacer></v-spacer>
      <Toolbar/>
      
    </v-app-bar>
    

    <!-- Body -->
    <v-body color="blue" app>
    <v-content light>
      <nuxt /> 
      <Chips/>
    </v-content>
    </v-body>
    
    <!-- Footer -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

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
    background-color: white;
    color: black;
  }
</style>