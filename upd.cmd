@echo off
color 0a
echo ENTER COMMITMENT MESSAGE:
set /P cmessage=
echo ...
echo.
git add .
git commit -m %cmessage%
git push
echo.
echo Commits pushed to repo
pause