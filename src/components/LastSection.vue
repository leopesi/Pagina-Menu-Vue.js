<template>
        
    <div>
        <div id="central">

        <div id="next">

            <img id="up" src="../assets/listras.svg" alt="">
            <img id="danny" src="../assets/danny.png" alt="">
            <img id="down" src="../assets/listras.svg" alt="">
            <img id="ovalwhite" src="../assets/ovalwhite.svg" alt="">
            <br>
            <p id="dannyText">Fake Company CTO <br> <label class="sublinhado">__________________________</label> <br>
                <p id="tituloDanny">Danny <br> Baker</p>
           
            <p id="subNext">Next</p>
            <img id="ovalblue" src="../assets/ovalblue.svg" alt="">

            <p id="comingTitle">Coming <br> next</p>
            <p id="comingNextText">Body placeholder for text paragraph. <br> A paragraph is a self-contained unit of <br> text dealing with a particular point or <br> idea is a self-contained unit of text <br> dealing with a particular point or idea.<br>
            </p>


        </div>

    </div>

        
    </div>
        
</template>

<script>
export default {
    
}
</script>

<style scoped>

    template {
        width: 100%;
        height: 100%;
        text-align: center;
        font-family: sans-serif;
    }
    #central {
    margin: 2em auto;
    text-align: center;
    font-size: 18pt;
    font-family: sans-serif;
    width: 5121px;
    height: 700px
}

header {
    position: fixed;
    top: 0;
    left: 0;
}

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
    z-index: 8;
}

#menuLateral {
    color: white;
    left: -1440px;
    font-family: sans-serif;
    text-align: center;
    background-color: black;
    width: 1393px;
    height: 768px;
    position: absolute;
    transition: all .2s linear;
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

#circulo {
    position: absolute;
    width: 554px;
    height: 554px;
    background-color: #5CD0FE;
    border-radius: 554px;
    z-index: 1;
}

#lastEpisodesMenu {
    position: absolute;
    margin-left: 400px;
    padding-top: 0px;
    z-index: 2;
}

#lastEpisodesMenu h1 {
    font-size: 50pt;
    font-family: sans-serif;
    font-weight: bold;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

#lastEpisodesMenu ul {
    font-size: 12pt;
    font-weight: bold;
    padding: 0px;
    margin: 0px;
    list-style: none;
}

#lastEpisodesMenu ul li {
    display: inline;
}

#lastEpisodesMenu ul li a {
    padding: 2px 10px;
    display: inline-block;
    color: black;
    text-decoration: none;
}

#lastEpisodesMenu a:link,
a:visited {
    text-decoration: none
}

#lastEpisodesMenu a:hover {
    text-decoration: underline;
    color: black;
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
}

.retangulo h5 {
    font-size: 20pt;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: lighter;
}

.retangulo p {
    margin-top: -40px;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 0px;
    font-size: 15pt;
}

.retangulo #job {
    font-size: 10pt;
    color: #777777;
    padding-top: 2px;
    padding-bottom: 0px;
    font-family: sans-serif;
}

#retangulos {
    position: absolute;
    margin-top: 262px;
    margin-left: 62px;
    z-index: 2;
}

#retangulos #play {
    width: 48px;
    height: 48px;
    padding-right: 90px;
    margin-top: 100px;
}

#retangulos #profile {
    width: 48px;
    height: 48px;
}

#derrickImg {
    width: 48px;
    height: 48px;
    margin-top: 40px;
    padding-right: 90px;
}

#derrickProfile {
    width: 48px;
    height: 48px;
    margin-top: 40px;
}

#amandaImg {
    width: 48px;
    height: 48px;
    padding-right: 90px;
}

#amandaProfile {
    width: 48px;
    height: 48px;
    margin-top: 70px;
}

#retangulos ul {
    font-size: 12pt;
    font-weight: bold;
    padding: 0px;
    margin: 0px;
    list-style: none;
}

#retangulos ul li {
    display: inline;
}

#retangulos ul li a {
    padding: 2px 10px;
    display: inline-block;
    text-decoration: none;
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
}

#atsBackground {
    width: 100%;
    height: 100%;
    background-color: #262626;
}

#atsBackground h1 {
    position: absolute;
    font-family: sans-serif;
    font-size: 130pt;
    text-align: left;
    z-index: 2;
    margin-bottom: -430px;
    margin-left: 150px;
    color: #6D6D6D;
    opacity: 0.9;
}

#atsBackground h2 {
    font-family: sans-serif;
    font-size: 40pt;
    position: absolute;
    margin-top: 210px;
    margin-left: 180px;
    text-align: left;
    color: white;
    z-index: 3;
}

#atsBackground p {
    color: white;
    text-align: left;
    position: absolute;
    font-family: sans-serif;
    font-size: 15pt;
    position: absolute;
    margin-top: 300px;
    margin-left: 180px;
    z-index: 3;
}

#imgAbout {
    opacity: 0.1;
    float: left;
    z-index: 1;
}

#pictureAbout {
    width: 488px;
    height: 652px;
    float: right;
}

#next {
    
    width: 100%;
    height: 100%;
}

#dannyText {
    margin-top: 500px;
    text-align: left;
    z-index: 7;
    position: absolute;
    margin-left: 20px;
    padding-bottom: 0px;
    font-size: 15pt;
}

#next #tituloDanny {
    margin-top: 550px;
    text-align: left;
    font-size: 50pt;
    font-weight: bolder;
    z-index: 7;
    position: absolute;
    margin-left: 20px;
}

#danny {
    position: relative;
    width: 553px;
    height: 691px;
    float: left;
    z-index: 3;
}

#ovalwhite {
    position: absolute;
    width: 510px;
    height: 342px;
    float: left;
    margin-left: -2900px;
    margin-top: 450px;
    z-index: 4;
}

#ovalblue {
    width: 727px;
    height: 602px;
    margin-top: -450px;
    z-index: 2;
    margin-left: -110px;
    float: left;
}

#up {
    width: 469px;
    height: 185px;
    z-index: 5;
    margin-top: 130px;
    margin-left: -2370px;
    float: left;
    position: absolute;
}

#down {
    width: 469px;
    height: 185px;
    z-index: 5;
    margin-top: 500px;
    margin-left: -2600px;
    float: left;
    position: absolute;
}

#comingTitle {
    text-align: left;
    margin-left: 600px;
    margin-top: -250px;
    font-size: 50pt;
    font-weight: bold;
    z-index: 7;
    position: absolute;
}

#comingNextText {
    text-align: left;
    z-index: 7;
    position: absolute;
    font-size: 15pt;
    margin-top: -100px;
    margin-left: 600px;
}

#subNext {
    color: white;
    text-align: left;
    z-index: 1;
    opacity: 0.5;
    font-size: 100pt;
    padding: 0px;
    font-weight: bolder;
}

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

footer {
    font-family: sans-serif;
    width: 5121px;
    height: 400px;
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

#menu:checked~#menuLateral {
    transform: translateX(100%)
}
</style>