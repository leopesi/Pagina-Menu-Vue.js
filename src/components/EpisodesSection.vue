<template>

        <div id="lastEpisodes">
            <nav id="lastEpisodesMenu">
                <h1>Last Episodes</h1>
                <label class="sublinhado">______________________</label>
                <ul>
                    <li><a href="#">ALL</a></li>
                    <li><a href="#">DEVELOPEMENT</a></li>
                    <li><a href="#">DESIGN</a></li>
                    <li><a href="#">PROJECT MANAGEMENT</a></li>
                </ul>
            </nav>
            <nav id="retangulos">
                <ul>
                    <li>
                        
                        <EpisodesSectionIndividual 
                            v-for="item in news"
                            :key="item.id"
                            :epi-title="item.title"
                            :epi-name="item.name"
                            :epi-job= "item.job"
                            :epi-icon= "item.icon"
                            :epi-image= "item.img"
                            :epi-infocon= "item.infocon"
                            :epi-infoprof= "item.infoprof"
                            />
                    
                    </li>              
                </ul>
                <a href=""><button id="viewMore">View More</button></a>

            </nav>

            
            

        </div>



    
</template>

<script>

import EpisodesSectionIndividual from './EpisodesSectionIndividual'
import { mapGetters } from 'vuex'

export default {
    components:{
        EpisodesSectionIndividual
    },    
    computed:{
        ...mapGetters({
            news: 'getNews'
        })
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
    
    #central {
        text-align: center;
        font-size: 18pt;
        font-family: sans-serif;
        width: 100%;
        height: 1440px
    }

#lastEpisodes {
        padding: 0px;
        text-align: center;
        margin: 2em auto;
        width: 100%;
        height: 100%;
    }
    
    #circulo {
        width: 600px;
        height: 600px;
        background-color: #5CD0FE;
        border-radius: 554px;
        z-index: 1;
        margin-top: -15%;
        margin-left: 36%;
    }
    
    #lastEpisodesMenu {
        align-items: center;
        padding-top: 0px;
        z-index: 2;
    }
    
    #lastEpisodesMenu h1 {
        font-size: 50pt;
        font-family: sans-serif;
        font-weight: bold;
        padding-bottom: 0px;
        z-index: 2;
    }
    
    #lastEpisodesMenu ul {
        font-size: 12pt;
        font-weight: bold;
        padding: 0px;
        margin: 0px;
        list-style: none;
        z-index: 2;
    }
    
    #lastEpisodesMenu ul li {
        display: inline;
        z-index: 2;
    }
    
    #lastEpisodesMenu ul li a {
        padding: 2px 10px;
        display: inline-block;
        color: black;
        text-decoration: none;
        z-index: 2;
    }
    
    #lastEpisodesMenu a:link,
    a:visited {
        text-decoration: none;
        z-index: 2;
    }
    
    #lastEpisodesMenu a:hover {
        text-decoration: underline;
        color: black;
        z-index: 2;
    }
    
    #lastEpisodesMenu a:active {
        text-decoration: none
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