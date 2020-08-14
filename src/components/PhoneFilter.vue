<template>
    <div>
        <label>Phone Filter: </label>
        <input type="text" v-model="phoneNumber" v-on:input="formatPhone" />
        </div>
</template>

<script>
    export default {
        data() {
            return {
                phoneNumber: '',
                previousValue: '',
            }
        },
        methods: {
            formatPhone(event) {
                // NOTE: This 'event' is and instance of 'InputEvent'
                let newValue = event.target.value;
                let isNum = /^\d+$/.test(newValue);
                if (isNum) {
                    this.phoneNumber = newValue;
                    this.previousValue = newValue;
                }
                else {
                    // Edge case where 'previousValue' length is one and the 'backspace' key is pressed
                    if (this.previousValue.length == 1 && !event.data) {
                        this.previousValue = '';
                    }
                    this.phoneNumber = this.previousValue;
                    event.preventDefault();
                }
            }
        }
    }
</script>

<style scoped>

</style>
