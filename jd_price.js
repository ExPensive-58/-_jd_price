#!name=❏  京东比价
#!desc=京东历史价格
#!system=ios

[Script]
# > 京东比价
http-response ^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) requires-body=1,script-path= https://raw.githubusercontent.com/ExPensive-58/jd_price/main/js
[MITM]
hostname = %APPEND% api.m.jd.com
