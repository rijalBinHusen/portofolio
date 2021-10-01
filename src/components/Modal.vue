<template>
    <!-- <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800"> -->
    <div id="modal" class="bg-white h-full rounded-lg md:w-7/12 fixed">
        <div class="flex m-4 overflow-auto rounded-lg h-full flex-col items-start p-4 bg-blue-300">
            <div class="flex items-center w-full">
                <div class="text-gray-900 font-medium text-4xl font-bold">{{ }}</div>
                <svg
                    class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    @click="$emit('close')"
                >
                    <path
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                </svg>
            </div>
            <hr />
            <div>
                <table class="text-left border-2">
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