<template>
  <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 4"
        :key="n"
        :cols="n === 4 ? 4 : undefined"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ n }} of 3 {{ n === 2 ? '(wider)' : '' }}
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        v-for="n in 4"
        :key="n"
        :cols="n === 4 ? 5 : undefined"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ n }} of 3 {{ n === 2 ? '(wider)' : '' }}
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        v-for="n in 4"
        :key="n"
        :cols="n === 4 ? 5 : undefined"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ n }} of 3 {{ n === 4 ? '(wider)' : '' }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>