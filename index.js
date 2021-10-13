'use strict';

module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-rational-order"
    ],
    plugins: [
        "stylelint-scss",
        "stylelint-high-performance-animation",
        "stylelint-declaration-strict-value"
    ],
    rules: {
        "at-rule-no-unknown": null,
        "at-rule-semicolon-space-before": "never",
        "order/order": [
            "custom-properties",
            "dollar-variables",
            "at-variables",
            "declarations",
            "rules",
            "at-rules"
        ],
        "plugin/no-low-performance-animation-properties": true,
        "scale-unlimited/declaration-strict-value": [
            [
                "color",
                "font-family"
            ],
            {
                "disableFix": true
            }
        ],
        "scss/at-rule-no-unknown": true
    }
};
