import { ref, computed, watchEffect } from "@vue/runtime-core";

const counter = ref(0);
const squared = computed(() => counter.value ** 2);

setInterval(() => {
  counter.value++;
}, 1000);

watchEffect(() => {
  console.log(`counter: ${counter.value}, counter^2: ${squared.value}`);
});
