<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="50"
          max-width="350"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Open Delay (Mouse enter)
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

 
  </v-row>
</template>

    
     