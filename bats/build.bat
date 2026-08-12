@echo off
setlocal EnableExtensions
chcp 65001 >nul
title AnaNascimentoPage build

set "PROJECT_PATH=%~dp0.."
for %%I in ("%PROJECT_PATH%") do set "PROJECT_PATH=%%~fI"
set "LANDING_PATH=%PROJECT_PATH%\frontend\landingpage"

echo.
echo ============================================================
echo AnaNascimentoPage - build
echo Projeto: "%PROJECT_PATH%"
echo ============================================================
echo.

if not exist "%LANDING_PATH%\package.json" (
  echo ERRO: package.json da landing nao encontrado em:
  echo "%LANDING_PATH%"
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

cd /d "%LANDING_PATH%"
if errorlevel 1 (
  echo ERRO: nao foi possivel entrar na pasta da landing.
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

call npm run build

if errorlevel 1 (
  echo.
  echo Build falhou. Veja a mensagem acima.
  if not "%ANA_NO_PAUSE%"=="1" pause
  exit /b 1
)

echo.
echo Build concluido.
if not "%ANA_NO_PAUSE%"=="1" pause
endlocal
