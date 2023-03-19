// example

import { reactive, watchEffect } from "vue";
const MAX_ROAD_LENGTH = 10;

const mod = (x: number, y: number) => ((x % y) + y) % y;

const car = reactive({
  position: 0,
  speed: 2,
});

setInterval(() => {
  car.position = mod(car.position + car.speed, MAX_ROAD_LENGTH);
}, 1000);

watchEffect(() => {
  const road = [..."_".repeat(MAX_ROAD_LENGTH)];
  road[car.position] = "🚗";
  console.log(road.reverse().join(""));
});
