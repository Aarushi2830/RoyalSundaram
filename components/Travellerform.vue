<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-container>
    <v-row justify="center">
     <v-col cols="12" sm="6" md="8">
          <v-text-field
            :rules="nameRules"
            label="Name"
            outlined
            required
          ></v-text-field>
        </v-col>

     <v-col cols="12" sm="6" md="8">
          <v-text-field
            :rules="emailRules"
            label="Email id."
            outlined
            required
          ></v-text-field>
        </v-col>

     <v-col cols="12" sm="6" md="8">
          <v-text-field
           :rules="numberRules"
            label="Number"
            outlined
            required
          ></v-text-field>
        </v-col>

    <v-col cols="12" sm="8">
      <v-card
      color="black"
      class="pa 1"
      >
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="You accept to receive calls and messages on WhatsApp and Email address"
      class="pa-1"
      required
    ></v-checkbox>
        </v-card>
     </v-col>
     </v-row>
    </v-container>
    
    <v-container>
        <v-row justify="center">
      <v-col cols="12" sm="4" md="8">
         </v-col>
     </v-row>
    <!-- <v-row justify="center">
      <v-col cols="12" sm="4" md="8">
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>
   </v-col>
     </v-row> -->
    </v-container>

  

   
  </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
         number: '',
      numberRules: [
        v => !!v || 'Number is required',
        v => /.+@.+\..+/.test(v) || 'Number must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.Validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>