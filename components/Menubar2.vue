<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#00397D"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
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