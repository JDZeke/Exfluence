<template>
  <v-app>
    <v-app-bar color="white" dense app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Exfluence</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main style="background:SkyBlue">
      <router-view />
    </v-main>
  </v-app>
</template>
