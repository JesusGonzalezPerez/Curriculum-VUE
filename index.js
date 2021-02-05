var app = new Vue({
    el: '#app',
    data: {
        message: '',
        ingles: true,
        show: false,
        loader: true
    },
    mounted() {
        let url = "json.json";
        axios.get(url)
            .then((response) => {
                this.message = response.data;
                this.loader=false;  
            })
            .catch((error) => {
                console.log(error);
            })
    },
    methods: {
        cambiarIdioma: function (){
            if(this.ingles==true){
                this.ingles=false;
            }else{
               this.ingles=true;
            }
        },
        openModal: function(index){
            $("#model").modal("show");
            $("#modalTitle").text(this.message.Curriculum.Projects[index].name);
            $("#imgModal").attr("src",""+this.message.Curriculum.Projects[index].img+"");
            $("#link1").attr("href",""+this.message.Curriculum.Projects[index].link+"");
            $("#link2").attr("href",""+this.message.Curriculum.Projects[index].link2+"");
            $("#description").text(this.message.Curriculum.Projects[index].description);
            $("#descripcion").text(this.message.Curriculum.Projects[index].descripcion);
            $("#tecno").text(this.message.Curriculum.Projects[index].technologies);
        },
    },
    computed: {
        
    }
})