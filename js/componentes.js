Vue.component('button-counter', {
    data: function () {
    },
    template: '<a href="atendimento.html"><button type="submit" class="botao">PRÓXIMO</button></a>'
  })


  new Vue({ el: '#components-proximo' })

  new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=2')
        .then(response => (this.info = response))
    }
  })


