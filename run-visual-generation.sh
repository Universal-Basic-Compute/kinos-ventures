#!/bin/bash
# run-visual-generation.sh

# Compile TypeScript
npx tsc generate_visual_resources.ts markdown-to-jsx.ts resource-utils.ts --esModuleInterop --resolveJsonModule --target ES2020 --module commonjs

# Run the script
node generate_visual_resources.js
