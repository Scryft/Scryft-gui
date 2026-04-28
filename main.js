// theme stuff
const scryftBlocks = Blockly.Theme.defineTheme('scryftBlocks', {
    base: Blockly.Themes.Dark,

    blockStyles: {
        logic_blocks: {
            colourPrimary: '#ff6b6b',
            colourSecondary: '#ff8787',
            colourTertiary: '#c92a2a'
        },
        loop_blocks: {
            colourPrimary: '#f59e0b',
            colourSecondary: '#fbbf24',
            colourTertiary: '#b45309'
        },
        math_blocks: {
            colourPrimary: '#22c55e',
            colourSecondary: '#4ade80',
            colourTertiary: '#15803d'
        },
        text_blocks: {
            colourPrimary: '#a855f7',
            colourSecondary: '#c084fc',
            colourTertiary: '#6b21a8'
        },
        variable_blocks: {
            colourPrimary: '#06b6d4',
            colourSecondary: '#22d3ee',
            colourTertiary: '#0e7490'
        },
        procedure_blocks: {
            colourPrimary: '#6366f1',
            colourSecondary: '#818cf8',
            colourTertiary: '#4338ca'
        }
    },

    categoryStyles: {
        logic_category: { colour: '#ff6b6b' },
        loop_category: { colour: '#f59e0b' },
        math_category: { colour: '#22c55e' },
        text_category: { colour: '#a855f7' },
        variable_category: { colour: '#06b6d4' },
        procedure_category: { colour: '#6366f1' }
    }
});

const blocklyDiv = document.getElementById('blocklyDiv');

const workspace = Blockly.inject(blocklyDiv, {
    toolbox: getToolbox(),
    renderer: 'zelos',
    theme: scryftBlocks,
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

