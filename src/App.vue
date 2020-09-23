<template>
  <div id="app">

    
    <PodcastSection />
    <EpisodesSection />
    <AboutSection />
    <LastSection />
    <Footer />

    
  </div>
</template>

<script>

  import PodcastSection from './components/PodcastSection'
  import EpisodesSection from './components/EpisodesSection'
  import AboutSection from './components/AboutSection'
  import LastSection from './components/LastSection'
  import Footer from './components/Footer'

  
export default {
  name: 'App',
  components: {
    
    PodcastSection,
    EpisodesSection,
    AboutSection,
    LastSection,
    Footer,

  },
  data() {
    return {
      championship: 'Campeonato Brasileiro',
      show: true,
    }
  },
  methods: {
    changeChampionship(value) {

      this.championship = value;

    }
  }
}
</script>

<style>



</style>
