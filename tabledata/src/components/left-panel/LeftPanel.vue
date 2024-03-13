<template>
    <div class="hello">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">

                <button class="btn btn-success crossButton" @click="removeSelectedData">X</button>

            </div>
            <div class="card-body text-dark">
                <h5 class="card-title float-left">
                    {{ selectedData.name }}
                </h5>

            </div>
            <div class="card-text">{{ selectedData.description
                }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftPanel',
    props: {
        selectedData: Object,
        removeSelectedData: {
            type: Function,
            required: true
        }
    }

}
</script>

<style>
.crossButton {
    float: right;
}
</style>
