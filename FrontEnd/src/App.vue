<template>
  <v-app>
    <v-app-bar color="white" dense app>
      <v-app-bar-nav-icon @click="$router.push({ path: '/' })">
        <v-img class="mx-2" src="@/assets/EX.png" max-height="38" max-width="38" contain> </v-img
      ></v-app-bar-nav-icon>

      <v-toolbar-title @click="$router.push({ path: '/' })">Exfluence</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
