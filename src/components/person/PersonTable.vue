<template>
    <div class="person-table">
        <h4>{{ heading }}</h4>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons" v-bind:key="person.id">
                    <td>{{ person.id }}</td>
                    <td>{{ person.name }}</td>
                    <td>{{ person.gender }}</td>
                    <td>{{ person.age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            heading: {
                type: String,
                required: true
            },
            persons: {
                type: Array,
                required: true
            }
        }
    }

</script>

<style scoped>

</style>