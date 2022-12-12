# pH-meter-Temperature
ph meter & temperature for aquarium
[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://www.buymeacoffee.com/madmicio)
![all](example/card.jpg)


## hacs Card install
1. Find and install `LG WebOS Remote Control` plugin

2. Add a reference  inside your resources config:

  ```yaml
resources:
  - type: module
    url: /hacsfiles/LG-WebOS-Remote-Control/lg-remote-control.js
```


### Manual install

1. Download and copy `lg-remote-control.js` from (https://github.com/madmicio/LG-WebOS-Remote-Control) into your custom components  directory.

2. Add a reference `lg-remote-control.js` inside your resources config:

  ```yaml
  resources:
    - url: /local/"your_directory"/lg-remote-control.js
      type: module
  ```
# lovelace config: default view
```yaml
- type: 'custom:lg-remote-control'
  entity: media_player.tv_lg_55c8
  mac: xx:xx:xx:xx
```

