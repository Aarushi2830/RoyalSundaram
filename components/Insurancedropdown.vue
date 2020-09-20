<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
             small
              color="light-blue lighten-1"
              dark
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >Insurance</v-btn>
          </template>
          <span>Click</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="Insurance"
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
        { title: 'Car Insurance' },
        { title: 'Home Insurance' },
        { title: 'Health Insurance' },
        { title: 'Two wheeler Insurance' },
        { title: 'Travel Insurance' },
        { title: 'Personal accident' },
        { title: 'Business' },
        { title: 'Crop' },
        { title: 'Commercial vehicle' },
      ],
    }),
  }
</script>