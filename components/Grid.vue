<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        sm="12"
        md="12" 
        xs="4"     >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>