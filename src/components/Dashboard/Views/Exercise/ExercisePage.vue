<template>
  <div class="practise">
    <div class="icon-container">
      <span class="ti-help-alt" style="color:#68B3C8" @click="askQuestion()"></span>
    </div>
    <div class="icon-container">
      <span class="ti-heart" @click="saveExercise()" style="color:#EB5E28"></span>
    </div>
    <vue-tabs class="row">
      <v-tab title="תרגיל" icon='ti-pencil-alt'>
        <blockquote style="text-align:left;">
          <p class="text-muted">
          בני גורן עמוד 76
          </p>
        </blockquote>
        <div class="exercise">
          <img :src="exrSrc"></img>
        </div>
      </v-tab>
      <v-tab title="הפתרון שלי" icon='ti-crown'>
        <div class="exercise">
          <div style="text-align:center;">
          <button class="btn btn-primary btn-wd" @click="addSol()">
            <span class="btn-label">
              <i class="ti-light-bulb"></i>
            </span>
          העלה פתרון</button>
          </div>
          <img :src="exrSol"></img>
        </div>
      </v-tab>
      <v-tab title="קהילה" icon='ti-comments'>
        <community></community>
      </v-tab>
  </vue-tabs>
</div>
</template>
<script>
import VueTabs from 'vue-nav-tabs'
import swal from 'sweetalert2'
import Community from './Community'
// Vue.use(VueTabs)

export default {
  data () {
    return {

    }
  },
  components: {
    Community
  },
  computed: {
    exrSrc () {
      return "static/img/Exercises/MeshikAndNigzarot/"+this.exerciseNumber+".png"
    },
    exrSol () {
      return "static/img/solutions/"+this.exerciseNumber+".png"
    }
  },
  props: ['exerciseNumber'],
  methods: {
    saveExercise () {
      // var color = Math.floor((Math.random() * 4) + 1)
      this.$notify(
        {
          component: {
            template: `<span> התרגיל נשמר בהצלחה במועדפים, תוכל לצפות בכל עת בתרגילים השמורים שלך בסרגל הכלים </span>`
          },
          icon: 'ti-pin-alt',
          horizontalAlign: 'center',
          verticalAlign: 'top',
          type: 'success'
        })
    },
    askQuestion() {
      swal({
          title: 'שאל את הקהילה',
          html: '<p class="text-muted"> הקפד לפרט כמה שיותר על השלבים שלך לפתרון ובאיזה חלק עלתה שאלתך כדי שחברך יוכלו לעזור לך בצורה הממוקדת ביותר</p>' +
                '<div class="form-group">' +
                // '<input id="input-field" type="text" class="form-control" />' +
                '<textarea class="form-control" placeholdr="הכנס את שאלתך" rows="5"></textarea>'+
                '<div class="icon-container" style="width:100%">' +
                  '<span class="ti-link" style="color:#EB5E28"></span>' +
                  '<span class="icon-name">צרף קובץ</span>' +
                '</div>'+
                '</div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-wd btn-sm btn-success',
          cancelButtonClass: 'btn btn-wd btn-sm btn-danger',
          buttonsStyling: false,
          confirmButtonText: 'הוסף שאלה',
          cancelButtonText: 'בטל'
        }).then(function (result) {
          swal({
            type: 'success',
            html: 'השאלה נוספה בהצלחה! <p class="text-muted"> שאלתך תוצג בדף הקהילה של תת הנושא וחבריך לכיתה יוכלו להציע רעיונות לפתרון. עקוב אחר הפתרונות המוצעים ובחר את הפתרון שענה בצורה המפורטת ביותר על שאלתך<p>',
            confirmButtonClass: 'btn btn-wd btn-success',
            buttonsStyling: false
          })
        })
      },
      addSol() {
        swal({
            title: 'ענה על השאלה',
            html: '<p class="text-muted"> הקפד לפרט כמה שיותר על הדרך כדי שחבריך יוכלו להתרשם מהפתרון שלך</p>' +
                  '<div class="form-group">' +
                  // '<input id="input-field" type="text" class="form-control" />' +
                  '<textarea class="form-control" placeholdr="הכנס את שאלתך" rows="5"></textarea>'+
                  '<div class="icon-container" style="width:100%">' +
                    '<span class="ti-link" style="color:#EB5E28"></span>' +
                    '<span class="icon-name">צרף קובץ</span>' +
                  '</div>'+
                  '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-wd btn-sm btn-success',
            cancelButtonClass: 'btn btn-wd btn-sm btn-danger',
            buttonsStyling: false,
            confirmButtonText:'העלה פתרון',
            cancelButtonText: 'בטל'
          }).then(function (result) {
            swal({
              type: 'success',
              html: 'הפתרון נוסף בהצלחה! <p class="text-muted">פתרונך יפורסם בקהילה של תת הנושא<p>',
              confirmButtonClass: 'btn btn-wd btn-success',
              buttonsStyling: false
            })
          })
        }
    }
}
</script>
