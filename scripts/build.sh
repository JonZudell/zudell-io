#!/bin/bash
set -e
docker build . --progress=plain -t registry.digitalocean.com/fugue-state-registry/zudell-io:local
