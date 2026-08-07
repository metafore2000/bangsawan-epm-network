$folder = Join-Path $PSScriptRoot "images\testimoni"

$files = Get-ChildItem $folder -File |
Sort-Object {
    if($_.BaseName -match '\d+'){
        [int]$matches[0]
    }
    else{
        999999
    }
}

$list = @()

foreach($file in $files){

    $list += "images/testimoni/$($file.Name)"

}

$list | ConvertTo-Json | Set-Content (Join-Path $PSScriptRoot "testimoni.json") -Encoding UTF8

Write-Host ""
Write-Host "==================================="
Write-Host "   BANGSAWAN EPM TESTIMONI MANAGER"
Write-Host "==================================="
Write-Host ""
Write-Host "Found $($files.Count) testimonial images."
Write-Host ""
Write-Host "testimoni.json updated successfully."
Write-Host ""

Pause