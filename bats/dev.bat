@echo off
setlocal EnableExtensions
chcp 65001 >nul
title AnaNascimentoPage dev

set "PROJECT_PATH=%~dp0.."
for %%I in ("%PROJECT_PATH%") do set "PROJECT_PATH=%%~fI"
set "LANDING_PATH=%PROJECT_PATH%\frontend\landingpage"
set "PORT="

for %%P in (3017 3018 3019 3020) do (
  if not defined PORT (
    netstat -ano | findstr /R /C:":%%P .*LISTENING" >nul 2>nul
    if errorlevel 1 set "PORT=%%P"
  )
)

if not defined PORT (
  echo ERRO: portas 3017, 3018, 3019 e 3020 estao ocupadas.
  echo Feche um processo antigo de Node/Next e tente de novo.
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

echo.
echo ============================================================
echo AnaNascimentoPage - dev
echo Projeto: "%PROJECT_PATH%"
echo URL: http://localhost:%PORT%
echo ============================================================
echo.
if not "%PORT%"=="3017" (
  echo [aviso] Porta 3017 ocupada. Usando http://localhost:%PORT%
  echo.
)

if not exist "%LANDING_PATH%\package.json" (
  echo ERRO: package.json da landing nao encontrado em:
  echo "%LANDING_PATH%"
  pause
  exit /b 1
)

if not exist "%LANDING_PATH%\node_modules" (
  echo [aviso] node_modules nao encontrado. Rode bats\setup.bat antes do primeiro dev.
  echo.
)

cd /d "%LANDING_PATH%"
if errorlevel 1 (
  echo ERRO: nao foi possivel entrar na pasta da landing.
  pause
  exit /b 1
)

if exist ".next\server\pages" (
  echo [cache] Removendo .next antigo com Pages Router gerado...
  rmdir /s /q ".next"
  echo.
)

call npm run dev -- -p %PORT%

if errorlevel 1 (
  echo.
  echo O servidor dev nao iniciou. Confira o erro acima.
  echo Se a porta estiver em uso, feche o processo antigo de Node/Next e tente de novo.
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

echo.
echo O servidor dev foi encerrado.
if not "%ANA_NO_PAUSE%"=="1" pause
endlocal
