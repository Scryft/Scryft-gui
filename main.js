// Initialize Blockly workspace
const blocklyDiv = document.getElementById('blocklyDiv');

const workspace = Blockly.inject(blocklyDiv, {
    toolbox: getToolbox(),
    theme: Blockly.Themes.Dark,
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3
    },
    trashcan: true,
    maxTrashcanContents: 256
});

// Define toolbox
function getToolbox() {
    return `<xml xmlns="https://developers.google.com/blockly/xml">
        <category name="Logic" categorystyle="logic_category">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
        </category>
        <category name="Loops" categorystyle="loop_category">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
            <block type="controls_flow_statements"></block>
        </category>
        <category name="Variables" categorystyle="variable_category" custom="VARIABLE">
        </category>
        <category name="Text" categorystyle="text_category">
            <block type="text"></block>
            <block type="text_join"></block>
            <block type="text_append"></block>
            <block type="text_length"></block>
        </category>
        <category name="Arithmetic" categorystyle="math_category">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
            <block type="math_number_property"></block>
            <block type="math_round"></block>
        </category>
        <category name="Functions" categorystyle="procedure_category" custom="PROCEDURE">
        </category>
    </xml>`;
}

// Handle window resize to properly resize Blockly
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
});

// Initial resize
setTimeout(() => {
    Blockly.svgResize(workspace);
}, 100);

