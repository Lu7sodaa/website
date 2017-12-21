#!/bin/bash

gulp(){
  ./node_modules/.bin/gulp $@
}

run(){
    gulp serve
}

newDirective(){
    #  args
    # 1 - name
    basePath=src/app/
    name=${1:-newDirective}
    dirPath=${2:-"$basePath/components"}
    dirPath=$dirPath/$name
    mkdir $dirPath
    touch $dirPath/$name.html
    touch $dirPath/$name.directive.js
    touch $dirPath/$name.less
}


deploy(){
    gulp deploy
}

if [[ "$(type -t $@)" =~ .*function ]];
then
  echo Starting "$@"
  eval $(printf "%q " "$@")
fi
