Quantum Server - Interface for JSON Networks
=====

#####Protocols
Universal Routing Protocol
* Syntax: JSON
* Usage: Messaging, Notifications, Contacts, GPS Coordinates, etc
* Applications: Universal
* Web Gateway: API

```js
{  
    "meta": {  
        "version": 2.0,
        "route": "username, ip, group, or channel",
        "to": "recipient",
        "from": "sender"
    },
    "payload": [  
        {  
            "type": "contact",
            "format": "vcard",
            "data": "Alex"
        },
        {  
            "type": "contact",
            "format": "vcard",
            "data": "Hilary"
        },
        {  
            "type": "message",
            "format": "text",
            "data": "Hello World!"
        }
    ]
}
```
