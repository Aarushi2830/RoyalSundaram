<template>
<!-- The Image is added in the breandcrumb componenet to make it place above the breadcumb like in th xd flle -->
  <div class="hidden-md-and-up">
    <v-img
      src="CardThumbnaill.png"
      height="180px"
    ></v-img>
    <!-- </v-col> -->

    <v-breadcrumbs :items="items">
      <template v-slot:divider>
      <!-- the icon provides direction to the breadcrumb navigation  -->
      <!-- icon is used by writing mdi followed by the name of the icon -->
        <v-icon color="black"> mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
//false means that the user is not on the page and clicking on it will redirect them to the linked page//
//true means that the user is currently on that particular web page//

  export default {
    data: () => ({
      items: [
        {
        
          text: 'Home',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Travel Insurance',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Leisure Trip',
          disabled: false,
          href: 'http://localhost:3000/RoyalSundaram/',
        },
      ],
    }),
  }
</script>