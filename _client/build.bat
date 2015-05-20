CALL .\set-vars > nul

CALL %TIZEN% build-web -- %SRC_PATH%
MOVE %SRC_PATH%\.buildResult %BUILD_PATH%\%BUILD_RESULT%