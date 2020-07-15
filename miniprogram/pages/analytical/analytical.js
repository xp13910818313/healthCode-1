// miniprogram/pages/heml/heml.js
let d = require("../../utils/util.charset")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        charset: "PGh0bWw+CjxoZWFkPgogPG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIjsgY29udGVudCA9ICJ0ZXh0L2h0bWw7IGNoYXJzZXQ9Z2IyMzEyIiA+PHRpdGxlPrCxu/nL4bzssuKxqLjmPC90aXRsZT48U1RZTEU+LnRpdGxlIHsgRk9OVC1TSVpFOiAxOHB4OyBGT05ULUZBTUlMWTogIrrazOUiIH0gVEQgeyBGT05ULVNJWkU6IDExcHQgfSAuc21hbGwgeyBGT05ULVNJWkU6IDlwdCB9IGE6bGluayB7IGNvbG9yOiAjMDAwMDAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0gYTp2aXNpdGVkIHsgY29sb3I6ICMwMDAwMDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfSBhOmhvdmVyIHsgY29sb3I6ICNGRjAwMDA7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO30gLnRhYmxlIHsgQk9SREVSLVJJR0hUOiAjMDAwMDAwIDBweDsgQk9SREVSLVRPUDogIzAwMDAwMCAxcHggc29saWQ7IEJPUkRFUi1MRUZUOiAjMDAwMDAwIDFweCBzb2xpZDsgQk9SREVSLUJPVFRPTTogIzAwMDAwMCAwcHggfSAudGQgeyBCT1JERVItUklHSFQ6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItVE9QOiAjZmZmZmZmIDBweDsgRk9OVC1TSVpFOiAxNHB4OyBCT1JERVItTEVGVDogI2ZmZmZmZiAwcHg7IEJPUkRFUi1CT1RUT006ICMwMDAwMDAgMXB4IHNvbGlkIH0gLnRkMiB7IEJPUkRFUi1SSUdIVDogI2ZmZmZmZiAwcHg7IEJPUkRFUi1UT1A6ICNmZmZmZmYgMHB4OyBGT05ULVNJWkU6IDE0cHg7IEJPUkRFUi1MRUZUOiAjZmZmZmZmIDBweDsgQk9SREVSLUJPVFRPTTogIzAwMDAwMCAxcHggc29saWQgfSAuTk9QUklOVCB7IEZPTlQtU0laRTogOXB0OyBGT05ULUZBTUlMWTogIsvOzOUiIH0gLnd0YWJsZSB7IEJPUkRFUi1SSUdIVDogIzAwMDAwMCAxcHggc29saWQ7IEJPUkRFUi1UT1A6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItTEVGVDogIzAwMDAwMCAxcHggc29saWQ7IEJPUkRFUi1CT1RUT006ICMwMDAwMDAgMXB4IHNvbGlkIH0gLmxpbmVvbmUgeyBCT1JERVItUklHSFQ6ICNmZmZmZmYgMHB4OyBCT1JERVItVE9QOiAjMDAwMDAwIDFweCBzb2xpZDsgQk9SREVSLUxFRlQ6ICNmZmZmZmYgMHB4OyBCT1JERVItQk9UVE9NOiAjMDAwMDAwIDFweCBzb2xpZCB9IC5saW5lb25lMSB7IEJPUkRFUi1SSUdIVDogIzAwMDAwMCAxcHggc29saWQ7IEJPUkRFUi1UT1A6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItTEVGVDogI2ZmZmZmZiAwcHg7IEJPUkRFUi1CT1RUT006ICMwMDAwMDAgMXB4IHNvbGlkIH0gLnRocmVlIHsgQk9SREVSLVJJR0hUOiAjZmZmZmZmIDBweDsgQk9SREVSLVRPUDogIzAwMDAwMCAxcHggc29saWQ7IEJPUkRFUi1MRUZUOiAjMDAwMDAwIDFweCBzb2xpZDsgQk9SREVSLUJPVFRPTTogIzAwMDAwMCAxcHggc29saWQgfSAucmlnaHQgeyBCT1JERVItUklHSFQ6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItVE9QOiAjZmZmZmZmIDBweDsgQk9SREVSLUxFRlQ6ICNmZmZmZmYgMHB4OyBCT1JERVItQk9UVE9NOiAjZmZmZmZmIDBweCB9IC5sZWZ0cmlnaHQgeyBCT1JERVItUklHSFQ6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItVE9QOiAjZmZmZmZmIDBweDsgQk9SREVSLUxFRlQ6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItQk9UVE9NOiAjZmZmZmZmIDBweCB9IC54dGFibGUgeyBCT1JERVItUklHSFQ6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItVE9QOiAjZmZmZmZmIDBweDsgQk9SREVSLUxFRlQ6ICMwMDAwMDAgMXB4IHNvbGlkOyBCT1JERVItQk9UVE9NOiAjMDAwMDAwIDFweCBzb2xpZCB9IDwvU1RZTEU+PC9oZWFkPjxib2R5IHN0eWxlPSJiYWNrZ3JvdW5kLWltYWdlOnVybChQYWdlYmcuanBnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciB0b3A7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDsiPjx0YWJsZSBjZWxsU3BhY2luZz00IGNlbGxQYWRkaW5nPTAgd2lkdGg9NjIwIGFsaWduPUNlbnRlciBib3JkZXI9MD48dHI+PHRkIGFsaWduPW1pZGRsZSBjb2xzcGFuPTM+PGZvbnQgc2l6ZT02IGZhY2U9utrM5T48cD7Bv9fTyPW0xbzssuIosLG7+cvhvOyy4rGouOYpPC9wPjxwPrfWzvaxqLjmtaU8L3A+PC9mb250PjwvdGQ+PC90cj48dHI+PHRkIHdpZHRoPTEwMCUgY29sc3Bhbj0zPjxociBjb2xvcj0jRkY5OTMzIHNpemU9Mj48L3RkPjwvdHI+PHRyPjx0ZCB3aWR0aD0zMCU+0NXD+zrVxcj9PC90ZD48dGQgd2lkdGg9MzAlIGFsaWduPWNlbnRlcj7Q1LHwIDogxNA8L3RkPjx0ZCB3aWR0aD0zMCUgYWxpZ249Y2VudGVyPsTqweQ6NDc8L3RkPjwvdHI+PHRyPjx0ZCBjb2xzcGFuPTM+PHRhYmxlIHdpZHRoPTEwMCUgY2VsbFNwYWNpbmc9MCBjZWxsUGFkZGluZz0wID48dHI+PHRkIHdpZHRoPTUwJSBhbGlnbj1sZWZ0Pszl0M46serXvMzl1tgoMTYwY22jrDYwa2cpPC90ZD48dGQgd2lkdGg9NTAlIGFsaWduPXJpZ2h0PrzssuLKsbzkOjIwMjAtMDctMDYgMTQ6MzQ8L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PHRyPjx0ZCB3aWR0aD0xMDAlIGNvbHNwYW49Mz48aHIgY29sb3I9I0ZGOTkzMyBzaXplPTI+PC90ZD48L3RyPjwvdGFibGU+CjxUQUJMRSB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGNlbGxwYWRkaW5nPTAgY2VsbHNwYWNpbmc9MD48dHI+PHRkIGhlaWdodD04PjwvdGQ+PC90cj48L3RhYmxlPiA8VEFCTEUgd2lkdGg9NTkwIGFsaWduPWNlbnRlciBib3JkZXI9MD48VFI+PFREPjxGb250IHNpemU9Mz48U1RST05HPsq1vMq87LLiveG5+zwvU1RST05HPjwvRm9udD48L1REPjwvVFI+PC9UQUJMRT48VEFCTEUgY2xhc3M9dGFibGUgY2VsbFNwYWNpbmc9MCBjZWxsUGFkZGluZz0zIHdpZHRoPTU5MCBhbGlnbj1jZW50ZXIgYm9yZGVyPTA+PFRSIGNsYXNzPXRkIGFsaWduPW1pZGRsZSBiZ2NvbG9yPUIzRDlFRCBoZWlnaHQ9Mjg+PFREIGNsYXNzPXRkPjxTVFJPTkc+vOyy4s/uxL88L1NUUk9ORz48L1REPjxURCBjbGFzcz10ZD48U1RST05HPtX9s6O3ts6nPC9TVFJPTkc+PC9URD48VEQgY2xhc3M9dGQ+PFNUUk9ORz7KtbzKsuLBv9a1PC9TVFJPTkc+PC9URD48VEQgY2xhc3M9dGQ+PFNUUk9ORz687LLiveG5+zwvU1RST05HPjwvVEQ+PC9UUj4KIDxUUiBjbGFzcz10ZCBhbGlnbj1sZWZ0IGJnY29sb3I9RUJGNUZCPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CsC1sLHL4SA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjAuMjUzIC0gMC42NTkgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgowLjY2NCA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+Cjxmb250IGNvbG9yPTMzNjhBMT7H4bbI0uyzoygrKTwvZm9udD4gPC9URD48L1RSPgogPFRSIGNsYXNzPXRkIGFsaWduPWxlZnQgYmdjb2xvcj1FQkY1RkI+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KyauwscvhIDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KMi4zNzQgLSAzLjcwOSA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjMuNzQ4IDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KPGZvbnQgY29sb3I9MzM2OEExPsfhtsjS7LOjKCspPC9mb250PiA8L1REPjwvVFI+CiA8VFIgY2xhc3M9dGQgYWxpZ249bGVmdCBiZ2NvbG9yPUVCRjVGQj48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgqxvbH7sLHL4SA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjAuNzMxIC0gMS4zMDcgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgowLjc2OCA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+Cjxmb250IGNvbG9yPTAwRkYwMD7V/bOjKC0pPC9mb250PiA8L1REPjwvVFI+CiA8VFIgY2xhc3M9dGQgYWxpZ249bGVmdCBiZ2NvbG9yPUVCRjVGQj48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgq1sLCxy+EovNfB8rCxy+EpIDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KMC40MzIgLSAwLjgyNiA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjAuNDQwIDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KPGZvbnQgY29sb3I9MDBGRjAwPtX9s6MoLSk8L2ZvbnQ+IDwvVEQ+PC9UUj4KIDxUUiBjbGFzcz10ZCBhbGlnbj1sZWZ0IGJnY29sb3I9RUJGNUZCPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CsvVsLHL4SA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjAuNDIyIC0gMC44MTcgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgowLjQyMiA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+Cjxmb250IGNvbG9yPTAwRkYwMD7V/bOjKC0pPC9mb250PiA8L1REPjwvVFI+CiA8VFIgY2xhc3M9dGQgYWxpZ249bGVmdCBiZ2NvbG9yPUVCRjVGQj48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgrS7MHBsLHL4SA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjEuODMxIC0gMy4yNDggPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgoxLjgzNyA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+Cjxmb250IGNvbG9yPTAwRkYwMD7V/bOjKC0pPC9mb250PiA8L1REPjwvVFI+CiA8VFIgY2xhc3M9dGQgYWxpZ249bGVmdCBiZ2NvbG9yPUVCRjVGQj48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgrBwbCxy+EgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgoyLjA3MyAtIDQuNTc5IDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KNC41OTAgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgo8Zm9udCBjb2xvcj0zMzY4QTE+x+G2yNLss6MoKyk8L2ZvbnQ+IDwvVEQ+PC9UUj4KIDxUUiBjbGFzcz10ZCBhbGlnbj1sZWZ0IGJnY29sb3I9RUJGNUZCPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CufTsLHL4SA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjIuMDEyIC0gNC44OTIgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgoyLjAxNSA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+Cjxmb250IGNvbG9yPTAwRkYwMD7V/bOjKC0pPC9mb250PiA8L1REPjwvVFI+CiA8VFIgY2xhc3M9dGQgYWxpZ249bGVmdCBiZ2NvbG9yPUVCRjVGQj48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgrX6bCxy+EgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgoyLjkwMyAtIDQuMDEyIDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KMi45MDQgPC9URD48VEQgY2xhc3M9dGQgYWxpZ249bWlkZGxlPgo8Zm9udCBjb2xvcj0wMEZGMDA+1f2zoygtKTwvZm9udD4gPC9URD48L1RSPgogPFRSIGNsYXNzPXRkIGFsaWduPWxlZnQgYmdjb2xvcj1FQkY1RkI+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KvquwscvhIDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KMC43MTAgLSAxLjIwOSA8L1REPjxURCBjbGFzcz10ZCBhbGlnbj1taWRkbGU+CjEuMjU1IDwvVEQ+PFREIGNsYXNzPXRkIGFsaWduPW1pZGRsZT4KPGZvbnQgY29sb3I9MzM2OEExPsfhtsjS7LOjKCspPC9mb250PiA8L1REPjwvVFI+CiA8L1RBQkxFPgogPFRBQkxFIHdpZHRoPTU5MCBhbGlnbj1jZW50ZXIgYm9yZGVyPTAgY2VsbHBhZGRpbmc9MCBjZWxsc3BhY2luZz0wPjx0cj48dGQgaGVpZ2h0PTIwPjwvdGQ+PC90cj48L3RhYmxlPgogPFRBQkxFIGNlbGxTcGFjaW5nPTAgY2VsbFBhZGRpbmc9MyB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wPjxUUiBhbGlnbj1taWRkbGU+PFREIHJvd3NwYW49IjIiPjxTVFJPTkc+ss6/vLHq17w6PC9TVFJPTkc+PC9URD48VEQ+PGRpdiBhbGlnbj0icmlnaHQiPjxpbWcgc3JjPVlDTWFyazQuanBnIGJvcmRlcj0wPjwvZGl2PjwvVEQ+PFREPjxkaXYgYWxpZ249ImxlZnQiPjxCPtX9s6MoLSk8L0I+PC9kaXY+PC9URD4gPFREPjxkaXYgYWxpZ249InJpZ2h0Ij48aW1nIHNyYz1ZQ01hcmszLmpwZyBib3JkZXI9MD48L2Rpdj48L1REPjxURD48ZGl2IGFsaWduPSJsZWZ0Ij48Qj7H4bbI0uyzoygrKTwvQj48L2Rpdj48L1REPjwvVFI+PFRSIGFsaWduPW1pZGRsZT48VEQ+PGRpdiBhbGlnbj0icmlnaHQiPjxpbWcgc3JjPVlDTWFyazIuanBnIGJvcmRlcj0wPjwvZGl2PjwvVEQ+PFREPjxkaXYgYWxpZ249ImxlZnQiPjxCPtbQtsjS7LOjKCsrKTwvQj48L2Rpdj48L1REPjxURD48ZGl2IGFsaWduPSJyaWdodCI+PGltZyBzcmM9WUNNYXJrMS5qcGcgYm9yZGVyPTA+PC9kaXY+PC9URD48VEQ+PGRpdiBhbGlnbj0ibGVmdCI+PEI+1ti2yNLss6MoKysrKTwvQj48L2Rpdj48L1REPjwvVFI+PFRSPjxURCBjb2xzcGFuPTMgaGVpZ2h0PTg+IDwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD7AtbCxy+E6IDwvVEQ+PFREPjAuMjUzIC0gMC42NTkoLSk8L1REPjxURD4wLjY1OSAtIDAuOTYyKCspPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPiZuYnNwOzwvVEQ+PFREPjAuOTYyIC0gMS4yMTMoKyspPC9URD48VEQ+o74xLjIxMygrKyspPC9URD48L1RSPjxUUj48VEQgY29sc3Bhbj0zIGhlaWdodD04PiA8L1REPjwvVFI+PFRSIGFsaWduPW1pZGRsZT48VEQ+yauwscvhOiA8L1REPjxURD4yLjM3NCAtIDMuNzA5KC0pPC9URD48VEQ+My43MDkgLSA0Ljk3OCgrKTwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD4mbmJzcDs8L1REPjxURD40Ljk3OCAtIDYuMjg5KCsrKTwvVEQ+PFREPqO+Ni4yODkoKysrKTwvVEQ+PC9UUj48VFI+PFREIGNvbHNwYW49MyBoZWlnaHQ9OD4gPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPrG9sfuwscvhOiA8L1REPjxURD4wLjczMSAtIDEuMzA3KC0pPC9URD48VEQ+MS4zMDcgLSAxLjkyOCgrKTwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD4mbmJzcDs8L1REPjxURD4xLjkyOCAtIDIuNDkxKCsrKTwvVEQ+PFREPqO+Mi40OTEoKysrKTwvVEQ+PC9UUj48VFI+PFREIGNvbHNwYW49MyBoZWlnaHQ9OD4gPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPrWwsLHL4Si818HysLHL4Sk6IDwvVEQ+PFREPjAuNDMyIC0gMC44MjYoLSk8L1REPjxURD4wLjgyNiAtIDEuMjQ1KCspPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPiZuYnNwOzwvVEQ+PFREPjEuMjQ1IC0gMS42MzcoKyspPC9URD48VEQ+o74xLjYzNygrKyspPC9URD48L1RSPjxUUj48VEQgY29sc3Bhbj0zIGhlaWdodD04PiA8L1REPjwvVFI+PFRSIGFsaWduPW1pZGRsZT48VEQ+y9WwscvhOiA8L1REPjxURD4wLjQyMiAtIDAuODE3KC0pPC9URD48VEQ+MC44MTcgLSAxLjE5NCgrKTwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD4mbmJzcDs8L1REPjxURD4xLjE5NCAtIDEuNjg1KCsrKTwvVEQ+PFREPqO+MS42ODUoKysrKTwvVEQ+PC9UUj48VFI+PFREIGNvbHNwYW49MyBoZWlnaHQ9OD4gPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPtLswcGwscvhOiA8L1REPjxURD4xLjgzMSAtIDMuMjQ4KC0pPC9URD48VEQ+My4yNDggLSA0LjU4MigrKTwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD4mbmJzcDs8L1REPjxURD40LjU4MiAtIDUuNjU3KCsrKTwvVEQ+PFREPqO+NS42NTcoKysrKTwvVEQ+PC9UUj48VFI+PFREIGNvbHNwYW49MyBoZWlnaHQ9OD4gPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPsHBsLHL4TogPC9URD48VEQ+Mi4wNzMgLSA0LjU3OSgtKTwvVEQ+PFREPjQuNTc5IC0gNi45ODIoKyk8L1REPjwvVFI+PFRSIGFsaWduPW1pZGRsZT48VEQ+Jm5ic3A7PC9URD48VEQ+Ni45ODIgLSA5LjI1NigrKyk8L1REPjxURD6jvjkuMjU2KCsrKyk8L1REPjwvVFI+PFRSPjxURCBjb2xzcGFuPTMgaGVpZ2h0PTg+IDwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD7n07Cxy+E6IDwvVEQ+PFREPjIuMDEyIC0gNC44OTIoLSk8L1REPjxURD40Ljg5MiAtIDYuOTgyKCspPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPiZuYnNwOzwvVEQ+PFREPjYuOTgyIC0gOS42NzcoKyspPC9URD48VEQ+o745LjY3NygrKyspPC9URD48L1RSPjxUUj48VEQgY29sc3Bhbj0zIGhlaWdodD04PiA8L1REPjwvVFI+PFRSIGFsaWduPW1pZGRsZT48VEQ+1+mwscvhOiA8L1REPjxURD4yLjkwMyAtIDQuMDEyKC0pPC9URD48VEQ+NC4wMTIgLSA1LjExMygrKTwvVEQ+PC9UUj48VFIgYWxpZ249bWlkZGxlPjxURD4mbmJzcDs8L1REPjxURD41LjExMyAtIDYuMjU4KCsrKTwvVEQ+PFREPqO+Ni4yNTgoKysrKTwvVEQ+PC9UUj48VFI+PFREIGNvbHNwYW49MyBoZWlnaHQ9OD4gPC9URD48L1RSPjxUUiBhbGlnbj1taWRkbGU+PFREPr6rsLHL4TogPC9URD48VEQ+MC43MTAgLSAxLjIwOSgtKTwvVEQ+PFREPjEuMjA5IC0gMS44MTIoKyk8L1REPjwvVFI+PFRSIGFsaWduPW1pZGRsZT48VEQ+Jm5ic3A7PC9URD48VEQ+MS44MTIgLSAyLjMzNygrKyk8L1REPjxURD6jvjIuMzM3KCsrKyk8L1REPjwvVFI+PFRSPjxURCBjb2xzcGFuPTMgaGVpZ2h0PTg+IDwvVEQ+PC9UUj48L1RBQkxFPgo8VEFCTEUgd2lkdGg9NTkwIGFsaWduPWNlbnRlciBib3JkZXI9MCBjZWxscGFkZGluZz0wIGNlbGxzcGFjaW5nPTA+PHRyPjx0ZCBoZWlnaHQ9MzA+PC90ZD48L3RyPjwvdGFibGU+CiA8VEFCTEUgY2xhc3M9d3RhYmxlIGNlbGxTcGFjaW5nPTQgY2VsbFBhZGRpbmc9MyB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGJnY29sb3I9QjNEOUVEPjxUUj48VEQgYWxpZ249Y2VudGVyPjxCPrLOJm5ic3A7Jm5ic3A7yv0mbmJzcDsmbmJzcDvLtSZuYnNwOyZuYnNwO8P3PC9CPjwvVEQ+PC9UQUJMRT48VEFCTEUgY2xhc3M9eHRhYmxlIGNlbGxTcGFjaW5nPTQgY2VsbFBhZGRpbmc9MCB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGJnY29sb3I9RUJGNUZCPjxUUj48VEQ+PEI+wLWwscvhKEx5c2luZSmjujwvQj48L1REPjwvVFI+PFRSPjxURD602b34tPPE1Lei0/2jrMrHuM68sLWotcTX6bPJs8m31qOsxNy02b341qy3vrT60LujrLX3vdrLybn7z9mhosjpz9mhorvGzOW8sMLRs7KjrLfA1rnPuLD7zcu7rzwvVEQ+PC9UUj48VFI+PFREPsC1sLHL4c6qvO7Q1LHY0Oiwsbv5y+Gho9PJ09q5yM7vyrPGt9bQtcTAtbCxy+G6rMG/yfW1zaOsx9LU2rzTuaS5/bPM1tDS17G7xsa7tbb4yLG3pqOsucqzxs6qtdrSu8/e1sbQ1LCxu/nL4aGjyLG3psC1sLHL4bXE1qLXtLD8wKjGo8DNo6zQ6cj1o6y28dDEo6zFu83Co6zNt9TOo6zDu9PQyrPT+6Ost6LT/bPZu7qjrMa20aq1yKGjv8nS1NTa0r3Bxteo0rXIy9SxvajS6c/CssnIocC1sLHL4dOq0fiyuca3oaPAtbCxy+HDv8jVtcS9qNLpyePI68G/yse2+c2vw7+w9czl1tgxMLrBv8ujrLPJxOrIy8O/zOzU2jMwMDAtOTAwMLrBv8vWrrzkoaPAtbCxy+HKx7Dv1vrG5Mv806rR+M7v1sqxu8jLzOWz5LfWzvzK1brNwPvTw7XEudi8/M7v1sqjrMjLzOXWu9PQsrmz5MHL1+O5u7XEwLWwscvhssXE3MzhuN/Ks87vtbCw19bKtcTO/MrVus3A+9PDo6y077W9vvm64tOq0fijrLTZvfjJ+rOkt6LT/aGjPC9URD48L1RSPjxUUj48VEQ+wLWwscvhv8nS1LX3vdrIy8zltPrQu8a9uuKho8C1sLHL4c6qus+zycjivO7M4bmpveG5udfpt9ajrLb4yOK87rvhtNnKuc+4sPvW0Nast77L4bXEus+zyaGjzfnKs87v1tDM7bzTydnBv7XEwLWwscvho6y/ydLUtMy8pM64tbCw18O40+vOuMvhtcS31sPao6zM4bjfzrjSurfWw9q5ptCno6zG8LW91Pa9+Mqz0/uhorTZvfjT17b5yfqzpNPrt6LT/bXE1/fTw6GjwLWwscvhu7nE3MzhuN+4xrXEzvzK1bywxuTU2szlxNq1xLv9wNujrLzTy9m5x/fAyfqzpKGjyOfIsbemwLWwscvho6y74dTss8nOuNK6t9bH37K71+O2+LP2z9bR4cqzoaLTqtH40NTGttGqo6zWwsq51tDK4Mnxvq3K3NfooaK3otP9srvBvKGjPC9URD48L1RSPjwvVEFCTEU+PFRBQkxFIGNsYXNzPXh0YWJsZSBjZWxsU3BhY2luZz00IGNlbGxQYWRkaW5nPTAgd2lkdGg9NTkwIGFsaWduPWNlbnRlciBib3JkZXI9MCBiZ2NvbG9yPUVCRjVGQj48VFI+PFREPjxCPsmrsLHL4ShUcnlwdG9waGFuo6mjujwvQj48L1REPjwvVFI+PFRSPjxURD602b34zrjSuryw0sjSurXEsvrJ+jwvVEQ+PC9UUj48VFI+PFREPsmrsLHL4b/J16q7r8n6s8nIy8zltPPE1NbQtcTSu9bW1tjSqsnxvq20q7Xdzu/Wyi0tLS01LfTHyauwt6Ostvg1LfTHyauwt9PQ1tC6zcn2yc/P2cvY0+vIpbzXyfbJz8/Zy9i1xNf308OjrLKiv8m4xMnGy6/D37XEs9bQ+MqxvOSho7Wxtq/O77TzxNTW0LXENS30x8mrsLe6rMG/vbW1zcqxo6yx7c/Ws/bS7LOjtcTQ0M6qo6yz9s/WyfG+rbTtwtK1xLvDvvXS1LywyqfD37XIoaO0y83io6w1LfTHyauwt9PQutzHv7XE0aq53MrVy/XX99PDo6y/ybTm1NrT2tDttuDX6davo6yw/MCo0arQobDlus2zptWzxKTPuLD71tCjrMrcycu687XEu/rM5bvhzai5/crNt8U1LfTHyauwt8C01rnRqqGj0r3SqcnPs6O9q8mrsLHL4dPD1/e/ucPGvMGhor+5vrfCzrzBoaLOuLfWw9q1973avMGhos641bPEpLGju6S8wbrNx7+/ubvow9S8wbXIoaM8L1REPjwvVFI+PC9UQUJMRT48VEFCTEUgY2xhc3M9eHRhYmxlIGNlbGxTcGFjaW5nPTQgY2VsbFBhZGRpbmc9MCB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGJnY29sb3I9RUJGNUZCPjxUUj48VEQ+PEI+sb2x+7Cxy+EoUGhlbnlsYWxhbmluZaOpo7o8L0I+PC9URD48L1RSPjxUUj48VEQ+ss7T68/7s/3J9rywsPLr17mmxNy1xMvwusQ8L1REPjwvVFI+PFRSPjxURD6xvbH7sLHL4crHyMvM5bHY0Ou1xLCxu/nL4dau0rujrL6tyrPO78njyKG686Ossr+31tPD09q6z7PJtbCw19bKo6zG5NPgsr+31r6tuM7U4LG9sfuwscvh9Me7r8O4tcTX99PD16qx5M6qwNKwscvho6y9+Lb416q7r86qxuTL+8n6wO277tDUzu/WyqGjPC9URD48L1RSPjwvVEFCTEU+PFRBQkxFIGNsYXNzPXh0YWJsZSBjZWxsU3BhY2luZz00IGNlbGxQYWRkaW5nPTAgd2lkdGg9NTkwIGFsaWduPWNlbnRlciBib3JkZXI9MCBiZ2NvbG9yPUVCRjVGQj48VFI+PFREPjxCPrWwsLHL4Si818HysLHL4SkoTWV0aGlvbmluZaOpo7o8L0I+PC9URD48L1RSPjxUUj48VEQ+ss7T69fps8nRqrrstbCw16Gi1+nWr9Pr0arH5aOs09C02b34xqLU4KGi0sjU4LywwdywzbXEuabE3DwvVEQ+PC9UUj48VFI+PFREPrWwsLHL4crHuqzB8rHY0Oiwsbv5y+GjrNPryfrO78zlxNq499bWuqzB8ruvus/O77XEtPrQu8Pcx9DP4LnYoaO1scixt6a1sLCxy+HKsaOsu+HS/cbwyrPT+7z1zcuhosn6s6S89bu6u/Kyu9T2vNPM5dbYoaLJ9tTg1te087rNuM7U4Mz6ttG7/bXIz9bP86Os1+6687W81sK4zru1y8C78s/Lzqy7r6GjPC9URD48L1RSPjwvVEFCTEU+PFRBQkxFIGNsYXNzPXh0YWJsZSBjZWxsU3BhY2luZz00IGNlbGxQYWRkaW5nPTAgd2lkdGg9NTkwIGFsaWduPWNlbnRlciBib3JkZXI9MCBiZ2NvbG9yPUVCRjVGQj48VFI+PFREPjxCPsvVsLHL4ShUaHJlb25pbmWjqaO6PC9CPjwvVEQ+PC9UUj48VFI+PFREPtPQ16qx5MSz0Kmwsbv5y+G077W9xr264rXEuabE3DwvVEQ+PC9UUj48VFI+PFREPsvVsLHL4bXEveG5udbQuqzT0PTHu/mjrLbUyMvM5cakt/S+39PQs9bLrtf308OjrNPrudHMx8G0veG6z6OsttSxo7ukz7iw+8SkxvDW2NKq1/fTw6Os1NrM5cTaxNy02b34wdfWrLrPs8m6zdast77L4dH1u6+ho8bk1sa8wb7f09C02b34yMvM5bei0/2/udast764ztKp08PQp8Tco6zKx7i0us+wsbv5y+HK5NK61tC1xNK7uPazybfWoaPNrMqxo6zL1bCxy+HT1srH1sbU7NK7wOC439Cntc25/cP0tcS/ucn6y9gtLbWl9aOwt776y9i1xNStwc+hozwvVEQ+PC9UUj48L1RBQkxFPjxUQUJMRSBjbGFzcz14dGFibGUgY2VsbFNwYWNpbmc9NCBjZWxsUGFkZGluZz0wIHdpZHRoPTU5MCBhbGlnbj1jZW50ZXIgYm9yZGVyPTAgYmdjb2xvcj1FQkY1RkI+PFRSPjxURD48Qj7S7MHBsLHL4ShJc29sZXVjaW5lKaO6PC9CPjwvVEQ+PC9UUj48VFI+PFREPrLO0+vQ2M/ZoaLGotTgvLDE1M/Cz9m1xLX3vdrS1LywtPrQuzwvVEQ+PC9UUj48VFI+PFREPufTsLHL4aGiwcGwscvh0+vS7MHBsLHL4b75yvTWp8G0sLG7+cvho6zNrMqxtrzKx7HY0Oiwsbv5y+Gho9LswcGwscvhxNzWzsHGyfG+rdXPsK2hosqz0/u89c3Lus3GttGqo6zU2ryhyOK1sLDX1sq0+tC71tDSsryrzqrW2NKqoaM8L1REPjwvVFI+PC9UQUJMRT48VEFCTEUgY2xhc3M9eHRhYmxlIGNlbGxTcGFjaW5nPTQgY2VsbFBhZGRpbmc9MCB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGJnY29sb3I9RUJGNUZCPjxUUj48VEQ+PEI+wcGwscvhKExldWNpbmUpo7o8L0I+PC9URD48L1RSPjxUUj48VEQ+1/fTw8a9uuLS7MHBsLHL4TwvVEQ+PC9UUj48VFI+PFREPsHBsLHL4b/J08PT2tXvts+6zdbOwcbQobb5tcTNu7ei0NS439GqzMfWoqOs0rK/ydPD1/fNt9TO1s7BxrzBvLDTqtH418yyubzBoaM8L1REPjwvVFI+PC9UQUJMRT48VEFCTEUgY2xhc3M9eHRhYmxlIGNlbGxTcGFjaW5nPTQgY2VsbFBhZGRpbmc9MCB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGJnY29sb3I9RUJGNUZCPjxUUj48VEQ+PEI+59OwscvhKFZhbGluZaOpo7o8L0I+PC9URD48L1RSPjxUUj48VEQ+1/fTw9Pau8bM5aGiyOnP2bywwtGzsjwvVEQ+PC9UUj48VFI+PFREPrWx59OwscvhsrvX48qxo6y088rz1tDK4Mnxvq3Ptc2zuabE3Lvht6LJ+s7JwtKjrLmpuPjKp7X3tviz9s/Wy8TWq9Xwsvyho82ouf294sbKx9DGrMTU1+nWr6Ost6LP1tPQuuy6y8+4sPux5NDUz9bP86Osze3G2rjO07K7r7KhyMvS8rjOuabE3MvwuqajrNLX0M6zybjf0si1usvY0arWoqOs1sLKudGq1tDWp8G0sLG7+cvhvPXJ2aOs1qfBtLCxu/nL4brNt7zP49flsLG7+cvhtcSxyNa108nV/bOjyMu1xDMuMH4zLjW9tdbBMS4wfjEuNaOsucqzo9PD59OwscvhtcjWp8G0sLG7+cvhtcTXosnk0rrWzsHGuM65psTcy6W937XIvLKyoaGjtMvN4qOsy/zSsr/J1/fOqrzTv+y0tMnL0/q6z7XE1s7BxrzBoaM8L1REPjwvVFI+PC9UQUJMRT48VEFCTEUgY2xhc3M9eHRhYmxlIGNlbGxTcGFjaW5nPTQgY2VsbFBhZGRpbmc9MCB3aWR0aD01OTAgYWxpZ249Y2VudGVyIGJvcmRlcj0wIGJnY29sb3I9RUJGNUZCPjxUUj48VEQ+PEI+1+mwscvhKEhsc3RpZGluZaOpo7o8L0I+PC9URD48L1RSPjxUUj48VEQ+1/fTw9PatPrQu7XEtfe92jwvVEQ+PC9UUj48VFI+PFREPtfpsLHL4bXE3+Tf8rv5xNzT60ZlMiu78sbky/u98Mr0wOvX09DOs8nF5M67u6+6z87vo6y02b34zPq1xM78ytWjrNLytvi/ydPD09q3wNbOxrbRqqGj1+mwscvhxNy9tbXNzrjSusvhtsijrLu6us3OuLOmytbK9bXEzNvNtKOsvPXH4cjRye/G2sW7zcK8sM64sr/XxsjIuNCjrNLW1sbTydayzu/J8b6tvfTVxbb40v3G8LXEz/u7r7XAwKPAw6OsttS5/cP00NS8srKho6zI58/4tK21yNKy09C5ptCnoaO0y83io6zX6bCxy+G/ycCp1cXRqrnco6y9tbXN0arRuaOswdm0ssnP08PT2tDEvcrNtKGi0MS5psTcsrvIq7XIvLKyobXE1s7BxqGjwOC358qq0NS52L3a0de7vNXf0arW0NfpsLHL4bqswb/P1Nb4vPXJ2aOsyrnTw9fpsLHL4brzt6LP1sbkztXBpqGi19/Ct9Pr0aqzwbXI1rix6r7509C6w9eqoaOzycjLv8nS1LrPs8nX6bCxy+GjrDEwy+rS1M/CtvnNr7K7xNy6z7PJo6zL+dLUyq7L6tLUz8K2+c2vttTX6bCxy+G1xNDox/PTptPJyrPO77mpuPihozwvVEQ+PC9UUj48L1RBQkxFPjxUQUJMRSBjbGFzcz14dGFibGUgY2VsbFNwYWNpbmc9NCBjZWxsUGFkZGluZz0wIHdpZHRoPTU5MCBhbGlnbj1jZW50ZXIgYm9yZGVyPTAgYmdjb2xvcj1FQkY1RkI+PFRSPjxURD48Qj6+q7Cxy+EoQXJnbmluZaOpo7o8L0I+PC9URD48L1RSPjxUUj48VEQ+tNm9+MnLv9rT+rrPo6y+q9fTtbCw17PJt9Y8L1REPjwvVFI+PFRSPjxURD6+q7Cxy+HKx8TxsLHL4dGtu7fW0LXE0ru49tfps8mzybfWo6y+39PQvKvG5NbY0qq1xMn6wO25psTcoaO24LPUvquwscvho6y/ydLU1Pa807jO1ODW0L6rsLHL4cO4tcS77tDUo6zT0Nb609q9q9Gq0rrW0LXEsLHXqrHkzqrE8svYtvjFxdC5s/bIpaGjy/nS1KOsvquwscvhttS437Cx0arWoqGiuM7U4Lv6xNzVz7Cttci8srKhxsTT0NCnufuhozwvVEQ+PC9UUj48L1RBQkxFPgogPFRBQkxFIHdpZHRoPTU5MCBhbGlnbj1jZW50ZXIgYm9yZGVyPTAgY2VsbHBhZGRpbmc9MCBjZWxsc3BhY2luZz0wPjx0cj48dGQgaGVpZ2h0PTEyPjwvdGQ+PC90cj48L3RhYmxlPjx0YWJsZSBjZWxsU3BhY2luZz0wIGNlbGxQYWRkaW5nPTAgd2lkdGg9NjAwIGFsaWduPUNlbnRlciBib3JkZXI9MD48dHI+PHRkPjxociBjb2xvcj0jRkY5OTMzIHNpemU9Mj48L3RkPjwvdHI+PC90YWJsZT48VEFCTEUgY2VsbFNwYWNpbmc9MCBjZWxsUGFkZGluZz0wIHdpZHRoPTU5MCBhbGlnbj1jZW50ZXIgYm9yZGVyPTA+PFRSIGhlaWdodD01PjxURD48L1REPjwvVFI+PFRSIGFsaWduPXJpZ2h0PjxURCBjb2xTcGFuPTI+PHA+sb687LLiveG5+732uamyzr+8o6yyu9f3zqrV77bPveHC26GjICAgICAgICAgIA0KPC9wPjwvVEQ+PC9UUj48L3RhYmxlPjwvYm9keT48L2h0bWw+",
        htmlSnip: ''
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        let data = d.base64_decode(this.data.charset)
        let arr = d.gbkStrToUtf16Str(data).split("</head>")[1].split("</html>")[0].replace(/<body/, '<div').replace(/body>/, 'div>')
        // let das = arr.split("background-image:url(Pagebg.jpg);")
        // console.log(das[0] + das[1])
        this.setData({
            htmlSnip: arr
        })
    },
})