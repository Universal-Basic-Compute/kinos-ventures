#!/bin/bash

# Activate virtual environment if needed
# source venv/bin/activate

# Run the TSX generation script
python generate_resource_tsx.py

# Exit with the script's exit code
exit $?
