<template>
    <div>
        <label v-if="useLabel"><slot>Set label slot</slot>:</label>
        <input type="text" v-model="inputNumber" v-on:input="filterDigits" />
    </div>
    <!-- Add to App.vue template
    <digits-input :use-label="true" :num-digits="10">Digits Input</digits-input>
    -->
</template>

<script>
    export default {
        data() {
            return {
                inputNumber: '',
                previousValue: '',
            }
        },
        props: {
            useLabel: {
                type: Boolean,
                default: false
            },
            numDigits: {
                type: Number,
                required: true
            }
        },
        methods: {
            filterDigits(event) {
                // NOTE: This 'event' is and instance of 'InputEvent'
                let newValue = event.target.value;
                let isNum = /^\d+$/.test(newValue);
                if (newValue.length > this.numDigits) {
                    event.preventDefault();
                }
                else if (isNum) {
                    this.inputNumber = newValue;
                    this.previousValue = newValue;
                }
                else {
                    // Edge case where 'previousValue' length is one and the 'backspace' key is pressed
                    if (this.previousValue.length == 1 && !event.data) {
                        this.previousValue = '';
                    }
                    this.inputNumber = this.previousValue;
                    event.preventDefault();
                }
            }
        }
    }
</script>

<style scoped>
    label {
        margin-right: 1em;
    }
</style>
