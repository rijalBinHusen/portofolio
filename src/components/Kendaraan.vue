<template>
    <div class="grid text-center h-full md:w-7/12 md:m-auto">
        <h1 class="text-3xl my-8">Daftar kendaraan</h1>
        <div v-if="kendaraan.length > 0">
            <div
                class="text-white mb-2 text-center text-sm md:text-xl px-4 py-4 border rounded-lg bg-opacity-50 bg-black cursor-pointer w-auto mx-5"
                v-for="gdg in gudang"
                :key="gdg"
            >
                <div @click="toggle(gdg)">
                    <span class="mr-2 font-bold">{{ gdg }}</span>
                    <span v-if="show !== gdg">
                        <span class="mr-2">
                            | Load:
                            <b>{{ progress(gdg).length }}</b>
                        </span>
                        <span class="mr-2">
                            Queue:
                            <b>{{ queue(gdg).length }}</b>
                        </span>
                        <span class="mr-2">Outsand: {{ outstand(gdg).length }}</span>
                    </span>
                </div>
                <transition name="trans">
                    <div v-if="show === gdg" class="w-auto md:mx-5">
                        <!-- Progress -->
                        <div class="block border-2 mt-2 border-opacity-50 rounded-lg">
                            <span
                                @click="child = 'progress'"
                                class="block mt-2 py-3 m-2 bg-white bg-opacity-30"
                            >Progress: {{ progress(gdg).length }}</span>
                            <!-- List of vehicles -->
                            <transition name="trans">
                                <div v-if="show === gdg && child === 'progress'">
                                    <div v-for="prog in progress(gdg)">
                                        <span
                                            class="block border-2 py-3 m-2 hover:bg-blue-100"
                                            @click="getPaper(prog.nodo)"
                                        >{{ prog.nopol + ' - ' + prog.type }}</span>
                                    </div>
                                </div>
                            </transition>
                            <!-- End of List of vehicles -->
                        </div>
                        <!-- End of progress -->

                        <!-- Queue -->
                        <div class="block border-2 mt-2 border-opacity-50 rounded-lg">
                            <span
                                @click="child = 'queue'"
                                class="block mt-2 py-3 m-2 bg-white bg-opacity-30"
                            >Queue: {{ queue(gdg).length }}</span>
                            <!-- LIST OF VEHICLES -->
                            <transition name="trans">
                                <div v-if="show === gdg && child === 'queue'">
                                    <div v-for="que in queue(gdg)">
                                        <span
                                            class="block border-2 py-3 m-2 hover:bg-blue-100"
                                            @click="getPaper(que.nodo)"
                                        >{{ que.nopol + ' - ' + que.type }}</span>
                                    </div>
                                </div>
                            </transition>
                            <!-- END OF LIST VEHICLES -->
                        </div>
                        <!-- End of queue -->

                        <!-- Outstand -->
                        <div class="block border-2 mt-2 border-opacity-50 rounded-lg">
                            <!-- Label -->
                            <span
                                @click="child = 'outstand'"
                                class="block mt-2 py-3 m-2 bg-white bg-opacity-30"
                            >Outstand: {{ outstand(gdg).length }}</span>
                            <!-- Label -->
                            <!-- LIST OF VEHICLES -->
                            <transition name="trans">
                                <div v-if="show == gdg && child == 'outstand'">
                                    <div v-for="veh in oustandVeh(outstand(gdg))">
                                        <span
                                            @click="getPaper(veh[0].nodo)"
                                            class="block border-2 py-3 m-2 hover:bg-blue-100"
                                        >
                                            {{ veh[0].nopol + ' - ' + veh[0].type + ' @' + veh[0].position }}
                                            <!-- {{ veh }} -->
                                        </span>
                                    </div>
                                    <!-- <span v-for="n in kendaraan[gdg]">{{ n.nopol }}</span> -->
                                </div>
                            </transition>
                            <!-- END OF LIST VEHICLES -->
                        </div>
                        <!-- End of outstand -->
                    </div>
                </transition>
            </div>
        </div>
        <Skeleton v-else :rows="6" />
        <transition name="trans">
            <Modal v-if="modal" :paper="paper" @close="modal = false" />
        </transition>
    </div>
</template>

<script>
import Skeleton from "./SkeletonLoading.vue"
import Modal from "./Modal.vue"
export default {
    name: "Kendaraan",
    components: {
        Skeleton,
        Modal
    },
    data() {
        return {
            modal: false,
            show: false,
            child: false,
            kendaraan: {},
            paper: {},
            gudang: ["GJJB", "GJBC", "GJDP", "GJST", "GJCC", "GJH3"]
        }
    },
    methods: {
        // toggle hide show
        toggle(gdg) {
            if (this.show == gdg) this.show = false
            else this.show = gdg
            this.child = false
        },
        // Vehicles outstand
        outstand(gdg) {
            let status = this.$store.getters["Paper/status"]
            if (status) {
                let allPaper = this.$store.getters["Paper/allPaper"](gdg)
                let inPosition = this.queue(gdg).concat(this.progress(gdg))
                let inPositionArr = inPosition.map((val) => val.nodo)
                return allPaper.filter((val) => inPositionArr.indexOf(val) < 0)
            }
            return "..."
        },
        // Vehicle outstand
        oustandVeh(arr) {
            let result = []
            arr.forEach((val) => {
                result.push(
                    this.kendaraanId(val)
                )
            })
            return result
        },
        // Vehicle progress
        progress(gdg) {
            return this.kendaraan.filter((val) => val.position == gdg && val.flag == 2)
        },
        // Vehicle queue
        queue(gdg) {
            return this.kendaraan.filter((val) => val.position == gdg && val.flag == 1)
        },
        kendaraanId(id) {
            return this.kendaraan.filter((val) => val.nodo == id)
        },
        getPaper(id) {
            this.modal = true
            this.paper = this.$store.getters["Paper/paperId"](id)
        }
    },
    mounted() {
        this.$store.dispatch("Kendaraan/kendaraan").then(() => {
            this.kendaraan = this.$store.getters["Kendaraan/kendaraan"]
        })
    },
    computed: {

    },
}
</script>

<style scoped>
.trans-enter-active,
.trans-leave-a .trans-enter-active,
.trans-leave-active {
    transition: opacity 1s ease;
}

.trans-enter-from,
.trans-leave-to {
    opacity: 0;
}
</style>