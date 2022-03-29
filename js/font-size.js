/* Slider Range */
Vue.component('no-ui-slider', {
  template:
  `
  <div class='slider-container'>
    <div ref='slider' class='slider'></div>
    <span>{{value}}</span>
    <button @click="setValue(1)">Min</button>
    <button @click="setValue(100)">Max</button>
  </div>
  `,
  props: ['value'], // regular "value" prop to v-model become alive
  watch: {
    value(newValue, oldValue) {
      // Prevent infinit loop with common noUilSlider event
      if (this.$refs.slider.noUiSlider.get() != newValue) {
        this.$refs.slider.noUiSlider.set(newValue); // Set value manually
      }
    } },

  mounted() {

    // Create a slider from ref
    noUiSlider.create(this.$refs.slider, {
      start: this.value,
      step: 1,
      connect: 'lower',
      range: { 'min': 10, 'max': 100 } });


    // Emit regular "input" event with
    this.$refs.slider.noUiSlider.on(
    'update', (values, handle) => this.$emit('input', values[handle]));
  },
  methods: {
    setValue(value) {
      this.$refs.slider.noUiSlider.set(value);
    } } });



new Vue({
  el: '#app',
  data: {
    first: 50,
    second: 70 } });

/* Font Setting */
$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});
$("#fontColor").change(function() {
$('#fontArea').css("color", $(this).val());
});
$("#fontSpace").change(function() {
$('#fontArea').css("letter-spacing", $(this).val() + "px");
});
