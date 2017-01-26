Vue.component('experiences-list', {
    props: ['experience'],
    template: '#template-experiences'
});

Vue.component('skills-list', {
    props: ['skill', "sindex", "skills"],
    template: '#template-skills'
});

Vue.component('educations-list', {
    props: ['education'],
    template: '#template-educations'
});

Vue.component('hobbies-list', {
    props: ['hobbie'],
    template: '#template-hobbies'
});

var app = new Vue({
    el: '#app',
    data: {
        experiences: [],
        skills: [],
        educations: [],
        hobbies: []
    },
    methods: {
        fetchData: function () {
            this.$http.get('data/data.json')
                .then(function (response) {
                    this.experiences = response.data.experiences;
                    this.skills = response.data.skills;
                    this.educations = response.data.educations;
                    this.hobbies = response.data.hobbies;
                }, function (err) {
                    console.log(err);
                });
        }
    },
    mounted: function () {
        this.fetchData();
    }
});