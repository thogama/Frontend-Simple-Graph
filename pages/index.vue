<template>
    <div class="m-2 border border-primary gx-5  row ">

        <div class="col-lg-3 bg-secondary p-3">

            <div class="p-3 fs-3 text-white">
                Live connected with binance's websocket
            </div>
            <div class="d-flex justify-content-evenly p-3 fs-5 text-white">


                <font-awesome-icon class="text-primary fs-2" icon="fa-brands fa-node" />
                +
                <font-awesome-icon class="text-primary fs-2" icon="fa-brands fa-vuejs" />
            </div>

            <a class="btn rounded-pill  text-primary " href="https://github.com/thogama">
                by Alan
            </a>

        </div>

        <div class="col-lg-9 ">
            <!-- <BarChart  :colour=(color) :label=(label) :labels=(labels) :data=(data) />  -->
            <LineChart :datasets="datasets" :labels=(labels) />

        </div>
    </div>


</template>

<script setup>
const datasets = [
    {
        label: "Price 1",
        backgroundColor: "#c3dd32",
        data: [20, 10, 50, 15, 50]
    },
    {
        label: "Price 2",
        backgroundColor: "#dd326d",
        data: [10, 5, 25, 7.5, 25]
    },
]
const labels = ["mes2", "mes3", "m32", "mes4", "mes5"]
useHead({
    title: "Chart js"
})
</script>

<style scoped>

</style>