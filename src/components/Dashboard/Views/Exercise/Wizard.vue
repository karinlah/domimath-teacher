<template>
  <div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="card card-wizard" id="wizardCard">
          <form-wizard @on-complete="wizardComplete"
                       :start-index="1"
                       title='תרגול'
                       subtitle='טכניקה של נגזרות ושימושי משיק'
                       color="#e67e22">
            <!-- <tab-content title="1"
                         :before-change="validateFirstStep"
                         icon="ti-star"> -->
              <!-- <first-step ref="firstStep"></first-step> -->
            <!-- </tab-content> -->

            <tab-content title="1"
                         icon="ti-star">
                         <exercise-page :exerciseNumber="1"></exercise-page>
            </tab-content>
            <tab-content title="2"
                         icon="ti-star">
                         <exercise-page :exerciseNumber="2"></exercise-page>
            </tab-content>
            <tab-content title="3"
                         icon="ti-star">
                         <exercise-page :exerciseNumber="3"></exercise-page>
            </tab-content>
            <tab-content title="4"
                         icon="ti-star">
                         <exercise-page :exerciseNumber="4"></exercise-page>
            </tab-content>
            <tab-content title="5"
                         icon="ti-check">
                         <exercise-page :exerciseNumber="5"></exercise-page>
            </tab-content>
            <!-- <tab-content title="Last step"
                         icon="ti-check">
              <h2 class="text-center text-space">Yuhuuu!
                <br>
                <small>Click on "<b>Finish</b>" to join our community</small>
              </h2>
            </tab-content> -->

            <button slot="prev" class="btn btn-wd btn-default btn-fill btn-move-left">
              <span class="btn-label">
                <i class="ti-angle-left"></i>
              </span> שלב קודם
             </button>
            <button slot="next" class="btn btn-wd btn-default btn-fill btn-move-right"> שלב הבא
              <span class="btn-label">
                <i class="ti-angle-right"></i>
              </span>
            </button>
            <button slot="finish" class="btn btn-info btn-fill btn-wd"> סיים</button>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import ExercisePage from './ExercisePage.vue'
  import swal from 'sweetalert2'


  export default {
    data () {
      return {
        wizardModel: {}
      }
    },
    components: {
      FormWizard,
      TabContent,
      ExercisePage
    },
    methods: {
      validateFirstStep () {
        return true
        // return this.$refs.firstStep.validate()
      },
      validateSecondStep () {
        return true
        // return this.$refs.secondStep.validate()
      },
      wizardComplete () {
        // we gather models from all steps into one model
        // this.wizardModel = {
        //   ...this.$refs.firstStep.model,
        //   ...this.$refs.secondStep.model
        // }
        swal('Good job!', 'You clicked the finish button!', 'success')
        console.log('finish')
      }
    }
  }
</script>
<style>
  .vue-form-wizard .wizard-icon-circle.tab_shape {
    background-color: #9A9A9A !important;
    color: white;
  }
</style>
