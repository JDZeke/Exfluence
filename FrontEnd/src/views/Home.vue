<template>
  <div>
    <v-parallax dark src="@/assets/banner.jpg">
      <v-container fluid>
        <v-row>
          <v-col cols="2"> </v-col>
          <v-col cols="8">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-3 mb-4">
                  Exfluence
                </h1>
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
          <v-col cols="2"> </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
