<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="700px" :symbolHeight="80" :symbolWidth="80"
            :expandMode="expandMode" :palettes="palettes" :getSymbolInfo="getSymbolInfo" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

// Data properties
const expandMode = ref('Multiple');
const palettes = ref([
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
]);

// Functions
function getBasicShapes() {
    return [
        {
            id: 'Rectangle',
            width: 200,
            shape: { type: 'Basic', shape: 'Rectangle' },
        },
        {
            id: 'Ellipse',
            width: 200,
            shape: { type: 'Basic', shape: 'Ellipse' },
        },
        {
            id: 'Hexagon',
            width: 200,
            shape: { type: 'Basic', shape: 'Hexagon' },
        },
    ];
}

function getSymbolInfo() {
    // Enables to fit the content into the specified palette item size
    return { fit: true };
}
// When it is set as false, the element is rendered with actual node size
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>