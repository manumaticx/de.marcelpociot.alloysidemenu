# TiSideMenu Widget [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

>    This is a fork of Fokke Zandbergen's [NappDrawer Widget](https://github.com/FokkeZB/nl.fokkezb.drawer)

>    It's adapted to work with Marcel Pociot's [TiSideMenu](https://github.com/mpociot/TiSideMenu)

This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

## Usage [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/de.marcelpociot.alloysidemenu)
Install [this widget](http://gitt.io/component/de.marcelpociot.alloysidemenu) via [gitTio](http://gitt.io):

	`gittio install de.marcelpociot.alloysidemenu`

In your `app/views/index.xml` use it like this:

```xml
<Alloy>
    <Widget src="de.marcelpociot.alloysidemenu">

        <Window role="leftMenuView">
            <Label>I am left</Label>
        </Window>

        <NavigationWindow role="contentView">
            <Window>
                <Label>I am center</Label>
            </Window>
        </NavigationWindow>

        <Window role="rightMenuView">
            <Label>I am right</Label>
        </Window>

    </Widget>
</Alloy>
```

In your `app/controllers/index.js` use it like this:
```javascript
 $.index.open();
```

License: MIT
