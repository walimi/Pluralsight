cls
break
Get-AzureSubscription

Select-AzureSubscription -SubscriptionName "Developer Program Benefit"


# Display the roles and their instance count
$cloudServiceName = "wahid-m2-1"
Get-AzureRole -ServiceName $cloudServiceName | select RoleName, InstanceCount


# Change Roles instance count to 2
Get-AzureRole -ServiceName $cloudServiceName | % { Set-AzureRole -ServiceName $_.ServiceName -RoleName $_.RoleName -Slot Production -Count 2 } |


# Get Role Sizes
Get-AzureRoleSize | Select InstanceSize, SupportedByVirtualMachines, SupportedByWebWorkerRoles, RoleSizeLabel


# Display maximum core count along with currently used cores for subscription
Get-AzureSubscription -Current -ExtendedDetails | Select MaxCoreCount, CurrentCoreCount
 
