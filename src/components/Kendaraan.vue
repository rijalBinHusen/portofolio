<template>
    <div class="grid text-center h-full md:w-7/12 md:m-auto">
        <h1 class="text-3xl my-8">Daftar kendaraan</h1>
        <div v-if="kendaraan.hasOwnProperty('GJJB')">
            <div
                class="text-white mb-2 text-center text-sm md:text-xl px-4 py-4 border rounded-lg bg-opacity-50 bg-black cursor-pointer w-auto mx-5"
                v-for="gdg in Object.keys(kendaraan).slice(0, 6)"
                :key="gdg"
            >
                <div @click="toggle(gdg)">
                    <span class="mr-2 font-bold">{{ gdg }}</span>
                    <span v-if="show !== gdg">
                        <span class="mr-2">
                            | Load:
                            <b>{{ kendaraan.progress[gdg].length.length }}</b>
                        </span>
                        <span class="mr-2">
                            Queue:
                            <b>{{ kendaraan.queue[gdg].length }}</b>
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
                            >Progress: {{ kendaraan.progress[gdg].length }}</span>
                            <!-- List of vehicles -->
                            <transition name="trans">
                                <div v-if="show === gdg && child === 'progress'">
                                    <div v-for="prog in kendaraan[gdg]">
                                        <span
                                            class="block border-2 py-3 m-2"
                                            v-if="prog.flag == 2"
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
                            >Queue: {{ kendaraan.queue[gdg].length }}</span>
                            <!-- LIST OF VEHICLES -->
                            <transition name="trans">
                                <div v-if="show === gdg && child === 'queue'">
                                    <div v-for="que in kendaraan[gdg]">
                                        <span
                                            class="block border-2 py-3 m-2"
                                            v-if="que.flag == 1"
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
                                        <span class="block border-2 py-3 m-2">
                                            {{ veh[0].nopol + ' - ' + veh[0].type }}
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
    </div>
</template>

<script>
import Skeleton from "./SkeletonLoading.vue"
export default {
    name: "Kendaraan",
    components: {
        Skeleton
    },
    data() {
        return {
            show: false,
            child: false,
            kendaraan: {},
        }
    },
    methods: {
        toggle(gdg) {
            if (this.show == gdg) this.show = false
            else this.show = gdg
            this.child = false
            // console.log(this.outstand('GJJB'))
        },
        outstand(gdg) {
            let status = this.$store.getters["Paper/status"]
            if (status) {
                let allPaper = this.$store.getters["Paper/allPaper"](gdg)
                let inPosition = this.kendaraan.queue[gdg].concat(this.kendaraan.progress[gdg])
                return allPaper.filter((val) => inPosition.indexOf(val) < 0)
            }
            return "..."
        },
        oustandVeh(arr) {
            let result = []
            arr.forEach((val) => {
                result.push(
                    this.$store.getters["Kendaraan/kendaraanId"](val)
                )
            })
            return result
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