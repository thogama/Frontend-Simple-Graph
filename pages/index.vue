<script lang="ts" setup>

const state = useState("state", () => [
    {
        label: "Price 1",
        backgroundColor: "#c3dd32",
        data: []
    },
    
])

const ws = new WebSocket("ws://localhost:3333")
ws.addEventListener("open", () => {
    console.log("i have a connection bro")
})
ws.addEventListener("message", async (event) => {
    //  console.log(JSON.parse(event['data']))
    console.log(JSON.parse(event['data']))
    //  console.log(state.value[0].data = event.data)
    state.value[0].data = JSON.parse(event['data'])

})
useHead({
    title: "Chart js"
})
</script>
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
            <LineChart ref="line" :datasets="state" :labels=([1,2,3,4,5]) />

        </div>
    </div>

</template>
 
<style scoped>

</style>