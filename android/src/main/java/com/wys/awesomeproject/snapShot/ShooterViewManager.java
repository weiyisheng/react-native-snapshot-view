package com.wys.awesomeproject.snapShot;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by germini on 10/27/16.
 */

public class ShooterViewManager extends ViewGroupManager<ShooterView> {

    @Override
    public String getName() {
        return "RCTSnapShot";
    }

    @Override
    public ShooterView createViewInstance(ThemedReactContext context) {
        return new ShooterView(context);
    }

    @ReactProp(name = "shoot")
    public void setShoot(ShooterView view, int shoot) {
        view.setShoot(shoot);
    }
}
