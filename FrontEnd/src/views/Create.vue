<template>
  <v-container fluid>
    <v-row>
      <v-col justify="center" align="center">
        <h1>
          Enter your information. All fields are optional
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel :key="name" v-for="(section, name) in format" style="background: Snow;">
            <v-expansion-panel-header>
              <v-spacer />
              <template>{{ name }}</template>
              <v-spacer />
            </v-expansion-panel-header>
            <v-expansion-panel-content :key="subName" v-for="(subSection, subName) in section">
              <v-card elevation="5">
                <v-card-subtitle>
                  <v-card-actions>
                    <template>{{ subName }}</template>
                    <v-spacer></v-spacer>
                    <v-btn v-if="addable(subName)" @click="addSection(name, subName)" icon>
                      <v-icon>add_circle_outline</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card-subtitle>
                <div :key="subsubName" v-for="(subsubSection, subsubName) in subSection" class="pl-5">
                  <div v-if="subsubSection.type == 'combobox'">
                    <v-select
                      v-model="resume[name][subName][subsubName]"
                      v-bind:label="subsubName"
                      :items="subsubSection.options"
                    ></v-select>
                  </div>
                  <div v-else-if="subsubSection.type == 'textarea'">
                    <v-textarea v-model="resume[name][subName][subsubName]" v-bind:label="subsubName"></v-textarea>
                  </div>
                  <div v-else>
                    <v-text-field v-model="resume[name][subName][subsubName]" v-bind:label="subsubName"> </v-text-field>
                  </div>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col justify="center" align="center">
        <v-btn rounded color="primary" @click="download()">
          Download Resume as JSON
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formatFile from "@/assets/format.json";

export default {
  name: "Create",
  mounted() {
    this.resume = JSON.parse(JSON.stringify(formatFile));

    for (const i in this.resume)
      for (const j in this.resume[i]) for (const k in this.resume[i][j]) this.resume[i][j][k] = "";

    this.format = JSON.parse(JSON.stringify(formatFile));
  },
  data() {
    return {
      format: {},
      resume: {},
    };
  },
  methods: {
    download() {
      console.log("Download");
      var content = JSON.stringify(this.resume);
      var a = document.createElement("a");
      var file = new Blob([content], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "resume.json";
      a.click();
    },
    addable(section) {
      console.log(section);
      return true;
    },
    addSection(name, subName) {
      let temp = JSON.parse(JSON.stringify(this.format[name][subName]));
      let i = 1;
      while (this.format[name][subName.substring(0, subName.length - 1) + i.toString()]) i++;
      this.format[name][subName.substring(0, subName.length - 1) + i.toString()] = JSON.parse(JSON.stringify(temp));
      this.resume[name][subName.substring(0, subName.length - 1) + i.toString()] = {};
      for (const j in temp) this.resume[name][subName.substring(0, subName.length - 1) + i.toString()][j] = "";

      let key = Object.keys(this.resume[name][subName.substring(0, subName.length - 1) + "1"])[0];
      let t = this.resume[name][subName.substring(0, subName.length - 1) + "1"][key];
      this.resume[name][subName.substring(0, subName.length - 1) + "1"][key] += "0";
      this.resume[name][subName.substring(0, subName.length - 1) + "1"][key] = t;
    },
  },
};
</script>
