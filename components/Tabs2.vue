<template>
  <v-card>
    <v-toolbar
      color="blue"
      dark
      flat
    >

      <v-toolbar-title>Royal Sundaram</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
     
          <v-tab
            v-for="item in items"
            :key="item"
            :href="'#tab-' + item"
          >
            {{ item }}
          </v-tab>

          <v-menu
            v-if="Insurance.length"
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                Insurance
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>

              
            </template>

            <v-list class="grey">
              <v-list-item
                v-for="item in Insurance"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        
      </template>
    </v-toolbar>

   
      
        <v-card flat>
          
        </v-card>
   
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      currentItem: 'tab-Web',
      items: [
        'Web', 'Shopping', 'Videos', 'Images',
      ],
      Insurance: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],

    }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.Insurance.splice(this.Insurance.indexOf(item), 1)
        )
        this.Insurance.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
  }
</script>