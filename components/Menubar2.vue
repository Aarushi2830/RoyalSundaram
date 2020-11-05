<template>
  <div class="text-center">
    <!-- characteristic of the dropdown -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }" light>
        <!-- Margin and padding to maintain the spacing between the components -->
         <v-col sm="0" class=" mb-7 ps-0">
        <v-btn
        :elevation="0"
          color="white"
           dark width="5"
          light
          v-bind="attrs"
          v-on="on">
           <v-app-bar-nav-icon
           color="#656464"
            v-bind="attrs"
          v-on="on"></v-app-bar-nav-icon>
        </v-btn>
         </v-col>
      </template>
    
      <v-list>
        
        <!-- loop for arranging item within the button -->
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Insurance' },
        { title: 'About us' },
        { title: 'Insta Renew' },
        { title: 'Contact us' },
        { title: 'Blogs' },
        { title: 'Sign in' },
      ],
    }),
  }
</script>