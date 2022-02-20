const browsers = require('./browsers');
const property = require('./order-property');

module.exports = {
  plugins: ["stylelint-prettier", "stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "plugin/no-unsupported-browser-features": [true, { severity: "warning", browsers }],
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    "declaration-empty-line-before": null,
    "order/order": [
      {
        type: "at-rule",
        name: "use",
      },
      {
        type: "at-rule",
        name: "import",
      },
      "custom-properties",
      "dollar-variables",
      {
        type: "at-rule",
        name: "extend",
      },
      {
        type: "at-rule",
        name: "include",
        hasBlock: false,
      },
      {
        type: "at-rule",
        name: "mixin",
        hasBlock: false,
      },
      "declarations",
      "rules",
      "at-rules",
      {
        type: "at-rule",
        name: "include",
        hasBlock: true,
      },
      {
        type: "at-rule",
        name: "mixin",
        hasBlock: true,
      },
    ],
    "order/properties-order": [
      {
        groupName: "layout",
        noEmptyLineBetween: true,
        properties: property.layout,
      },
      {
        groupName: "box",
        noEmptyLineBetween: true,
        properties: property.boxLayout,
      },
      {
        groupName: "box style",
        noEmptyLineBetween: true,
        properties: property.boxStyle,
      },
      {
        groupName: "font style",
        noEmptyLineBetween: true,
        properties: property.fontStyle,
      },
      {
        groupName: "interaction",
        noEmptyLineBetween: true,
        properties: property.interaction,
      },
      {
        groupName: "misc",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: property.misc,
      },
      {
        groupName: "transition, transform and animation",
        noEmptyLineBetween: true,
        properties: property.transition,
      },
    ],
  },
};