package com.cn.weiyisheng.snapshot;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by germini on 10/27/16.
 */

public class SnapShotViewManager extends ViewGroupManager<SnapShotView> {

    @Override
    public String getName() {
        return "RCTSnapShotView";
    }

    @Override
    public SnapShotView createViewInstance(ThemedReactContext context) {
        return new SnapShotView(context);
    }

    @ReactProp(name = "shotNumber")
    public void setShotNumber(SnapShotView view, int shoot) {
        view.setShotNumber(shoot);
    }

    @ReactProp(name = "fileName")
    public void setFileName(SnapShotView view, String fileName) {
        view.setFileName(fileName);
    }
}
