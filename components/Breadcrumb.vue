<template>
  <div>

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