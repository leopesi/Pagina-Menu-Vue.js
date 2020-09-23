<template>

    
        
    <footer>
        <div>
            <nav id="rodape">
            <p>_______________________________</p> <br> <br> <br>
            <img src="../assets/Group_31.svg" alt=""> <br>

            <label class="sublinhado">_________________</label>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">EPISODES</a></li>
                <li><a href="#">THE SHOW</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
        <br> <br> <br> <br>
        <p>2020 Valtech All rights reserved</p>
        </div>
        
    </footer>
        
</template>

<script>
export default {
    
}
</script>

<style scoped> 
    

    
    footer {
        text-align: center;
        font-size: 18pt;
        font-family: sans-serif;
        width: 100%;
        height: 1440px
    }
    
    header {
        position: fixed;
        top: 0;
        left: 0;
    }
    /* Home */
    
    #home {
        margin-top: 240px;
    }
    
    #listen {
        font-size: 12pt;
        width: 186px;
        height: 60px;
        color: white;
        background-color: black;
        margin-bottom: 100px;
    }
    /*                                         Last Episodes            */
    
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
    /*                                            About the show */
    
    #atsBackground {
        width: 100%;
        height: 100%;
        background-color: #262626;
        text-align: center;
    }
    
    #aboutTheText {
        padding: 0%;
        z-index: 3;
        text-align: left;
        width: 772px;
        height: 468px;
        margin-top: -13%;
        margin-left: 37%;
    }
    
    #aboutTheText h2 {
        position: absolute;
        font-family: sans-serif;
        font-size: 130pt;
        color: #6D6D6D;
        opacity: 0.2;
        z-index: 1;
        line-height: 100%;
    }
    
    #aboutTheText h3 {
        position: absolute;
        margin-top: 15%;
        color: white;
        font-size: 30pt;
        z-index: 2;
    }
    
    #aboutTheText p {
        color: white;
        font-size: 15pt;
        font-weight: bold;
        z-index: 2;
    }
    
    #imgAbout {
        opacity: 0.1;
        z-index: 1;
    }
    
    #pictureAbout {
        width: 488px;
        height: 652px;
        padding-left: 10%;
    }
    /*                                    Next coming */
    
    #next {
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    
    #dannyText {
        margin-top: 45%;
        z-index: 2;
        position: absolute;
        margin-left: 187%;
        padding-left: 0%;
        font-size: 20pt;
        font-weight: bolder;
        line-height: 50%;
    }
    
    #next #tituloDanny {
        line-height: 110%;
        margin-top: 49%;
        font-size: 50pt;
        font-weight: bolder;
        z-index: 2;
        position: absolute;
        margin-left: 190%;
        padding-left: 0%;
    }
    
    #danny {
        margin-top: 10%;
        position: absolute;
        width: 553px;
        height: 691px;
        z-index: 2;
    }
    
    #ovalwhite {
        position: absolute;
        width: 510px;
        height: 342px;
        margin-top: 41%;
        margin-left: -5%;
        z-index: 2;
        padding: 0%;
    }
    
    #ovalblue {
        position: relative;
        width: 727px;
        height: 602px;
        margin-top: 2%;
        margin-left: 31%;
        z-index: 1;
        padding-left: 0%;
    }
    
    #up {
        width: 469px;
        height: 185px;
        z-index: 3;
        margin-top: 20%;
        margin-left: 25%;
        position: absolute;
        padding-left: 0%;
    }
    
    #down {
        width: 469px;
        height: 185px;
        z-index: 3;
        margin-top: 50%;
        margin-left: 10%;
        position: absolute;
    }
    
    #comingTitle {
        text-align: left;
        line-height: 60%;
        margin-left: 235%;
        margin-top: -32%;
        font-size: 55pt;
        font-weight: bolder;
        z-index: 4;
        position: absolute;
        padding-left: 0%;
    }
    
    #subNext {
        color: white;
        position: absolute;
        z-index: 4;
        opacity: 0.5;
        font-size: 130pt;
        padding-left: 0%;
        font-weight: bolder;
        margin-left: 235%;
        margin-top: 17%;
    }
    
    #comingNextText {
        width: 350px;
        height: 150px;
        position: absolute;
        text-align: left;
        margin-left: 235%;
        margin-top: -20%;
        padding-left: 0%;
        z-index: 2;
        font-size: 16pt;
    }
    /*                  Subscribe */
    
    #subscribe {
        width: 100%;
        height: 100%;
        background-color: #262626;
        text-align: center;
    }
    
    #subscribe input {
        width: 256px;
        height: 60px;
        padding: 0px;
    }
    
    #subscribe img {
        width: 40px;
        height: 40px;
        padding: 0px;
        margin-bottom: -15px;
    }
    
    #subscribe button {
        width: 130px;
        height: 60px;
        padding-left: 0px;
        background-color: #5CD0FE;
    }
    
    #subscribe p {
        color: white;
    }
    
    #subSubscribe {
        margin-bottom: -150px;
        color: white;
        font-size: 100pt;
        opacity: 0.2;
        z-index: 1;
    }
    
    #subscribe h2 {
        color: white;
        font-size: 50pt;
        padding-bottom: 0px;
        z-index: 2;
        position: relative;
    }
    /* Footer */
    
    footer {
        font-family: sans-serif;

        height: 100%;
        text-align: center;
        background-color: #262626;
        margin-top: -50px;
        padding-top: 0px;
    }
    
    footer p {
        color: white;
        font-size: 10pt;
        
    }
    
    footer ul {
        font-size: 12pt;
        font-weight: bold;
        padding: 0px;
        margin: 0px;
        list-style: none;
    }
    
    footer ul li {
        display: inline;
    }
    
    footer ul li a {
        padding: 10px 10px;
        display: inline-block;
        color: white;
        text-decoration: none;
    }
    /*                       Menu lateral              */
    
    #menu {
        display: none;
    }
    
    .sublinhado {
        padding-top: 0px;
        color: #5CD0FE;
        font-weight: bolder;
    }
    
    #iconeMenu {
        width: 40px;
        height: 40px;
        cursor: pointer;
        padding: 15px;
        position: absolute;
        z-index: 6;
    }
    
    #menuLateral {
        color: white;
        left: -1440px;
        font-family: sans-serif;
        text-align: center;
        background-color: black;
        width: 1440px;
        height: 5121px;
        transition: all .3s linear;
        position: absolute;
    }
    
    #menuLateral nav {
        width: 100%;
        position: absolute;
        top: 100px;
    }
    
    #menuLateral nav a {
        text-decoration: none;
        font-weight: bold;
    }
    
    .link {
        background-color: black;
        padding: 20px;
        font-family: 'Arial';
        font-size: 12pt;
        transition: all .2s linear;
        color: #f4f4f9;
    }
    
    #menu:checked~#menuLateral {
        transform: translateX(100%)
    }
    /* Media query */
    
    @media (max-width: 600px) {
        body {
            display: flex;
            text-align: center;
            width: 315px;
            margin: 0 auto;
            padding: 0%;
        }
        header {
            width: 319px;
            margin: 0%;
            padding: 0%;
            top: 0;
            left: 0;
            float: left;
        }
        #iconeMenu {
            margin-left: -170px;
        }
        #menuLateral {
            color: white;
            left: -320px;
            font-family: sans-serif;
            text-align: center;
            background-color: black;
            width: 320px;
            height: 480px;
            transition: all .3s linear;
            position: absolute;
        }
        #listen {
            width: 154px;
            height: 50px;
        }
        #home {
            width: 320px;
        }
        #home img {
            width: 176px;
            height: 36px;
            margin: 0%;
            padding: 0%;
        }
        #home h1 {
            text-align: center;
            font-size: 22pt;
            font-weight: lighter;
        }
        /*Last Episodes */
        #circulo {
            display: none;
        }
        #lastEpisodes h1 {
            text-align: left;
            width: 207px;
            height: 91px;
        }
        #lastEpisodes #sublinhado {
            width: 140px;
            height: 02px;
        }
        #lastEpisodesMenu ul {
            display: none;
        }
        .retangulo {
            padding: 10px 0 0 0px;
            width: 230px;
            height: 282px;
            justify-content: center;
        }
        .retangulo img {
            display: none;
        }
        #viewMore {
            width: 240px;
            height: 50px;
            padding-top: 20px;
            border: none;
            background-color: #5CD0FE;
            text-decoration: none;
            display: flex;
            margin: 0 auto;
        }
        #viewMore a {
            color: black;
            text-decoration: none;
            font-size: 14pt;
            display: flex;
            margin: 0 auto;
        }
        /* About the show */
        #imgAbout {
            display: none;
        }
        #atsBackground {
            width: 320px;
        }
        #aboutTheText {
            width: 320px;
        }
        #atsBackground h2 {
            width: 300px;
            font-size: 50pt;
            margin-top: -500px;
            margin-left: -100px;
            display: flex;
        }
        #atsBackground h3 {
            width: 300px;
            font-size: 30pt;
            margin-top: -450px;
            margin-left: -110px;
            display: flex;
        }
        #pictureAbout {
            display: flex;
            width: 240px;
            height: 300px;
            margin-top: 300px;
            padding: 0 auto;
        }
    }
</style>