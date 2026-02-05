export function statusColor(status) {
switch (status) {
case "healthy":
return "text-green-600 bg-green-50";
case "moderate":
return "text-yellow-600 bg-yellow-50";
case "critical":
return "text-red-600 bg-red-50";
default:
return "text-gray-600 bg-gray-50";
}
}