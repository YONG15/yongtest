<template>
  <div>
    <h1>할배</h1>
    {{ halData }}
    <Parent
      :halData="halData"
      :halData2="halData2"
      @changeHalData="changeHalData"
    ></Parent>
  </div>
</template>

<script>
import Parent from "@/components/HomeParent.vue";
export default {
  components: {
    Parent,
  },
  data() {
    return {
      halData: "나는 할배데이터!",
      halData2: "나는 두번째 할배데이터!",
    };
  },
  methods: {
    changeHalData(text) {
      this.halData = text;
    },
  },
};
</script>
