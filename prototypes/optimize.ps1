$directory = "c:\Users\harsh\OneDrive\Desktop\Compare\prototypes"
$files = Get-ChildItem -Path $directory -Filter "*.html"

$modifiedCount = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $original = $content

    # 1. Eliminate redundant Tailwind classes in class="..."
    $content = [regex]::Replace($content, 'class="([^"]+)"', {
        param($match)
        $classes = $match.Groups[1].Value -split '\s+'
        $uniqueClasses = $classes | Select-Object -Unique
        return 'class="' + ($uniqueClasses -join ' ') + '"'
    })

    # 2. Reduce overly nested HTML structures
    $content = [regex]::Replace($content, '<div>\s*<div([^>]*)>', '<div$1>')
    $content = [regex]::Replace($content, '</div>\s*</div>', '</div>')

    # Strip empty classes
    $content = $content -replace 'class=""', ''

    if ($original -cne $content) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $modifiedCount++
        Write-Host "Optimized: $($file.Name)"
    }
}

Write-Host "`nOptimization complete. Modified $modifiedCount out of $($files.Count) HTML files."
