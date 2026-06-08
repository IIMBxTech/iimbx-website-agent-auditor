# IIMBx Grader Launcher
# Starts Python file server, runs Lighthouse grader, then cleans up

Write-Host "🚀 Starting Python file server on port 8765..." -ForegroundColor Cyan
$job = Start-Job { python -m http.server 8765 --directory "c:\Users\harsh\OneDrive\Desktop\Compare" }

Write-Host "⏳ Waiting for server to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 4

Write-Host "✅ Server ready. Launching grader..." -ForegroundColor Green
node "c:\Users\harsh\OneDrive\Desktop\Compare\run_grader.js"

Write-Host "`n🛑 Stopping server..." -ForegroundColor Yellow
Stop-Job $job
Remove-Job $job

Write-Host "🎯 All done!" -ForegroundColor Green
