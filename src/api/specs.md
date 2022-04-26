# Websocket API:  

## map
map:

┏╸╻┗┻┓╺╺  
┛━┫╹┃╹┳┗  
┓┃┫┫┛┛┓╻  
╸╺┗╋┫╋╻┃  
╻━┃╺━┣┣┻  
┫┓┣╺┃╸╻╻  
┃┗┛╺╋┏┗┓  
┏┗╺┃┏┛┛╺  

## new {level}
new: OK  

## rotate {x} {y}
rotate: OK  

## verify
verify: Incorrect.
verify: Correct! Password: {password}  

## help
help:  
help       - returns valid commands  
new L      - starts new session, L=1|2|3|4|5|6  
map        - returns the current map  
rotate X Y - rotates pipes at X,Y coordinates  
verify     - verifies the current solution  

rotate X1 Y1\nX2 Y2\nX3 Y3 - rotates multiple cells with one command, max 1MB per command
