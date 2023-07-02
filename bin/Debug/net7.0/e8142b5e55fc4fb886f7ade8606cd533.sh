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

ps 8498;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 8498 > /dev/null;
done;

for child in $(list_child_processes 8503);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/enrique/Documents/Hackathon/fall-in 2/bin/Debug/net7.0/e8142b5e55fc4fb886f7ade8606cd533.sh;
