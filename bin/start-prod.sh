#!/bin/bash

DIR=$(cd $(dirname "$0"); pwd)
pushd $DIR/..

if [ $1 = "-r" ]
then
    echo "Restarting Haraka server..."
    forever stop haraka.js
fi

forever start haraka.js
