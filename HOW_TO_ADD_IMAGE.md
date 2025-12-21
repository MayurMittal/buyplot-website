# How to Add Founder Photo - Step by Step Guide

## The Problem
You're getting a `404` error because the file `founder-photo.jpg` doesn't exist in the `public` folder.

## Solution - Add the Image File

### Step 1: Locate Your Image File
You need the graphic card image showing "Dr. Rajeev Goyal - Founder & CEO of BuyPlot"

### Step 2: Save/Rename the Image
- Save the image file
- **Rename it to exactly:** `founder-photo.jpg`
- Supported formats: `.jpg`, `.jpeg`, `.png`, or `.webp`

### Step 3: Copy to Public Folder
Copy the file to this exact location:
```
C:\Users\Mayur.Mittal\Desktop\Job\Personal\Property Website\public\founder-photo.jpg
```

### Step 4: Verify the File
After copying, verify the file exists:
- Open File Explorer
- Navigate to: `C:\Users\Mayur.Mittal\Desktop\Job\Personal\Property Website\public\`
- You should see `founder-photo.jpg` in that folder

### Step 5: Restart Development Server
1. Stop the server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`
3. Refresh your browser (hard refresh: `Ctrl+Shift+R` or `Ctrl+F5`)

## Quick Check Command
Run this in PowerShell to verify:
```powershell
Test-Path "C:\Users\Mayur.Mittal\Desktop\Job\Personal\Property Website\public\founder-photo.jpg"
```
Should return: `True`

## Alternative: Use a Different Image Name
If your image has a different name, you can either:
1. Rename it to `founder-photo.jpg`, OR
2. Update the component to use your image name

Let me know if you need help with either option!

