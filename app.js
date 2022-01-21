new Vue({
    el : '#app',
    data(){
        return {
            img: 'https://static.platzi.com/ui/assets/image/isotipoPlatzi093f27a2fb00922bb105.png',
            title : '',
            time : 0,
            courses: [],
            showPrices : false,
        }
    },

    computed: {
        totalTime(){
            let total = 0;
            this.courses.forEach(course => {
                total += parseInt(course.timeCourse)
            });
            return total
        }
    },

    watch: {
        
    },

    methods: {
        addCourse () {
            if(this.title != '' && this.time != ''){
                let course = {
                    titleCourse : this.title,
                    timeCourse : this.time,
                }
                this.courses.push(course)
            }
            else{
                alert('Error al guardar el curso')
            }
            console.log(this.courses);
        }
    }
})