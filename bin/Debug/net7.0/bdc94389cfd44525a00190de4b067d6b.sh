function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 38005;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 38005 > /dev/null;
done;

for child in $(list_child_processes 42552);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/enrique/Documents/Hackathon/fall-in/bin/Debug/net7.0/bdc94389cfd44525a00190de4b067d6b.sh;
