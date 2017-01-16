#!/usr/bin/env zsh

run(){
    gulp serve
}

deploy(){
    gulp deploy
}

if [[ "$(type -w $@)" =~ .*function ]];
then
  echo Starting "$@"
  eval $(printf "%q " "$@")
fi
