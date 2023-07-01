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

for child in $(list_child_processes 85018);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/enrique/Documents/Hackathon/fall-in/bin/Debug/net7.0/43fe02c720584b2b8b412f6bc6409e92.sh;
