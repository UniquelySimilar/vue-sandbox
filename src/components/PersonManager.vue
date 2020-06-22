<template>
    <div id="sandbox">
        <header>
            <h2>PersonManager Component</h2>
        </header>
        <div class="row">
            <main class="col-md-8">
                <person-table heading="Persons" :persons="persons" />
                <person-table heading="Male Persons" :persons="malePersons" />
                <person-table heading="Female Persons" :persons="femalePersons" />
            </main>
            <aside class="col-md-4">
                <h4>Add randomized person</h4>
                <button type="button" @click="addPerson()">Add</button>
            </aside>
            <!--
            <aside class="col-md-4">
                <h4>Add Person</h4>
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="text" name="age" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Gender</label>
                        <select name="gender" class="form-control">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-default" @click.prevent="addPerson()">Add</button>
                </form>
            </aside>
            -->
        </div>
    </div>

</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import PersonTable from './PersonTable.vue'
    import { Person } from '../globalvars'

    export default {
        data() {
            return {
                genderAry: ['male', 'female']
            }
        },
        components: {
            PersonTable
        },
        // computed: {
        //     count() {
        //         return this.$store.state.count;
        //     }
        // }
        // computed: mapState({
        //     count: state => state.count
        // })
        computed: {
            nextPersonId() {
                let maxId = Math.max.apply(Math, this.persons.map(function(person) { 
                    return person.id;  
                }));

                return maxId + 1;
            },
            ...mapState([
            'count',
            'persons'
            ]),
            ...mapGetters([
                'malePersons',
                'femalePersons'
            ])
        },
        methods: {
            addPerson() {
                //window.alert('clicked add person with id ' + this.nextPersonId);
                let id = this.nextPersonId;
                let age = Math.floor(Math.random() * 80) + 20;
                let genderIdx = Math.floor(Math.random() * 2);
                let newPerson = new Person( id, 'Name' + id, this.genderAry[genderIdx], age);

                this.$store.commit('addPerson', newPerson);
            }
        }

    }
</script>

<style scoped>
    header {
        text-align: center;
    }
</style>