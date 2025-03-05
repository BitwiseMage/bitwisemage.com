+++
title = 'Improving your Windows terminal experience'
date = '2025-03-05'
tags = ['windows', 'terminal']
draft = false
+++
## The Command Prompt is Deprecated.
The Windows Command Prompt has been a staple for decades due to its deep integration with Windows and its popularity among IT admins. However, Microsoft has been actively working on its replacement.

Since Windows 11 22H2, the default console has been the new and improved Windows Terminal. This software introduces numerous features such as GPU acceleration, tabs and split panes, enhanced customization, and, most notably, support for multiple shells. You can even run the old Windows Command Prompt inside Windows Terminal if needed for legacy reasons.

Switching to this new terminal significantly enhances your experience. But there’s still more we can do!

## Command Prompt, Powershell, or Powershell?
That’s not a typo in the title, we’ll get to that soon.

The first step is ensuring that __PowerShell__ is set as the default profile in Windows Terminal. When comparing __Command Prompt vs. PowerShell__, it's clear that in modern Windows environments, PowerShell is the better choice. But here’s the catch: Windows ships with an outdated version of it. Let’s fix that.

The easiest way to get the latest PowerShell is through the __Microsoft Store__. Simply search for "__PowerShell__", and it should appear as the first result. To confirm you're installing the correct one, check the package description—ensure the "__Developed By__" field is set to "__Microsoft Corporation__", and the version should be __7.5.0.0__ (as of this article’s publishing date).

Once installed, open Windows Terminal, click the down arrow next to the tab name, go to Settings, and under the Startup section, set the default profile to PowerShell (the one with the darker blue background). Click Save, then close and reopen Windows Terminal to verify everything is set up correctly. If you see the greeter message "PowerShell 7.5.0", you’re good to go.

### Bonus: Removing the Version Greeter.
If you find the PowerShell version message annoying every time you open the terminal, there’s an easy fix.

Go to __Windows Terminal Settings__, then scroll down in the left sidebar until you see the __PowerShell profile__. Click it, then select the __Command line__ field that appears on the right.

By default, this field contains the directory path to the __pwsh.exe__ executable. To disable the version greeting, append `-NoLogo` to the end of the command. If the directory path is enclosed in double quotes, add the parameter after them. It should look like this:

```plaintext
"Path\To\pwsh.exe" -NoLogo
```

Hit Save, and voilà! No more version greeting.

## The final 10%.
At this point, your Windows Terminal experience is already __10x better__ than the average user's. But if you want to take it even further, whether by making it resemble a __Linux shell__ or creating a fully custom look, here’s how.

Start by opening the newly configured terminal and running:
```bash
$ echo $PROFILE
```

This command will output the path to the __configuration file__ that controls your PowerShell prompt. Open this file and customize it however you like. If you want a Linux-like prompt, paste the following code into the file:

```powershell
Set-PSReadLineOption -PredictionSource None
function prompt
{
    $SystemAndUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name.split("\")
    Write-Host "$($SystemAndUser[1])@$([System.Environment]::MachineName)" -ForegroundColor Green -NoNewLine
    Write-Host ":" -ForegroundColor White -NoNewLine
    Write-Host $($executionContext.SessionState.Path.CurrentLocation.ToString().Replace("$($HOME)", "~")) -ForegroundColor Blue -NoNewline
    Write-Host "$" -ForegroundColor White -NoNewLine
    " "
}
```
Save the file, restart Windows Terminal, and your prompt should now look similar to this, but with your user and machine name: 
```bash
bitwisemage@tower:~$
```

## Final Thoughts
With these tweaks, you've modernized your Windows Terminal setup, making it more efficient and visually appealing. Whether you're an IT professional or just a power user, these changes will significantly improve your workflow.

Happy coding!