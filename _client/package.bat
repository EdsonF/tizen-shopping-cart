CALL .\set-vars > nul

CALL %TIZEN% cli-config "default.profiles.path=%PROFILES%"
CALL %TIZEN% package -t wgt -s %PROFILE_NAME% -- %BUILD_PATH%\%BUILD_RESULT%

MOVE %BUILD_PATH%\%BUILD_RESULT%\*.wgt %BUILD_PATH%\build.wgt