@echo off
title Bangsawan EPM Testimoni Manager

echo.
echo ===================================
echo    BANGSAWAN EPM TESTIMONI MANAGER
echo ===================================
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0generate-testimoni.ps1"

echo.
echo ===================================
echo              DONE
echo ===================================
echo.

pause