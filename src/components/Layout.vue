<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="rgba(194, 46, 231, 0.781)"
      dark
    >

      <v-toolbar-title
        style="width: 350px"
      >
        <a href="/" class="white--text" style="text-decoration: none"><img class="logo-header" src="..\..\publics\images\logo\main-logo.png"/></a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn v-on="on" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
      >
         <v-btn href="/shop">
          <span>Phụ Kiện Điện Thoại</span>
        </v-btn>
        <v-btn href="/shop">
          <span>Phụ Kiện Máy Tính</span>
        </v-btn>
        <v-btn href="/shop">
          <span>Linh Kiện Điện Thoại</span>
        </v-btn>
        <v-btn href="/shop">
          <span>Linh Kiện Máy Tính</span>
        </v-btn>
        <v-btn href="/blog">
          <span>About Us</span>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
      <router-view />
    <div class="layout-background"  >
      <v-card
        flast
        title
        width="100%"
        class=" white--text text-center layout-background"
      >
        <!-- <v-card-text>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
           <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>

        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>V-Tech</strong>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>
<script>
    export default {
        data () {
            return {
                items: [
                    { title: 'T-Shirts' },
                    { title: 'Jackets' },
                    { title: 'Shirts' },
                    { title: 'Jeans' },
                    { title: 'Shoes' },
                ],
                activeBtn: 1,
            }
        },
    }
</script>
<style scoped>
.layout-header-bar{
  background-color: rgba(194, 46, 231, 0.781);
}
.layout-background{
  background-color: rgba(194, 46, 231, 0.781);
}
.logo-header{
  max-width: 20%;
  max-height: 20%;
}
</style>
