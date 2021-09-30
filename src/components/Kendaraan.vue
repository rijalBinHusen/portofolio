<template>
    <div class="grid text-center h-full md:w-7/12 md:m-auto">
        <h1 class="text-3xl my-8">Daftar kendaraan</h1>
        <div v-if="kendaraan.hasOwnProperty('GJJBN')">
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
                            <b>{{ kendaraan.progress[gdg] }}</b>
                        </span>
                        <span class="mr-2">
                            Queue:
                            <b>{{ kendaraan.queue[gdg] }}</b>
                        </span>
                        <span class="mr-2">Outsand: 9</span>
                    </span>
                </div>
                <transition name="trans">
                    <div v-if="show === gdg" class="w-auto md:mx-5">
                        <!-- Progress -->
                        <div class="block border-2 mt-2 border-opacity-50 rounded-lg">
                            <span
                                @click="child = 'progress'"
                                class="block mt-2 py-3 m-2 bg-white bg-opacity-30"
                            >Progress: {{ kendaraan.progress[gdg] }}</span>
                            <!-- List of vehicles -->
                            <transition name="trans">
                                <div v-if="show === gdg && child === 'progress'">
                                    <div v-for="prog in kendaraan[gdg]">
                                        <span
                                            class="block border-2 py-3 m-2"
                                            v-if="prog.flag == 2"
                                        >{{ prog.nopol + ' - ' + prog.nodo }}</span>
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
                            >Queue: {{ kendaraan.queue[gdg] }}</span>
                            <!-- LIST OF VEHICLES -->
                            <transition name="trans">
                                <div v-if="show === gdg && child === 'queue'">
                                    <div v-for="prog in kendaraan[gdg]">
                                        <span
                                            class="block border-2 py-3 m-2"
                                            v-if="prog.flag == 1"
                                        >{{ prog.nopol + ' - ' + prog.nodo }}</span>
                                    </div>
                                </div>
                            </transition>
                            <!-- END OF LIST VEHICLES -->
                        </div>
                        <!-- End of queue -->
                        <div class="block border-t-2 mt-2 border-opacity-50">Outstand: 9</div>
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
        }
    },
    mounted() {
        this.$store.dispatch("Kendaraan/kendaraan").then(() => {
            this.kendaraan = this.$store.getters["Kendaraan/kendaraan"]
        })
    },
    // computed: {
    //     kendaraan() {
    //         return this.$store.getters["Kendaraan/kendaraan"]
    //     }
    // },
}
</script>

<style scoped>
.trans-enter-active,
.trans-leave-active {
    transition: opacity 1s ease;
}

.trans-enter-from,
.trans-leave-to {
    opacity: 0;
}
</style>