import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        news: [{
            id: 1,
            title: 'DATA STRUCTURES',
            name: 'Jaqueline Cardoso',
            job: 'Front - end Dev Leader',
            icon: 'play_icon.svg',
            img: 'pessoa_data.png',
            infocon: 'An incon to play',
            infoprof: 'It is a Jaqueline image'
  
        },
        {
            id: 2,
            title: 'TECH TO WATCH IN 2020',
            name: 'João Olivio',
            job: 'Front - end Dev Leader',
            icon: 'play_icon.svg',
            img: 'joao_icone.png',
            infocon: 'An incon to play',
            infoprof: 'It is a João Olivio image'
        },
        {
            id: 3,
            title: 'HOW TO GET BETTER',
            name: 'Derrick Pierce',
            job: 'Front - end Dev Leader',
            icon: 'play_icon.svg',
            img: 'derrick_icone.png',
            infocon: 'An incon to play',
            infoprof: 'It is a Derrick image'
        },
        {
            id: 4,
            title: 'NEW CSS LOGICAL ',
            name: 'Amanda Poole',
            job: 'Front - end Dev Leader',
            icon: 'play_icon.svg',
            img: 'amanda_icone.png',
            infocon: 'An incon to play',
            infoprof: 'It is an Amanda image'
        }
        ]
    
    },  
    getters:{
        getNews(state){
            return state.news;
        }

    }
    
})