window.onload = function(){
    
}

new Vue({
    el: '#app',
    data: {
        idioma : true,
      espanol: null,
      english: null,
      experiencias:[],
      educaciones:[],
      habilidades:[],
      proyectos:[],
      idiomas:[],
      referencias:[]
    },
    mounted: function(){
      axios.get('curriculum.json')
        .then(response => (
            
            this.espanol=response.data.espanol,
            this.english=response.data.english,
            this.experiencias=response.data.espanol.experience,
            this.educaciones=response.data.espanol.education,
            this.habilidades=response.data.espanol.skills,
            this.proyectos=response.data.espanol.proyects,
            this.idiomas=response.data.espanol.languages,
            this.referencias=response.data.espanol.references

            ))
            .catch( e => {
                console.error(e);
            })
    },
    methods:{
        cambiarIdioma(){
            this.idioma=!this.idioma
            if(this.idioma){
                this.experiencias=this.espanol.experience
                this.educaciones=this.espanol.education
                this.habilidades=this.espanol.skills
                this.proyectos=this.espanol.proyects
                this.idiomas=this.espanol.languages
            }else{
                this.experiencias=this.english.experience
                this.educaciones=this.english.education
                this.habilidades=this.english.skills
                this.proyectos=this.english.proyects
                this.idiomas=this.english.languages
            }
        }
    },
    computed:{
        json: function(){
            if(this.idioma){
            return this.espanol
            }else
            return this.english
        }
    }
  })