<template>
<login-form-component />
</template>

<script lang="ts" setup>


import LoginFormComponent from "@/components/LoginComponent/LoginFormComponent/LoginFormComponent.vue";
// const LoginFormComponent = () => import('../../components/LoginComponent/LoginFormComponent/LoginFormComponent.vue')

const rules = {
  ruleEmail: [
    (v: any) => !!v || 'Emails is requred',
    (v: any) => /.+@.+\..+/.test(v) || 'Email must be correct'
  ],
  rulePassword: [
    (v: any) => !!v || 'Password is requred',
    (v: any) => (v && v.length > 7) || 'Password must contain at least 8 characters '
  ]
}


</script>


<style scoped>

</style>
