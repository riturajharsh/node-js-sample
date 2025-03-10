// eslint.config.js

import js from "@eslint/js";
import customConfig from "./custom-config.js";
import myConfig from "eslint-config-my-config";

export default [
    js.configs.recommended,
    customConfig,
    myConfig,
    {
        rules: {
            semi: ["warn", "always"]
        },
        // ...other config
    }
];
