#!/bin/bash

#DIR=$(cd $(dirname "$0"); pwd)
#pushd $DIR/..

# production location of the app is hard-coded for rc0.d startup
DIR=/var/node/haraka
pushd $DIR

if [ $1 = "-r" ]
then
    echo "Restarting Haraka server..."
    forever stop haraka.js
fi

forever start haraka.js
