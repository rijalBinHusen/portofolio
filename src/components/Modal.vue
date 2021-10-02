<template>
    <!-- <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800"> -->
    <div id="modal" class="bg-white h-full rounded-lg md:w-7/12 fixed">
        <div class="flex m-4 overflow-auto rounded-lg h-full flex-col items-start p-4 bg-blue-300">
            <div class="text-right w-full mb-2">
                <font-awesome-icon
                    class="text-2xl cursor-pointer"
                    @click="$emit('close')"
                    icon="times"
                />
            </div>
            <hr />
            <div>
                <table class="text-left border-2 md:text-xl text-xs">
                    <thead>
                        <tr>
                            <th class="border-2 p-2">No</th>
                            <th class="border-2 p-2">Item</th>
                            <th class="border-2 p-2">Qty</th>
                            <th class="border-2 p-2">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pap in paper">
                            <td class="border-2 p-2">{{ pap.no }}</td>
                            <td class="border-2 p-2">{{ pap.item }}</td>
                            <td class="border-2 p-2">{{ pap.qty }}</td>
                            <td class="border-2 p-2">{{ pap.location }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        paper: {
            required: true,
            type: Object
        }
    }
}
</script>