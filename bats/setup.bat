@echo off
setlocal EnableExtensions
chcp 65001 >nul
title AnaNascimentoPage setup

set "PROJECT_PATH=%~dp0.."
for %%I in ("%PROJECT_PATH%") do set "PROJECT_PATH=%%~fI"
set "LANDING_PATH=%PROJECT_PATH%\frontend\landingpage"

echo.
echo ============================================================
echo AnaNascimentoPage - setup local
echo Projeto: "%PROJECT_PATH%"
echo ============================================================
echo.

if not exist "%LANDING_PATH%\package.json" (
  echo ERRO: package.json da landing nao encontrado em:
  echo "%LANDING_PATH%"
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

if not exist "%PROJECT_PATH%\..\ServiceOS\frontend\foundation\ui-web\package.json" (
  echo.
  echo [aviso] ServiceOS Foundation nao encontrada no caminho esperado:
  echo "%PROJECT_PATH%\..\ServiceOS\frontend\foundation\ui-web"
  echo.
  echo A dependencia local @serviceos/ui-web pode falhar ate o ServiceOS estar no mesmo nivel.
)

cd /d "%LANDING_PATH%"
if errorlevel 1 (
  echo ERRO: nao foi possivel entrar na pasta da landing.
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

echo Instalando dependencias da landing...
call npm install
if errorlevel 1 (
  echo.
  echo ERRO: npm install falhou. Veja a mensagem acima.
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

echo.
echo Setup pronto. Use bats\dev.bat para abrir em localhost.
if not "%ANA_NO_PAUSE%"=="1" pause
endlocal
