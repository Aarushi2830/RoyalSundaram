<template>
<v-row>
    <v-col
      cols="12"
      sm="12"
    >
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
        >
        <!-- tag of the button -->
          Know more about Leisure Trip
        </v-btn>
      </template>
      <v-list>
        <v-header>Know more about Leisure Trip</v-header>
          
          <!-- The content of the bottom sheet -->
          <v-list-item-content><v-subheader>
          A comprehensive travel insurance plan for a holiday abroad, with SI starting from 50,000 USD up to 10 lac USD. When you plan a leisure trip abroad, hotel bookings, sight-seeing & shopping are the things you usually plan precisely but buying a Travel Insurance is seldom thought of. Very few people plan for unforeseen events like flight delays, personal accidents, even a hospital stay in a strange unknown place. Leisure plan of Travel Secure provides you complete coverage while you are planning your holiday abroad so that you may stay away from anxiety over these unforeseen events.
         </v-subheader>
          </v-list-item-content>
           <v-header>
           Who Can Be Covered ?
           </v-header>
            <p> <v-subheader>
            Minimum age of proposer must be 18 years
             No medical reports required,  You need to be in good health condition, Minimum age at entry of insured person must be 91 days, Maximum age of entry of insured person must be 70 years.
            </v-subheader>
            </p>
          <v-header>
        Leisure Trip Claim Procedure
        </v-header>
          <p> <v-subheader>
         Provider within a period of 30 days from the date of return to the Country of Residence of the Insured person. In case the Trip is terminated any time before the completion of the Trip covered hereunder, the Insured shall submit all the documents as soon as such termination shall take place, but before 30 days from the date of such termination.
          </v-subheader>
          </p>
        

      </v-list>
    </v-bottom-sheet>
  </div>
    </v-col>
    </v-row>
</template>


<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    }),
  }
</script>

    
     