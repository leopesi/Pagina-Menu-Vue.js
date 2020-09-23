<template>


            
    <a href="">
        <div class="retangulo">
            <h5>{{epiTitle}}</h5>
            <p> {{epiName}}</p><br>
            <p id="job">{{epiJob}}</p>
            <img id="play" :src="require('../assets/'  + this.epiIcon)" :alt="imgInfocon">
            <img id="profile" :src="require('../assets/'  + this.epiImage)" :alt="imgInfoprof">
        </div>
    </a>
                    


</template>

<script>

export default {
    props: {
        epiTitle: {
            type: String,
            required: true,
        },
        epiName: {
            type: String,
            required: true,
        },
        epiJob: {
            type: String,
            required: true
        },
        epiIcon: {
            type: String,
            required: true
        },
        epiImage: {
            type: String,
            required: true
        },
        imgInfocon: {
            type: String,
            require: true
        },
        imgInfoprof: {
            type: String,
            require: true
        }
    }
}
</script>

<style scoped>

 template {
        width: 5121px;
        height: 1440px;
        text-align: center;
        font-family: sans-serif;
    }
    

    .retangulo {
        width: 262px;
        height: 342px;
        color: black;
        background-color: white;
        border-radius: 10px;
        -webkit-box-shadow: 7px 7px 5px 0px rgba(60, 50, 50, 0.49);
        -moz-box-shadow: 7px 7px 5px 0px rgba(60, 50, 50, 0.49);
        box-shadow: 7px 7px 5px 0px rgba(60, 50, 50, 0.49);
        float: left;
        font-family: sans-serif;
        z-index: 2;
    }
    
    .retangulo h5 {
        font-size: 20pt;
        text-align: left;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: lighter;
        z-index: 2;
    }
    
    .retangulo p {
        margin-top: -40px;
        text-align: left;
        padding-left: 10px;
        padding-bottom: 0px;
        font-size: 15pt;
        z-index: 2;
    }
    
    .retangulo #job {
        font-size: 10pt;
        color: #777777;
        padding-top: 2px;
        padding-bottom: 0px;
        font-family: sans-serif;
        z-index: 2;
    }
    
    #retangulos {
        margin-top: 70px;
        margin-left: 62px;
        z-index: 2;
    }
    
    #retangulos #play {
        width: 48px;
        height: 48px;
        padding-right: 90px;
        margin-top: 100px;
        z-index: 2;
    }
    
    #retangulos #profile {
        width: 48px;
        height: 48px;
        z-index: 2;
    }
    
    #derrickImg {
        width: 48px;
        height: 48px;
        margin-top: 40px;
        padding-right: 90px;
        z-index: 2;
    }
    
    #derrickProfile {
        width: 48px;
        height: 48px;
        margin-top: 40px;
        z-index: 2;
    }
    
    #amandaImg {
        width: 48px;
        height: 48px;
        padding-right: 90px;
        z-index: 2;
    }
    
    #amandaProfile {
        width: 48px;
        height: 48px;
        margin-top: 70px;
        z-index: 2;
    }
    
    #retangulos ul {
        font-size: 12pt;
        font-weight: bold;
        padding: 0px;
        margin: 0px;
        list-style: none;
        z-index: 2;
    }
    
    #retangulos ul li {
        display: inline;
        z-index: 2;
    }
    
    #retangulos ul li a {
        padding: 2px 10px;
        display: inline-block;
        text-decoration: none;
        z-index: 2;
    }
    
    #viewMore {
        width: 146px;
        height: 50px;
        margin-top: 50px;
        color: black;
        font-family: sans-serif;
        font-weight: bolder;
        background-color: white;
        border-color: black;
        border-radius: 5px;
        margin-left: 20px;
        z-index: 2;
    }

</style>