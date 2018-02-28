<template>

</template>

<script>
    export default {
        props:{
            title: {
                type: String,
                default: 'side'
            }
        }
    }
</script>


        type: String,
        default: 'sidebar',
        validator: (value) => {
        let acceptedValues = ['sidebar', 'navbar']
            return acceptedValues.indexOf(value) !== -1
        }
