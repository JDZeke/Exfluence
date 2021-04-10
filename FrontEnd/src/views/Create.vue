<template>
  <v-container fluid>
    <v-row><v-col justify="center" align="center">Enter your information. DO it now</v-col></v-row>
    <v-row>
      <v-col justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel :key="name" v-for="(section, name) in resume" style="background: GhostWhite;">
            <v-expansion-panel-header>
              <v-spacer />
              <template>{{ name }}</template>
              <v-spacer />
            </v-expansion-panel-header>
            <v-expansion-panel-content :key="subName" v-for="(subSection, subName) in section">
              <v-card elevation="5">
                <v-card-subtitle>
                  {{ subName }}
                </v-card-subtitle>
                <div :key="subsubName" v-for="(subsubSection, subsubName) in subSection" class="pl-5">
                  <v-text-field v-model="resume[name][subName][subsubName]" v-bind:label="subsubName"> </v-text-field>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import format from "@/assets/format";

export default {
  name: "Create",
  mounted() {
    let temp = JSON.parse(JSON.stringify(format));
    this.resume = temp;
  },
  data() {
    return {
      format,
      resume: {},
    };
  },
};
</script>
