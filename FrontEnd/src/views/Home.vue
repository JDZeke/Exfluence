<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-parallax dark src="@/assets/banner.jpg">
          <v-col>
            <v-row class="mt-6 pl-10 pr-10" align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-3 mb-4 mt-9">
                  Exfluence
                </h1>
                <br />
                <h3>
                  <div>
                    Exfluence’s Open Résumé Format (OREF) is designed to allow a universal standard for resume creation.
                    A common hassle regarding job applications is the lack of an easily interchangeable resume
                    format/template. The use of this application will provide the user both a seamless and efficient way
                    to transfer data that may be repeated on numerous applications.
                  </div>
                  <br />
                  <div>
                    This can be leveraged to allow applicants to spend less time filling in the same information while
                    allowing employers to filter information they want. Using JSON-like syntax allows for our file
                    format to be sent faster, utilized along a wider scope, stored more efficiently, and more easily
                    searchable.
                  </div>
                </h3>
              </v-col>
            </v-row>
            <br />
            <br />
            <br />
            <v-row align="center" justify="center">
              <v-btn rounded color="white" @click="$router.push({ path: 'create' })">
                Create Resume
              </v-btn>
            </v-row>
          </v-col>
        </v-parallax>
      </v-row>
      <v-row class="mt-12" align="center" justify="center">
        <v-col cols="3"></v-col>
        <v-col cols="6"><v-img src="@/assets/flow-chart.png"></v-img></v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
