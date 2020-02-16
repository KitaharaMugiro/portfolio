git add . 

#ここからgit statusをして実行結果を表示しるまで
echo ""
echo "command exec $ git status"
echo "#######################################################"
git status
echo "#######################################################"
echo "next command "

#ここまでgit statusをして実行結果を表示しいる


#ここからgit commit するかの実行
#DATE_1はコミットメッセージになります。今回は日付（例：201812251200）を入れています。
DATE_1=`date '+%Y%m%d%H%M'`
echo "git commit -a -m '"$DATE_1"'"

read -p "git commit ok? (y/N): " yn
#ここで対話形式で「git commit をしますか」と聞いて入力を求められる。ｙかYでcommit(-aオプション付き)実行、それ以外でshを終了するようにしている。
case "$yn" in [yY]*) ;; *) echo "abort." ; return;; esac
git commit -a -m ''$DATE_1

echo "#######################################################"
echo "exec commit "
echo "#######################################################"
#ここまでgit commit するかの実行結果


#ここからgit push するかの実行
read -p " git push ok? (y/N): " yn
#ここで対話形式で「git push をしますか」と聞いて入力を求められる。ｙかYでpush実行、それ以外でshを終了するようにしている。
case "$yn" in [yY]*) ;; *) echo "abort." ; return;; esac
echo "#######################################################"
echo "exec git push"
echo "#######################################################"
git push origin master

echo "#######################################################"
echo "push ok"
echo "#######################################################"


#ここからdeployするかの実行
read -p " firebase deploy ok? (y/N): " yn
#ここで対話形式で「git push をしますか」と聞いて入力を求められる。ｙかYでpush実行、それ以外でshを終了するようにしている。
case "$yn" in [yY]*) ;; *) echo "abort." ; return;; esac
echo "#######################################################"
echo "exec firebase deploy"
echo "#######################################################"
npm run deploy

echo "#######################################################"
echo "deploy ok"
echo "sh end"
echo "#######################################################"