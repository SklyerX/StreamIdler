@ECHO OFF
ECHO ==========================
ECHO Downloading Requirements
ECHO ==========================
start cmd /k npm install stream-user
ECHO ==========================
@ECHO Taking a 7 Second Break to download all the files
ECHO ==========================
timeout /T 7 /nobreak
ECHO ==========================
@ECHO Starting BOT
ECHO ==========================
start cmd /k node .
exit /s