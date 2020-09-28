<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="10">

      <p>Select the number of Travellers</p>
    
        <v-select
          v-model="select"
          :items="items"
        
         
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        select: { text: '1' },
        items: [
         { text: '1' },
        { text: '2'  },
        { text: '3'  },
        { text: '4'  },
        { text: '5' },
        ],
      }
    },
  }
</script>