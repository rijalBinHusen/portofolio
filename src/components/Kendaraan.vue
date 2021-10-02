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
                        <span class="mr-2">Outstand: {{ outstand(gdg).length }}</span>
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
                        <div v-if="status" class="block border-2 mt-2 border-opacity-50 rounded-lg">
                            <!-- Label -->
                            <span
                                @click="child = 'outstand'"
                                class="block mt-2 py-3 m-2 bg-white bg-opacity-30"
                            >Outstand: {{ outstand(gdg).length }}</span>
                            <!-- End of Label -->
                            <!-- LIST OF VEHICLES -->
                            <transition name="trans">
                                <div v-if="show == gdg && child == 'outstand'">
                                    <div v-for="vehic in outstandVehicles[gdg]">
                                        <span
                                            @click="getPaper(vehic.nodo, gdg)"
                                            class="block border-2 py-3 m-2 hover:bg-blue-100"
                                        >
                                            {{ vehic.nopol + ' - ' + vehic.type + ' @' + (vehic.position || vehic.location) }}
                                            <!-- {{ vehic }} -->
                                        </span>
                                    </div>
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
        <div
            :class="['text-white fixed bottom-0 right-0 border-2 m-2 hover:bg-blue-100 rounded-lg p-3 bg-opacity-50 bg-black', !status ? 'animate-pulse' : '']"
        >
            <span v-if="!status">Mendapatkan data</span>
            <span @click="getData" v-else>
                <font-awesome-icon class="cursor-pointer" icon="sync" />
            </span>
        </div>
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
            kendaraan: [],
            paper: {},
            gudang: ["GJJB", "GJBC", "GJDP", "GJST", "GJCC", "GJH3"],
            outstandList: [],
            outstandVehicles: {},
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
            let allPaper = this.$store.getters["Paper/allPaper"](gdg)
            let inPosition = this.kendaraan.filter((val) => val.position == gdg)
            let inPositionArr = inPosition.map((val) => val.nodo)
            let result = allPaper.filter((val) => inPositionArr.indexOf(val) < 0)
            this.oustandVeh(result, gdg)
            return result
        },
        // Vehicle outstand
        oustandVeh(arr, gdg) {
            let result = []
            arr.forEach((val) => {
                if (val) {
                    result.push(
                        this.kendaraanId(val)
                    )
                }
            })
            this.outstandVehicles[gdg] = result
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
            return this.kendaraan.filter((val) => val.nodo == id)[0]
        },
        getPaper(id, gdg) {
            this.modal = true
            if (gdg) this.paper = this.$store.getters["Paper/paperId"]({ id: id, gdg: gdg })
            else this.paper = this.$store.getters["Paper/paperId"](id)
        },
        getData() {
            this.show = false
            this.child = false
            this.kendaraan = []
            this.$store.dispatch("Paper/status", false)
            this.$store.dispatch("Kendaraan/kendaraan").then(() => {
                this.kendaraan = this.$store.getters["Kendaraan/kendaraan"]
            })
        },
        filtUndefined(arr) {
            return arr.filter((val) => Boolean(val))
        }
    },
    mounted() {
        this.getData()
    },
    computed: {
        status() {
            return this.$store.getters["Paper/status"]
        }
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